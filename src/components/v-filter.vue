

<template>
  <div class="v-filter">
    <p class="font-regular">КОМНАТЫ</p>
    <button
      class="v-filter_btn options"
      v-for="option in options"
      :key="option.value"
      @click="selectOption(option)"
    >
      <span> {{ option.name }}</span>
    </button>
    <!-- <button class="v-filter_btn"><span>1К</span></button>
<button class="v-filter_btn"><span>2К</span></button>
<button class="v-filter_btn"><span>3К</span></button> -->
  </div>
</template>

<script>
export default {
  name: "v-filter",
  components: {},
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
      selected: {
        type: String,
        default: "",
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    selectOption(option) {
      this.$emit("select", option);
    },
  },
  watch: {},
};
</script>
<style scoped lang="scss">
.v-filter {
  padding: 51px 28px 6px 15.65%;
  & p {
    padding: 2px 3px 0px 15px;
  }
  &_btn {
    background: #ffffff;
    border: 1px solid #d8d8d8;
    box-sizing: border-box;
    border-radius: 5px;
    max-width: 47px;
    max-height: 40px;
    span {
      font-size: 16px;
      color: #2c323a;
    }
    &:focus {
      background: #70d24e;
      border-radius: 5px;
      & span {
        color: #ffffff;
      }
    }
  }
}
</style>
