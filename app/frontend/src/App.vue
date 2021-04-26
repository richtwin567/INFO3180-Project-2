<template>
  <div>
    <div id="nav">
      <div class="company">
        <router-link :to="{ path: uid.length == 0 ? '/' : '/explore' }">
          <span class="company-name">
            <img src="./assets/car.png" alt="logo" />
            <p>United Auto Sales</p>
          </span>
        </router-link>
        <div :class="uid.length == 0 ? 'hidden' : ''">
          <router-link to="/cars/new">Add Car</router-link>
          <router-link to="/explore">Explore</router-link>
          <router-link :to="{ path: '/users/' + uid }">My Profile</router-link>
        </div>
      </div>
      <div :class="uid.length == 0 ? 'hidden' : ''">
        <router-link to="/" @click="logout">Logout</router-link>
      </div>
      <div :class="uid.length == 0 ? '' : 'hidden'">
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import * as authService from "@/services/auth.service.js";
import { authHeader } from "@/services/headers.service";

export default {
  name: "App",
  created() {
    let self = this;
    console.log(self.uid.length);
    let token = authHeader().Authorization;

    if (token) {
      self.uid = authService.parseJWT(token).id;
    }
  },
  data() {
    return {
      uid: "",
    };
  },
  methods: {
    logout() {
      authService.handleLogout();

      // Refresh page to updatenav
      window.location.href = "/";
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #555;
  font-size: 16px;
  font-weight: 400;
  height: 100vh;
  background-color: rgb(243, 244, 246);
}

#nav {
  padding: 10px;
  height: 7vh;
  background-color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.company {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 100%;
  max-width: 40vw;
}
.company-name {
  display: flex;
  align-items: center;
}
.company-name p {
  margin-left: 16px;
  font-weight: 700;
  font-size: 20px;
}

#nav a {
  font-weight: bold;
  color: #fafafa;
  text-decoration: none;
  margin-right: 16px;
}
#nav a:hover {
  color: #42b983;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.error {
  color: #ca4148;
  background-color: #ffbaba;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ca4148;
  text-align: center;
  margin-top: 10px;
}
.hidden {
  display: none;
}
</style>
