<template>
  <div class="container">
    <div class="title">Lorem ipsum dolor sit</div>
    <div class="filters">
      <vFilter :options="options" @setRoom="setRoom" />
      <div class="range-slider">
        <p class="font-regular">ЭТАЖ</p>
        <span @change="sliderFloor" class="range-slider_number">
          <input v-model.number="minFloor" type="number" min="1" max="99" />
          <p class="dash">-</p>
          <input v-model.number="maxFloor" type="number" min="1" max="99"
        /></span>
        <input
          @change="sliderFloor"
          v-model.number="minFloor"
          min="1"
          max="99"
          step="1"
          type="range"
        />
        <input
          @change="sliderFloor"
          v-model.number="maxFloor"
          min="1"
          max="99"
          step="1"
          type="range"
        />
        <svg width="100%" height="24"></svg>
      </div>
      <div class="range-slider">
        <p class="font-regular">ПЛОЩАДЬ, м<sup>2</sup></p>
        <span @change="sliderSquare" class="range-slider_number">
          <input v-model.number="minSquare" type="number" min="1" max="99" />
          <p class="dash">-</p>
          <input v-model.number="maxSquare" type="number" min="1" max="99"
        /></span>
        <input
          @change="sliderSquare"
          v-model.number="minSquare"
          min="1"
          max="99"
          step="1"
          type="range"
        />
        <input
          @change="sliderSquare"
          v-model.number="maxSquare"
          min="1"
          max="99"
          step="1"
          type="range"
        />
        <svg width="100%" height="24"></svg>
      </div>
      <div class="range-slider no-margin">
        <p class="font-regular">СТОИМОСТЬ, млн. р.</p>
        <span @change="sliderPrice" class="range-slider_number">
          <input v-model.number="minPrice" type="number" min="0.0" max="99.9" />
          <p class="dash">-</p>
          <input v-model.number="maxPrice" type="number" min="0.0" max="99.9"
        /></span>
        <input
          @change="sliderPrice"
          v-model.number="minPrice"
          min="0.0"
          max="99.9"
          step="0.1"
          type="range"
        />
        <input
          @change="sliderPrice"
          v-model.number="maxPrice"
          min="0.0"
          max="99.9"
          step="0.1"
          type="range"
        />
        <svg width="100%" height="24"></svg>
      </div>
      <div class="filters_accept">
        <button class="filters_accept--btn" @click="activateFilters">
          <span>Применить</span>
        </button>
        <button class="filters_accept--reject" @click="rejectFilters">СБРОСИТЬ ФИЛЬТРЫ</button>
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
import vSlider from "./components/v-slider.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    vCatalogItem,
    vFilter,
  },

  data() {
    return {
      options: [
        { name: "S", value: 1 },
        { name: "1k", value: 2 },
        { name: "2k", value: 3 },
        { name: "3k", value: 4 },
      ],
      selected: "",
      sortedProducts: [],
      minFloor: 1,
      maxFloor: 99,
      minSquare: 1,
      maxSquare: 999,
      minPrice: 0.0,
      maxPrice: 99.9,
    };
  },

  computed: {
    ...mapGetters(["PRODUCTS", "INITIAL_PRODUCTS"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },

  methods: {

    ...mapActions(["GET_PODUCTS_FROM_API", "FILTER_PRODUCTS"]),
    showId(id) {
      console.log(id);
    },

    sliderFloor: function () {
      if (this.minFloor > this.maxFloor) {
        var tmp = this.maxFloor;
        this.maxFloor = this.minFloor;
        this.minFloor = tmp;
      }
    },

    sliderSquare: function () {
      if (this.minSquare > this.maxSquare) {
        var tmp = this.maxSquare;
        this.maxSquare = this.minSquare;
        this.minSquare = tmp;
      }
    },

    sliderPrice: function () {
      if (this.minPrice > this.maxPrice) {
        var tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
    },

   
    activateFilters() {
      this.selectOption()
    },

rejectFilters() {
this.GET_PODUCTS_FROM_API();
},

    selectOption() {
        // debugger
        console.log(this)
        const ala = this.INITIAL_PRODUCTS.filter((product) => {
          return product.size === this.selected &&
          product.floor >= this.minFloor &&
          product.floor <= this.maxFloor &&
          product.square >= this.minSquare &&
          product.square <= this.maxSquare &&
          product.priceDot >= this.minPrice &&
          product.priceDot <= this.maxPrice
        });
        this.FILTER_PRODUCTS(ala)
    },

    setRoom(name) {
      // debugger
      this.selected = name
    }
  },

  mounted() {
    this.GET_PODUCTS_FROM_API();
    // this.selectOption();
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
  align-items: center;
  display: flex;
  padding: 51px 16.85% 6px 15.65%;
  justify-content: space-between;
  &_accept {
    width: 201px;
    display: flex;
    flex-direction: column;
    margin-top: 45px;
    &--btn {
      border-radius: 5px;
    }
    &--reject {
      background: none;
margin: 0px;
    }
  }
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

.range-slider {
  width: 175px;
  margin: 0px 61px 0 0;
  position: relative;
  height: 7em;
  &_number {
    display: flex;
  }
  & .dash {
    font-family: "GothamPro-Bold";
    padding: 0px 10px;
    color: #2c323a;
    opacity: 0.5;
  }
}

.range-slider svg,
.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type="number"] {
  border: 1px solid #d8d8d8;
  text-align: center;
  font-size: 16px;
  width: 80px;
  height: 40px;
  border-radius: 5px;
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"]:invalid,
input[type="number"]:out-of-range {
  border: 1px solid #d8d8d8;
  border-radius: 5px;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #70d24e;
}

input[type="range"]:focus::-ms-fill-lower {
  background: #70d24e;
}

input[type="range"]:focus::-ms-fill-upper {
  background: #70d24e;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: #d8d8d8;
  border-radius: 16px;
  box-shadow: none;
  border: 0;
  background-color: #70d24e;
}

input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 5px 10px rgba(86, 86, 86, 0.05);
  border: 3px solid #fff;
  height: 21px;
  width: 21px;
  border-radius: 25px;
  background: #70d24e;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}

.filters_checkbox {
  display: flex;
  &--item {
    position: relative;
    width: 47px;
    height: 43px;
    background: #ffffff;
    border: 1px solid #d8d8d8;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    cursor: pointer;
  }
}
label input {
  display: none;
}
label input[type="checkbox"]:checked + .filters_checkbox--item {
  background: #70d24e;
  color: #fff;
  border-radius: 4px;
}

.filters_checkbox--label {
  margin-left: 4px;
}

.no-margin {
  margin: 0;
}

@media (max-width: 1322px) {
  .filters {
    flex-direction: column;
  }
  .range-slider {
    margin: 0;
  }
  .main-wrapper {
    padding: 0px;
  }
}
</style>
