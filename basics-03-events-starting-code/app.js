const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      // fullName: "",
      lastName: "",
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
      if ((this.name === "") | (this.lastName === "")) {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  watch: {
    // name(value) {
    //   if (value == "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value == "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = this.name + " " + value;
    //   }
    // },
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
});

app.mount("#events");
