const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      isHiddenParagraph: false,
      userInputBackground: "",
    };
  },
  methods: {
    onToggleParagraph() {
      console.log("hit");
      this.isHiddenParagraph = !this.isHiddenParagraph;
    },
  },
  computed: {
    getStyleMeClasses() {
      return {
        user1: this.userInput === "user1",
        user2: this.userInput === "user2",
        hidden: this.isHiddenParagraph,
        visible: !this.isHiddenParagraph,
      };
    },
  },
  watch: {},
});

app.mount("#assignment");
