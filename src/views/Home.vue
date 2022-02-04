<template>
  <main class="home">
    <section id="page-top-section">
      <div class="container">
        <div class="row">
          <div class="col-9 col-lg-6 p-3 text-center greeting-cnt">
            <h2>The Jedi's Guide to the Galaxy!</h2>
            <p className=" fs-5">
              Enabling aspiring Jedis to safely navigate the vastness of the Galaxy -
              <i>"to boldly go, where no one has gone before..."</i> - oops - that's the wrong
              league, but we're all buddies here, right, Luke ;-)...
            </p>
          </div>
        </div>

        <!-- <div class="row pt-5 mt-5">
          <div class="col-8 offset-4 col-lg-6 offset-lg-6 p-3 text-center greeting-cnt">
            <h6>Luke! Nooooo!</h6>
            <h6>You need to chill, bro!</h6>
            <h5>I beam you into smithereens!</h5>
            <h4>Don't make me get my phaser!</h4>
            <h3>Luke! Put that lightsaber down!</h3>
            <h2>We ARE buddies, Luke, right?</h2>
          </div>
        </div> -->
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  background-image: url("../assets/shutterstock_127633466.jpg");

  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
  position: relative;
}

#page-top-section .greeting-cnt {
  background-color: #18181973;

  color: whitesmoke;
}
#page-top-section .greeting-cnt h2 {
  color: white;
}

#page-top-section .greeting-cnt p {
  color: whitesmoke;
}
</style>
