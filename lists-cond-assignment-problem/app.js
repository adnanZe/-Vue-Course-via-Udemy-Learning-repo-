const app = Vue.createApp({
  data() {
    return {
      inputTask: "",
      tasks: [],
      isDisplayedList: true,
    };
  },

  methods: {
    onAddTask() {
      this.tasks.push(this.inputTask);
    },

    onDisplayList() {
      this.isDisplayedList = !this.isDisplayedList;
    },
  },

  computed: {
    getTextForDisplayButton() {
      return this.isDisplayedList ? "Hide" : "Show";
    },
  },
});

app.mount("#assignment");
