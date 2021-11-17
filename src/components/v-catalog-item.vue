<template>
  <div class="v-catalog-item">
    <div class="main">
      <div
        class="main_item"
        @mouseover="show = true"
        @mouseleave="show = false"
      >
        <div class="main_block">
          <div class="main_desc">
            <div class="main_info">
              <p class="gray">{{ product_data.floor }} этаж</p>
              <p>
                {{ product_data.rooms }} комната -
                {{ product_data.square }}м<sup>2</sup>
              </p>
            </div>
            <div class="main_scale">
              <div class="main_translate">
              <div class="main_lot">
                <div class="main_lot_number">№{{ product_data.number }}</div>
                <div class="main_pic">
                  <img src="assets/one-room.jpg" alt="one-room" />
                </div>
              </div>
              <div class="main_price">
                <p class="price">{{ product_data.price }}р.</p>
                <p class="gray">119 000 р. за м<sup>2</sup></p>
              </div>
            </div>
            </div>
            <transition v-if="show" name="bounce">
              <button @click="showMore" class="main_more">
                <span>Подробнее</span>
              </button>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "v-catalog-item",
  components: {
    
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      show: false,
      title: "Main wrapper",
    };
  },
  computed: {},
  methods: {
    showMore() {
      this.$emit("showMore", this.product_data.id);
    },
  },
  watch: {},
};
</script>
<style scoped lang="scss">
.main {
  &_item {
    max-width: 270px;
    margin-bottom: 30px;
    height: 100%;
  }
  &_block {
    display: flex;
    box-shadow: 0px 5px 20px rgba(86, 86, 86, 0.05);
    border-radius: 10px;
    flex-direction: column;
    background-color: #fff;
    &:hover {
      height: 385px;
    }
    &:hover .main_more {
      transform:translateY(-60px);
        transition-duration: .3s;
    }
     &:hover .main_scale{
      transform: scale(0.8);
        transition-duration: .3s;
    }
    &:hover .main_translate{
      transform:translateY(-40px);
        transition-duration: .3s;
      //  transform:translateX(-30px)
    }
  }
  &_info {
    display: flex;
    justify-content: space-between;
    margin: 8px 15px 0;
  }
  &_lot {
    margin: 4px 10px;
    max-width: 250px;
    max-height: 250px;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    border-radius: 5px;
  

    &_number {
      margin: 0;
      border: solid #ebebeb;
      border-top: 0;
      border-right: 0;
      box-sizing: border-box;
      border-radius: 0px 5px;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 28px;
      max-width: 62px;
      text-align: center;
      float: right;
      padding: 0px 10px;
    }
  }
  &_pic {
    padding: 31px 10px;
  }
  &_price {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    padding: 10px 10px;
    p {
      margin: 5px;
    }
  }
}
.bounce-enter-active {
  transition: all .3s ease;
}
.bounce-leave-active {
   transform: translateX(10px);
  opacity: 0;
}


</style>
