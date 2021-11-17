

<template>
  <div class="v-filter">
    <p class="font-regular">КОМНАТЫ</p>
    <div class="v-filter_wrapper">
    <button

      class="v-filter_btn options"
      v-for="option in options"
      :key="option.value"
      @click="selectRoom(option)"
    
    >
      <span> {{ option.name }}</span>
    </button>
    </div>
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
    selectRoom(option) {
      console.log(option)
      this.$emit('setRoom', option.name)
    },
  },
  watch: {},
};
</script>
<style scoped lang="scss">
.v-filter {
  &_wrapper {
    display: flex;
  }
  & p {
    padding: 2px 3px 0px 15px;
    margin: 0;
  }
  &_btn {
    background: #ffffff;
    border: 1px solid #d8d8d8;
    box-sizing: border-box;
    border-radius: 5px;
    max-width: 47px;
    width: 47px;
    max-height: 40px;
    span {
      font-size: 16px;
      color: #2c323a;
    }
    &:target {
      background: #70d24e;
      border-radius: 5px;
      & span {
        color: #ffffff;
      }
    }
  }
}
</style>
