<template>
  <!-- <div class="range-group">
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
            min="0.0"
            max="99.9"
            step="0.1"
            v-model.number="minPrice"
            @change="setPriceSlider"
          />
          <input
            type="range"
            min="0.0"
            max="99.9"
            step="0.1"
            v-model.number="maxPrice"
            @change="setPriceSlider"
          />
        </div>
      </div> -->
  <div class="btn-container">
    <button @click="onClick">
      <span v-if="!isLoading" class="text">{{
        isClicked ? "Подробнее" : btnText
      }}</span>
      <span v-if="isLoading" role="status" class="spinner-border">
        <span class="sr-only">Spinning</span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
    },
  },
  data() {
    return {
      isLoading: false,
      isClicked: false,
    };
  },
  methods: {
    async onClick() {
      this.isClicked = this.isLoading = true;
      await this.delay(2000);
      this.isLoading = false;
    },
    delay(ms) {
      const doDelay = new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, ms);
      });
      return doDelay.then(() => {
        return;
      });
    },
    // setSquareSlider() {
    //   if (this.minSquare > this.maxSquare) {
    //     let tmp = this.maxSquare;
    //     this.maxSquare = this.minSquare;
    //     this.minSquare = tmp;
    //   }
    //   this.selectOption();
    // },
    // setPriceSlider() {
    //   if (this.minPrice > this.maxPrice) {
    //     let tmp = this.maxPrice;
    //     this.maxPrice = this.minPrice;
    //     this.minPrice = tmp;
    //   }
    //   this.selectOption();
    // },
    //   setRangeSlider() {
    //       if (this.minFloor > this.maxFloor) {
    //         let tmp = this.maxFloor;
    //         this.maxFloor = this.minFloor;
    //         this.minFloor = tmp;
    //       }
    //       this.selectOption();
    //     },
  },
};
</script>

<style lang="scss">
.spinner-border {
  color: white;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: 0.25rem solid;
  border-right: 0.25rem solid transparent;
  border-radius: 50%;
  -webkit-animation: spinner-border 0.75s linear infinite;
  animation: spinner-border 0.75s linear infinite;
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
}

@keyframes spinner-border {
  100% {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
.btn-container {
  button {
    background: #70d24e;
    border-radius: 2px 2px 5px 5px;
    max-width: 250px;
    width: 100%;
    height: 40px;
    align-items: center;
    border: none;
    margin: 10px;
    span {
      font-family: "GothamPro-Bold";
      font-size: 14px;
      color: white;
    }
  }
}
// .range-group {
//   display: flex;
//   flex-direction: column;
// }

// .range-values {
//   display: flex;
//   margin-bottom: 30px
// ;
// }

// .range-slider {
//   width: 200px;
//   margin: auto 16px;
//   text-align: center;
//   position: relative;
// }

// .range-slider svg,
// .range-slider input[type="range"] {
//   position: absolute;
//   left: 0;
//   bottom: 0;

// }

// input[type="range"]::-webkit-slider-thumb {
//   z-index: 2;
//   position: relative;
//   top: 2px;
//   margin-top: -7px;
//   width: 2px;
// }
</style>
