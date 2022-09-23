<template>
  <div class="row">
    <div v-for="item in listadoDatos" class="col-sm-3">
      <v-card class="mx-auto teal lighten-5 " max-width="500" outlined >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">{{item.autor_prueba }}</div>
            <v-list-item-title class="text-h5 mb-1">
              {{ item.nombre_prueba }}</v-list-item-title
            >
            <v-list-item-subtitle> {{item.descripcion_prueba }}</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey">Estado</v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-chip class="ma-2" color="deep-purple accent-4" outlined>
            <v-icon left> mdi-clock-time-seven-outline </v-icon>
            {{item.duracion_prueba }} Min
          </v-chip>
          <v-chip class="ma-2" color="deep-purple accent-4" outlined>
            <v-icon left> mdi-account-multiple </v-icon>
            {{item.cantidad_alumnos }} Alumnos
          </v-chip>
          <v-chip class="ma-2" color="deep-purple accent-4" outlined>
            <v-icon left> mdi-book-open-outline </v-icon>
            {{item.cantidad_preguntas }}
          </v-chip>
          <v-btn depressed color="deep-purple accent-4" outlined rounded icon @click="verMas(item)">
            ...
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "@/store/axios";

export default {
  name: "Tarjeta",

  data: () => ({
    valores: [],
  }),
  methods: {
    async cargaDatos() {
      let valores = await axios.get("/prueba");
      this.valores = valores.data;
    },
    verMas(item){
      console.log(item.id_prueba)
      this.$router.push({ name: 'creadorPrueba', params: { id: item.id_prueba } })
    }
  },
  mounted() {
    this.cargaDatos();
  },
  computed: {
    listadoDatos() {
      return this.valores;
    },
  },
};
</script>

<style scoped></style>
