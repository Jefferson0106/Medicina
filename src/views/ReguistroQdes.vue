<template>
  <div>
   <HeaderQa/>
   <LogoYes/>
     <div>
          <div class="row justify-content-center">
      <img  src="@/assets/portada.jpg" width="350px" alt="">
      </div>
      </div>
      <div>
      </div>
   <div>
      <form action="" class="form-horizontal">
          <div class="form-group left">
              <label for="" class="control-label col-sm-2" style="color: black;">Nombre</label>
              <div class="col-sm-10">
                  <input type="text" class="form-control" name="Nombre" ID="Nombre" v-model="form.Nombre">
              </div>
          </div>
          <div class="form-group left">
              <label for="" class="control-label col-sm-2" style="color: black;">Apellido</label>
              <div class="col-sm-10">
                  <input type="text" class="form-control" name="Apellido" ID="Apellido" v-model="form.Apellido">
              </div>
          </div>
          <div class="form-group left">
              <label for="" class="control-label col-sm-2" style="color: black;">DNI</label>
              <div class="col-sm-10">
                  <input type="text" class="form-control" name="DNI" ID="DNI" v-model="form.DNI">
              </div>
          </div>
          <div class="form-group left">
              <label for="" class="control-label col-sm-2" style="color: black;">Correo</label>
              <div class="col-sm-10">
                  <input type="text" class="form-control" name="Correo" ID="Correo" v-model="form.Correo">
              </div>
          </div>
          <div class="form-group left">
              <label for="" class="control-label col-sm-2" style="color: black;">Telefono</label>
              <div class="col-sm-10">
                  <input type="text" class="form-control" name="Telefono" ID="Telefono" v-model="form.Telefono">
              </div>
          </div>
          <div class="form-group left">
              <label for="" class="control-label col-sm-1" style="color: black;">Genero</label>
              <div class="col-sm-10">
                  <input type="text" class="form-control" name="Genero" ID="Genero" v-model="form.Genero">
              </div>
          </div>
          <div class="form-group left">
              <label for="" class="control-label col-sm-2" style="color: black;">Fecha de nacimiento</label>
              <div class="col-sm-10">
                  <input type="text" class="form-control" name="Fechadenacimiento" ID="Fechadenacimiento" v-model="form.Fechadenacimiento">
              </div>
          </div>
          <div class="form-group left">
              <label for="" class="control-label col-sm-2" style="color: black;">Codigo postal</label>
              <div class="col-sm-10">
                  <input type="text" class="form-control" name="Codigopostal" ID="Codigopostal" v-model="form.Codigopostal">
              </div>
          </div>
          <div>

          </div>


          <div class="form-group">
              <button type="button" class="btn btn-primary" v-on:click="guardar()">Guardar</button>
              <button type="button" class="btn btn-dark margen " v-on:click="salir()">Salir</button>
          </div>
      </form>
     
   </div>
   <AvatarQasd/>
  </div>
</template>
<script>
import HeaderQa from '@/components/HeaderQa.vue';
import LogoYes from '@/components/LogoYes.vue';
import AvatarQasd from '@/components/AvatarQasd.vue';
import axios from 'axios'
export default{
  name: "NuevoQsd",
  data:function(){
      return {
          ID:null,
          form:{
  "ID": "",
  "Nombre": "",
  "Apellido": "",
  "DNI": "",
  "Correo": "",
  "Telefono": "",
  "Genero": "",
  "Fechadenacimiento": "",
  "Codigopostal": "",
  "Token": "",
          }
      }
  },
  components:{
   HeaderQa,
   LogoYes,
   AvatarQasd,
  },
  methods:{
      guardar(){
      this.form.Token = localStorage.getItem("Token");
      axios.post("https://65b2ac419bfb12f6eafe43ea.mockapi.io/getpaciente/getpaciente", this.form)
      .then(data =>{
         console.log(data);
         this.makeToast("Hecho", "paciente creado","success")
         this.$router.push("/daisborqa");
      })
      },
      salir(){
          this.$router.push("/daisborqa");
      },
      makeToast(titulo, texto, tipo) {
        this.toastCount++
        this.$bvToast.toast(texto, {
          title: titulo,
          variant: tipo,
          autoHideDelay: 5000,
          appendToast: true
      })
    }
  }
}
</script>
<style scoped>
.left{
  text-align: left;
  background-color: blue;
  border: red;
}

</style>
