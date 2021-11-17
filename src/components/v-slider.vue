<template>
  <div class="v-slider">
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
        <p class="font-regular">ПЛОЩАДЬ, м<sup>2</sup> </p>
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
      <div class="range-slider">
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
  </div>

</template>

<script>
export default {
  name: "v-slider",
  components: {},
  props: {
     minFloor: {
      type: Number,
      default() {
        return 1;
      }
     },
    maxFloor: {
      type: Number,
      default() {
        return 99;
      }
     },
    minSquare: {
      type: Number,
      default() {
        return 1;
      }
     },
    maxSquare: {
      type: Number,
      default() {
        return 999;
      }
     },
    minPrice: {
      type: Number,
      default() {
        return 0.0;
      }
     },
     maxPrice: {
      type: Number,
      default() {
        return 99.9;
      }
     },
  },
  data() {
    return {
     
    };
  },
  computed: {},
  methods: {

  sliderFloor: function () {
      if (this.minFloor > this.maxFloor) {
        var tmp = this.maxFloor;
        this.maxFloor = this.minFloor;
        this.minFloor = tmp;
      }
      this.selectOption();
    },
    sliderPrice: function () {
      if (this.minPrice > this.maxPrice) {
        var tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.selectOption();
    },
    sliderSquare: function () {
      if (this.minSquare > this.maxSquare) {
        var tmp = this.maxSquare;
        this.maxSquare = this.minSquare;
        this.minSquare = tmp;
      }
      this.selectOption();
    },
  },
};
</script>
<style scoped lang="scss">
.v-slider {
  display: flex;
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
</style>
