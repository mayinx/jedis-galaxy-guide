import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Galaxy from "../views/Galaxy.vue";
import PlanetDetail from "../views/PlanetDetail.vue";
import JedisPath from "../views/JedisPath.vue";
import BucketList from "../views/BucketList.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/galaxy",
    name: "Galaxy",
    component: Galaxy,
  },
  {
    // path: "/planet/:name",
    path: "/planet/:name",
    name: "PlanetDetail",
    component: PlanetDetail,
    params: ["name", "listApiUrl"],
  },
  {
    path: "/jedis-path",
    name: "JedisPath",
    component: JedisPath,
  },
  {
    path: "/bucket-list",
    name: "JedisBucketList",
    component: BucketList,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
