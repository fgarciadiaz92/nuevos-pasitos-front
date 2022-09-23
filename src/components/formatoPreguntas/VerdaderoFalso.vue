<template>
  <div>
    <v-card color="grey lighten-1"
      <v-text-field
        v-model="pregunta"
        label="Escriba una pregunta"
        required
        class="mb-8"
      ></v-text-field>
    <v-container
      class="px-0"
      fluid
    >
      <v-container
        class="px-0"
        fluid
      >
        <v-radio-group v-model="valor">
          <v-radio
            v-for="item in opciones"
            :key="item.id"
            :label="item.nombre"
            :value="item.id"
            color="success"
          ></v-radio>
        </v-radio-group>
      </v-container>
    </v-container>
    <v-col
      align="right"
      justify="space-around"

    >
      <v-btn
        depressed color="success"
        @click="guardarPregunta"
      >
       <v-icon>mdi-content-save </v-icon>
        Guardar Pregunta
      </v-btn>
    </v-col>
  </div>

</template>

<script>
export default {
  name: "VerdaderoFalso",
  props: ["numeroPregunta"],
  data(){
    return{
      pregunta:'',
      radioGroup: 1,
      opciones:[
        {id:"1",nombre:"Verdadero"},
        {id:"2",nombre:"Falso"}
      ],
      /*datosEnviado:[],*/
      valor:0,
    }
  },
  methods:{
    generarDatos(){
      console.log("Pregunta",pregunta)
    },
    guardarPregunta(){
      const datosEnviado=[]
      console.log(datosEnviado.length)
      if(datosEnviado.length === 0){
        let variables=
          {
            numeroPregunta:this.numeroPregunta,
            pregunta:this.pregunta,
            respuesta:this.valor
          }
        datosEnviado.push(variables)

      }
      console.log(datosEnviado)

    },
    datosEnviado(){

    }
  }


};
</script>

<style scoped>

</style>