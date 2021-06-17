<template>
  <div class="books col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8">
    <h1>Knihy</h1>
    <div class="items">
      <ItemLine
        v-for="book in this.$parent.books"
        :key="book.iditem"
        :item="book"
        @add-item-to-basked="addBookToBasked($event)"
      ></ItemLine>
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
