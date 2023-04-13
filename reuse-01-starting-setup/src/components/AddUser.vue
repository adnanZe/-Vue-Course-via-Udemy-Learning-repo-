<template>
  <user-alert v-if="alertIsVisible" title="Add a User?" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import UserAlert from './UserAlert.vue';

const alertIsVisible = ref(false);

const showAlert = () => (alertIsVisible.value = true);
const hideAlert = () => (alertIsVisible.value = false);
</script>
