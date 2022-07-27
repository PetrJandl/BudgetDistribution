<template>
    <div class="home col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8">
        <h1>Přehled objednávek</h1>
        <div class="d-print-none">
            <div>
                <h4>Nastavení:</h4>
                <div class="row">
                    <label
                        for="startDate"
                        class="col-md-3 col-12 offset-md-3 offset-0"
                        >Datum spuštění :</label
                    >
                    <input
                        class="col-md-3 col-sm-6 col-12"
                        type="date"
                        name=""
                        id="startDate"
                        v-model="shopingStartDate"
                        @keyup.enter="ChangeStartDate()"
                    /><a
                        v-on:click="ChangeStartDate()"
                        href="#setStartDate"
                        type="button"
                        class="btn btn-light btn-sm col-md-3 col-sm-6 col-12"
                        >Nastav</a
                    >
                </div>
                <div class="row">
                    <label
                        for="stopDate"
                        class="col-md-3 col-12 offset-md-3 offset-0"
                        >Datum ukončení :</label
                    >
                    <input
                        class="col-md-3 col-sm-6 col-12"
                        type="date"
                        name=""
                        id="stopDate"
                        v-model="shopingStopDate"
                        @keyup.enter="ChangeStopDate()"
                    /><a
                        v-on:click="ChangeStopDate()"
                        href="#setStopDate"
                        type="button"
                        class="btn btn-light btn-sm col-md-3 col-sm-6 col-12"
                        >Nastav</a
                    >
                </div>
                <div class="row" v-if="lastYearArchived">
                    <label
                        for="cleanClear"
                        class="col-md-3 col-12 offset-md-3 offset-0"
                        >Vyčištění systému:</label
                    ><a
                        v-on:click="moveToArchive()"
                        href="#cleanClear"
                        type="button"
                        class="btn btn-danger btn-sm col-md-3 col-sm-6 col-12"
                        >Archivovat ročník</a
                    >
                </div>

<div class="row">
<div class="offset-md-3 offset-">		    Vkládání knih a pomůcek probíhá přes <a href="/phpmyadmin/">phpmyadmin</a>.
</div></div>

            </div>
            <div>
                <h4>Tisk objednávek:</h4>
                <div class="text-center">
                    <a
                        href="javascript: window.print();"
                        type="button"
                        class="btn btn-light"
                        >přehled objednávek</a
                    >
                    |
                    <a
                        href="/admin/vsechyObjednavky"
                        target="_blank"
                        type="button"
                        class="btn btn-light"
                        >detaily všech objednávek</a
                    >
                </div>
            </div>
            <div>
                <h4>Tisk adresních štítků :</h4>
                <div class="text-center">
                    <a
                        href="/admin/vsechyAdresy"
                        target="_blank"
                        type="button"
                        class="btn btn-light"
                        >bez loga</a
                    >
                    |
                    <a
                        href="/admin/vsechyAdresy/slogem"
                        target="_blank"
                        type="button"
                        class="btn btn-light"
                        >s logem</a
                    >
                    |
                    <a
                        href="/admin/vsechyAdresy/srazitkem"
                        target="_blank"
                        type="button"
                        class="btn btn-light"
                        >s razítkovým logem</a
                    >
                    |
                    <a
                        href="/admin/vsechyAdresy/nope"
                        target="_blank"
                        type="button"
                        class="btn btn-light"
                        >prázdno na razítko</a
                    >
                </div>
            </div>
        </div>
        <vue-scroll-indicator height="3px" color="#dc3545" background="none">
        </vue-scroll-indicator>

        <b-table
            striped
            hover
            :items="this.$parent.orders"
            :fields="fields"
            custom-foot
        >
            <template #thead-top="data">
                <b-tr>
                    <b-th colspan="2">Objednávka</b-th>
                    <b-th colspan="2">Počty kusů</b-th>
                    <b-th>Cena</b-th>
                </b-tr>
            </template>
            <template #cell(idorder)="data">
                <!--
          <a href="javascript:;" v-on:click="ShowOrder(`${data.value}`,`${data.index}`)"><i class="fas fa-eye fa-lg" title="Zobrazit objednávku"></i></a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          -->
                <a
                    href="javascript:;"
                    v-on:click="DeleteOrder(`${data.value}`, `${data.index}`)"
                    class="btn btn-danger d-print-none"
                    ><i
                        class="fas fa-trash-alt fa-xs"
                        title="ODSTRANIT objednávku"
                    ></i
                ></a>
            </template>
            <template v-slot:custom-foot="data">
                <b-tr v-if="totalCount != 0">
                    <b-th colspan="2">
                        {{ totalOrdersWithBooks }} objednávek obsahuje alespoň
                        jednu knihu
                    </b-th>
                    <b-th class="text-right">{{ totalBooks }}</b-th>
                    <b-th class="text-right"></b-th>
                    <b-th class="text-right">{{ totalBooksPrice }}</b-th>
                </b-tr>
                <b-tr v-if="totalCount != 0">
                    <b-th colspan="2">
                        {{ totalOrdersWithTools }} objednávek obsahuje alespoň
                        jednu pomůcku</b-th
                    >
                    <b-th class="text-right"></b-th>
                    <b-th class="text-right">{{ totalTools }}</b-th>
                    <b-th class="text-right">{{ totalToolsPrice }}</b-th>
                </b-tr>
                <b-tr>
                    <b-th colspan="2"
                        >Celkem
                        <span v-if="totalCount == 0">
                            žádná objednávka v systému</span
                        >
                        <span v-if="totalCount != 0">{{ totalCount }}</span>
                        <span v-if="totalCount == 1">objednávka</span>
                        <span v-if="totalCount > 1 && totalCount < 5"
                            >objednávky</span
                        >
                        <span v-if="totalCount > 4">objednávek</span>
                    </b-th>
                    <b-th class="text-right"></b-th>
                    <b-th class="text-right"></b-th>
                    <b-th class="text-right">{{ totalPrice }}</b-th>
                </b-tr>
            </template>
        </b-table>
    </div>
