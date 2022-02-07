<template>
  <main class="home">
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
          <img src="../assets/shutterstock_127633466-v1.jpg" class="d-block" alt="..." />
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
                <h2>Created by a Trekkie!</h2>
                <p className=" fs-5">
                  C'mon, Skywalker - I mean, it's not MY fault they asked a Trekkie to design a Star
                  Wars Fan Page!
                  <strong
                    >The Dark Side or the Borg, Lightsaber or Phaser, Darth Vader or Q on Steroids,
                    Yoda or Guinan from Ten Forward,
                  </strong>
                  - does it really matter? As long as we stay buddies, everything's gonna be all
                  right...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img src="../assets/shutterstock_101584243.jpg" class="d-block" alt="..." />

          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-6 p-3 text-center greeting-cnt star-wars-intro-cnt">
                <h6>Luke! Nooooo!</h6>
                <h6>You need to chill, bro!</h6>
                <h5>Or beam you into oblivion!</h5>
                <h4>I waporize you into smithereens!</h4>
                <h3>Don't make me get my phaser!</h3>
                <h2>Luke! Put that Lightsaber down!</h2>
                <h1>We ARE buddies, Luke, right?</h1>
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
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000000;
  background-color: #18181973;
  color: whitesmoke;
}
#fullPageCarousel .greeting-cnt h2 {
  color: white;
}

#fullPageCarousel .greeting-cnt p {
  color: whitesmoke;
}

@media all and (min-width: 992px) {
  #fullPageCarousel .greeting-cnt {
    top: 10%;
    left: 10%;
    transform: none;
  }
}
</style>
