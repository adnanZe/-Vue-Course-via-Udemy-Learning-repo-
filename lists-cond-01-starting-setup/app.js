const app = Vue.createApp({
  data() {
    return { inputGoals: "", goals: [] };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputGoals);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
