<template>
  <div class="basked col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8">
    <h1>Objednávka odeslána !</h1>
  </div>
</template>

<script>
export default {
  title: "Objednávka odeslána | Bookstart eShop",
  mounted() {
    this.$emit("clean-basked");
    localStorage.clear();
  },
};
</script>

