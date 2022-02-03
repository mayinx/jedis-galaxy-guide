import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Galaxy from "../views/Galaxy.vue";
import Planet from "../views/Planet.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/galaxy",
    name: "The Galaxy",
    component: Galaxy,
  },
  {
    path: "/planet/:id",
    name: "Planet",
    component: Planet,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
