<template>
  <v-row justify="space-around">
    <v-icon
      large
      color="blue darken-2"
      @click="Notification"
    >
      mdi-bell-badge
    </v-icon>
    <v-menu
      v-for="([text, rounded], index) in btns"
      :key="text"
      :rounded="rounded"
      offset-y
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          :color="colors[index]"
          class="white--text ma-5"
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
      </v-list>
    </v-menu>
  </v-row>
</template>

<script>
export default {
  name: "NavbarUsuario",
  data: () => ({
    btns: [["Nombre Usuario  ", "0"]],
    colors: ["deep-purple accent-4"],
    items: ["Editar Perfil", "Cerrar Session"],
  }),
  methods:{
    Notification(){
      alert("HOLAA")
    },
  }
};
</script>

<style scoped></style>
