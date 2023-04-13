<template>
  <user-alert v-if="alertIsVisible" title="Delete the user?" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import UserAlert from './UserAlert.vue';

const alertIsVisible = ref(false);

const showAlert = () => (alertIsVisible.value = true);
const hideAlert = () => (alertIsVisible.value = false);
</script>
