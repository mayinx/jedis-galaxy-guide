<template>
  <header>
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid gap-lg-2 gap-xl-5">
        <div data-bs-toggle="collapse" data-bs-target="#navbarCollapse.show">
          <router-link
            to="/"
            class="active navbar-brand d-flex justify-content-center align-items-center fs-3"
          >
            <v-icon
              name="fa-jedi-order"
              class="align-middle"
              scale="3"
              animation="pulse"
              speed="slow"
            />
            <span class="ms-1 align-middle">JG2G</span>
          </router-link>
        </div>
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-between gap-lg-2" id="navbarCollapse">
          <ul class="gap-2 gap-lg-2 gap-xl-3 navbar-nav p-1 p-lg-0">
            <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarCollapse.show">
              <router-link to="/galaxy" class="nav-link d-flex">
                <v-icon name="gi-galaxy" class="align-middle" scale="1.5" />
                <span class="flex-fill align-middle text-start ms-3 ms-lg-1">The Galaxy</span>
              </router-link>
            </li>
            <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarCollapse.show">
              <router-link to="/jedis-path" class="nav-item nav-link d-flex">
                <v-icon name="gi-interstellar-path" size="1" class="align-middle" scale="1.5" />
                <span class="flex-fill align-middle text-start ms-3 ms-lg-1">Jedi's Path</span>
              </router-link>
            </li>
            <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarCollapse.show">
              <router-link to="/bucket-list" class="nav-item nav-link d-flex">
                <v-icon name="gi-empty-wood-bucket-handle" class="align-middle" scale="1.5" />
                <span class="flex-fill align-middle text-start ms-3 ms-lg-1"
                  >Jedi's Bucket List</span
                >
              </router-link>
            </li>
          </ul>
          <form class="d-flex mb-3 mb-lg-0">
            <div class="input-group">
              <!-- <input
                id="galaxy-search"
                type="text"
                class="form-control"
                placeholder="Search the Galaxy!"
                v-model="search"
                @input="searchGalaxy()"
              /> -->
              <input
                id="galaxy-search"
                type="text"
                class="form-control"
                placeholder="Search the Galaxy!"
                disabled
              />

              <button type="button" disabled class="btn btn-secondary">
                <i class="bi-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref } from "vue";
import { OhVueIcon } from "oh-vue-icons";
import { inject } from "vue";
import env from "@/env.js";

// TODO / FYI: This part is not finished yet adn scheduled for one of the next iterations - it's supposed
// to work as a global search that shall substitute the current galaxy-on-page-search - i.e. on entering of
// a search term a switch to the galaxy-view/component shall be performed to update its contents no matter
// what's the current view etc. ...
export default {
  name: "Header",
  setup() {
    const axios = inject("axios"); // inject axios
    const search = ref("");
    const planets = ref([]);
    const isLoading = ref(false);
    const error = ref(null);

    const searchGalaxy = async () => {
      isLoading.value = true;
      try {
        if (search.value != "") {
          let jsonResult = await axios.get(`${env.apiPlanetsUrl}?search=${search.value}`);
          planets.value = jsonResult?.data?.results;
          isLoading.value = false;
          search.value = "";
        }
      } catch (e) {
        error.value = e;
        console.log("error fetching data: ", e);
      }
    };

    return {
      search,
      planets,
      searchGalaxy,
      isLoading,
      error,
    };
  },

  components: {
    "v-icon": OhVueIcon,
  },
};
</script>

<style>
header {
  min-height: 85px;
}
#nav {
  padding: 0.5rem;
}

input#galaxy-search {
  height: 3rem;
}
#nav .navbar-nav {
  align-items: stretch;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}
#nav .navbar-nav a {
  font-weight: bold;
  color: #2c3e50;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  transition: all 0.35s;
  background-color: #edf0f2;
}

#nav .navbar-nav a:hover,
#nav .navbar-nav a.router-link-exact-active {
  color: #f5f5f5;
  background-color: #2c3e50;
  border: 1px solid #52667c;
}
@media (min-width: 992px) {
  input#galaxy-search {
    height: auto;
  }
  #nav .navbar-nav {
    margin: 0;
    font-size: 1rem;
  }
  #nav .navbar-nav a {
    justify-content: center;
    padding: 0.5rem 1rem;
  }
}
@media (min-width: 1100px) {
  #nav .navbar-nav {
    margin: 0;
    font-size: 1.25rem;
  }
}
</style>
