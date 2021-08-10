<template>
  <div id="app" class="container">
    <div>
      <b-navbar
        fixed="top"
        toggleable="sm"
        type="dark"
        variant="faded"
        class="shadow"
      >
        <b-navbar-brand class="offset-md-1 offset-lg-2 offset-xl-3">
          <router-link
            to="/eshop/nakupniKosik"
            v-slot="{ href, navigate, isExactActive }"
            custom
          >
            <li class="nav-link d-block d-sm-none">
              <a
                :href="href"
                v-bind:class="{ 'nav-link': true, active: isExactActive }"
                @click="navigate"
                :title="countPiece + ' ks za ' + sumPrice + 'Kč'"
              >
                <i class="fa">&#xf07a;</i>
                <span class="badge badge-warning bg-danger" id="lblCartCount">
                  {{ sumPrice }}Kč
                </span>
              </a>
            </li>
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link
              to="/eshop/"
              v-slot="{ href, navigate, isExactActive }"
              custom
            >
              <li v-bind:class="{ 'nav-link': true }">
                <a
                  :href="href"
                  v-bind:class="{ 'nav-link': true, active: isExactActive }"
                  @click="navigate"
                  >S{{ "\xa0" }}knížkou do{{ "\xa0" }}života</a
                >
              </li>
            </router-link>
            <router-link
              to="/eshop/knihy"
              v-slot="{ href, navigate, isExactActive }"
              custom
            >
              <li class="nav-link">
                <a
                  :href="href"
                  v-bind:class="{ 'nav-link': true, active: isExactActive }"
                  @click="navigate"
                  ><i class="fas fa-book"></i> Knihy</a
                >
              </li>
            </router-link>
            <router-link
              to="/eshop/pomucky"
              v-slot="{ href, navigate, isExactActive }"
              custom
            >
              <li
                v-bind:class="{
                  'nav-link': true,
                  'router-link-exact-active': isExactActive,
                }"
              >
                <a
                  :href="href"
                  v-bind:class="{ 'nav-link': true, active: isExactActive }"
                  @click="navigate"
                  ><i class="far fa-life-ring"></i> Pomůcky</a
                >
              </li>
            </router-link>
            <router-link
              to="/eshop/nakupniKosik"
              v-slot="{ href, navigate, isExactActive }"
              custom
            >
              <li
                v-bind:class="{
                  'nav-link d-none d-sm-block': true,
                  'router-link-exact-active': isExactActive,
                }"
              >
                <a
                  :href="href"
                  v-bind:class="{ 'nav-link': true, active: isExactActive }"
                  @click="navigate"
                  ><i class="fa">&#xf07a;</i> Košík
                  <span class="badge badge-warning bg-danger"
                    >{{ sumPrice }}Kč</span
                  >
                </a>
              </li>
            </router-link>
            <router-link
              to="/admin"
              v-slot="{ href, navigate, isExactActive }"
              v-if="isAdminAlowed"
              custom
            >
              <li
              
                v-bind:class="{
                  'nav-link': true,
                  'router-link-exact-active': isExactActive,
                }"
              >
                <a
                  :href="href"
                  
                  v-bind:class="{ 'nav-link': true, active: isExactActive }"
                  ><i class="fa">&#xf023;</i> Administrace 
                </a>
              </li>
            </router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view
      @add-to-basked="addToBasked($event)"
      @update-basked="updateBasked($event)"
      @clean-basked="cleanBasket()"
      class="offset-lg-1 offset-xl-2"
    />
  </div>
</template>

<script>
import axios from "axios";

var localBasked;
localBasked = JSON.parse(localStorage.getItem("basked"));
if (!localBasked) {
  localBasked = [];
  //console.log("lb clean");
}



