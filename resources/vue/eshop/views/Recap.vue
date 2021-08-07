<template>
  <div class="basked col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8">
    <h1>Rekapitulace - <small>Objednávka (3/3)</small></h1>
    <div v-show="this.message != ''" class="alert alert-danger" role="alert">
      {{ this.message }}
    </div>
    <div class="row">
      <div class="pb-1 border-top border-light">
        <strong>{{ order[0].oName }}</strong> objednává pro
        <strong>{{ order[0].libName }}</strong> :
      </div>
    </div>

    <div>
      <div
        class="row pb-1 border-top border-light"
        v-for="item in this.$parent.basked"
        :key="item.item_name"
        v-show="item.pieceInBasket > 0"
      >
        <div class="col-12 col-sm-7 col-md-7">{{ item.item_name }}</div>
        <div class="col-5 col-sm-2 col-md-1">
          {{ item.pieceInBasket }} ks{{ "\xa0" }}
        </div>
        <div class="col-7 col-sm-3 col-md-3 text-right">
          <strong
            >{{ item.pieceInBasket * item.price }}{{ "\xa0" }}Kč<small
              >{{ "\xa0" }}bez{{ "\xa0" }}DPH</small
            ></strong
          >
        </div>
      </div>
    </div>

    <div class="row mt-0 mb-1 border-top border-dark">
      <div class="col-12 col-sm-7 col-md-7">
        <strong>V celkové ceně</strong>
      </div>
      <div class="col-3 col-sm-2 col-md-1"></div>
      <div class="col-9 col-sm-3 col-md-3 text-right">
        <strong
          >{{ this.$parent.sumPrice }}{{ "\xa0" }}Kč<small
            >{{ "\xa0" }}bez{{ "\xa0" }}DPH</small
          ></strong
        >
      </div>
    </div>

    <div class="row pb-1 border-top border-light">
      <div class="">
        S dodáním na adresu
        <span v-if="order[0].deliveryAddress">
          doručení : {{ order[0].deliveryName }}, {{ order[0].deliveryStreet }},
          {{ order[0].deliveryCity }}
          {{ order[0].deliveryPSC }}
        </span>
        <span v-if="!order[0].deliveryAddress">
          objednatele : {{ order[0].libName }}, {{ order[0].libStreet }},
          {{ order[0].libCity }}
          {{ order[0].libPSC }}
        </span>
      </div>
    </div>

    <div class="row pb-1 border-top border-light">
      <div class="">
        Kontaktní osoba je:

        {{ order[0].contactPerson }}
        tel: {{ order[0].contactPersonTele }}, email:
        {{ order[0].contactPersonEmail }}
      </div>
    </div>

    <div class="row">
      <router-link to="/eshop/objednavka" v-slot="{ href, navigate }" custom>
        <a
          :href="href"
          @click="navigate"
          class="
            btn btn-sm
            text-dark
            btn-light
            nav-link
            p-3
            col-6 col-sm-5 col-md-4 col-lg-3
          "
        >
          <i class="fas fa-chevron-left"></i>
          Zpět
        </a>
      </router-link>

      <a
        @click="recaptcha"
        class="
          btn btn-sm
          text-white
          btn-success
          nav-link
          p-3
          col-6
          offset-sm-2
          col-sm-5
          offset-md-4
          col-md-4
          offset-lg-6
          col-lg-3
        "
      >
        Odeslat objednavku
      </a>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { VueReCaptcha } from "vue-recaptcha-v3";
Vue.use(VueReCaptcha, {
  siteKey: document.querySelector("meta[name=recapcha-site-key]").content,
  loaderOptions: {
    autoHideBadge: true,
  },
});

export default {
  title: "Rekapitulace (3/3) | Bookstart eShop",
  data() {
    return {
      message: "",
      order: [
        {
          contactPerson: "",
          contactPersonEmail: "",
          contactPersonTele: "",
          deliveryCity: "",
          deliveryName: "",
          deliveryPSC: "",
          deliveryStreet: "",
          libCity: "",
          libEmail: "",
          libName: "",
          libPSC: "",
          libStreet: "",
          oName: "",
          description: "",
          deliveryAddress: false,
        },
      ],
    };
  },
  methods: {
    async recaptcha() {
      // (optional) Wait until recaptcha has been loaded.
      await this.$recaptchaLoaded();
      const token = await this.$recaptcha("sendOrder");

      // POST request using fetch with error handling
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _recaptcha: token,
          _token: document.querySelector("meta[name=csrf-token]").content,
          basked: localStorage.getItem("basked"),
          order: JSON.stringify(this.order),
        }),
      };
      fetch("/eshopNewOrder", requestOptions).then(async (response) => {
        const data = await response.json();
        // check for error response
        if (data.original.message != "ok") {
          this.message = data.original.message;
          // get error message from body or default to response status
          //const error = (data && data.message) || response.status;
          //return Promise.reject(error);
        } else {
          this.$router.push({ name: "OrderSend" });
        }
        //this.postId = data.id;
      });
      /*
        .catch((error) => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
        */

      // Do stuff with the received token.
    },
  },
  beforeCreate() {
    //console.log(this.order);
    //this.order = JSON.parse(localStorage.getItem("orderFormStatus"));
    if (this.$parent.sumPrice === 0) {
      alert("Nelze s prázdným košíkem!");
      this.$router.push({ name: "Home" });
    }
  },
  beforeMount() {
    //this.order = JSON.parse(localStorage.getItem("orderFormStatus"));
    //TODO dvojity load je nesmysl idelne by to melo byt v session ale jak jsem si hral s localStorage nechal jsem tam
  },
  mounted() {
    this.order = JSON.parse(localStorage.getItem("orderFormStatus"));
    //console.log(JSON.parse(localStorage.getItem("orderFormStatus")));
  },
};
</script>

<style scoped>
</style>
