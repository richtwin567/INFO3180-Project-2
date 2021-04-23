<template>
  <div id="login">
    <h1>Log in to your account</h1>
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
export default {
  components: { LoginForm },
  name: "LoginPage",
};
</script>
<style scoped></style>
