<template>
  <section class="container">
    <h2>{{ user }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setNewAge">Change Age</button>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const uName = ref('Adnan');
    const uAge = ref(21);
    // const user = reactive({
    //   name: 'Adnan',
    //   age: 21,
    // });

    const setNewAge = () => {
      uAge.value = 22;
    };

    return {
      user: uName,
      age: uAge,
      setNewAge,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
