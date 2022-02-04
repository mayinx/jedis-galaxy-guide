import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";

import axios from "axios";
import VueAxios from "vue-axios";

// Adds oh vue icons npm package
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  FaJediOrder,
  GiGalaxy,
  GiEmptyWoodBucketHandle,
  GiInterstellarPath,
  GiPlanetCore,
} from "oh-vue-icons/icons";

addIcons(FaJediOrder, GiGalaxy, GiEmptyWoodBucketHandle, GiInterstellarPath, GiPlanetCore);

// const app = createApp(App).use(router).mount("#app");
const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios); // provide 'axios'
app.component("v-icon", OhVueIcon);
app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
import router from "./router";
