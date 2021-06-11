<template>
  <div class="item row pb-2">
    <strong class="mt-3 mb-2">{{ item.item_name }}</strong>
    <div class="text-justify">
      <div class="previewCover">
        <a
          v-if="item.item_type_idtype == 1 && item.isbn != ''"
          :href="'https://www.obalkyknih.cz/view?isbn=' + item.isbn"
          target="_blank"
        >
          <img
            v-if="item.isbn != '' && item.cover_medium_url == null"
            :src="'https://www.obalkyknih.cz/api/cover?isbn=' + item.isbn"
            alt="obákla knihy"
            class="cover"
          />
          <!-- TODO
            obalky knih musí být ve formátu
            https://cache.obalkyknih.cz/file/cover/901302/medium
            adresy smerujici na web nefungují při případném výpadku!!!
            https://www.obalkyknih.cz/file/cover/2076601/medium
          /-->
          <img
            v-if="item.cover_medium_url != null"
            :src="item.cover_medium_url"
            alt="obákla knihy"
            class="cover"
          />
          <img
            v-if="item.rating_url != null && item.rating_url != ''"
            :src="item.rating_url"
            alt="hodnocení knihy"
            class="rating"
          />
        </a>

        <a
          v-if="item.item_type_idtype == 2 && item.cover_medium_url != null"
          :href="item.url"
          target="_blank"
        >
          <img
            :src="'/img/tools/' + item.cover_medium_url"
            :alt="'ilustrační foto - ' + item.name"
            class="preview"
          />
        </a>
        <div v-if="item.item_type_idtype == 1" class="d-inline-block m-3">
          <button
            @click="addToBasked(item)"
            type="button"
            class="btn btn-success"
          >
            přidat do košíku
          </button>
          <div class="">
            {{ item.price }}{{ "\xa0" }}Kč
            <small>{{ "\xa0" }}bez{{ "\xa0" }}DPH</small>
          </div>
        </div>
      </div>
      <div v-if="item.description != null">{{ item.description }}</div>
      <div v-if="item.item_type_idtype == 2">
        <a :href="item.url" target="_blank"
          >Více informací na stránce prodejce</a
        >
      </div>
      <div v-if="item.item_type_idtype == 2" class="m-3">
        <button
          @click="addToBasked(item)"
          type="button"
          class="btn btn-success"
        >
          přidat do košíku
        </button>
        <div class="">
          {{ item.price }}{{ "\xa0" }}Kč
          <small>{{ "\xa0" }}bez{{ "\xa0" }}DPH</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
  methods: {
    addToBasked: function (item) {
      this.$emit("add-item-to-basked", item);
    },
  },
};
</script>

<style>
.rating {
  display: block;
  margin: auto;
  padding: 6pt 0;
}
</style>
