<template>
  <section id="registration-form-container">
    <form
      @submit.prevent="handleSubmit"
      method="POST"
      enctype="multipart/form-data"
    ></form>
  </section>
</template>

<script>
// import * as authService from "@/services/auth.service.js";

export default {
  name: "RegistrationForm",
  // Keeps track of component state
  data() {
    return {
      username: "",
      password: "",
      email: "",
      location: "",
      biography: "",
      photo_path: "",
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
    },
  },
};
</script>

<style scoped></style>
