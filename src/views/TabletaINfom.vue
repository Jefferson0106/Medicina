<template>
  <div class="main-containe">
    <div>
      <HeaderQa />
      <LogoYes />
    </div>
    <div class="container py-4 main-container">
      <div class="w-25">
        <img class="img-fluid rounded" src="@/assets/portada.jpg">
      </div>
      <div class="d-flex justify-content-end">
      <a href="http://localhost:8080/ReguistroQdes" target="_blank">
        <img src="@/assets/usuario.png" alt="icono" style="width: 30px  !important;">
      </a>
    </div>
    </div>
    <div class="container izquierda tableContainer ">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Telefono</th>
            <th scope="col">DNI</th>
            <th scope="col">Correo</th>
            <th scope="col">Genero</th>
            <th scope="col">Fecha de nacimiento</th>
            <th scope="col">Codigopostal</th>
            <th scope="col">editar</th>
            <th scope="col">Eliminar</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="paciente in getpaciente" :key="paciente.ID">
            <th scope="row">{{ paciente.ID }}</th>
            <td>{{ paciente.Nombre }}</td>
            <td>{{ paciente.Apellido }}</td>
            <td>{{ paciente.Telefono }}</td>
            <td>{{ paciente.DNI }}</td>
            <td>{{ paciente.Correo }}</td>
            <td>{{ paciente.Genero }}</td>
            <td>{{ paciente.Fechadenacimiento }}</td>
            <td>{{ paciente.Codigopostal }}</td>
            <td @click="editar(paciente.ID)" style="cursor: pointer; width: 20%;"><img src="@/assets/editar.svg"
                style="width: 50%;"></td>
            <td @click="eliminar(paciente.ID)" style="cursor: pointer; width: 10%;"><img src="@/assets/bazura.svg"
                style="width: 50%;"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <FooterQw />
    <div>

    </div>
  </div>
</template>
<script>
import HeaderQa from '@/components/HeaderQa.vue';
import FooterQw from '@/components/FooterQw.vue';
import LogoYes from '@/components/LogoYes.vue';
import axios from 'axios'
export default {
  name: "DasborErt",
  data() {
    return {
      getpaciente: null
    }
  },
  components: {
    HeaderQa,
    FooterQw,
    LogoYes

  },
  methods: {
    editar(ID) {
      this.$router.push('/EditarQre/' + ID);
    },
    eliminar(ID) {
      axios.delete('https://65b2ac419bfb12f6eafe43ea.mockapi.io/getpaciente/getpaciente/' + ID)
        .then(data => {
          console.log(data);

          let direccion = "https://65b2ac419bfb12f6eafe43ea.mockapi.io/getpaciente/getpaciente";
          axios.get(direccion).then(data => {
            this.getpaciente = data.data;
            console.log(data)
          });
        });
    }
  },
  mounted: function () {
    let direccion = "https://65b2ac419bfb12f6eafe43ea.mockapi.io/getpaciente/getpaciente";
    axios.get(direccion).then(data => {
      this.getpaciente = data.data;
      console.log(data)
    });
  }
}
</script>
<style scoped>
.izquierda {
  text-align: left;

}


.main-container {
  overflow: auto;
}
</style>