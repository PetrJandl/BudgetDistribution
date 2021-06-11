<template>
  <div class="basked col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8">
    <h1>Nákupní košík</h1>
    <div class="items">
      <div
        class="baskedItem row pb-1"
        v-for="item in this.$parent.basked"
        :key="item.item_name"
        v-show="item.pieceInBasket > 0"
      >
        <div class="d-none d-sm-block col-sm-2">
          <img
            v-if="item.item_type_idtype == 1 && item.cover_icon_url != null"
            :src="item.cover_icon_url + '?keywords='"
            alt="obákla knihy"
          />
          <img
            v-if="item.item_type_idtype == 2 && item.cover_medium_url != null"
            :src="'/img/tools/' + item.cover_medium_url"
            alt="náhled pomůcky"
            width="54px"
          />
        </div>
        <div class="col-sm-10">
          <strong class="mt-4 mb-2">{{ item.item_name }} </strong>
        </div>
        <div class="row justify-content-end">
          <div class="col-12 col-sm-4 col-md-3 text-right">
            {{ item.price }}{{ "\xa0" }}Kč<small
              >{{ "\xa0" }}bez{{ "\xa0" }}DPH</small
            >
          </div>
          <button
            @click="addOneToBasked(item)"
            type="button"
            class="btn btn-sm btn-success col-2 col-sm-1"
          >
            +
          </button>
          <input
            type="number"
            v-model.number="item.pieceInBasket"
            min="0"
            @change="updateBasked(item)"
            class="btn btn-default col-3 col-sm-2 col-md-1"
          />ks{{ "\xa0" }}
          <button
            @click="removeOneFromBasked(item)"
            type="button"
            class="btn btn-sm btn-danger col-2 col-sm-1"
          >
            -
          </button>
          <div class="col-12 col-sm-4 col-md-3 text-right">
            <strong
              >{{ item.pieceInBasket * item.price }}{{ "\xa0" }}Kč<small
                >{{ "\xa0" }}bez{{ "\xa0" }}DPH</small
              ></strong
            >
          </div>
        </div>
      </div>
      <div class="sumary mt-5 mb-4 border-top border-dark">
        Celkem v košíku zboží za
        <strong class="price"
          >{{ this.$parent.sumPrice }}{{ "\xa0" }}Kč<small
            >{{ "\xa0" }}bez{{ "\xa0" }}DPH</small
          ></strong
        >
      </div>
      <div class="row">
        <button
          v-show="this.$parent.sumPrice > 0"
          @click="cleanBasked()"
          type="button"
          class="
            btn btn-sm
            text-dark
            btn-light
            nav-link
            p-3
            col-6 col-sm-5 col-md-4 col-lg-3
          "
        >
          <i class="fas fa-minus-circle"></i> Vysypat košík
        </button>

        <router-link
          to="/eshop/objednavka"
          v-slot="{ href, route, navigate }"
          custom
          v-show="this.$parent.sumPrice > 0"
        >
          <a
            :href="href"
            @click="navigate"
            class="
              btn btn-sm
              text-white
              btn-success
              nav-link
              p-3
              col-6
              offset-sm-2
              col-sm-5
              offset-md-4
              col-md-4
              offset-lg-6
              col-lg-3
            "
          >
            Pokračovat
            <i class="fas fa-chevron-right"></i>
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cleanBasked: function () {
      this.$emit("clean-basked");
    },
    updateBasked: function ($item) {
      this.$emit("update-basked", $item);
    },
    addOneToBasked: function ($item) {
      $item.pieceInBasket = $item.pieceInBasket + 1;
      this.$emit("update-basked", $item);
    },
    removeOneFromBasked: function ($item) {
      $item.pieceInBasket = $item.pieceInBasket - 1;
      this.$emit("update-basked", $item);
    },
  },
};
</script>
