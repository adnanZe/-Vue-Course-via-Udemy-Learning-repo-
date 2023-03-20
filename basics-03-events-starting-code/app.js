const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    outputFullName() {
      if (this.name === "") {
        return "";
      }

      return this.name + " " + "Zecheria";
    },

    add(number) {
      this.counter = this.counter + number;
    },

    reduce(number) {
      this.counter = this.counter - number;
    },

    setName(event, lastName) {
      this.name = event.target.value;
    },

    resetInput() {
      this.name = "";
    },
  },
  computed: {
    fullName() {
      console.log("running");
      if (this.name === "") {
        return "";
      }

      return this.name + " " + "Zecheria";
    },
  },
});

app.mount("#events");
