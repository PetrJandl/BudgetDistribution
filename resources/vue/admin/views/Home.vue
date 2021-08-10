<template>
  <div class="home col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8">
    <h1>Přehled objednávek</h1>
    <vue-scroll-indicator
      height="3px"
      color="#dc3545"
      background="none"
    >
    </vue-scroll-indicator>

    <b-table striped hover :items="this.$parent.orders">
       <template #thead-top="data">
        <b-tr>
          <b-th></b-th>
          <b-th colspan="3">Počty kusů v objednávce</b-th>
          <b-th>Cena</b-th>
        </b-tr>
      </template>
    </b-table>
   
  </div>
</template>

<script>
export default {
  title: "ADMIN - Bookstart eShop",
};
</script>