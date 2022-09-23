import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView";
import Prueba from "@/views/prueba/Prueba";
import CreadorPueba from "@/views/prueba/CreadorPueba";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "inicio" /*para enlazar a un nombre en vez de el path se debe llamar como un obejto y cambiar el to ="/" a :to="{name : 'inicio'}" en el router link , sirve para cambiar el patch sin sufrir cambio al componente que hace referencia*/,
    /*component: HomeView,*/
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/pruebas",
    name: "pruebas",
    component: Prueba,
  },
  {
    path: "/creadorPrueba/:id",
    name: "creadorPrueba",
    component: CreadorPueba,
  },

  /*  {
  /!*  path:'*',
    redirect:'/',
    component: Error404*!/
  },*/
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
