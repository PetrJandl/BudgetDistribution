<template>
    <div class="home col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8">
        <h1>Výběr knih / pomůcek z dotace Zlínského kraje</h1>
        <div v-if="isShopingAlowed">
            <img
                class="mb-4 mt-4"
                id="bslogo"
                alt="BookStart logo"
                src="/images/bookstart.png"
            />
            <div class="display-3" v-if="isShopingAlowed">
                Příjem objednávek od&nbsp;{{ shopingStartDate | formatDate }} do&nbsp;{{ shopingStopDate | formatDate }}!
            </div>
        </div>
        <div class="display-3 text-danger" v-if="!isShopingAlowed">
            Příjem objednávek od&nbsp;{{shopingStartDate | formatDate}} do&nbsp;{{shopingStopDate | formatDate}}!
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    title: "Bookstart eShop - Zlínský kraj",
    data() {
        return {
            isShopingAlowed: true,
            shopingStartDate: "",
            shopingStopDate: "",
        };
    },
    methods: {
        dateLoad() {
            axios
                .get("/api/allowShoping.json")
                .then((response) => {
                    if (response.data != "ok") {
                        this.isShopingAlowed = false;
                    } else {
                        this.isShopingAlowed = true;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            axios
                .get("/api/allowShopingStop.json")
                .then((response) => {
                    this.shopingStopDate = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            axios
                .get("/api/allowShopingStart.json")
                .then((response) => {
                    this.shopingStartDate = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            //console.log(this.books)
        },
    },
    beforeMount() {
        this.dateLoad();
    },
};
</script>
