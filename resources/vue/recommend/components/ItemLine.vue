<template>
  <div class="item row pb-2">
    <div class="text-justify">
      <div class="previewCover">
        <a
          v-if="item.item_type_idtype == 1 && item.isbn != ''"
          :href="'https://cache.obalkyknih.cz/view?isbn=' + item.isbn"
          target="_blank"
        >
          <img
            v-if="item.isbn != '' && item.cover_medium_url == null"
            :src="'https://cache.obalkyknih.cz/api/cover?isbn=' + item.isbn"
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
            v-if="
              item.cover_medium_url != null &&
              item.cover_medium_url.includes('obalkyknih.cz')
            "
            :src="item.cover_medium_url"
            alt="obákla knihy"
            class="cover"
          />
          <img
            v-if="
              item.cover_medium_url != null &&
              !item.cover_medium_url.includes('obalkyknih.cz')
            "
            :src="'/img/books/' + item.cover_medium_url"
            alt="obákla knihy"
            class="cover"
          />
          <img
            v-if="false && item.rating_url != null && item.rating_url != ''"
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
            :alt="'ilustrační foto - ' + item.item_name"
            class="preview"
          />
        </a>
      </div>

      <strong class="mt-3 mb-2">{{ item.item_name }}</strong>
      <div v-if="item.item_type_idtype == 1 && item.item_autor != ''" class="autor">
        {{ item.item_autor }}
      </div>

      <div
        v-if="item.description != null"
        v-html="item.description"
        v-linkified
      ></div>
        <div v-if="item.item_type_idtype == 1" class="d-block m-3">
          <div class="text-right">
            {{ item.price }}{{ "\xa0" }}Kč
            <small>{{ "\xa0" }}bez{{ "\xa0" }}DPH</small>
          </div>
        </div>

      <div v-if="item.item_type_idtype == 2">
        <a :href="item.url" target="_blank"
          >Více informací na stránce prodejce</a
        >
      </div>
      <div v-if="item.item_type_idtype == 2" class="m-3">
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
};
</script>

<style>
.autor{
	line-height: 2.4em;
}
</style>
