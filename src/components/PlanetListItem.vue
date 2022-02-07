<template>
  <div class="col d-flex">
    <div class="card shadow-lg planet">
      <img src="../assets/shutterstock_127633466-v3.jpg" class="card-img-top" alt="..." />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ planet.name }}</h5>
        <p class="card-text flex-fill">
          The planet {{ planet.name }} has a {{ planet.climate }} climate and a
          {{ planet.terrain }} terrain -
          {{
            planet.surface_water > 0
              ? `${planet.surface_water} % of its surface is covered with water`
              : "its surface is not covered with water at all"
          }}
        </p>
        <p class="card-text">
          <router-link :to="`/planet/` + planet.name">
            <button type="button" class="btn btn-outline-secondary" @click="bigBang()">
              Visit {{ planet.name }}!
            </button>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default { props: ["planet"] };
</script>

<style scoped>
.planet {
  border-radius: 15px;
}
.planet img {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
</style>
