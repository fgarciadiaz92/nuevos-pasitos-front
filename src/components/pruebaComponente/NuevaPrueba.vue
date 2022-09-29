<template>
  <v-row class="left">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          raised
        >
         Nuevo
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Crear</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Nombre Prueba*"
                  required
                  v-model="prueba.nombre_prueba"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Descripcion"
                  required
                  v-model="prueba.descripcion"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Cantidad Preguntas*"
                  required
                  v-model="prueba.cantidad_preguntas"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Duracion*"
                  required
                  v-model="prueba.duracion"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Cantidad Alumnos*"
                  required
                  v-model="prueba.cantidad_alumnos"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                  :items=listadoDatos
                  label="Tipo Calificacion*"
                  required
                  v-model="prueba.tipo_calificacion"
                ></v-select>
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*Campos Obligatorios</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            text
            @click="dialog = false"
          >
            Cerrar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="enviarDatos"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "@/store/axios";

export default {
  name: "NuevaPrueba",
  data () {
    return {
      dialog: false,
      prueba:{},
      valores:[]
    }
  },
  methods:{
    enviarDatos(){
      console.log(this.prueba)
    },
      async cargaDatos() {
        let valores = await axios.get("/tipo-calificacion");
        this.valores = valores.data;
      },
  },
  mounted() {
    this.cargaDatos();

  },
  computed: {
    listadoDatos() {
      return this.valores.map(index=>index.nombre_calificacion);
    },
  },
};
</script>

<style scoped>

</style>