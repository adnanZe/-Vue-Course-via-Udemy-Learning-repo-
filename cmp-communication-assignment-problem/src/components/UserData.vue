<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="inputName" />
    </div>
    <div>
      <label>Age</label>
      <input type="number" v-model="inputAge" />
    </div>
    <button>Add Active User</button>
  </form>
</template>

<script>
export default {
  emits: ["add-active-user"],
  data() {
    return {
      inputName: "",
      inputAge: "",
    };
  },
  methods: {
    submitData() {
      const newActiveUser = {
        name: this.inputName,
        age: this.inputAge,
      };

      this.$emit("add-active-user", newActiveUser);
    },
  },
};
</script>

<style></style>
