<template>
    <div class="tools col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <h1>Pomůcky</h1>
        <vue-scroll-indicator height="3px" color="#dc3545" background="none">
        </vue-scroll-indicator>
        <div class="items">
            <b-table
                striped
                hover
                :items="this.tools"
                :fields="fields"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
            >
                <template #cell(item_name)="data">
                    <a target="_blank" :href="`${data.item.url}`">{{
                        data.value
                    }}</a>
                </template>
                <template #cell(url)="data">
                    {{
                        data.value
                            .split("/")[2]
                            .replace("www.", "")
                            .replace("eshop.", "")
                    }}
                </template>
                <template v-slot:custom-foot="data">
                    <b-tr>
                        <b-th>Celkem</b-th>
                        <b-th></b-th>
                        <b-th class="text-right">{{ totalTools }}ks</b-th>
                        <b-th></b-th>
                        <b-th class="text-right">{{ totalPriceTools }}</b-th>
                    </b-tr>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
export default {
    title: "ADMIN - Pomůcky | Bookstart eShop",
    data() {
        return {
            sortBy: "url",
            sortDesc: false,
            tools: [],
            fields: [
                {
                    key: "url",
                    label: "Web prodejce",
                    sortable: true,
                },
                {
                    key: "item_name",
                    label: "Název",
                    sortable: true,
                },
                {
                    key: "pieces",
                    label: "ks",
                    sortable: true,
                    class: "text-right",
                },
                {
                    key: "price",
                    label: "cena\u00a0j.",
                    sortable: true,
                    class: "text-right",
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
                    key: "priceSum",
                    label: "cena",
                    sortable: true,
                    class: "text-right",
                    formatter: (value, key, item) => {
                        return Intl.NumberFormat("cs-CZ", {
                            style: "currency",
                            currency: "czk",
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                        }).format(value);
                    },
                },
            ],
        };
    },
    methods: {
        getTools() {
            //console.log(this.tools);
            axios
                .get("/api/sumaryitems.json")
                .then((response) => {
                    //console.log(this.response);
                    response.data.forEach((item) => {
                        //this.orders.push(item);
                        if (item.item_type_idtype === 2) {
                            //console.log(item.iditem);
                            this.tools.push(item);
                        }
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
    computed: {
        totalTools() {
            return this.tools.reduce(
                (acc, item) => acc + Number(item.pieces),
                0
            );
        },
        totalPriceTools() {
            return new Intl.NumberFormat("cs-CZ", {
                style: "currency",
                currency: "czk",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
            }).format(
                this.tools.reduce(
                    (acc, item) =>
                        acc + Number(item.price) * Number(item.pieces),
                    0
                )
            );
        },
    },
    beforeMount() {
        this.getTools();
        //console.log("App: "+this.books)
    },
};
</script>
