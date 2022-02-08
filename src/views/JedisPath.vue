<template>
  <main class="jedis-path">
    <section id="page-top-section">
      <div class="container">
        <div class="row">
          <div class="col-10 col-lg-6 p-3 text-center greeting-cnt">
            <h2>A Jedi's Path Through The Galaxy!</h2>
            <p className=" fs-5">
              Your previous trips through the Galaxy: Planets you visited, peeps you've met, wisdom
              you gathered along the way...
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="page-content-section">
      <div class="container">
        <div class="row mb-4 mt-4">
          <div class="col p-3 text-center">
            <h1>Your Jedi-Quest Through The Galaxy...</h1>
            <h3 class="text-muted">Planets you already visited</h3>
            <h3 class="text-muted">Wisdom you gathered along the way</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <ul class="timeline">
              <li
                v-for="(planet, idx) in visitedPlanets"
                :key="idx"
                :set="(quote = randomQuote())"
                :planet="planet"
                :class="idx % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'"
              >
                <div class="timeline-badge">
                  <!-- <i class="glyphicon glyphicon-check"></i> -->
                  <img :src="randomPlanetIcon()" />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h3 class="mt-0">{{ planet.name }}</h3>
                    <p>
                      <small class="text-muted"
                        ><i class="glyphicon glyphicon-time"></i
                        >{{ formatDate(planet.visitedAt) }} | via
                        <strong>{{ planet.transportation }}</strong></small
                      >
                    </p>
                  </div>
                  <div class="timeline-body">
                    <p>
                      {{
                        idx === 0
                          ? "A New Hope: The Beginning Of Your Galaxy Quest!"
                          : `The ${idx + 1}. Step On Your Galaxy Quest`
                      }}
                    </p>
                    <div class="mt-3">
                      <h5>What you've learned</h5>
                      <div class="card rounded-3">
                        <div class="card-body p-5">
                          <div class="d-flex justify-content-center mb-4">
                            <img
                              :src="quote.authorAvatar"
                              class="rounded-circle shadow-1-strong"
                              width="100"
                              height="100"
                            />
                          </div>
                          <figure class="text-center mb-0">
                            <blockquote class="blockquote mb-4">
                              <p>
                                <span class="font-italic">{{ quote.quote }}</span>
                              </p>
                            </blockquote>
                            <figcaption class="blockquote-footer mb-0">
                              {{ quote.author }} in
                              <cite title="Source Title">{{ quote.source }}</cite>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      visitedPlanets: [
        { name: "Tatoine", visitedAt: Date.now(), transportation: "Death Star" },
        { name: "Naboo", visitedAt: Date.now(), transportation: "CR90 corvette" },
        { name: "Mülleimer", visitedAt: Date.now(), transportation: "Star Destroyer" },
        { name: "Abfuhr", visitedAt: Date.now(), transportation: "Sentinel-class landing craft" },
        { name: "Tonne", visitedAt: Date.now(), transportation: "Millennium Falcon" },
        { name: "Riza", visitedAt: Date.now(), transportation: "Y-wing" },
        { name: "Stray Planet", visitedAt: Date.now(), transportation: "X-wing" },
        { name: "Stray Planet", visitedAt: Date.now(), transportation: "TIE Advanced x1" },
        { name: "Stray Planet", visitedAt: Date.now(), transportation: "Executor" },
        { name: "Stray Planet", visitedAt: Date.now(), transportation: "Rebel transport" },
      ],

      planetIcons: [
        require("../assets/planets/02 mercury.png"),
        require("../assets/planets/03 venus.png"),
        require("../assets/planets/05 moon.png"),
        require("../assets/planets/06 mars.png"),
        require("../assets/planets/07 jupiter.png"),
        require("../assets/planets/09 uranus.png"),
        require("../assets/planets/10 neptune.png"),
        require("../assets/planets/11 pluto.png"),
        require("../assets/planets/thanatos.png"),
      ],
      quotes: [
        {
          quote: "Your eyes can deceive you; don’t trust them.",
          author: "Obi-Wan Kenobi",
          source: "Star Wars Episode IV: A New Hope",
          authorAvatar: require("../assets/characters/Old-Obi-Wan-icon.png"),
        },
        {
          quote: "Try not. Do or do not. There is no try.",
          author: "Yoda",
          source: "Star Wars Episode V: The Empire Strikes Back",
          authorAvatar: require("../assets/characters/Yoda-01-icon.png"),
        },
        {
          quote: "Luminous beings we are, not this crude matter.",
          author: "Yoda",
          source: "The Empire Strikes Back",
          authorAvatar: require("../assets/characters/Yoda-01-icon.png"),
        },
        {
          quote: "Who’s the more foolish: the fool or the fool who follows him?.",
          author: "Obi-Wan Kenobi",
          source: "A New Hope",
          authorAvatar: require("../assets/characters/Old-Obi-Wan-icon.png"),
        },
        {
          quote: "Great, kid, don’t get cocky.",
          author: "Han Solo",
          source: "A New Hope",
          authorAvatar: require("../assets/characters/Han-Solo-01-icon.png"),
        },
        {
          quote: "Let go of your hate.",
          author: "Luke Skywalker",
          source: "Return Of The Yedi",
          authorAvatar: require("../assets/characters/Luke-Skywalker-03-icon.png"),
        },
      ],
    };
  },

  methods: {
    randomQuote() {
      return this.quotes[Math.floor(Math.random() * this.quotes.length)];
    },
    randomPlanetIcon() {
      return this.planetIcons[Math.floor(Math.random() * this.planetIcons.length)];
    },

    formatDate(dateStr) {
      const date = new Date(dateStr);
      return (
        new Intl.DateTimeFormat("de-DE").format(date) +
        " | " +
        new Intl.DateTimeFormat("de-DE", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }).format(date)
      );
    },
  },

  setup() {},
};
</script>

