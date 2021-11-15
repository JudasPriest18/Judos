<template>
  <div class="container">
    <div class="title">Lorem ipsum dolor sit</div>
    <div class="main-wrapper">
      <vMainWrapper
        v-for="product in PRODUCTS"
        :key="product.id"
        :product_data="product"
        @showMore="showId"
      />
    </div>
  </div>
</template>

<script>
import vMainWrapper from "./components/v-main-wrapper.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    vMainWrapper,
  },

  data() {
    return {
   
    };
  },

computed: {
...mapGetters([
  'PRODUCTS'
]),
},

  methods: {
    ...mapActions(["GET_PODUCTS_FROM_API"]),
    showId(id) {
      console.log(id);
    },
  },

  mounted() {
    this.GET_PODUCTS_FROM_API();
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
</style>
