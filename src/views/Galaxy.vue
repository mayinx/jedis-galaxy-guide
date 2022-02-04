<template>
  <main class="galaxy">
    <section id="page-top-section">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2>Behold! The Galaxy!</h2>
            <h3 className="text-muted">
              A dark and dangerous vastness not every Jedi dares to explore...
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col">Stuff</div>
        </div>
      </div>
    </section>

    <section id="page-top-section">
      <div class="container">
        <div class="row">
          <div class="planet-list col text-center">
            <!-- planet list -->
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <div class="card mb-3">
                  <img src="../assets/shutterstock_127633466.jpg" class="card-img-top" alt="..." />
                  <!-- <img
                    src="https://images.unsplash.com/photo-1632395627727-3b97d0724814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                    class="card-img-top"
                    alt="..."
                  /> -->
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                      <router-link to="planet/asdasd215454asd">View Planet Specs</router-link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">Stuff</div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// import { OhVueIcon } from "oh-vue-icons";
export default {
  name: "Galaxy",
  components: {
    // "v-icon": OhVueIcon,
  },
};
</script>

<style scoped>
.card {
  width: 500px;
}
/* .card-img {
} */
</style>
