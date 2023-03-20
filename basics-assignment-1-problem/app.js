const app = Vue.createApp({
  data() {
    return {
      programmerName: "Adnan Zecheria",
      ageOfProgrammer: 31,
      mountainSrc: "mountain.jpg",
    };
  },
  methods: {
    getAgeInFuture(numberOfYears) {
      return this.ageOfProgrammer + numberOfYears;
    },

    getRandomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