</template>

<script>
import Moment from "moment";

export default {
    title: "ADMIN - Bookstart eShop",
    data() {
        return {
            books: [],
            shopingStartDate: "",
            shopingStopDate: "",
            lastYearArchived: false,
            fields: [
                {
                    key: "created_at",
                    label: "Obj.",
                    sortable: true,
                    tdClass: "noWrap",
                    formatter: (value, key, item) => {
                        return Moment(value).format("DD.MM.YY");
                    },
                },
                {
                    key: "knihovna",
                    label: "Objednatel",
                    sortable: true,
                    tdClass: "noWrap",
                },
                {
                    key: "knih",
                    label: "knih\u00a0\u00a0",
                    sortable: true,
                    tdClass: "text-right",
                    thClass: "text-right",
                },
                {
                    key: "pomucek",
                    label: "pom.",
                    sortable: true,
                    tdClass: "text-right",
                    thClass: "text-right",
                },
                {
                    key: "celkem_kc",
                    label: "Celkem",
                    sortable: true,
                    tdClass: "text-right",
                    thClass: "text-right",
                    formatter: (value, key, item) => {
                        return Intl.NumberFormat("cs-CZ", {
                            style: "currency",
                            currency: "czk",
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                        }).format(value);
                    },
                },
                {
                    key: "idorder",
                    label: "",
                    sortable: false,
                },
            ],
        };
    },
    methods: {
        dateLoad() {
            axios
                .get("/api/allowShopingStart.json")
                .then((response) => {
                    this.shopingStartDate = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            //console.log(this.shopingStartDate);
            axios
                .get("/api/allowShopingStop.json")
                .then((response) => {
                    this.shopingStopDate = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            //console.log(this.shopingStopDate);
            axios
                .get("/api/isLastYearArchived.json")
                .then((response) => {
                    //console.log("response:" + response.data);
                    this.lastYearArchived = !response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        moveToArchive() {
            if (confirm("Jde o NEVRATNÝ krok!!! Opravdu archivovat?")) {
                if (
                    confirm(
                        "Data se přesunou do archivu (nebudou přístupná) Opravdu archivovat?"
                    )
                ) {
                    axios.get("/api/archiveAllTables/").then((resp) => {
                        window.location.reload();
                    });
                }
            }
        },
        /*
        cleanClear() {
            if (confirm("Existuje záloha? Opravdu odstranit?")) {
                if (confirm("Jde o NEVRATNÝ krok!!! Opravdu odstranit?")) {
                    axios.get("/api/deleteAllTables/").then((resp) => {
                        window.location.reload();
                    });
                }
            }
        },
        */
        DeleteOrder(id, index) {
            if (confirm("Opravdu odstranit?"))
                if (
                    confirm(
                        "Tento krok je NEVRATNÝ!!! Objednávka se zcela odstraní!!!"
                    )
                )
                    axios
                        .get("/api/orderDelete/" + id)
                        .then((resp) => {
                            this.$parent.orders.splice(index, 1);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
        },
        ChangeStartDate() {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    _token: document.querySelector("meta[name=csrf-token]")
                        .content,
                    shopingStartDate: this.shopingStartDate,
                }),
            };

            fetch("/api/setStartShopDate", requestOptions).then((response) => {
                const data = response.json();
                //log.console(data);
                // check for error response
                if (data.message != "ok") {
                    //this.message = data.original.message;
                    // get error message from body or default to response status
                    //const error = (data && data.message) || response.status;
                    //return Promise.reject(error);
                    this.$toast.success("Nastavení data Otevření uloženo!", {
                        position: "top-right",
                        timeout: 4000,
                        closeOnClick: true,
                        pauseOnFocusLoss: true,
                        pauseOnHover: true,
                        draggable: true,
                        draggablePercent: 0.6,
                        showCloseButtonOnHover: true,
                        hideProgressBar: true,
                        closeButton: "button",
                        icon: true,
                        rtl: false,
                    });
                } else {
                    this.$toast.error("Něco se zvrtlo kontaktovat admina!", {
                        position: "top-right",
                        timeout: 40000,
                        closeOnClick: true,
                        pauseOnFocusLoss: true,
                        pauseOnHover: true,
                        draggable: true,
                        draggablePercent: 0.6,
                        showCloseButtonOnHover: true,
                        hideProgressBar: true,
                        closeButton: "button",
                        icon: true,
                        rtl: false,
                    });
                }
            });
        },
        ChangeStopDate() {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    _token: document.querySelector("meta[name=csrf-token]")
                        .content,
                    shopingStopDate: this.shopingStopDate,
                }),
            };

            fetch("/api/setStopShopDate", requestOptions).then((response) => {
                const data = response.json();
                //log.console(data);
                // check for error response
                if (data.message != "ok") {
                    //this.message = data.original.message;
                    // get error message from body or default to response status
                    //const error = (data && data.message) || response.status;
                    //return Promise.reject(error);
                    this.$toast.success("Nastavení data Uzavření uloženo!", {
                        position: "top-right",
                        timeout: 4000,
                        closeOnClick: true,
                        pauseOnFocusLoss: true,
                        pauseOnHover: true,
                        draggable: true,
                        draggablePercent: 0.6,
                        showCloseButtonOnHover: true,
                        hideProgressBar: true,
                        closeButton: "button",
                        icon: true,
                        rtl: false,
                    });
                } else {
                    this.$toast.error("Něco se zvrtlo kontaktovat admina!", {
                        position: "top-right",
                        timeout: 20000,
                        closeOnClick: true,
                        pauseOnFocusLoss: true,
                        pauseOnHover: true,
                        draggable: true,
                        draggablePercent: 0.6,
                        showCloseButtonOnHover: true,
                        hideProgressBar: true,
                        closeButton: "button",
                        icon: true,
                        rtl: false,
                    });
                }
            });
        },
        ShowOrder(id, index) {
            this.$router.push("/admin/zobrazitObjednavku/" + id);
        },
    },
    beforeMount() {
        this.dateLoad();
    },
    computed: {
        totalCount() {
            return this.$parent.orders.reduce(
                (acc, item) => acc + +Number(1),
                0
            );
        },
        totalOrdersWithBooks() {
            return this.$parent.orders.reduce(
                (acc, item) => acc + +(item.knih != 0 ? 1 : 0),
                0
            );
        },
        totalOrdersWithTools() {
            return this.$parent.orders.reduce(
                (acc, item) => acc + +(item.pomucek != 0 ? 1 : 0),
                0
            );
        },
        totalPrice() {
            return new Intl.NumberFormat("cs-CZ", {
                style: "currency",
                currency: "czk",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
            }).format(
                this.$parent.orders.reduce(
                    (acc, item) => acc + Number(item.celkem_kc),
                    0
                )
            );
        },
        totalBooks() {
            return (
                this.$parent.orders.reduce(
                    (acc, item) => acc + Number(item.knih),
                    0
                ) + "ks\u00a0"
            );
        },
        totalBooksPrice() {
            return new Intl.NumberFormat("cs-CZ", {
                style: "currency",
                currency: "czk",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
            }).format(
                this.$parent.orders.reduce(
                    (acc, item) => acc + Number(item.knih_kc),
                    0
                )
            );
        },
        totalToolsPrice() {
            return new Intl.NumberFormat("cs-CZ", {
                style: "currency",
                currency: "czk",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
            }).format(
                this.$parent.orders.reduce(
                    (acc, item) => acc + Number(item.pomucek_kc),
                    0
                )
            );
        },

        totalTools() {
            return (
                this.$parent.orders.reduce(
                    (acc, item) => acc + Number(item.pomucek),
                    0
                ) + "ks\u00a0"
            );
        },
    },
};
</script>

<style>
.noWrap {
    white-space: nowrap;
}

a.btn {
    border: 1px solid gray;
}
a.btn:hover {
    -webkit-box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);
}
tfoot {
    display: table-row-group;
}
</style>
