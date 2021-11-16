<template>
  <div class="container">
    <div class="title">Lorem ipsum dolor sit</div>
    <div class="filters">
      <vFilter :options="options" @select="selectOption" />
      <div class="range-group">
        <div class="range-values">
          <div class="range-box">{{ minFloor }}</div>
          <hr />
          <div class="range-box">{{ maxFloor }}</div>
        </div>
        <div class="range-slider">
          <input
            type="range"
            min="1"
            max="99"
            step="1"
            v-model.number="minFloor"
            @change="setRangeSlider"
          />
          <input
            type="range"
            min="1"
            max="99"
            step="1"
            v-model.number="maxFloor"
            @change="setRangeSlider"
          />
        </div>
      </div>
      <div class="range-group">
        <div class="range-values">
          <div class="range-box">{{ minSquare }}</div>
          <hr />
          <div class="range-box">{{ maxSquare }}</div>
        </div>
        <div class="range-slider">
          <input
            type="range"
            min="9"
            max="999"
            step="10"
            v-model.number="minSquare"
            @change="setSquareSlider"
          />
          <input
            type="range"
            min="9"
            max="999"
            step="10"
            v-model.number="maxSquare"
            @change="setSquareSlider"
          />
        </div>
      </div>
      <div class="range-group">
        <div class="range-values">
          <div class="range-box">{{ minPrice }}</div>
          <hr />
          <div class="range-box">{{ maxPrice }}</div>
        </div>
        <div class="range-slider">
          <input
            type="range"
            min="1000000"
            max="9999999"
            step="10000"
            v-model.number="minPrice"
            @change="setPriceSlider"
          />
          <input
            type="range"
            min="1000000"
            max="9999999"
            step="10000"
            v-model.number="maxPrice"
            @change="setPriceSlider"
          />
        </div>
      </div>
    </div>
    <div class="main-wrapper">
      <vCatalogItem
        v-for="product in filteredProducts"
        :key="product.id"
        :product_data="product"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./components/v-catalog-item.vue";
import vFilter from "./components/v-filter.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    vCatalogItem,
    vFilter,
  },

  data() {
    return {
      options: [
        { name: "All", value: "all" },
        { name: "S", value: 1 },
        { name: "1k", value: 2 },
        { name: "2k", value: 3 },
        { name: "3k", value: 4 },
      ],
      selected: "",
      sortedProducts: [],
      minFloor: 1,
      maxFloor: 99,
      minSquare: 9,
      maxSquare: 999,
      minPrice: 1000000,
      maxPrice: 9999999,
    };
  },

  computed: {
    ...mapGetters(["PRODUCTS"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },

  methods: {
    ...mapActions(["GET_PODUCTS_FROM_API"]),
    showId(id) {
      console.log(id);
    },

    selectOption(option) {
      let vm = this;
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.PRODUCTS.filter(function (product) {
        return product.floor >= vm.minFloor && product.floor <= vm.maxFloor;
      });
      this.sortedProducts = this.PRODUCTS.filter(function (product) {
        return product.square >= vm.minSquare && product.floor <= vm.maxSquare;
      });
      this.sortedProducts = this.PRODUCTS.filter(function (product) {
        return product.price >= vm.minPrice && product.floor <= vm.maxPrice;
      });
      if (option) {
        this.sortedProducts = this.PRODUCTS.filter(function (product) {
          vm.selected = option.name;
          return product.size === option.name;
        });
      }
    },

    setRangeSlider() {
      if (this.minFloor > this.maxFloor) {
        let tmp = this.maxFloor;
        this.maxFloor = this.minFloor;
        this.minFloor = tmp;
      }
      this.selectOption();
    },
    setSquareSlider() {
      if (this.minSquare > this.maxSquare) {
        let tmp = this.maxSquare;
        this.maxSquare = this.minSquare;
        this.minSquare = tmp;
      }
      this.selectOption();
    },
    setPriceSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.selectOption();
    },
  },

  mounted() {
    this.GET_PODUCTS_FROM_API();
    this.selectOption();
  },
};
</script>
<style lang="scss">
.main-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 52px 256px;
  justify-content: space-around;
}

.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.range-group {
  display: flex;
  flex-direction: column;
}

.range-values {
  display: flex;
  margin-bottom: 30px
;
}

.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}

.range-slider svg,
.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;

}

input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
  width: 2px;
}

.range-box {
    background: #ffffff;
    border: 1px solid #d8d8d8;
    box-sizing: border-box;
    border-radius: 5px;
    width: 80px;
height: 40px;
padding: 7px 30px;
}
</style>
