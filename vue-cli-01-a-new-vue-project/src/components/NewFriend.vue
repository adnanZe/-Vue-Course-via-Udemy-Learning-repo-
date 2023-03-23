<template>
  <form @submit.prevent="onAddNewFriend">
    <div>
      <label>Name</label>
      <input type="text" v-model="inputName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="inputPhoneNumber" />
    </div>
    <div>
      <label>E-mail</label>
      <input type="email" v-model="inputEmail" />
    </div>
    <button>Add New Friend</button>
  </form>
</template>

<script>
export default {
  emits: ["add-new-friend"],
  data() {
    return {
      inputName: "",
      inputPhoneNumber: "",
      inputEmail: "",
    };
  },
  methods: {
    onAddNewFriend() {
      this.$emit(
        "add-new-friend",
        this.inputName,
        this.inputPhoneNumber,
        this.inputEmail
      );
    },
  },
};
</script>

<style></style>
