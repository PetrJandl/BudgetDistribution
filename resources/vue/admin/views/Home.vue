<template>
  <div class="home col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8">
    <h1>Přehled objednávek</h1>
    <vue-scroll-indicator
      height="3px"
      color="#dc3545"
      background="none"
    >
    </vue-scroll-indicator>

    <b-table striped hover :items="this.$parent.orders" :fields="fields">
       <template #thead-top="data">
        <b-tr>
          <b-th></b-th>
          <b-th colspan="2">Počty kusů v objednávce </b-th>
          <b-th>Cena</b-th>
        </b-tr>
      </template>
      <template #cell(idorder)="data">
          <a href="javascript:;" v-on:click="DeleteOrder(`${data.value}`,`${data.index}`)"><i class="fas fa-trash-alt"></i></a>
      </template>
    </b-table>
   
  </div>
</template>

<script>



export default {
  title: "ADMIN - Bookstart eShop",
  data() {
    return {
      books: [],
      fields: [
          {
            key: 'knihovna',
            label: 'Knihovna',
            sortable: true,
            tdClass: 'noWrap'
          },
          {
            key: 'knih',
            label: 'knih',
            sortable: true,
          },
          {
            key: 'pomucek',
            label: 'pomůcek',
            sortable: true,
          },
          {
            key: 'celkem_kc',
            label: 'Celkem',
            sortable: true,
          },
          {
            key: 'idorder',
            label: '',
            sortable: false,
          },
        ],
    };
  },
  methods: {
	DeleteOrder(id, index) {
    	if(confirm('Opravdu odstranit? Tento krok je NEVRATNÝ a není záloha dat!!!'))
        axios.delete('/api/orderDelete/'+id)
          .then(resp => {
          this.this.$parent.orders.splice(index, 1);
        })
          .catch(error => {
          console.log(error);
        })
    },
  }
};
</script>

<style>
.noWrap{
  white-space: nowrap;
}
</style>