export default {
  data() {
    return {
      vueNotLoad: false,
      isAdminAlowed: false,
      books: [],
      tools: [],
      basked: localBasked,
      backdoor: 0,
    };
  },
  computed: {
    countPiece: {
      get: function () {
        this.backdoor;
        var sum = 0;
        this.basked.forEach((item) => {
          sum = sum + item.pieceInBasket;
        });
        return sum;
      },
      set: function (updateItem) {
        this.basked.forEach((item) => {
          if (item.iditem == updateItem.iditem) {
            this.backdoor++;
          }
        });
      },
    },
    sumPrice: {
      get: function () {
        this.backdoor;
        var sum = 0;
        this.basked.forEach((item) => {
          sum = sum + item.price * item.pieceInBasket;
        });
        //console.log("sumPrice:"+sum)
        return sum;
      },
      set: function (updateItem) {
        this.basked.forEach((item) => {
          if (item.iditem == updateItem.iditem) {
            //item.pieceInBasket = item.pieceInBasket + updateItem.piece
            //console.log("setSumPrice:"+ item.pieceInBasket)
            this.backdoor++;
          }
        });
      },
    },
  },
  watch: {
    value() {
      this.backdoor++;
    },
  },
  methods: {
    getShowAdmin() {
      axios
        .get("/api/allowAdmin.json")
        .then((response) => {
          if(response.data=="ok"){
            this.isAdminAlowed=true;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      //console.log(this.books)
    },
    getItems() {
      axios
        .get("/api/items.json")
        .then((response) => {
          response.data.forEach((item) => {
            item.piece = 1;
            if (item.item_type_idtype === 1) {
              this.books.push(item);
            }
            if (item.item_type_idtype === 2) {
              this.tools.push(item);
            }
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      //console.log(this.books)
    },
    addToBasked: function ($newItem) {
      var maxPriceSum = 4550;
      if (this.sumPrice + $newItem.price * $newItem.piece < maxPriceSum) {
        var update = 0;
        this.basked.forEach((item) => {
          if (item.iditem == $newItem.iditem) {
            update = 1;
            //console.log(" id exist ")
          }
        });
        if (update == 0) {
          $newItem.pieceInBasket = $newItem.piece;
          this.basked.push($newItem);
        } else {
          this.basked.forEach((item) => {
            if (item.iditem == $newItem.iditem) {
              item.pieceInBasket = item.pieceInBasket + $newItem.piece;
              this.sumPrice = item;
            }
          });
        }
        localStorage.setItem("basked", JSON.stringify(this.basked));
      } else {
        alert("Celková částka objednávky nesmí překročit " + maxPriceSum);
      }
    },
    cleanBasket: function () {
      //console.log($removeItem)
      this.basked = [];
      localStorage.setItem("basked", JSON.stringify(this.basked));
      this.backdoor--;
    },
    updateBasked: function ($updateItem) {
      this.backdoor++;
      var maxPriceSum = 4500;
      /*TODO tahat z laravelu! a hlavne overovat v PHP !!! */
      var sum = 0;
      this.basked.forEach((item) => {
        if (item.iditem != $updateItem.iditem) {
          sum = sum + item.price * item.pieceInBasket;
        }
      });

      if (sum + $updateItem.price * $updateItem.pieceInBasket < maxPriceSum) {
        //console.log("OK - save local storage");
        if ($updateItem.pieceInBasket == 0) {
          this.basked.splice(this.basked.indexOf($updateItem), 1);
        }
        localStorage.setItem("basked", JSON.stringify(this.basked));
      } else {
        this.basked[this.basked.indexOf($updateItem)].pieceInBasket =
          this.basked[this.basked.indexOf($updateItem)].pieceInBasket - 1;
        alert("Celková částka objednávky nemůže překročit " + maxPriceSum);
        this.backdoor++;
      }
    },
  },
  beforeMount() {
    this.getItems();
    this.getShowAdmin();
    //console.log("App: "+this.books)
  },
  mounted() {
    this.backdoor++;
  }
};

</script>

<style>
.navbar-brand {
  padding: 0 !important;
}
.router-link-exact-active {
  font-weight: 700;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
.home,
.books,
.tools,
.basked {
  margin-top: 60pt !important;
}
nav {
  text-align: center;
  padding: 0 !important;
  margin: 0;
  background-color: rgba(244, 151, 12, 1) !important;
  border-bottom: 1px #000000 solid;
  box-shadow: teal;
}
li.nav-link {
  padding: 0pt !important;
  margin: 0pt !important;
}

nav a {
  padding: 8pt 13pt !important;
  margin-top: 0pt;
  margin-bottom: 0pt;
  font-weight: bold;
  color: #000 !important;
  text-decoration: none;
}

nav a.active {
  background-color: rgb(255, 255, 255, 1) !important;
  color: rgb(0, 0, 0, 1) !important;
}
nav a:hover {
  background-color: rgba(0, 0, 0, 0.92) !important;
  color: rgb(255, 255, 255, 1) !important;
}
.items {
  font-size: 130%;
}
.numAdd {
  font-size: 90%;
}
.items input {
  text-align: right;
}
.home {
  width: 100%;
  max-width: 1044px;
  max-height: 435px;
  margin: 0 auto;
  text-align: center;
}
.home img {
  width: 100%;
}
#bslogo {
  max-width: 1044px;
}

.item,
.baskedItem {
  border-top: gray 1pt solid;
  padding-top: 5pt;
}
.text-right {
  text-align: right;
}
.nahledPomucky {
  max-height: 200pt;
}
.sumary {
  text-align: right !important;
}

#lblCartCount {
  font-size: 12px;
  color: rgb(255, 255, 255);
  padding: 4pt 6pt;
  vertical-align: bottom;
  margin-left: 4pt;
}
.badge {
  padding-left: 9px;
  padding-right: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}

.label-warning[href],
.badge-warning[href] {
  background-color: #c67605;
}

.text-justify {
  text-align: justify;
}
.previewCover {
  float: left;
  width: 202px;
}
.previewCover img {
  max-width: 100%;
}
.previewCover a {
  display: block;
}

@media (min-width: 600px) {
  #nav {
    padding: 20pt;
  }
  #nav a {
    padding: 9pt;
    margin: 5pt;
    width: 160pt;
  }
  .items div.item:hover,
  .items div.tool:hover,
  .items div.baskedItem:hover {
    background-color: rgba(244, 151, 12, 0.2);
  }
  .home,
  .books,
  .tools,
  .basked {
    margin-top: 70pt !important;
  }
}
@media (max-width: 575px) {
  .previewCover {
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  #nav-collapse {
    text-align: left !important;
  }
  #nav-collapse a.nav-link {
    padding-left: 15pt;
  }
  #nav-collapse ul.navbar-nav li:first-child a {
    padding-left: 28pt;
  }
}
@media (min-width: 575px) {
  .cover,
  .preview {
    padding: 0 24pt 24pt 0pt;
    float: left;
  }
}
</style>
