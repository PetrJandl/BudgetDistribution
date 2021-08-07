<template>
  <div class="home col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8">
    <h1>Přehled objednávek</h1>
    <vue-scroll-indicator
      height="3px"
      color="#dc3545"
      background="none"
    >
    </vue-scroll-indicator>

    <OrderLine/>

    
  </div>
</template>

<script>
export default {
  title: "Bookstart eShop",
};
</script>