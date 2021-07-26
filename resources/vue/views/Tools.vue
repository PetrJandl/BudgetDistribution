<template>
  <div class="tools col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8">
    <h1>Pomůcky</h1>
    <vue-scroll-indicator
      height="3px"
      color="#dc3545"
      background="none"
    >
    </vue-scroll-indicator>
    <div class="items">
      <ItemLine
        v-for="tool in this.$parent.tools"
        :key="tool.iditem"
        :item="tool"
        @add-item-to-basked="addToolToBasked($event)"
      ></ItemLine>
    </div>
  </div>
</template>

<script>
export default {
  title: "Pomůcky | Bookstart eShop",
  methods: {
    addToolToBasked: function ($tool) {
      this.$emit("add-to-basked", $tool);
    },
  },
};
</script>
