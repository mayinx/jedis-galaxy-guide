<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
    <router-link to="/galaxy">The Galaxy</router-link> |
    <router-link to="/planet">Planet Details</router-link>
  </div> -->

  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand justify-content-center align-items-center fs-3">
        <v-icon name="fa-jedi-order" scale="3" animation="pulse" />
        JG2G
      </router-link>

      <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
        <div class="navbar-nav">
          <!-- <a href="#" class="nav-item nav-link active">Home</a> -->
          <router-link to="/" class="nav-item nav-link active">Home</router-link>
          <router-link to="/galaxy" class="nav-item nav-link">Galaxy</router-link>
          <router-link to="/my-galaxy" class="nav-item nav-link">My Galaxy</router-link>
          <router-link to="/bucket-list" class="nav-item nav-link">Bucket List</router-link>
          <router-link to="/about" class="nav-item nav-link">About</router-link>
        </div>
        <form class="d-flex">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search the Galaxy!" />
            <button type="button" class="btn btn-secondary"><i class="bi-search"></i></button>
          </div>
        </form>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script>
import { OhVueIcon } from "oh-vue-icons";

export default {
  components: {
    "v-icon": OhVueIcon,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
