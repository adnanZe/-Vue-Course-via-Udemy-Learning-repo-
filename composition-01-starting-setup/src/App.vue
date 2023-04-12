<template>
  <section class="container">
    <h2>{{ user }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setNewAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    // const uName = ref('Adnan');
    const firstName = ref('');
    const lastName = ref('');
    const uAge = ref(21);
    // const user = reactive({
    //   name: 'Adnan',
    //   age: 21,
    // });

    const uName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    const setNewAge = () => (uAge.value = 22);

    return {
      user: uName,
      age: uAge,
      setNewAge,
      firstName,
      lastName,
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
