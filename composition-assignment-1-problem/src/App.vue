<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="isVisible">
    {{ goal }}
  </h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="onToggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import
//  ref,
// reactive,
// toRefs
// 'vue';

export default {
  // setup() {
  //   // const myGoal = ref('Learning Vue');
  //   // const isVisible = ref(true);
  //   // const goal = ref({
  //   //   title: 'Learning Vue',
  //   //   isVisible: true,
  //   // });
  //   const goal = reactive({
  //     title: 'Learning Vue',
  //     isVisible: true,
  //   });

  //   const onToggleGoal = () => {
  //     // isVisible.value = !isVisible.value;
  //     // goal.value.isVisible = !goal.value.isVisible;
  //     goal.isVisible = !goal.isVisible;
  //   };

  //   return {
  //     // goal: myGoal.value,
  //     // isVisible,
  //     // goal,
  //     goal,
  //     onToggleGoal,
  //   };
  // },

  data() {
    return {
      goal: 'Learning Vue',
      isVisible: true,
    };
  },

  methods: {
    onToggleGoal() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
