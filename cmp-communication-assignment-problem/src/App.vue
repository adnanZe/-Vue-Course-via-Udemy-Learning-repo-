<template>
  <user-data @add-active-user="onAddActiveUser"></user-data>
  <active-user
    v-for="user in activeUsers"
    :key="user.name"
    :username="user.name"
    :age="user.age"
  ></active-user>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
export default {
  components: { UserData, ActiveUser },
  data() {
    return {
      activeUsers: [],
    };
  },

  methods: {
    onAddActiveUser(newActiveUser) {
      newActiveUser.age = String(newActiveUser.age);
      this.activeUsers.push(newActiveUser);
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form div {
  margin: 2rem;
}

form label {
  margin-right: 1rem;
}

form label::after {
  content: ":";
}
</style>
