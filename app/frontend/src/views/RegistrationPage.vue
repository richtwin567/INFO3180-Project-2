<template>
  <div id="registration">
    <h1>Register New User</h1>
    <registration-form></registration-form>
  </div>
</template>

<script>
// Imports
import RegistrationForm from "@/components/RegistrationForm.vue";

export default {
  components: { RegistrationForm },
  name: "RegistrationPage",
};
</script>
<style scoped>
#registration {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
