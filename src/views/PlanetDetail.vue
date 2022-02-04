<template>
  <main class="planet-detail">
    <section id="page-top-section">
      <div class="container">
        <div class="row">
          <div class="col-5 p-3 text-center greeting-cnt">
            <h2>Welcome to {{ planet.name }}!</h2>
            <p className=" fs-5">
              Enjoy your stay, young Padawan - but remember:
              <strong
                >No fraternization with the natives! Never ever forget the "Prime Directive"</strong
              >
              (argh - wrong league again...)
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
            <ul class="list-group fs-3">
              <li
                v-for="(propertyValue, propertyName, index) in planet"
                :key="index"
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                <span class="badge bg-secondary rounded-pill">
                  {{ propertyName.toString().toUpperCase() }}
                </span>
                {{
                  Array.isArray(propertyValue)
                    ? `${propertyValue.length + " " + propertyName}`
                    : propertyValue
                }}
              </li>
              <!-- <li class="list-group-item d-flex justify-content-between align-items-center">
                A list item
                <span class="badge bg-primary rounded-pill">14</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                A second list item
                <span class="badge bg-primary rounded-pill">2</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                A third list item
                <span class="badge bg-primary rounded-pill">1</span>
              </li> -->
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
import env from "@/env.js";
import { inject } from "vue";

export default {
  setup() {
    const axios = inject("axios"); // inject axios
    const planet = ref({});
    const route = useRoute();
    const isLoading = ref(false);
    const error = ref(null);

    onBeforeMount(async () => {
      isLoading.value = true;
      try {
        const planetName = route.params.name;
        // FYI: Funny - at a quick glance SWAPI-objects don't seem to carry
        // an xplicit 'id'-attribute - just an url that includes that id - so
        // parsing that id out of the url would be an option - or pass the url
        // as router link para along - or issue a search by name - for now we
        // go with the later:
        let jsonResult = await axios.get(`${env.apiPlanetsUrl}?search=${planetName}`);
        planet.value = jsonResult?.data?.results[0];
        isLoading.value = false;
      } catch (e) {
        error.value = e;
        console.log("error fetching data: ", e);
      }
    });

    return {
      planet,
      isLoading,
      error,
    };
  },
};
</script>

<style scoped>
#page-top-section {
  height: 50vh;
  background-image: url("../assets/shutterstock_127633466.jpg");

  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
  position: relative;
}

#page-top-section .greeting-cnt {
  background-color: #18181973;
  width: 50%;
}
#page-top-section .greeting-cnt h2 {
  color: white;
}

#page-top-section .greeting-cnt p {
  color: whitesmoke;
}
</style>
