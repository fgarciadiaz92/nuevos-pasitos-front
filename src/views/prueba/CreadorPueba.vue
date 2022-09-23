<template>
  <div class="row">
    <div class="col">
      <v-card elevation="20" outlined>
        <v-card-title class="pb-8"
          >{{ datos.nombre_prueba }} Preguntas
          {{ datos.cantidad_preguntas }}</v-card-title
        >
        <div>
          <v-stepper v-model="e1">
            <v-stepper-header>
              <template v-for="n in cantidadPreguntas">
                <v-stepper-step
                  :key="`${n}-step`"
                  :complete="e1 > n"
                  :step="n"
                  editable
                >
                  Pregunta {{ n }}
                </v-stepper-step>

                <v-divider v-if="n !== steps" :key="n"></v-divider>
              </template>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content
                v-for="n in steps"
                :key="`${n}-content`"
                :step="n"
              >
                <v-card class="mb-12" color="grey lighten-1 "
                  >
                  <OpcionesPrueba :datos="n"/>
                </v-card
                >

                <v-btn color="primary" @click="nextStep(n)"> Continuar </v-btn>

                <v-btn text> Atras </v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "@/store/axios";
import OpcionesPrueba from "@/components/pruebaComponente/OpcionesPrueba";

export default {
  name: "CreadorPueba",
  components:{
    OpcionesPrueba
  },
  data: () => ({
    valores: [],
    e1: 1,
    steps: 2,
  }),
  methods: {
    async cargaDatos() {
      let valores = await axios.get("/prueba/" + this.$route.params.id);
      console.log(valores.data);
      this.valores = valores.data;
    },
    nextStep(n) {
      console.log("steps", n);
      if (n === this.steps) {
        this.e1 = 1;
      } else {
        this.e1 = n + 1;
      }
    },
  },
  mounted() {
    this.cargaDatos();
  },
  computed: {
    datos() {
      return this.valores;
    },
    cantidadPreguntas() {
      return (this.steps = Number(this.valores.cantidad_preguntas));
    },
  },
  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    },
  },
};
</script>

<style scoped></style>
