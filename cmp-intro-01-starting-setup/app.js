const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Test",
          phone: "0123 456 788",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Test",
          phone: "0975 456 412",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

app.component("user-contact", {
  template: `
  <li>
    <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">Show Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
          </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Test",
        phone: "0123 456 788",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
