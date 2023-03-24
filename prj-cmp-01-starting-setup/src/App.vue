<template>
  <ul>
    <li v-for="resource in storedResources" :key="resource.id">
      <h3>{{ resource.title }}</h3>
      <p>{{ resource.description }}</p>
      <a :href="resource.link">link</a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google ...',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>

<style></style>
