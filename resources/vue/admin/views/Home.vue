<template>
  <div class="home col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8">
    <h1>Přehled objednávek</h1>
    <div class="d-print-none">
    <div>
      <h4>Nastavení data uzavření objednávek:</h4>
      <div class="text-center">
        <input type="date" name="" id="" v-model="shopingStopDate"><a v-on:click="ChangeStopDate()" href="#setDate" type="button" class="btn btn-light btn-sm">Nastavit datum</a>
      </div>
    </div>
    <div>
      <h4>Tisk objednávek:</h4>
      <div class="text-center">
        <a href="javascript: window.print();" type="button" class="btn btn-light">přehled objednávek</a> | 
        <a href="/admin/vsechyObjednavky" target="_blank" type="button" class="btn btn-light">detaily všech objednávek</a>
      </div>
    </div>
    <div>
      <h4>Tisk adresních štítků :</h4>
      <div class="text-center">
        <a href="/admin/vsechyAdresy" target="_blank" type="button" class="btn btn-light">bez loga</a> |
        <a href="/admin/vsechyAdresy/slogem" target="_blank" type="button" class="btn btn-light">s logem</a> |
        <a href="/admin/vsechyAdresy/srazitkem" target="_blank" type="button" class="btn btn-light">s razítkovým logem</a> |
        <a href="/admin/vsechyAdresy/nope" target="_blank" type="button" class="btn btn-light">prázdno na razítko</a>
      </div>
    </div>
    </div>
    <vue-scroll-indicator
      height="3px"
      color="#dc3545"
      background="none"
    >
    </vue-scroll-indicator>

    <b-table striped hover :items="this.$parent.orders" :fields="fields" custom-foot>
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
          <a href="javascript:;" v-on:click="DeleteOrder(`${data.value}`,`${data.index}`)" class="btn btn-danger d-print-none"><i class="fas fa-trash-alt fa-xs" title="ODSTRANIT objednávku"></i></a>
      </template>
      <template v-slot:custom-foot="data">
        <b-tr>
          <b-th colspan="2">Celkem 
            <span v-if="totalCount==0"> žádná objednávka v systému</span>
            <span v-if="totalCount!=0">{{ totalCount }}</span>
            <span v-if="totalCount==1">objednávka</span>
            <span v-if="totalCount>1 && totalCount<5">objednávky</span>
            <span v-if="totalCount>4">objednávek</span>
          </b-th>
          <b-th class="text-right">{{ totalBooks }}</b-th>
          <b-th class="text-right">{{ totalTools }}</b-th>
          <b-th class="text-right">{{ totalPrice }}</b-th>
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
      shopingStopDate: "",
      fields: [
          {
            key: 'knihovna',
            label: 'Objednatel',
            sortable: true,
            tdClass: 'noWrap'
          },
          {
            key: 'created_at',
            label: 'Čas',
            sortable: true,
            tdClass: 'noWrap'
          },
          {
            key: 'knih',
            label: 'knih',
            sortable: true,
            tdClass: 'text-right',
            thClass: 'text-right'
          },
          {
            key: 'pomucek',
            label: 'pomůcek',
            sortable: true,
            tdClass: 'text-right',
            thClass: 'text-right'
          },
          {
            key: 'celkem_kc',
            label: 'Celkem',
            sortable: true,
            tdClass: 'text-right',
            thClass: 'text-right'
          },
          {
            key: 'idorder',
            label: '',
            sortable: false
          },
        ],
    };
  },
  methods: {
  dateLoad() {
        axios
          .get("/api/allowShopingStop.json")
          .then((response) => {
              this.shopingStopDate=response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(this.shopingStopDate)
      },
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
    ChangeStopDate(){

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _token: document.querySelector("meta[name=csrf-token]").content,
          shopingStopDate: this.shopingStopDate,
        }),
      };

      fetch("/api/setStopShopDate", requestOptions).then( (response) => {
        const data =  response.json();
        //log.console(data);
        // check for error response
        if (data.message != "ok") {
          //this.message = data.original.message;
          // get error message from body or default to response status
          //const error = (data && data.message) || response.status;
          //return Promise.reject(error);
          this.$toast.success("Nastavení data uloženo!", {
            position: "top-right",
            timeout: 2000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: true,
            hideProgressBar: true,
            closeButton: "button",
            icon: true,
            rtl: false
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
            rtl: false
          });
        }
      });



      

    },
    ShowOrder(id, index) {
    this.$router.push('/admin/zobrazitObjednavku/' + id);
    }
  },
    beforeMount() {
    this.dateLoad();
  },
  computed: {
    totalCount() {
      return this.$parent.orders.reduce((acc, item) => acc + + Number(1), 0);
    },
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

a.btn{
  border: 1px solid gray;
}
a.btn:hover {
  -webkit-box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.2); 
  box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.2);
}
</style>