<template>
  <div class="books col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8">
    <h1>Knihy</h1>
    <vue-scroll-indicator
      height="3px"
      color="#dc3545"
      background="none"
    >
    </vue-scroll-indicator>
    <div class="items">

    </div>
  </div>
</template>

<script>
export default {
  title: "Knihy | Bookstart eShop",
  methods: {
    addBookToBasked: function ($book) {
      this.$emit("add-to-basked", $book);
    },
  },
};
</script>
