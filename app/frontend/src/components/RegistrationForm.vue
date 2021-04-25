<template>
  <section id="registration-form-container">
    <form @submit.prevent="handleSubmit" method="POST" id="registration-form">
      <article class="form-fields">
        <div class="form-field">
          <label for="username"> Username </label>
          <input id="username" type="text" required v-model="username" />
        </div>
        <div class="form-field">
          <label for="password"> Password </label>
          <input id="password" type="password" required v-model="password" />
        </div>
      </article>
      <article class="form-fields">
        <div class="form-field">
          <label for="fullname"> Fullname </label>
          <input id="fullname" type="text" required v-model="fullname" />
        </div>
        <div class="form-field">
          <label for="email"> Email </label>
          <input id="email" type="email" required v-model="email" />
        </div>
      </article>
      <div class="form-field">
        <label for="location">Location</label>
        <input id="location" type="text" required v-model="location" />
      </div>
      <div class="form-field">
        <label for="biography">Biography</label>
        <textarea
          id="biography"
          rows="8"
          cols="50"
          required
          v-model="biography"
        ></textarea>
      </div>
      <div class="form-field">
        <input
          type="file"
          name="photo"
          ref="photo"
          accept="image/*"
          v-on:change="handleFileUpload()"
        />
      </div>
      <div class="form-field">
        <button type="submit" id="register-btn">Register</button>
      </div>
    </form>
  </section>
</template>

<script>
import * as authService from "@/services/auth.service.js";

export default {
  name: "RegistrationForm",
  // Keeps track of component state
  data() {
    return {
      username: "",
      password: "",
      fullname: "",
      email: "",
      location: "",
      biography: "",
      photo: "",
    };
  },
  methods: {
    handleFileUpload() {
      this.photo = this.$refs.photo.files[0];
    },
    async handleSubmit(e) {
      e.preventDefault();

      // Destructure form fields from state
      const formObj = {
        username: this.username,
        password: this.password,
        fullname: this.fullname,
        email: this.email,
        location: this.location,
        biography: this.biography,
        photo: this.photo,
      };

      // Create the form data object
      const formData = new FormData();

      for (let field in formObj) {
        formData.append(field, formObj[field]);
      }

      for (var value of formData.values()) {
        console.log(value);
      }
      // Register the user
      let data = await authService.register(formData);

      // Display errors if found, otherwise log user in and then redirect
      if (data.error) {
        console.log(data.error);
        this.error = data.error;
      } else {
        authService.login(data);
      }
    },
  },
};
</script>

<style scoped>
.form-fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.form-field {
  margin: 10px 20px;
}

.form-fields input {
  width: 90%;
}
.form-field input,
.form-field textarea {
  display: block;
  padding: 10px 15px;
  margin: 10px 0px;
  border: 1px solid #c5c5c5;
  border-radius: 5px;
  resize: none;
}

.form-field textarea {
  width: 95%;
}

.form-field input[type="file"] {
  border: none;
  padding: 10px 0px;
}
.form-field label {
  font-weight: bold;
}

#registration-form-container {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: solid 1px #e5e5e5;
  padding: 20px;
}

#register-btn {
  background: #0fb881;
  border: none;
  border-radius: 5px;
  padding: 10px 25px;
  color: #ffffff;
}

#register-btn:hover {
  cursor: pointer;
  background: #0a7753;
}
</style>
