<template>
  <main class="bucket-list">
    <section id="page-top-section">
      <div class="container">
        <div class="row">
          <div class="col-10 col-lg-6 p-3 text-center greeting-cnt">
            <h2>A Jedi's Bucket List</h2>
            <p className=" fs-5">
              Your planned and recommended trips - places in that "Galaxy far far away" you
              absolutely must see before you kick the bucket for good!
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="page-content-section">
      <div class="container">
        <div class="row mb-4 mt-4">
          <div class="col p-3 text-center">
            <h1>Coming soon...</h1>
          </div>
        </div>
        <div class="row">
          <div class="col"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
#page-top-section {
  height: 50vh;
  background-image: url("../assets/shutterstock_127633466.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 15%;
  overflow: hidden;
  position: relative;
}

#page-top-section .greeting-cnt {
  background-color: #18181973;
}
#page-top-section .greeting-cnt h2 {
  color: white;
}

#page-top-section .greeting-cnt p {
  color: whitesmoke;
}
</style>
