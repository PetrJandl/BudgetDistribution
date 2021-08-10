<template>
  <div id="admin" class="container">
    <div>
      <b-navbar
        fixed="top"
        toggleable="sm"
        type="dark"
        variant="faded"
        class="shadow d-print-none"
      >
        <b-navbar-brand class="offset-md-1 offset-lg-2 offset-xl-3">

        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link
              to="/admin/"
              v-slot="{ href, navigate, isExactActive }"
              custom
            >
              <li v-bind:class="{ 'nav-link': true }">
                <a
                  :href="href"
                  v-bind:class="{ 'nav-link': true, active: isExactActive }"
                  @click="navigate"
                  ><i class="fas fa-file-invoice"></i> Objednávky</a
                >
              </li>
            </router-link>
            <router-link
              to="/admin/knihy"
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
              to="/admin/pomucky"
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
              to="/eshop/"
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
                  ><i class="fa">&#xf291;</i> zpět na Eshop
                </a>
              </li>
            </router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view
      class=""
    />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      vueNotLoad: false,
      orders: [],
      books: [],
      tools: [],
      backdoor: 0,
    };
  },
  computed: {
  },
  watch: {
    value() {
      this.backdoor++;
    },
  },
  methods: {
    getOrders() {
      axios
        .get("/api/orders.json")
        .then((response) => {
          response.data.forEach((order) => {
            this.orders.push(order);
            if (order.item_type_idtype === 1) {
              this.books.push(order);
            }
            if (order.item_type_idtype === 2) {
              this.tools.push(order);
            }
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      //console.log(this.books)
    },
  },
  beforeMount() {
    this.getOrders();
    //console.log("App: "+this.books)
  },
  mounted() {
    this.backdoor++;
  },
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
  background-color: #000000 !important;
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
  color: rgb(255, 255, 255) !important;
  text-decoration: none;
}

nav a.active {
  background-color: rgba(255, 255, 255, 0.92) !important;
  color: rgb(0, 0, 0) !important;
}
nav a:hover {
  background-color: #F49723 !important;
  color: rgb(0, 0, 0) !important;
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
