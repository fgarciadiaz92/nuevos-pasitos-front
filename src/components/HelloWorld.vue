<template>
  <v-container class="pa-4 text-center">
    <div class="text-center"></div>
    <v-row align="left">
      <v-btn rounded color="primary" dark @click="modalNuevoPrueba"
        >Crear Nuevo
      </v-btn>
    </v-row>
    <v-row class="fill-height" align="center" justify="center">
      <template v-for="(item, i) in listadoDatos">
        <v-col :key="i" cols="12" md="4">
          <v-hover v-slot="{ hover }">
            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
              <v-img :src="item.img" height="225px"
                ><!--                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>-->
                <v-card-title class="text-h6 black--text">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="mt-4 subheading text-left">
                      {{ item.nombre_prueba }}
                    </p>

                    <div>
                      <p
                        class="ma-0 text-body-1 font-weight-bold font-italic text-left"
                      >
                        Cantidad Preguntas :{{ item.cantidad_preguntas }}
                      </p>
                      <p
                        class="text-caption font-weight-medium font-italic text-left"
                      >
                        Duracion :{{ item.duracion_prueba }} min
                      </p>
                      <p
                        class="text-caption font-weight-medium font-italic text-left"
                      >
                        Estado :{{ item.estado_prueba }}
                      </p>
                      <p
                        class="text-caption font-weight-medium font-italic text-left"
                      >
                        Autor :{{ item.autor_prueba }}
                      </p>
                    </div>

                    <div class="align-self-center">
                      <v-btn
                        v-for="(icon, index) in icons"
                        :key="index"
                        :class="{ 'show-btns': hover }"
                        :color="transparent"
                        icon
                      >
                        <v-icon
                          :class="{ 'show-btns': hover }"
                          :color="transparent"
                        >
                          {{ icon }}
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-row>
                </v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
    <div class="text-center p-t">
      <v-pagination v-model="page" :length="4" circle></v-pagination>
      <h4>Total :{{ cantidadDatos }}</h4>
    </div>
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Nueva Prueba
          </v-card-title>

          <v-card-text> OÑAA </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({
    page: 1,
    icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
    valores: [],
    dialog: false,
    items: [
      {
        title: "",
        text: "",
        subtext: "",
        img: "https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80",
      },
    ],
    transparent: "rgba(255, 255, 255, 0)",
  }),
  methods: {
    cargaDatos() {
      axios
        .get("http://127.0.0.1:8000/api/prueba/")
        .then((response) => {
          this.valores = response.data;
          console.log(response.data);
        })
        .catch((e) => console.log(e));
    },
    modalNuevoPrueba() {
      this.dialog = true;
      console.log("Holaa");
    },
  },
  mounted() {
    this.cargaDatos();
  },
  computed: {
    listadoDatos() {
      return this.valores;
    },
    cantidadDatos() {
      return this.valores.length;
    },
  },
};
</script>
<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