<style scoped>
#page-top-section {
  height: 50vh;
  background-image: url("../assets/shutterstock_1030734604.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
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

/* JEDI'S JOURNEY */

.timeline {
  list-style: none;
  padding: 20px 0 20px;
  position: relative;
}

.timeline:before {
  top: 0;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 3px;
  background-color: #eeeeee;
  left: 50%;
  margin-left: -1.5px;
}

.timeline > li {
  margin-bottom: 20px;
  position: relative;
}

.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}

.timeline > li:after {
  clear: both;
}

.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}

.timeline > li:after {
  clear: both;
}

.timeline > li > .timeline-panel {
  width: 45%;
  float: left;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  padding: 20px;
  position: relative;
  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
}

.timeline > li > .timeline-panel:before {
  position: absolute;
  top: 26px;
  right: -15px;
  display: inline-block;
  border-top: 15px solid transparent;
  border-left: 15px solid #ccc;
  border-right: 0 solid #ccc;
  border-bottom: 15px solid transparent;
  content: " ";
}

.timeline > li > .timeline-panel:after {
  position: absolute;
  top: 27px;
  right: -14px;
  display: inline-block;
  border-top: 14px solid transparent;
  border-left: 14px solid #fff;
  border-right: 0 solid #fff;
  border-bottom: 14px solid transparent;
  content: " ";
}

.timeline > li > .timeline-badge {
  /* color: #fff;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 1.5em;
  text-align: center;
  position: absolute;
  top: 16px;
  left: 50%;
  margin-left: -25px;
  z-index: 100;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%; */

  color: #fff;
  width: 75px;
  height: 75px;
  line-height: 75px;
  font-size: 1.5em;
  text-align: center;
  position: absolute;
  top: 2px;
  left: 50%;
  margin-left: -38px;
  z-index: 100;
}
.timeline > li > .timeline-badge img {
  width: inherit;
  height: inherit;
}

.timeline > li.timeline-item-right > .timeline-panel {
  float: right;
}

.timeline > li.timeline-item-right > .timeline-panel:before {
  border-left-width: 0;
  border-right-width: 15px;
  left: -15px;
  right: auto;
}

.timeline > li.timeline-item-right > .timeline-panel:after {
  border-left-width: 0;
  border-right-width: 14px;
  left: -14px;
  right: auto;
}

.timeline-badge.primary {
  background-color: #2e6da4 !important;
}

.timeline-badge.success {
  background-color: #3f903f !important;
}

.timeline-badge.warning {
  background-color: #f0ad4e !important;
}

.timeline-badge.danger {
  background-color: #d9534f !important;
}

.timeline-badge.info {
  background-color: #5bc0de !important;
}

.timeline-body > p,
.timeline-body > ul {
  margin-bottom: 0;
}

.timeline-body > p + p {
  margin-top: 5px;
}

/* @media (max-width: 767px) { */
@media (max-width: 991px) {
  ul.timeline:before {
    left: 40px;
  }

  ul.timeline > li > .timeline-panel {
    width: calc(100% - 90px);
    width: -moz-calc(100% - 90px);
    width: -webkit-calc(100% - 90px);
  }

  ul.timeline > li > .timeline-badge {
    left: 15px;
    margin-left: -15px;
    top: 8px;
  }

  ul.timeline > li > .timeline-panel {
    float: right;
  }

  ul.timeline > li > .timeline-panel:before {
    border-left-width: 0;
    border-right-width: 15px;
    left: -15px;
    right: auto;
  }

  ul.timeline > li > .timeline-panel:after {
    border-left-width: 0;
    border-right-width: 14px;
    left: -14px;
    right: auto;
  }
}
</style>
