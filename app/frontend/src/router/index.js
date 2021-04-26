import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegistrationPage from "@/views/RegistrationPage.vue";
import ExplorePage from "@/views/ExplorePage.vue";
import CarPage from "@/views/CarPage.vue";
import UserPage from "@/views/UserPage.vue";
import AddNewCarPage from "@/views/AddNewCarPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
    meta: {
      guest: true,
    },
  },
  {
    path: "/register",
    name: "RegistrationPage",
    component: RegistrationPage,
    meta: {
      guest: true,
    },
  },
  {
    path: "/explore",
    name: "ExplorePage",
    component: ExplorePage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/cars/:id",
    name: "CarPage",
    component: CarPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/users/:id",
    name: "UserPage",
    component: UserPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/cars/new",
    name: "AddNewCarPage",
    component: AddNewCarPage,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // Check if the user is logged in
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
