<template>
  <section id="login-form-container">
    <form @submit.prevent="handleSubmit" method="POST">
      <label for="username"> Username </label>
      <input id="username" type="text" v-model="username" required />
      <label for="password"> Password </label>
      <input id="password" type="password" v-model="password" required />
      <button class="auth-form-btn" type="submit">
        Login
      </button>
      <div v-if="error" class="error">
        {{ error }}
      </div>
    </form>
  </section>
</template>

<script>
import * as authService from "@/services/auth.service.js";

export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      let userObj = { username: this.username, password: this.password };

      // Log the user in
      let data = await authService.login(userObj);
      if (data.error) {
        console.log(data.error);
        this.error = data.error;
      } else {
        // Store the JWT
        authService.handleLogin(data);

        // Redirect to explore
        window.location.href = "/explore";
      }
      console.log(data);
    },
  },
};
</script>
<style scoped>
form {
  padding: 40px;
  display: flex;
  flex-direction: column;

  justify-content: center;
}

#login-form-container {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: solid 1px #e5e5e5;
}
input {
  display: block;
  width: 90%;
  padding: 10px 15px;
  margin: 10px 0px;
  border: 1px solid #c5c5c5;
  border-radius: 5px;
}
label {
  font-weight: bold;
}

button {
  margin: 10px 0px;
  background: #0fb881;
  border: none;
  width: 100%;
  border-radius: 5px;
  padding: 8px 0px;
  color: #ffffff;
}

button:hover {
  cursor: pointer;
  background: #0a7753;
}
</style>
