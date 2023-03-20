const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    add(number) {
      this.counter = this.counter + number;
    },

    reduce(number) {
      this.counter = this.counter - number;
    },

    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
  },
});

app.mount("#events");
