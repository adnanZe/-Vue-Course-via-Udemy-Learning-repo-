<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    // const uName = ref('Adnan');
    // const uAge = ref(21);
    const user = reactive({
      name: 'Adnan',
      age: 21,
    });

    // console.log(isRef(uAge));
    // console.log(isReactive(user), user.age);

    setTimeout(() => {
      // uName.value = 'Zecheria';
      // uAge.value = 23;
      user.name = 'Zecheria';
      user.age = 22;
    }, 2000);

    const userRefs = toRefs(user);

    return {
      user,
      userName: userRefs.name,
      age: userRefs.age,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
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
