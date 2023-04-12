<template>
  <h2>{{ userName }}</h2>
  <h2>{{ age }}</h2>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['firstName', 'lastName', 'age'],
  setup(props, context) {
    const uName = computed(() => props.firstName + ' ' + props.lastName);

    console.log(context);

    // context.emit()

    return {
      userName: uName,
    };
  },
};
</script>
