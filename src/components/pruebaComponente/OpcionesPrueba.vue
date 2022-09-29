<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="6">
        <v-select
          v-model="select"
          :hint="`${select.state}, ${select.id}`"
          :items="items"
          item-text="state"
          item-value="abbr"
          label="Selecciona un tipo de prueba"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
    </v-row>
    <div v-if="select.id == 1"><verdaderoFalso :numeroPregunta="datos" /></div>
    <div v-if="select.id == 2"><seleccionPregunta/></div>
    <div v-if="select.id == 3">3</div>
  </v-container>
</template>

<script>
import verdaderoFalso from "@/components/formatoPreguntas/VerdaderoFalso";
import seleccionPregunta from "@/components/formatoPreguntas/SeleccionPregunta";

export default {
  props: ["datos"],
  name: "OpcionesPrueba",
  data() {
    return {
      select: { state: "Sin estado", id: "0" },
      items: [
        { state: "Verdadero o Falso", id: "1" },
        { state: "Seleccion Multiple", id: "2" },
        { state: "Termino Pareados", id: "3" },
      ],
    };
  },
  components: {
    verdaderoFalso,
    seleccionPregunta
  },
};
</script>

<style scoped></style>
