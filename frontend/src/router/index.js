import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import LoginPage from "@/views/LoginPage";
import RegistrationPage from "@views/RegistrationPage";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: HomePage },
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegistrationPage },

    // Catch all route to redirect to home
    { path: "*", redirect: "/" },
  ],
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});
