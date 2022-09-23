<template v-for="item in listadoDatos">

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
    </div>
    <template>
      <v-row justify="center">
        <v-dialog
          v-model="dialog"
          persistent
          max-width="290"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Open Dialog
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5">
              Use Google's location service?
            </v-card-title>
            <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
              >
                Disagree
              </v-btn>
              <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
              >
                Agree
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </v-container>
</template>
<script>
import axios from "@/store/axios";

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
    async cargaDatos() {
      let valores=await axios.get("/prueba")
      this.valores=valores.data
    },
    async cargaDatosDetalles() {
      let valores=await axios.get("/prueba/1")
      console.log("SOY EL DETALLE",valores.data)
    },
    modalNuevoPrueba() {
      this.dialog = true;
      console.log("Holaa");
    },
  },
  mounted() {
    this.cargaDatos();
    this.cargaDatosDetalles()
  },
  computed: {
    listadoDatos() {
      return this.valores;
    },
    cantidadDatos() {
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
