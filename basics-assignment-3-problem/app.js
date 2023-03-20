const app = Vue.createApp({
  data() {
    return { counter: 0 };
  },

  computed: {
    result() {
      if (this.counter < 37) {
        return "Not there yet!";
      } else if (this.counter > 37) {
        return "Too much!";
      } else if (this.counter === 37) {
        return this.counter;
      }
    },
  },

  methods: {
    increment(number) {
      this.counter = this.counter + number;
    },
  },

  watch: {
    result() {
      setTimeout(() => {
        this.counter = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
