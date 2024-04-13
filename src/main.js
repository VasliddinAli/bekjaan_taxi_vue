import { createApp } from 'vue'

import App from './App.vue'
const app = createApp(App);


import router from "./router";
import VueApexCharts from "vue3-apexcharts";
import vClickOutside from "click-outside-vue3";
import { registerScrollSpy } from 'vue3-scroll-spy';

import { vMaska } from "maska"
import i18n from "./i18n"
import { initFirebaseBackend } from './authUtils'
import { configureFakeBackend } from './helpers/fake-backend';

import BootstrapVueNext from 'bootstrap-vue-next'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import "@/assets/scss/app.scss";
import "@vueform/multiselect/themes/default.css"

// PINIA
import pinia from '@/state/pinia'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_VUE_APP_DATABASEURL,
  projectId: process.env.VUE_APP_PROJECTId,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPId,
  measurementId: process.env.VUE_APP_MEASUREMENTID
};

if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
  initFirebaseBackend(firebaseConfig);
} else {
  configureFakeBackend();
}

import 'sweetalert2/dist/sweetalert2.min.css';
import '@vueform/slider/themes/default.css';

// Vue Tooltip
import FloatingVue from 'floating-vue'
app.use(FloatingVue)
import 'floating-vue/dist/style.css'

// vue-good-table
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'
app.use(VueGoodTablePlugin);




app.use(pinia)
app.use(router)
app.use(require('vue-chartist'))
app.use(BootstrapVueNext)
app.use(VueApexCharts)
app.use(vClickOutside)
app.use(i18n)
app.use(registerScrollSpy)
app.directive("maska", vMaska)
app.mount('#app')
