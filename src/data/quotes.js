const quotes = [
  // {
  //   quote:
  //     "Once you start down the dark path, forever will it dominate your destiny. Consume you, it will.",
  //   author: "Yoda",
  // },
  // {
  //   quote: "When you look at the dark side, careful you must be. For the dark side looks back.",
  //   author: "Yoda",
  // },
  // {
  //   quote:
  //     "...fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering",
  //   author: "Yoda",
  // },
  // {
  //   quote: "Always pass on what you have learned.",
  //   author: "Yoda",
  // },
  // {
  //   quote: "Powerful you have become, the dark side I sense in you.",
  //   author: "Yoda",
  // },
  {
    quote: "Your eyes can deceive you; don’t trust them.",
    author: "Obi-Wan Kenobi",
    source: "Star Wars Episode IV: A New Hope",
    authorAvatar: require("../assets/characters/Old-Obi-Wan-icon.png"),
  },
  {
    quote: "In my experience, there’s no such thing as luck.",
    author: "Obi-Wan Kenobi",
    source: "Star Wars Episode IV: A New Hope",
    authorAvatar: require("../assets/characters/Old-Obi-Wan-icon.png"),
  },
  {
    quote: "Remember... the Force will be with you. Always.",
    author: "Obi-Wan Kenobi",
    source: "Star Wars Episode IV: A New Hope",
    authorAvatar: require("../assets/characters/Old-Obi-Wan-icon.png"),
  },
  {
    quote: "Use the Force, Luke.",
    author: "Obi-Wan Kenobi",
    source: "Star Wars Episode IV: A New Hope",
    authorAvatar: require("../assets/characters/Old-Obi-Wan-icon.png"),
  },
  {
    quote: "Don’t give in to hate. That leads to the Dark Side.",
    author: "Obi-Wan Kenobi",
    source: "The Empire Strikes Back",
    authorAvatar: require("../assets/characters/Old-Obi-Wan-icon.png"),
  },
  {
    quote:
      "You were the chosen one! It was said that you would destroy the Sith, not join them. You were to bring balance to the Force, not leave it in darkness",
    author: "Obi-Wan Kenobi",
    source: "Revenge of the Sith",
    authorAvatar: require("../assets/characters/Old-Obi-Wan-icon.png"),
  },
  {
    quote: "Be mindful of your thoughts Anakin. They’ll betray you",
    author: "Obi-Wan Kenobi",
    source: "Attack of the Clones",
    authorAvatar: require("../assets/characters/Old-Obi-Wan-icon.png"),
  },
  {
    quote: "Why do I get the feeling you’re going to be the death of me",
    author: "Obi-Wan Kenobi",
    source: "Attack of the Clones",
    authorAvatar: require("../assets/characters/Old-Obi-Wan-icon.png"),
  },
  {
    quote: "Dreams pass in time",
    author: "Obi-Wan Kenobi",
    source: "Attack of the Clones",
    authorAvatar: require("../assets/characters/Old-Obi-Wan-icon.png"),
  },
  {
    quote: "Try not. Do or do not. There is no try.",
    author: "Yoda",
    source: "Star Wars Episode V: The Empire Strikes Back",
    authorAvatar: require("../assets/characters/Yoda-01-icon.png"),
  },
  {
    quote: "Judge me by my size, do you?",
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
    quote: "Once you start down the dark path, forever will it dominate your destiny.",
    author: "Yoda",
    source: "The Empire Strikes Back",
    authorAvatar: require("../assets/characters/Yoda-01-icon.png"),
  },
  {
    quote: "Size matters not.",
    author: "Yoda",
    source: "The Empire Strikes Back",
    authorAvatar: require("../assets/characters/Yoda-01-icon.png"),
  },
  {
    quote: "Wars not make one great.",
    author: "Yoda",
    source: "The Empire Strikes Back",
    authorAvatar: require("../assets/characters/Yoda-01-icon.png"),
  },
  {
    quote: "A Jedi uses the Force for knowledge and defense, never for attack.",
    author: "Yoda",
    source: "The Empire Strikes Back",
    authorAvatar: require("../assets/characters/Yoda-01-icon.png"),
  },
  {
    quote: "You must unlearn what you have learned.",
    author: "Yoda",
    source: "The Empire Strikes Back",
    authorAvatar: require("../assets/characters/Yoda-01-icon.png"),
  },
  {
    quote: "When 900 years old you reach, look as good you will not.",
    author: "Yoda",
    source: "Return of the Jedi",
    authorAvatar: require("../assets/characters/Yoda-01-icon.png"),
  },
  {
    quote: "In a dark place we find ourselves, and a little more knowledge lights our way.",
    author: "Yoda",
    source: "Revenge of the Sith",
    authorAvatar: require("../assets/characters/Yoda-01-icon.png"),
  },
  {
    quote: "Fear is the path to the dark side",
    author: "Yoda",
    source: "The Phantom Menace",
    authorAvatar: require("../assets/characters/Yoda-01-icon.png"),
  },
  {
    quote: "Fear leads to anger, anger leads to hate, hate leads to suffering",
    author: "Yoda",
    source: "The Phantom Menace",
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
    quote:
      "It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man.",
    author: "Han Solo",
    source: "A New Hope",
    authorAvatar: require("../assets/characters/Han-Solo-01-icon.png"),
  },
  {
    quote: "Traveling through hyperspace ain’t like dusting crops, farm boy.",
    author: "Han Solo",
    source: "A New Hope",
    authorAvatar: require("../assets/characters/Han-Solo-01-icon.png"),
  },
  {
    quote: "You know, sometimes I amaze even myself.",
    author: "Han Solo",
    source: "A New Hope",
    authorAvatar: require("../assets/characters/Han-Solo-01-icon.png"),
  },
  {
    quote: "Don’t everybody thank me at once.",
    author: "Han Solo",
    source: "A New Hope",
    authorAvatar: require("../assets/characters/Han-Solo-01-icon.png"),
  },
  {
    quote: "Let’s keep a little optimism here.",
    author: "Han Solo",
    source: "Return of the Jedi",
    authorAvatar: require("../assets/characters/Han-Solo-01-icon.png"),
  },
  {
    quote: "Never tell me the odds!",
    author: "Han Solo",
    source: "The Empire Strikes Back",
    authorAvatar: require("../assets/characters/Han-Solo-01-icon.png"),
  },
  {
    quote: "Chewie, we’re home.",
    author: "Han Solo",
    source: "The Force Awakens",
    authorAvatar: require("../assets/characters/Han-Solo-01-icon.png"),
  },
  {
    quote: "Laugh it up, fuzzball.",
    author: "Han Solo",
    source: "The Empire Strikes Back",
    authorAvatar: require("../assets/characters/Han-Solo-01-icon.png"),
  },
  {
    quote: "Women always figure out the truth.",
    author: "Han Solo",
    source: "The Force Awakens",
    authorAvatar: require("../assets/characters/Han-Solo-01-icon.png"),
  },
  {
    quote: "Let go of your hate.",
    author: "Luke Skywalker",
    source: "Return Of The Yedi",
    authorAvatar: require("../assets/characters/Luke-Skywalker-03-icon.png"),
  },
  {
    quote: "I won’t fail you. I’m not afraid.",
    author: "Luke Skywalker",
    source: "The Empire Strikes Back",
    authorAvatar: require("../assets/characters/Luke-Skywalker-03-icon.png"),
  },
  {
    quote: "You’ll find I’m full of surprises.",
    author: "Luke Skywalker",
    source: "The Empire Strikes Back",
    authorAvatar: require("../assets/characters/Luke-Skywalker-03-icon.png"),
  },
  {
    quote: "Strike me down in anger and I’ll always be with you, just like your father.",
    author: "Luke Skywalker",
    source: "The Last Jedi",
    authorAvatar: require("../assets/characters/Luke-Skywalker-03-icon.png"),
  },
  {
    quote:
      "The Force is not a power you have. It’s not about lifting rocks. It’s the energy between all things, a tension, a balance, that binds the universe together.",
    author: "Luke Skywalker",
    source: "The Last Jedi",
    authorAvatar: require("../assets/characters/Luke-Skywalker-03-icon.png"),
  },
  {
    quote: "No one’s ever really gone.",
    author: "Luke Skywalker",
    source: "The Last Jedi",
    authorAvatar: require("../assets/characters/Luke-Skywalker-03-icon.png"),
  },
  {
    quote: "Confronting fear is the destiny of a Jedi. Your destiny.",
    author: "Luke Skywalker",
    source: "The Rise of Skywalker",
    authorAvatar: require("../assets/characters/Luke-Skywalker-03-icon.png"),
  },
  {
    quote:
      "I’ve seen this raw strength only once before. It didn’t scare me enough then. It does now.",
    author: "Luke Skywalker",
    source: "The Last Jedi",
    authorAvatar: require("../assets/characters/Luke-Skywalker-03-icon.png"),
  },
  {
    quote: "I find your lack of faith disturbing.",
    author: "Darth Vader",
    source: "A New Hope",
    authorAvatar: require("../assets/characters/Vader-03-icon.png"),
  },
  {
    quote: "The Force is strong with this one.",
    author: "Darth Vader",
    source: "A New Hope",
    authorAvatar: require("../assets/characters/Vader-02-icon.png"),
  },

  {
    quote: "No. I am your father.",
    author: "Darth Vader",
    source: "The Empire Strikes Back",
    authorAvatar: require("../assets/characters/Vader-02-icon.png"),
  },
  {
    quote: "If you only knew the power of the dark side.",
    author: "Darth Vader",
    source: "The Empire Strikes Back",
    authorAvatar: require("../assets/characters/Vader-02-icon.png"),
  },
  {
    quote: "Be careful not to choke on your aspirations.",
    author: "Darth Vader",
    source: "Rogue One",
    authorAvatar: require("../assets/characters/Vader-03-icon.png"),
  },
  {
    quote: "You have failed me for the last time.",
    author: "Darth Vader",
    source: "The Empire Strikes Back",
    authorAvatar: require("../assets/characters/Vader-03-icon.png"),
  },
  {
    quote:
      "You have controlled your fear. Now, release your anger. Only your hatred can destroy me.",
    author: "Darth Vader",
    source: "The Empire Strikes Back",
    authorAvatar: require("../assets/characters/Vader-02-icon.png"),
  },
  {
    quote:
      "I’ve been waiting for you, Obi-Wan. We meet again, at last. The circle is now complete. When I left you, I was but the learner; now I am the master.",
    author: "Darth Vader",
    source: "A New Hope",
    authorAvatar: require("../assets/characters/Vader-03-icon.png"),
  },
  {
    quote: "Why, you stuck-up, half-witted, scruffy-looking nerf herder!",
    author: "Leia Organa",
    source: "A New Hope",
    authorAvatar: require("../assets/characters/Leia-icon.png"),
  },
  {
    quote: "Help me, Obi-Wan Kenobi. You’re my only hope.",
    author: "Leia Organa",
    source: "A New Hope",
    authorAvatar: require("../assets/characters/Leia-icon.png"),
  },
  {
    quote: "Somebody has to save our skins. Into the garbage chute, flyboy.",
    author: "Leia Organa",
    source: "A New Hope",
    authorAvatar: require("../assets/characters/Leia-icon.png"),
  },
  {
    quote: "Will somebody get this big walking carpet out of my way?",
    author: "Leia Organa",
    source: "A New Hope",
    authorAvatar: require("../assets/characters/Leia-icon.png"),
  },
  {
    quote: "Some day you’re gonna be wrong, I just hope I’m there to see it.",
    author: "Leia Organa",
    source: "The Empire Strikes Back",
    authorAvatar: require("../assets/characters/Leia-icon.png"),
  },
  {
    quote: "Get your head out of your cockpit.",
    author: "Leia Organa",
    source: "The Last Jedi",
    authorAvatar: require("../assets/characters/Leia-icon.png"),
  },
  {
    quote: "She was more interested in protecting the Light than seeming like a hero.",
    author: "Leia Organa",
    source: "The Last Jedi",
    authorAvatar: require("../assets/characters/Leia-icon.png"),
  },
  {
    quote: "I’d just as soon kiss a Wookiee.",
    author: "Leia Organa",
    source: "The Empire Strikes Back",
    authorAvatar: require("../assets/characters/Leia-icon.png"),
  },
];

export default quotes;
