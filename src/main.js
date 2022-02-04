import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";

// Adds oh vue icons npm package
import { OhVueIcon, addIcons } from "oh-vue-icons";
// const OhVueIconComponent = {
//   "v-icon": OhVueIcon,
// };

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
app.component("v-icon", OhVueIcon);
app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
import router from "./router";
