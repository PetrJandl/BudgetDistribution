<template>
    <div class="books col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <h1>Kusy knih v objednávkách</h1>
        <vue-scroll-indicator height="3px" color="#dc3545" background="none">
        </vue-scroll-indicator>
        <div class="items">
            <b-table striped hover :items="this.books" :fields="fields">
                <template #cell(item_name)="data">
                    <a
                        target="_blank"
                        :href="`https://www.google.com/search?q=koupit+&quot;${data.value}&quot;+${data.item.isbn}`"
                        >{{ data.value }}</a
                    >
                </template>
                <template v-slot:custom-foot="data">
                    <b-tr>
                        <b-th colspan="3">Celkem</b-th>
                        <b-th>{{ totalBooks }}ks</b-th>
                        <b-th></b-th>
                        <b-th>{{ totalPriceBooks }}</b-th>
                    </b-tr>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
export default {
    title: "ADMIN - Knihy | Bookstart eShop",
    data() {
        return {
            books: [],
            fields: [
                {
                    key: "isbn",
                    label: "ISBN",
                    sortable: true,
                    tdClass: "noWrap",
                },
                {
                    key: "item_name",
                    label: "Název",
                    sortable: true,
                },
                {
                    key: "item_autor",
                    label: "Autor",
                    sortable: true,
                },
                /*
          {
            key: 'price',
            label: 'CenaKS',
            sortable: true,
          },
          */
                {
                    key: "pieces",
                    label: "ks",
                    sortable: true,
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

                /*
          {
            key: 'priceSum',
            label: 'Cena celkem',
            sortable: true,
          },
          */
            ],
        };
    },
    methods: {
        getBooks() {
            //console.log(this.books);
            axios
                .get("/api/sumaryitems.json")
                .then((response) => {
                    //console.log(this.response);
                    response.data.forEach((item) => {
                        //this.orders.push(item);
                        if (item.item_type_idtype === 1) {
                            //console.log(item.iditem);
                            this.books.push(item);
                        }
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
    computed: {
        totalBooks() {
            return this.books.reduce(
                (acc, item) => acc + Number(item.pieces),
                0
            );
        },
        totalPriceBooks() {
            return new Intl.NumberFormat("cs-CZ", {
                style: "currency",
                currency: "czk",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
            }).format(
                this.books.reduce(
                    (acc, item) =>
                        acc + Number(item.price) * Number(item.pieces),
                    0
                )
            );
        },
    },
    beforeMount() {
        this.getBooks();
        //console.log("App: "+this.books)
    },
};
</script>

<style>
.noWrap {
    white-space: nowrap;
}
</style>
