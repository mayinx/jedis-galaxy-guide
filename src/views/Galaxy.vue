<template>
  <main class="galaxy">
    <section id="page-top-section">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2>Behold! The Galaxy!</h2>
            <h3 className="text-muted">
              A dark and dangerous vastness not every Jedi dares to explore... choose wisely among
              your options below!
            </h3>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <h4>Initialize BigBang</h4>
            <p class="text-muted">
              You know, what God does every day as part of his morning routine - brush his teeth,
              bring out the trash, switch on the Universe... and stuff...
            </p>

            <button type="button" class="btn btn-primary btn-lg" @click="bigBang()">
              Big Bang!
            </button>
          </div>

          <div class="col-6">
            <h4>Search the Galaxy</h4>
            <p class="text-muted">
              But if the complexity of the universe is too much to grasp for you, my young padawan,
              search for a specific planet instead:
            </p>
            <form @submit.prevent="searchGalaxy()" class="search-form">
              <input
                id="galaxy-on-page-search"
                type="text"
                class="form-control"
                placeholder="Search the Galaxy!"
                v-model="search"
              />
            </form>
          </div>
        </div>
      </div>
    </section>

    <section id="page-top-section">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 gx-5 gy-5">
          <div class="col planets-grid-item" v-for="planet in planets" :key="planet.name">
            <div class="card">
              <!-- TODO: Error Handling  -->
              <!-- <div v-if="isLoading">Loading ...</div>
                      <div v-else="error">
                        {{ error.message }} <button @click="getUsers">try again</button>
                      </div>
                      <div v-else>{{ data }}</div> -->

              <img src="../assets/shutterstock_127633466.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{{ planet.name }}</h5>
                <p class="card-text">
                  The planet {{ planet.name }} has a {{ planet.climate }} climate and a
                  {{ planet.terrain }} terrain -
                  {{
                    planet.surface_water > 0
                      ? `${planet.surface_water} % of its surface is covered with water`
                      : "its surface is not covered with water at all"
                  }}
                </p>
                <p class="card-text">
                  <router-link :to="`/planet/` + planet.name">Visit {{ planet.name }}!</router-link>
                </p>
              </div>
            </div>
          </div>
          <!-- </div>
              </div> -->
        </div>

        <div class="row">
          <div class="col">...</div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import { inject } from "vue";
import env from "@/env.js";

export default {
  name: "Galaxy",
  setup() {
    const axios = inject("axios"); // inject axios
    const search = ref("");
    const planets = ref([]);

    const isLoading = ref(false);
    const error = ref(null);

    const bigBang = async () => {
      isLoading.value = true;
      try {
        console.log("BIGBANG!");
        let jsonResult = await axios.get(`${env.apiPlanetsUrl}`);
        planets.value = jsonResult?.data?.results;
        isLoading.value = false;
        console.log(jsonResult);
        console.log(planets.value);
      } catch (e) {
        error.value = e;
        console.log("error fetching data: ", e);
      }
    };

    // TODO: This part is going to be replaced by a global search
    const searchGalaxy = async () => {
      isLoading.value = true;
      try {
        if (search.value != "") {
          console.log("SEARCH ", search.value);

          let jsonResult = await axios.get(`${env.apiPlanetsUrl}?search=${search.value}`);
          planets.value = jsonResult?.data?.results;
          isLoading.value = false;
          search.value = "";
          console.log(jsonResult);
          console.log(planets.value);
        }
      } catch (e) {
        error.value = e;
        console.log("error fetching data: ", e);
      }
    };

    return {
      search,
      planets,
      bigBang,
      searchGalaxy,
      isLoading,
      error,
    };
  },
};
</script>

<style scoped></style>
