<template>
  <main class="planet-detail">
    <section id="page-top-section" :style="{ 'background-image': randomImage() }">
      <div class="container">
        <div class="row">
          <div class="col-10 col-lg-6 p-3 text-center greeting-cnt">
            <h2>Welcome to {{ planet.name }}!</h2>
            <p className=" fs-5">
              Enjoy your stay, young Padawan - but remember:
              <strong
                >No fraternization with the natives! Never ever forget the "Prime Directive"</strong
              >
              (argh - wrong league again...)
            </p>
            <p>
              <button @click="goBack()" class="btn btn-primary btn-sm">&lt; Back</button>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="page-content-section">
      <div class="container">
        <div class="row mb-4 mt-4">
          <div class="col p-3 text-center">
            <h1>Notable details about {{ planet.name }}</h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <ul class="planet-details-list list-group fs-3 shadow-lg p-3 px-md-4 px-lg-5">
              <li
                v-for="(propertyVal, propertyName, index) in planet"
                :key="index"
                class="list-group-item"
              >
                <span class="badge bg-secondary rounded-pill">
                  {{ propertyName.replace(/_/g, " ").toUpperCase() }}
                </span>
                <span v-html="renderPropertyVal(propertyName, propertyVal)" class="value"> </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";
import env from "@/env.js";
import { inject } from "vue";

export default {
  name: "PlanetDetails",

  data() {
    return {
      images: [
        require("../assets/shutterstock_127633466-v2.jpg"),
        require("../assets/shutterstock_91414394.jpg"),
        require("../assets/shutterstock_490419343.jpg"),
        require("../assets/shutterstock_68730523.jpg"),
        require("../assets/shutterstock_101584243.jpg"),
        // "https://picsum.photos/3000/1000",
      ],
    };
  },

  methods: {
    randomImage() {
      return `url("${this.images[Math.floor(Math.random() * this.images.length)]}")`;
    },

    renderPropertyVal(propertyName, propertyVal) {
      let renderedVal = "";
      switch (propertyName) {
        case "created":
        case "edited":
          renderedVal = new Date(propertyVal).toLocaleDateString("en-US");
          break;
        case "url":
          renderedVal = `<a href="${propertyVal}">${this.planet.name} in SWAPI</a>`;
          break;
        default:
          renderedVal = Array.isArray(propertyVal)
            ? `${propertyVal.length + " " + propertyName}`
            : propertyVal;
      }
      return renderedVal;
    },
  },

  setup() {
    const axios = inject("axios"); // inject axios
    const planet = ref({});
    const route = useRoute();
    const isLoading = ref(false);
    const error = ref(null);
    const galaxyApiUrl = ref(null);

    const spaceships = ref([
      "Death Star",
      "CR90 Corvette",
      "Star Destroyer",
      "Sentinel-Class Landing Craft",
      "Millennium Falcon",
      "X-Wing",
      "Y-Wing",
      "TIE Advanced X1",
      "Executor",
      "Rebel Transport",
    ]);

    const randomSpaceship = () => {
      return spaceships.value[Math.floor(Math.random() * spaceships.value.length)];
    };

    // TODO: Extract local storage stuff into data-module or customHook or similar
    const cuVisitedPlanets = () => {
      return JSON.parse(localStorage.getItem("visitedPlanets")) || [];
    };

    // update db
    const setCuVisitedPlanets = ({ name }) => {
      let data = cuVisitedPlanets();
      const newData = {
        name,
        visitedAt: Date.now(),
        transportation: randomSpaceship(),
      };
      // console.log("data: ", data);
      // newData["visitedAt"] = Date.now();
      // newData["isFavorited"] = false;
      // newData["isBucket"] = false;
      data.push(newData);

      try {
        localStorage.setItem("visitedPlanets", JSON.stringify(data));
      } catch (error) {
        alert("There was an error while saving. Did you exceed your local storage quota?");
      }
    };

    const goBack = () => {
      router.push({ name: "Galaxy", params: { galaxyApiUrl: galaxyApiUrl.value } });
    };

    onBeforeMount(async () => {
      isLoading.value = true;
      try {
        const planetName = route.params.name;
        // Current api-url of the previous list view
        // TODO: There must be somethimng more elegant out there
        galaxyApiUrl.value = route.params.listApiUrl;
        // FYI: Funny - at a quick glance SWAPI-objects don't seem to carry
        // an explicit 'id'-attribute - just an url that includes that id - so
        // parsing that id out of the url would be an option - or pass the url
        // as router link para along - or issue a search by name - for now we
        // go with the later (this way we get "pretty urls" as well):
        let jsonResult = await axios.get(`${env.apiPlanetsUrl}?search=${planetName}`);
        planet.value = jsonResult?.data?.results[0];
        isLoading.value = false;
        if (planet.value) setCuVisitedPlanets(planet.value);
        else router.push({ name: "PageNotFound" });
      } catch (e) {
        error.value = e;
        console.log("error fetching data: ", e);
      }
    });

    return {
      planet,
      isLoading,
      error,
      goBack,
    };
  },
};
</script>

<style scoped>
#page-top-section {
  height: 50vh;
  /* background-image: url("../assets/shutterstock_127633466.jpg");
  background-image: url("../assets/shutterstock_91414394.jpg"); */
  background-image: url("../assets/shutterstock_490419343.jpg");
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
.planet-details-list .badge {
  padding: 0.5rem 1rem;
}
.planet-details-list li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1.5rem 0.5rem;
  color: #58788a;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.planet-details-list li:first-child {
  justify-content: center;
  font-size: 2rem;
  padding: 1.5rem;
  font-weight: bold;
  gap: 1rem;
}
.planet-details-list li:first-child .value {
  font-size: 2.5rem;
}
.planet-details-list li:last-child {
  border-bottom: none;
  padding-bottom: 1.5rem;
}

@media (min-width: 992px) {
  .planet-details-list li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .planet-details-list li:first-child .badge {
    margin-right: 2rem;
  }
}
</style>
