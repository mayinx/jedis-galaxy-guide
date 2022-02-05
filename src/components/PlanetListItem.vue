<template>
  <div class="col planets-grid-item">
    <div class="card">
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
</template>

<script>
export default { props: ["planet"] };
</script>
