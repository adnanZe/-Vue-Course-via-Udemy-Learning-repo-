const app = Vue.createApp({
  data() {
    return {
      name: "",
      enteredName: "",
    };
  },
  methods: {
    onAlert() {
      alert("You pressed <Show Alert> button!");
    },
    onUserName(event) {
      this.name = event.target.value;
    },
    onEnteredUserName(event) {
      this.enteredName = event.target.value;
    },
  },
});

app.mount("#assignment");
