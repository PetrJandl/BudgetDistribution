<template>
  <div class="basked col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8">
    <h1>Objednávka</h1>

    <form
      id="registration"
      action="/api/registrace"
      method="post"
      data-toggle="validator"
    >
      <div class="box-body">
        <div class="row">
          <label for="library" class="col-md-3">Vyberte knihovnu :</label>
          <div class="col-md-9">
            <select
              v-model="libSelected"
              id="library"
              class="form-control valid"
              @change="libChange()"
              autofocus
            >
              <option value="" disabled>-</option>
              <option
                v-for="(library, index) in this.librarys"
                :value="index"
                :key="library.idlibrary"
              >
                {{ library.libName }}
              </option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <input
              type="text"
              class="form-control valid"
              id="ic"
              name="ic"
              maxlength="8"
              placeholder="IČ"
              :value="this.ic"
              required=""
              list="firmy"
              disabled
            />
          </div>

          <div class="col-md-3">
            <input
              type="text"
              class="form-control"
              id="dic"
              name="dic"
              maxlength="14"
              placeholder="DIČ"
              :value="this.dic"
              disabled
            />
          </div>

          <div class="col-md-12">
            <input
              type="text"
              class="form-control"
              id="oName"
              name="oName"
              maxlength="200"
              placeholder="Obchodní název"
              :value="this.oName"
              required=""
              disabled
            />
          </div>

          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              id="libStreet"
              name="libStreet"
              maxlength="200"
              placeholder="Ulice a číslo"
              :value="this.libStreet"
              required=""
              disabled
            />
          </div>

          <div class="col-md-3">
            <input
              type="text"
              class="form-control"
              id="libCity"
              name="libCity"
              maxlength="200"
              placeholder="Město"
              :value="this.libCity"
              required=""
              disabled
            />
          </div>
          <div class="col-md-3">
            <input
              type="number"
              class="form-control"
              id="libPSC"
              name="libPSC"
              placeholder="PSČ"
              :value="this.libPSC"
              required=""
              disabled
            />
          </div>
        </div>
        <div id="adresbox" class="row line">
          <label for="deliveryAddress" class="col-md-3">Adresa doručení</label>
          <div class="col-md-1">
            <input
              type="checkbox"
              class="custom-control-label"
              name="deliveryAddress"
              id="deliveryAddress"
              value="1"
              v-model="deliveryAddress"
            />
          </div>
          <div class="col-md-8">
            (Pokud má být objednávka doručena na jinou adresu)
          </div>
        </div>
        <div class="row deliadr" v-show="deliveryAddress">
          <label for="deliveryName" class="col-md-3">Místo doručení</label>
          <div class="col-md-9">
            <input
              type="text"
              class="form-control"
              id="deliveryName"
              name="deliveryName"
              maxlength="200"
              placeholder="Název místa doručení"
              :value="this.deliveryName"
            />
          </div>
        </div>

        <div class="row deliadr" v-show="deliveryAddress">
          <label for="deliveryStreet" class="col-md-3">Ulice doručení</label>
          <div class="col-md-9">
            <input
              type="text"
              class="form-control"
              id="deliveryStreet"
              name="deliveryStreet"
              maxlength="200"
              placeholder="Ulice doručení"
              :value="this.deliveryStreet"
            />
          </div>
        </div>
        <div class="row line deliadr" v-show="deliveryAddress">
          <label for="deliveryCity" class="col-md-3">Město doručení, PSČ</label>
          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              id="deliveryCity"
              name="deliveryCity"
              maxlength="200"
              placeholder="Město doručení"
              :value="this.deliveryCity"
            />
          </div>
          <div class="col-md-3">
            <input
              type="number"
              class="form-control"
              id="deliveryPSC"
              name="deliveryPSC"
              placeholder="PSČ"
              :value="this.deliveryPSC"
            />
          </div>
        </div>

        <div class="row">
          <label for="libName" class="col-md-3">Jméno knihovny</label>
          <div class="col-md-9">
            <input
              type="text"
              class="form-control"
              id="libName"
              name="libName"
              maxlength="200"
              placeholder="Celý oficiální název knihovny"
              :value="this.libName"
              required=""
            />
          </div>
        </div>

        <div class="row line">
          <label for="libEmail" class="col-md-3">Email knihovny</label>
          <div class="col-md-9">
            <input
              type="email"
              class="form-control"
              id="libEmail"
              name="libEmail"
              maxlength="200"
              placeholder="Email knihovny"
              :value="this.libEmail"
              required=""
            />
          </div>
        </div>
        <div class="row">
          <label for="contactPerson" class="col-md-3">Jméno kontaktu</label>
          <div class="col-md-9">
            <input
              type="text"
              class="form-control"
              id="contactPerson"
              name="contactPerson"
              maxlength="200"
              placeholder="Jméno kontaktní osoby"
              :value="this.contactPerson"
              required=""
            />
          </div>
        </div>
        <div class="row">
          <label for="contactPersonEmail" class="col-md-3"
            >Email kontaktu</label
          >
          <div class="col-md-9">
            <input
              type="email"
              class="form-control"
              id="contactPersonEmail"
              name="contactPersonEmail"
              maxlength="200"
              placeholder="Email kontaktní osoby"
              :value="this.contactPersonEmail"
              required=""
            />
          </div>
        </div>
        <div class="row line">
          <label for="contactPersonTele" class="col-md-3"
            >Telefon kontaktu</label
          >
          <div class="col-md-9">
            <input
              type="number"
              class="form-control"
              id="contactPersonTele"
              name="contactPersonTele"
              placeholder="9 místné číslo bez mezer na kontaktní osobu"
              :value="this.contactPersonTele"
              required=""
            />
          </div>
        </div>

        <div class="row">
          <label for="description" class="col-md-2">Poznámka</label>
          <div class="col-md-10">
            <textarea
              class="form-control"
              rows="3"
              id="description"
              name="description"
            ></textarea>
          </div>
        </div>
        <div class="row">
          <router-link
            to="/eshop/nakupniKosik"
            v-slot="{ href, navigate }"
            custom
            v-show="this.$parent.sumPrice > 0"
          >
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
            v-show="this.$parent.sumPrice > 0"
            @click="checkForm()"
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
            Pokračovat
            <i class="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      librarys: [],
      libSelected: "",
      contactPerson: "",
      contactPersonEmail: "",
      contactPersonTele: "",
      deliveryCity: "",
      deliveryName: "",
      deliveryPSC: "",
      deliveryStreet: "",
      dic: "",
      ic: "",
      libCity: "",
      libEmail: "",
      libName: "",
      libPSC: "",
      libStreet: "",
      oName: "",
      deliveryAddress: false,
    };
  },
  methods: {
    getLibrarys() {
      axios
        .get("/api/librarys.json")
        .then((response) => {
          response.data.forEach((library) => {
            this.librarys.push(library);
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      //console.log(this.librarys);
    },
    libChange: function () {
      this.ic = this.librarys[this.libSelected].ic;
      this.dic = this.librarys[this.libSelected].dic;
      this.libCity = this.librarys[this.libSelected].libCity;
      this.libEmail = this.librarys[this.libSelected].libEmail;
      this.oName = this.librarys[this.libSelected].oName;
      this.libName = this.librarys[this.libSelected].libName;
      this.libStreet = this.librarys[this.libSelected].libStreet;
      this.libPSC = this.librarys[this.libSelected].libPSC;

      this.deliveryName = this.librarys[this.libSelected].deliveryName;
      this.deliveryCity = this.librarys[this.libSelected].deliveryCity;
      this.deliveryPSC = this.librarys[this.libSelected].deliveryPSC;
      this.deliveryStreet = this.librarys[this.libSelected].deliveryStreet;
      if (this.deliveryName === null) {
        this.deliveryAddress = false;
      } else {
        this.deliveryAddress = true;
      }

      this.contactPerson = this.librarys[this.libSelected].contactPerson;
      this.contactPersonEmail =
        this.librarys[this.libSelected].contactPersonEmail;
      this.contactPerson = this.librarys[this.libSelected].contactPerson;
      this.contactPersonTele =
        this.librarys[this.libSelected].contactPersonTele;

      //console.log(this.libSelected + " /" + this.deliveryName + "/");
    },
    checkForm: function () {
      console.log("jasne az to bude naprogramovane");
      //alert("bohužel");
    },
  },
  beforeMount() {
    this.getLibrarys();
    //console.log("App: "+this.books)
  },
};
</script>

<style scoped>
.row {
  margin-top: 5pt;
}
</style>
