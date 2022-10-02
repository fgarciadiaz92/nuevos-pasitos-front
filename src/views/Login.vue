<template>
  <v-container>
    <v-card
      elevation="2"
      class="pa-2 align-self-center mx-auto"
      max-width="344"
    >
      <v-card-title class="d-flex justify-center">HOLA👋</v-card-title>
      <v-card-subtitle>BIENVENIDO AL LOGIN DE NUEVOS PASITOS</v-card-subtitle>
      <v-row>
        <v-col>
          <v-text-field
            label="Email"
            placeholder="Escribe tu email"
            filled
            rounded
            dense
            v-model="email"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Contraseña"
            placeholder="Escribe tu contraseña"
            type="password"
            filled
            rounded
            dense
            v-model="password"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn elevation="2" @click="login" block color="success"
            >Entrar</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <hr />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center">
          <v-btn class="ma-2" text icon color="red darken-2">
            <v-icon> mdi-google</v-icon>
          </v-btn>

          <v-btn class="ma-2" text icon color="blue darken-2">
            <v-icon> mdi-facebook</v-icon>
          </v-btn>

          <v-btn class="ma-2" text icon color="blue lighten-2">
            <v-icon> mdi-twitter</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      password: null,
      email: null,
    };
  },
  components: {},
  methods: {
    login() {
      console.log("EMAIL", this.email);
      console.log("CONTRA", this.password);
    },
  },
};
</script>

<style scoped></style>
