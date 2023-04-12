<template>
  <section class="container">
    <user-data
      :first-name="firstName"
      :last-name="lastName"
      :age="age"
    ></user-data>
    <button @click="setNewAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData,
  },
  setup() {
    // const uName = ref('Adnan');
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const uAge = ref(21);
    // const user = reactive({
    //   name: 'Adnan',
    //   age: 21,
    // });

    const uName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, uName], (newValues, oldValues) => {
      console.log(oldValues, newValues);
    });

    const setNewAge = () => (uAge.value = 22);

    const setLastName = () => (lastName.value = lastNameInput.value.value);

    return {
      age: uAge,
      setNewAge,
      firstName,
      lastNameInput,
      setLastName,
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
