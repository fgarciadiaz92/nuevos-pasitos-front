<template>
  <div>
    <v-row class="d-flex" flat tile>
      <v-col class="pa-2" outlined tile>
        <v-menu
          v-for="([text, rounded], index) in btns"
          :key="text"
          :rounded="rounded"
          offset-y
        >
          <template v-slot:activator="{ attrs, on }">
            <v-btn
              color="red"
              class="white&#45;&#45;text"
              v-bind="attrs"
              v-on="on"
            >
              {{ text }}
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="item in items" :key="item" link>
              <v-list-item-title v-text="item"></v-list-item-title>
            </v-list-item>
          </v-list> </v-menu
      ></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "NavbarUsuario",
  data: () => ({
    btns: [["Nombre Usuario  ", "0"]],
    colors: [""],
    items: ["Editar Perfil", "Cerrar Session"],
  }),
  methods: {
    Notification() {
      alert("DISTE CLICK");
    },
  },
};
</script>

<style scoped></style>
