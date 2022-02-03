import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";

// Adds oh vue icons npm package
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaJediOrder } from "oh-vue-icons/icons";
addIcons(FaJediOrder);

const app = createApp(App).use(router).mount("#app");

// register icons pack as component
app.component("v-icon", OhVueIcon);

import "bootstrap/dist/js/bootstrap.js";
import router from "./router";
