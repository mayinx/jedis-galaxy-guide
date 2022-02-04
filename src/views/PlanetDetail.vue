<template>
  <main class="planet-detail">
    <section id="page-top-section">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2>Planet details</h2>
            <h3 className="text-muted">
              All there's to know about Planet: {{ this.$route.params.id }} ...
            </h3>
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
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import env from "@/env.js";

export default {
  setup() {
    const planet = ref({});
    const route = useRoute();

    onBeforeMount(() => {});

    return {
      planet,
    };
  },
};
</script>
