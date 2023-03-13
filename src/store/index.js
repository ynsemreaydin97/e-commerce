import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import cpu from "@/store/cpu/cpu";
import auth from "@/store/auth/auth";
import disk from "@/store/disk/disk";
import memory from "@/store/memory/memory";
import computer from "@/store/computer/computer";
export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cpu,
    auth,
    disk,
    memory,
    computer
  }
})
