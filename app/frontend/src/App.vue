<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register </router-link>
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: calc(93vh - 20px);
}

#nav {
  padding: 10px;
  height: 7vh;
  background-color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

#nav a {
  font-weight: bold;
  color: #fafafa;
  text-decoration: none;
  margin-right: 8px;
}
#nav a:hover {
  color: #42b983;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
