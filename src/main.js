import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";

//components
import Indice from "./components/Indice.vue";
import ProjectOne from "./components/ProjectOne.vue";
import ProjectTwo from "./components/ProjectTwo.vue";

//rutas
const routes = [
  {
    path: "/",
    component: Indice,
  },
  {
    path: "/Etiquetas",
    component: ProjectOne,
  },
  {
    path: "/Listas",
    component: ProjectTwo,
  },
];

//objeto de rutas
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//instancia
const app = createApp(App);
app.use(router);
app.mount("#app");
