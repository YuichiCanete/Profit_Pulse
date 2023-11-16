import { createRouter, createWebHistory } from "vue-router";

import Login from "../components/Login.vue";
import Main from "../components/Main.vue";
import Inventory from "../components/Inventory.vue";
import History from "../components/History.vue";
import AddProduct from "../components/AddProduct.vue";

const routes = [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
        path: "/main",
        name: "Main",
        component: Main,
    },
    {
        path: "/inventory",
        name: "Inventory",
        component: Inventory,
    },
    {
        path: "/history",
        name: "History",
        component: History,
    },
    {
        path: "/addproduct",
        name: "AddProduct",
        component: AddProduct,
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;