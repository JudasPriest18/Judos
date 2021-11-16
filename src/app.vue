<template>
  <div class="container">
    <div class="title">Lorem ipsum dolor sit</div>
    <div class="filters">
      <vFilter :options="options" @select="selectOption" />
    <vSlider />
<div class="filters_accept">
    <button class="filters_accept--btn"><span>Применить</span></button>
    <p>СБРОСИТЬ ФИЛЬТРЫ</p>
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
    vSlider
  },

  data() {
    return {
      options: [
        { name: "All", value: "all"},
        { name: "S", value: 1 },
        { name: "1k", value: 2 },
        { name: "2k", value: 3 },
        { name: "3k", value: 4 },
      ],
      selected: "",
      sortedProducts: [],
     
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
      vm.selected = option.name;
      this.sortedProducts = [...this.PRODUCTS];
      if (option) {
        this.sortedProducts = this.PRODUCTS.filter(function (product) {         
          return product.size === option.name;
        });
      }
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
  align-items: center;
  display: flex;
  &_accept{
 max-width: 201px;
 display: flex;
 flex-direction: column;
  &--btn {
    border-radius: 5px;
   
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
</style>
