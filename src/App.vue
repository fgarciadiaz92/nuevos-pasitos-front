<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar app color="orange accent-1">
      <v-row align="left">
        <h1>Titulo</h1>
      </v-row>
      <NavbarUsuario />
    </v-app-bar>

    <v-navigation-drawer app absolute color="orange accent-1 pt-15">
      <v-list dense app>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <router-link :to="item.to">
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app color="orange lighten-2">
      <piePagina />
    </v-footer>
  </v-app>
</template>

<script>
import NavbarUsuario from "@/components/navBarUsuario/NavbarUsuario";
import piePagina from "@/components/piePagina/PiePagina";
export default {
  name: "App",
  data() {
    return {
      items: [
        { title: "Inicio", icon: "mdi-view-dashboard", to: "/" },
        { title: "Pruebas", icon: "mdi-book ", to: "/pruebas" },
        { title: "Resultados", icon: "mdi-book-open", to: "resultado" },
        { title: "Correos", icon: "mdi-email", to: "/correo" },
      ],
      right: null,
    };
  },
  components: {
    NavbarUsuario,
    piePagina,
  },
  methods: {},
};
</script>

<style scoped></style>
