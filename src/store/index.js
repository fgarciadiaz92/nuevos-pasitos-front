/*
import Vue from "vue";
import Vuex from "vuex";
import verdaderoFalso from "@/components/formatoPreguntas/VerdaderoFalso";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {}, // para manipular los statos y trabajan en paralelo con las mutaciones
  modules: {},
});

*/
import Vue from "vue";
import Vuex from "vuex";
import verdaderoFalso from "./modules/verdaderoFalso";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    verdaderoFalso
  },
});
