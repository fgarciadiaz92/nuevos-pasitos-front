<template>
  <!-- App.vue -->

  <v-app>
    <v-navigation-drawer app>
      <v-card class="mx-auto" max-width="300" tile>
        <v-toolbar color="teal" dark>
          <v-toolbar-title>Menu</v-toolbar-title>

          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list dense>
          <v-list-item-group v-model="selectedItem" color="primary">
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
      </v-card>
    </v-navigation-drawer>

    <v-app-bar app color="teal" dark>
      <v-row align="left">
        <h1>Titulo NavBar</h1>
      </v-row>
      <v-avatar class="text-xs-right">
        <v-btn @click="hola">
          <v-avatar color="red">
            <span class="white--text text-h5">CJ</span>
          </v-avatar>
        </v-btn>
      </v-avatar>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <h1>Pie de pagina</h1>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: [
        { title: "Inicio", icon: "mdi-view-dashboard", to: "/" },
        { title: "Pruebas", icon: "mdi-book ", to: "/about" },
        { title: "Resultados", icon: "mdi-book-open", to: "resultado" },
        { title: "Correos", icon: "mdi-email", to: "/correo" },

      ],
      right: null,
    };
  },
  methods:{
    hola(){
      console.log("Apretando Imagen perfil")
    }
  }
};
</script>

<style scoped></style>
