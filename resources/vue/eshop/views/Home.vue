<template>
  <div class="home col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8">
    <h1>Výběr knih / pomůcek z dotace Královéhradeckého kraje</h1>
    <img v-if="isShopingAlowed" id="bslogo" alt="BookStart logo" src="/images/bookstart.png" />
    <div class="display-4 mt-4" v-if="isShopingAlowed">Příjem objednávek do  {{ shopingStopDate | formatDate }}!</div>
    <div class="display-3 text-danger" v-if="!isShopingAlowed">Termín pro zaslání objednávek vypršel  ({{ shopingStopDate | formatDate }})!</div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  title: "Bookstart eShop",
  data() {
    return {
      isShopingAlowed: true,
      shopingStopDate: "",
    };
  },
  methods: {
      dateLoad() {
        axios
        .get("/api/allowShoping.json")
        .then((response) => {
          if(response.data!="ok"){
            this.isShopingAlowed=false;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
        axios
          .get("/api/allowShopingStop.json")
          .then((response) => {
              this.shopingStopDate=response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
        //console.log(this.books)
      }
  },
  beforeMount() {
    this.dateLoad();
  }
};



</script>