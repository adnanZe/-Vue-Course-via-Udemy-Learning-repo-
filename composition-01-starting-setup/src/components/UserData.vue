<template>
  <h2>{{ userName }}</h2>
  <h2>{{ age }}</h2>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['firstName', 'lastName', 'age'],
  setup(props) {
    const uName = computed(() => props.firstName + ' ' + props.lastName);

    return {
      userName: uName,
    };
  },
};
</script>
