<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: "ion",
          name: "Ion Test",
          phone: "0222 222 333",
          email: "ion@localhost.com",
        },
        {
          id: "costel",
          name: "costel Test",
          phone: "0444 444 222",
          email: "costel@localhost.com",
        },
      ],
    };
  },
};
</script>
