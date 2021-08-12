<template>
  <div class="home col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8">
    <h1>Přehled objednávek</h1>
    <vue-scroll-indicator
      height="3px"
      color="#dc3545"
      background="none"
    >
    </vue-scroll-indicator>

    <b-table striped hover :items="this.$parent.orders" :fields="fields" custom-foot>
       <template #thead-top="data">
        <b-tr>
          <b-th></b-th>
          <b-th colspan="2">Počty kusů v objednávce </b-th>
          <b-th>Cena</b-th>
        </b-tr>
      </template>
      <template #cell(idorder)="data">
          <a href="javascript:;" v-on:click="ShowOrder(`${data.value}`,`${data.index}`)"><i class="fas fa-eye fa-lg" title="Zobrazit objednávku"></i></a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="javascript:;" v-on:click="DeleteOrder(`${data.value}`,`${data.index}`)"><i class="fas fa-trash-alt fa-xs" title="ODSTRANIT objednávku"></i></a>
      </template>
      <template v-slot:custom-foot="data">
        <b-tr>
          <b-th>Celkem</b-th>
          <b-th>{{ totalBooks }}</b-th>
          <b-th>{{ totalTools }}</b-th>
          <b-th>{{ totalPrice }}</b-th>
        </b-tr>
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
            label: 'Objednal',
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
    	if(confirm('Opravdu odstranit?'))
        if(confirm('Tento krok je NEVRATNÝ!!! Objednávka se zcela odstraní!!!'))
          axios.get('/api/orderDelete/' + id)
            .then(resp => {
            this.$parent.orders.splice(index, 1);
          })
            .catch(error => {
            console.log(error);
          })
    },
  ShowOrder(id, index) {
    this.$router.push('/admin/zobrazitObjednavku/' + id);
  }
  },
  computed: {
    totalPrice() {
      return this.$parent.orders.reduce((acc, item) => acc + Number(item.celkem_kc), 0);
      
    },
    totalBooks() {
      return this.$parent.orders.reduce((acc, item) => acc + Number(item.knih), 0);
      
    },
    totalTools() {
      return this.$parent.orders.reduce((acc, item) => acc + Number(item.pomucek), 0);
    }


  }
};
</script>

<style>
.noWrap{
  white-space: nowrap;
}
</style>