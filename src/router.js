import BooksList from "./components/BooksList.vue";
import AboutApp from "./components/AboutApp.vue";

export default [
  {
    path: "/",
    name: "app",
    component: BooksList,
  },
  {
    path: "/about",
    name: "about",
    component: AboutApp,
  },
];
