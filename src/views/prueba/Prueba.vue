<template>
  <div class="container">
    <div class="row pb-4">
      <div class="col-12">
        <NuevaPrueba />
      </div>

    </div>
    <div class="row">
      <div><Tarjeta/></div>
    </div>
  </div>
</template>

<script>
import NuevaPrueba from "@/components/pruebaComponente/NuevaPrueba";
import Tarjeta from "@/components/pruebaComponente/Tarjeta";
import axios from "@/store/axios";
export default {
  name: "Prueba",
  components: {
    NuevaPrueba,
    Tarjeta,
  },
};
</script>

<style scoped></style>
