import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    initialProducts: []
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
    },
    SET_INITIAL_PRODUCT: (state, products) => {
      state.initialProducts = products;
    }
  },
  actions: {
      GET_PODUCTS_FROM_API({commit}) {
        return axios('http://localhost:3000/products', {
            method: "GET"
        })  
        .then((products) => {
           commit('SET_PRODUCTS_TO_STATE', products.data);
           commit('SET_INITIAL_PRODUCT', products.data)
           return products;
        })
        .catch((error) => {
            console.log(error)
            return error;
        })
      },
      FILTER_PRODUCTS({commit}, products) {
        commit('SET_PRODUCTS_TO_STATE', products)
      }
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    INITIAL_PRODUCTS(state) {
      return state.initialProducts;
    }
  },
});

export default store;
