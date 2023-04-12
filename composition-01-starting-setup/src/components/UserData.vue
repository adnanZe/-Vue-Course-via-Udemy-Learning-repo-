<template>
  <h2>{{ userName }}</h2>
  <h2>{{ age }}</h2>
</template>

<script>
import { computed, inject } from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const uName = computed(() => props.firstName + ' ' + props.lastName);

    const age = inject('userAge');

    console.log(context);

    // context.emit()

    return {
      userName: uName,
      age,
    };
  },
};
</script>
