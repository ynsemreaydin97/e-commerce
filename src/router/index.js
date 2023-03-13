import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CpuView from "@/views/CpuView.vue";
import LoginView from "@/views/LoginView.vue";
import DiskView from "@/views/DiskView.vue";
import MemoryView from "@/views/MemoryView.vue";
import ComputerView from "@/views/ComputerView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomeView,
  },
  {
    path: '/cpus',
    name: 'CpuList',
    component: CpuView,
  },
  {
    path: '/disks',
    name: 'DiskList',
    component: DiskView,
  },
  {
    path: '/memories',
    name: 'MemoryList',
    component: MemoryView,
  },
  {
    path: '/computers',
    name: 'ComputerList',
    component: ComputerView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
