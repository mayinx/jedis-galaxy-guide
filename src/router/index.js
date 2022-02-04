import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Galaxy from "../views/Galaxy.vue";
import PlanetDetail from "../views/PlanetDetail.vue";
import JedisPath from "../views/JedisPath.vue";
import BucketList from "../views/BucketList.vue";

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
    path: "/planet/:name",
    name: "Planet Details",
    component: PlanetDetail,
  },
  {
    path: "/jedis-path",
    name: "Jedi's Path",
    component: JedisPath,
  },
  {
    path: "/bucket-list",
    name: "Jedi Bucket List",
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
