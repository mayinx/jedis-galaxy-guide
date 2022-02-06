<template>
  <main class="galaxy">
    <section id="page-top-section">
      <div class="container">
        <div class="row">
          <div class="col-10 col-lg-6 p-3 text-center greeting-cnt">
            <h2>Behold! The Galaxy!</h2>
            <p className=" fs-5">
              A wonderous playground for a young Padawan - but at the same time a dark and dangerous
              vastness not every Jedi dares to explore...
              <br />
              <strong>So choose wisely among your options below! </strong>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="page-content-section">
      <div class="container">
        <div ref="listOptionsCnt" class="row g-5 pt-lg-3">
          <div class="col-6 col-lg-4 d-flex flex-column jus justify-content-between">
            <h4>Initialize BigBang</h4>
            <p class="text-muted d-none d-sm-block px-lg-3">
              You know, what God does every day as part of his morning routine - brush his teeth,
              bring out the trash, switch on the Universe, create another Galaxy... that stuff...!
            </p>

            <button type="button" class="btn btn-primary btn-lg mx-lg-3" @click="bigBang()">
              Big Bang!
            </button>
          </div>

          <div class="col-6 col-lg-4 d-flex flex-column jus justify-content-between order-lg-last">
            <h4>Destroy Galaxy</h4>
            <p class="text-muted d-none d-sm-block px-lg-3">
              Powerful you have become, the dark side I sense in you. But beware: Once you start
              down the dark path, forever will it dominate your destiny. Consume you, it will.
            </p>

            <button type="button" class="btn btn-danger btn-lg mx-lg-3" @click="deathStar()">
              Death Star!
            </button>
          </div>

          <div class="col-12 col-lg-4 d-flex flex-column jus justify-content-between">
            <h4>Search the Galaxy</h4>
            <p class="text-muted d-none d-sm-block px-lg-3">
              If the complexity of the universe is too much to grasp for you, my young Padawan,
              there are other ways than destruction. Search for a specific planet instead:
            </p>
            <input
              id="galaxy-on-page-search"
              type="text"
              class="form-control form-control-lg"
              placeholder="Search the Galaxy!"
              v-model="search"
              @input.prevent="searchGalaxy()"
              @click="scrollListOptionsIntoView()"
            />
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-12 p-5 pb-0">
            <h2>- Results -</h2>

            <div v-if="isLoading">
              <h5>...Loading Planets...</h5>
            </div>
            <div v-else-if="hasError">
              <h5>Error {{ error.message }}</h5>
              <button type="button" class="btn btn-primary btn-sm" @click="bigBang()">
                Try again!
              </button>
            </div>
            <div v-else>
              <h5>
                {{ planets.length }} / {{ totalPlanets }} Planets loaded
                {{ search && `containing your query ${search}` }}
                {{ canRenderNextPage() && `(keep scrolling down for more)` }}
              </h5>
            </div>
          </div>
        </div>
        <div
          ref="planetsListCnt"
          style="min-height: 15rem"
          class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-5 gy-5"
        >
          <PlanetListItem v-for="(planet, idx) in planets" :key="idx" :planet="planet" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import { inject } from "vue";
import env from "@/env.js";
import PlanetListItem from "../components/PlanetListItem.vue";

export default {
  name: "Galaxy",

  setup() {
    const axios = inject("axios"); // inject axios
    const search = ref("");
    const planets = ref([]);
    const totalPlanets = ref(0);
    const nextPageUrl = ref(null);
    const isLoading = ref(false);
    const hasError = ref(false);
    const error = ref(null);
    const planetsListCnt = ref(null);
    const listOptionsCnt = ref(null);

    const bigBang = () => {
      clearSearch();
      scrollListOptionsIntoView();
      loadPlanets();
    };

    const deathStar = () => {
      clearSearch();
      scrollListOptionsIntoView();
      clearPlanets();
    };

    const searchGalaxy = () => {
      loadPlanets({ composeQuery: true });
    };

    const clearPlanets = () => {
      isLoading.value = false;
      hasError.value = false;
      error.value = null;

      planets.value = [];
      totalPlanets.value = 0;
      nextPageUrl.value = null;
    };

    const clearSearch = () => (search.value = "");

    const loadPlanets = async ({ composeQuery = false, loadMore = false } = {}) => {
      isLoading.value = true;
      hasError.value = false;

      try {
        // TODO: Brrr - refactor this
        const apiBaseUrl = loadMore ? nextPageUrl.value : env.apiPlanetsUrl;
        const apiUrlParams =
          composeQuery && search.value && search.value != "" ? `?search=${search.value}` : "";
        const apiUrl = `${apiBaseUrl}${apiUrlParams}`;

        console.log("------ LOAD PLANETS ------");
        console.log("-- apiUrl: ", apiUrl);
        console.log("-- composeQuery: ", composeQuery);
        console.log("-- loadMore: ", loadMore);
        console.log("--------------------------");

        // fetch planets from swapi
        let jsonResult = await axios.get(`${apiUrl}`);

        if (loadMore) {
          const newPlanets = jsonResult?.data?.results;
          planets.value = [...planets.value, ...(newPlanets || [])];
        } else {
          planets.value = jsonResult?.data?.results;
        }

        totalPlanets.value = jsonResult?.data?.count;
        nextPageUrl.value = jsonResult?.data?.next || null;

        // composeQuery.value = false;
        if (!(search.value && search.value != "")) search.value = ""; // clear previous searches
        isLoading.value = false;
      } catch (e) {
        error.value = e;
        hasError.value = true;
        console.log("error fetching data: ", e);
      }
    };

    const canRenderNextPage = () => {
      return !isLoading.value && nextPageUrl.value != null;
    };

    const scrollListOptionsIntoView = () => {
      let scrollEl = listOptionsCnt.value;
      if (scrollEl) {
        scrollEl.scrollIntoView({ behavior: "smooth" });
      }
    };

    const handleInfiniteScroll = async () => {
      if (canRenderNextPage()) {
        let scrollEl = planetsListCnt.value;
        if (scrollEl && scrollEl.getBoundingClientRect().bottom < window.innerHeight) {
          console.log("INFINITE SCROLL TRIGGERED!");
          await loadPlanets({ loadMore: true });
        }
      }
    };

    return {
      search,
      planets,
      totalPlanets,
      nextPageUrl,
      canRenderNextPage,
      bigBang,
      deathStar,
      searchGalaxy,
      error,
      isLoading,
      hasError,
      planetsListCnt,
      listOptionsCnt,
      scrollListOptionsIntoView,
      handleInfiniteScroll,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleInfiniteScroll);
  },
  components: { PlanetListItem },
};
</script>

<style scoped>
#page-top-section {
  height: 50vh;
  /* background-image: url("../assets/shutterstock_127633466.jpg"); */
  background-image: url("../assets/shutterstock_1041167386.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
  position: relative;
}

#page-top-section .greeting-cnt {
  background-color: #18181973;
}
#page-top-section .greeting-cnt h2 {
  color: white;
}

#page-top-section .greeting-cnt p {
  color: whitesmoke;
}
</style>
