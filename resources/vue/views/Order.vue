<template>
  <div class="basked col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8">
    <h1>Kontaktní informace - <small>Objednávka (2/3)</small></h1>

    <div v-show="this.message != ''" class="alert alert-danger" role="alert">
      {{ this.message }}
    </div>

    <p v-if="errors.length" class="text-danger">
    <b>Formulář obsahuje chyby:</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    </p>

    <form
      id="registration"
      action="/rekapuitulace"
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
              v-focus
            >
              <option value="" disabled>-</option>
              <option
                v-for="(library, index) in this.librarys"
                :value="index"
                :key="library.idlibrary"
                :selected="isOptionSelected(index)"
              >
                {{ library.libCity }} ( {{ library.libName }} )
              </option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 offset-md-3">
            <input
              type="text"
              class="form-control valid"
              id="ic"
              name="ic"
              maxlength="8"
              placeholder="IČ"
              v-model="ic"
              required=""
              list="firmy"
              disabled
            />
          </div>

          <div class="col-md-4 offset-md-1">
            <input
              type="text"
              class="form-control"
              id="dic"
              name="dic"
              maxlength="14"
              placeholder="DIČ"
              v-model="dic"
              disabled
            />
          </div>

          <div class="col-md-9 offset-md-3">
            <input
              type="text"
              class="form-control"
              id="libStreet"
              name="libStreet"
              maxlength="200"
              placeholder="Ulice a číslo"
              v-model="libStreet"
              required=""
              disabled
            />
          </div>

          <div class="col-md-4 offset-md-3">
            <input
              type="text"
              class="form-control"
              id="libCity"
              name="libCity"
              maxlength="200"
              placeholder="Město"
              v-model="libCity"
              required=""
              disabled
            />
          </div>
          <div class="col-md-4 offset-md-1">
            <input
              type="number"
              class="form-control"
              id="libPSC"
              name="libPSC"
              placeholder="PSČ"
              v-model="libPSC"
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
        <div class="row deliadr" v-show="deliveryAddressChecked">
          <label for="deliveryName" class="col-md-3">Místo doručení</label>
          <div class="col-md-9">
            <input
              type="text"
              class="form-control"
              id="deliveryName"
              name="deliveryName"
              maxlength="200"
              placeholder="Název místa doručení"
              v-model="deliveryName"
            />
          </div>
        </div>

        <div class="row deliadr" v-show="deliveryAddressChecked">
          <label for="deliveryStreet" class="col-md-3">Ulice doručení</label>
          <div class="col-md-9">
            <input
              type="text"
              class="form-control"
              id="deliveryStreet"
              name="deliveryStreet"
              maxlength="200"
              placeholder="Ulice doručení"
              v-model="deliveryStreet"
            />
          </div>
        </div>
        <div class="row line deliadr" v-show="deliveryAddressChecked">
          <label for="deliveryCity" class="col-md-3">Město doručení, PSČ</label>
          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              id="deliveryCity"
              name="deliveryCity"
              maxlength="200"
              placeholder="Město doručení"
              v-model="deliveryCity"
            />
          </div>
          <div class="col-md-3">
            <input
              type="number"
              class="form-control"
              id="deliveryPSC"
              name="deliveryPSC"
              placeholder="PSČ"
              v-model="deliveryPSC"
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
              v-model="libName"
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
              v-model="libEmail"
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
              v-model="contactPerson"
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
              v-model="contactPersonEmail"
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
              v-model="contactPersonTele"
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
              v-model="description"
            ></textarea>
          </div>
        </div>
        <div class="row">
          <router-link
            to="/eshop/nakupniKosik"
            v-slot="{ href, navigate }"
            custom
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
            @click="checkForm"
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
  title: "Objednávka (2/3) | Bookstart eShop",
  data() {
    return {
      errors: [],
      librarys: [],
      orderForm: this.orderFormLoad,
      libSelected: this.orderFormLoad[0].libSelected,
      contactPerson: this.orderFormLoad[0].contactPerson,
      contactPersonEmail: this.orderFormLoad[0].contactPersonEmail,
      contactPersonTele: this.orderFormLoad[0].contactPersonTele,
      deliveryCity: this.orderFormLoad[0].deliveryCity,
      deliveryName: this.orderFormLoad[0].deliveryName,
      deliveryPSC: this.orderFormLoad[0].deliveryPSC,
      deliveryStreet: this.orderFormLoad[0].deliveryStreet,
      ic: this.orderFormLoad[0].ic,
      idlibrary: this.orderFormLoad[0].idlibrary,
      dic: this.orderFormLoad[0].dic,
      libCity: this.orderFormLoad[0].libCity,
      libEmail: this.orderFormLoad[0].libEmail,
      libName: this.orderFormLoad[0].libName,
      libPSC: this.orderFormLoad[0].libPSC,
      libStreet: this.orderFormLoad[0].libStreet,
      oName: this.orderFormLoad[0].oName,
      description: this.orderFormLoad[0].description,
      deliveryAddress: this.orderFormLoad[0].deliveryAddress,
      orderFormLoad: "",
      loadLibSelected: "",
      libSelected: "",
      message: "",
    };
  },
  computed: {
    deliveryAddressChecked: function () {
      if (this.deliveryAddress === false) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    getLibrarys() {
      axios
        .get("/api/librarys.json")
        .then((response) => {
          if (response.data.length == 0) {
            this.message =
              "Všechny knihovny Královéhradeckého kraje již mají objednáno, případně nás kontaktujte na emailu bookstart@knihovnahk.cz";
          }
          response.data.forEach((library) => {
            this.librarys.push(library);
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    libChange: function () {
      this.idlibrary = this.librarys[this.libSelected].idlibrary;
      this.ic = this.librarys[this.libSelected].ic;
      this.dic = this.librarys[this.libSelected].dic;
      this.oName = this.librarys[this.libSelected].oName;
      this.libStreet = this.librarys[this.libSelected].libStreet;
      this.libCity = this.librarys[this.libSelected].libCity;
      this.libPSC = this.librarys[this.libSelected].libPSC;

      this.deliveryName = this.librarys[this.libSelected].deliveryName;
      this.deliveryCity = this.librarys[this.libSelected].deliveryCity;
      this.deliveryPSC = this.librarys[this.libSelected].deliveryPSC;
      this.deliveryStreet = this.librarys[this.libSelected].deliveryStreet;

      this.libName = this.librarys[this.libSelected].libName;
      this.libEmail = this.librarys[this.libSelected].libEmail;

      this.contactPerson = this.librarys[this.libSelected].contactPerson;
      this.contactPersonEmail = this.contactPersonEmail =
        this.librarys[this.libSelected].contactPersonEmail;
      this.contactPerson = this.librarys[this.libSelected].contactPerson;
      this.contactPersonTele =
        this.librarys[this.libSelected].contactPersonTele;

      if (this.deliveryName === null) {
        this.deliveryAddress = false;
      } else {
        this.deliveryAddress = true;
      }
    },
    checkForm: function () {
      //if (this.libName) return true;
      this.errors = [];
      var noLibrarySelect = !(
        (this.libSelected != null && this.libSelected != "") ||
        this.libSelected == 0
      );
      var noDeliveryDetail =
        this.deliveryAddress &&
        (this.deliveryName == "" || this.deliveryName === null) &&
        (this.deliveryPSC == "" || this.deliveryPSC === null) &&
        (this.deliveryStreet == "" || this.deliveryStreet === null) &&
        (this.deliveryCity == "" || this.deliveryCity === null);

      if (noLibrarySelect) {
        this.errors.push("Nevybrána hnihovna!");
      }

      if (noDeliveryDetail) {
        this.errors.push(
          "Je požadována adresa doručení ale není (některá část) vyplňena!"
        );
      }

      if (!this.libName) this.errors.push("Nezadáno Jméno knihovny!");
      if (!this.libEmail) this.errors.push("Nezadán Email knihovny!");

      if (!this.contactPerson) this.errors.push("Nezadáno Jméno kontaktu!");
      if (!this.contactPersonEmail) this.errors.push("Nezadán Email kontaktu!");
      if (!this.contactPersonTele)
        this.errors.push("Nezadán Telefón kontaktu!");

      //console.log(noLibrarySelect + " - " + this.libSelected);
      if (
        !noLibrarySelect &&
        !noDeliveryDetail &&
        this.libName != "" &&
        this.libEmail != "" &&
        this.contactPerson != "" &&
        this.contactPersonEmail != "" &&
        this.contactPersonTele != ""
      ) {
        this.$router.push({ name: "Recap" });
      }
      //console.log(noLibrarySelect + " - " + this.libSelected);
      //alert("bohužel");
    },
    isOptionSelected: function (opt) {
      if (opt == this.orderForm[0].libSelected) {
        return true;
      } else {
        return false;
      }
    },
  },
  updated() {
    this.orderForm[0].libSelected = this.libSelected;
    this.orderForm[0].deliveryAddress = this.deliveryAddress;
    this.orderForm[0].ic = this.ic;
    this.orderForm[0].idlibrary = this.idlibrary;
    this.orderForm[0].dic = this.dic;
    this.orderForm[0].oName = this.oName;
    this.orderForm[0].libStreet = this.libStreet;
    this.orderForm[0].libCity = this.libCity;
    this.orderForm[0].libPSC = this.libPSC;
    this.orderForm[0].libName = this.libName;
    this.orderForm[0].libEmail = this.libEmail;
    this.orderForm[0].deliveryName = this.deliveryName;
    this.orderForm[0].deliveryCity = this.deliveryCity;
    this.orderForm[0].deliveryPSC = this.deliveryPSC;
    this.orderForm[0].deliveryStreet = this.deliveryStreet;
    this.orderForm[0].contactPerson = this.contactPerson;
    this.orderForm[0].contactPersonEmail = this.contactPersonEmail;
    this.orderForm[0].contactPersonTele = this.contactPersonTele;
    this.orderForm[0].description = this.description;
  },
  beforeCreate() {
    this.orderFormLoad = JSON.parse(localStorage.getItem("orderFormStatus"));
    if (!this.orderFormLoad) {
      this.orderFormLoad = [
        {
          libSelected: "",
          ic: "",
          idlibrary: "",
          contactPerson: "",
          contactPersonEmail: "",
          contactPersonTele: "",
          deliveryCity: "",
          deliveryName: "",
          deliveryPSC: "",
          deliveryStreet: "",
          dic: "",
          libCity: "",
          libEmail: "",
          libName: "",
          libPSC: "",
          libStreet: "",
          oName: "",
          description: "",
          deliveryAddress: false,
        },
      ];
      this.loadLibSelected = this.orderFormLoad[0].libSelected;
      this.deliveryAddress = this.orderFormLoad[0].deliveryAddress;
    }
    if (this.$parent.sumPrice === 0) {
      alert("S prázdným košíkem nelze jít na objednávku!");
      this.$router.push({ name: "Home" });
    }
  },
  created() {
    if (this.libSelected != "" && this.orderFormLoad[0].libSelected == "") {
      this.libSelected = "";
      this.deliveryAddress = false;
      this.ic = "";
      this.idlibrary = "";
      this.dic = "";
      this.oName = "";
      this.libStreet = "";
      this.libCity = "";
      this.libPSC = "";
      this.libName = "";
      this.libEmail = "";
      this.deliveryName = "";
      this.deliveryCity = "";
      this.deliveryPSC = "";
      this.deliveryStreet = "";
      this.contactPerson = "";
      this.contactPersonEmail = "";
      this.contactPersonTele = "";
      this.description = "";
    }
    this.libSelected = this.orderForm[0].libSelected;
    this.getLibrarys();
  },
  beforeDestroy() {
    localStorage.setItem("orderFormStatus", JSON.stringify(this.orderForm));
  },
};
</script>

<style scoped>
.row {
  margin-top: 5pt;
}
</style>
