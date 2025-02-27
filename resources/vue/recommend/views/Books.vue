<template>
<div>
  <div style="display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background-color: #ffffff;
  padding: 15px 30px;
  border-radius: 35px 35px 35px 35px;
  font-weight: 300;
">
    <vue-scroll-indicator
      height="3px"
      color="rgba(244, 151, 12, 1)"
      background="none"
    >
    </vue-scroll-indicator>
    <div class="items">
      <ItemLine
        v-for="book in this.$parent.books"
        :key="book.iditem"
        :item="book"
      ></ItemLine>
    </div>
  </div>
</div>
</template>

<script>
</script>
