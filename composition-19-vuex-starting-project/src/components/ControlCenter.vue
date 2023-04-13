<template>
  <button @click="inc">Increment</button>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const inc = () => {
  store.dispatch('increment');
};
</script>
