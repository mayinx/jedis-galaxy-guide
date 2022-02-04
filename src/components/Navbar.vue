<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
    <router-link to="/galaxy">The Galaxy</router-link> |
    <router-link to="/planet">Planet Details</router-link>
  </div> -->
  <header>
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid gap-lg-2 gap-xl-5">
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

        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between gap-lg-2" id="navbarCollapse">
          <div class="fs-5 gap-2 gap-lg-2 gap-xl-3 navbar-nav p-1 p-lg-0">
            <!-- <a href="#" class="nav-item nav-link active">Home</a> -->
            <!-- <router-link to="/" class="nav-item nav-link active">Home</router-link> -->
            <router-link to="/galaxy" class="nav-item nav-link d-flex">
              <v-icon name="gi-galaxy" class="align-middle" scale="1.5" />
              <span class="ms-3 ms-lg-1 align-middle">The Galaxy</span>
            </router-link>
            <router-link to="/jedis-path" class="nav-item nav-link d-flex">
              <v-icon name="gi-interstellar-path" size="1" class="align-middle" scale="1.5" />
              <span class="ms-3 ms-lg-1 align-middle">Jedi's Path</span>
            </router-link>
            <router-link to="/bucket-list" class="nav-item nav-link d-flex">
              <v-icon name="gi-empty-wood-bucket-handle" class="align-middle" scale="1.5" />
              <span class="ms-3 ms-lg-1 align-middle">Jedi's Bucket List</span>
            </router-link>
            <!-- <router-link to="/about" class="nav-item nav-link">
            <v-icon name="gi-galaxy" /> About
          </router-link> -->
          </div>
          <form class="d-flex">
            <div class="input-group">
              <input
                id="galaxy-search"
                type="text"
                class="form-control"
                placeholder="Search the Galaxy!"
              />
              <button type="button" class="btn btn-secondary"><i class="bi-search"></i></button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { OhVueIcon } from "oh-vue-icons";
export default {
  name: "Navbar",
  components: {
    "v-icon": OhVueIcon,
  },
};
</script>

<style>
#nav {
  padding: 0.5rem;
}

#nav a {
}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */

input#galaxy-search {
  height: 3rem;
}

#nav .navbar-nav {
  align-items: stretch;
  margin-bottom: 0.5rem;
}
#nav .navbar-nav a {
  font-weight: bold;
  color: #2c3e50;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 1.5rem;
  /* padding: 0.75rem 1.25rem; */

  /* color: rgba(255, 255, 255, 0.55); */
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
  }
  #nav .navbar-nav a {
    justify-content: center;
    padding: 0.5rem 1rem;
  }
}
</style>
