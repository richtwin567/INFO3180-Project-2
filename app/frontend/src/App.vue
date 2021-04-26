<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register </router-link> |
    <router-link to="/cars/new">Add Car</router-link>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
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
</style>
