<template>
  <main class="home">
    <!-- <section id="page-top-section">
      <div class="container">
        <div class="row">
          <div class="col-9 col-lg-6 p-3 text-center greeting-cnt">
            <h2>The Jedi's Guide to the Galaxy!</h2>
            <p className=" fs-5">
              Enabling aspiring Jedis to safely navigate the vastness of the Galaxy -
              <i>"to boldly go, where no man has gone before..."</i> - oops - that's the wrong
              league, but we're all buddies here, right, Luke ;-)...
            </p>
          </div>
        </div>
      </div>
    </section> -->

    <div id="fullPageCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#fullPageCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#fullPageCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#fullPageCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/shutterstock_127633466.jpg" class="d-block" alt="..." />
          <div class="container">
            <div class="row">
              <div class="col-9 col-lg-6 p-3 text-center greeting-cnt">
                <h2>The Jedi's Guide to the Galaxy!</h2>
                <p className=" fs-5">
                  Enabling aspiring Jedis to safely navigate the vastness of the Galaxy -
                  <i>"to boldly go, where no man has gone before..."</i> - oops - that's the wrong
                  league, <strong>but we're all buddies here, right, Luke ;-)...</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/shutterstock_1776375335.jpg" class="d-block" alt="..." />
          <div class="container">
            <div class="row">
              <div class="col-9 col-lg-6 p-3 text-center greeting-cnt">
                <h2>The Jedi's Guide to the Galaxy!</h2>
                <p className=" fs-5">
                  Enabling aspiring Jedis to safely navigate the vastness of the Galaxy -
                  <i>"to boldly go, where no man has gone before..."</i> - oops - that's the wrong
                  league, <strong>but we're all buddies here, right, Luke ;-)...</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/shutterstock_101584243.jpg" class="d-block" alt="..." />

          <div class="container">
            <div class="row">
              <div class="col-9 col-lg-6 p-3 text-center greeting-cnt">
                <h6>Luke! Nooooo!</h6>
                <h6>You need to chill, bro!</h6>
                <h5>I beam you into smithereens!</h5>
                <h4>Don't make me get my phaser!</h4>
                <h3>Luke! Put that lightsaber down!</h3>
                <!-- <h3>It's not my fault they asked a Trekkie to design a Star Wars Fan Page!</h3> -->
                <h2>We ARE buddies, Luke, right?</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#fullPageCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#fullPageCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </main>

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
</template>

<style scoped>
main {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

#fullPageCarousel .carousel-item {
  width: 100%;
  height: calc(100vh - 85px);
  overflow: hidden;
}
#fullPageCarousel .carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* or contain etc.*/
}

#fullPageCarousel .greeting-cnt {
  background-color: #18181973;

  color: whitesmoke;

  position: absolute;
  top: 10%;
  z-index: 1000000;
  left: 10%;
}
#fullPageCarousel .greeting-cnt h2 {
  color: white;
}

#fullPageCarousel .greeting-cnt p {
  color: whitesmoke;
}
</style>
