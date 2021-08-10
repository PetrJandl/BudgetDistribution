<template>
<div>
    <b-table striped hover :items="items"></b-table>
</div>
</template>

<script>
export default {
  props: ["order"],
  data() {
    return {};
  }
};
</script>