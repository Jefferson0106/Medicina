<template>
    <div>
        <HeaderQa />
        <LogoYes />
        <p style="background-color: green; color: #f1f1f1; font-weight: bold">
            Bienvenido a editar..
        </p>

        <div v-if="loaded" class="container">
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
                        <input type="text" class="form-control" name="Fechadenacimiento" ID="Fechadenacimiento"
                            v-model="form.Fechadenacimiento">
                    </div>
                </div>
                <div class="form-group left">
                    <label for="" class="control-label col-sm-2" style="color: black;">Codigo postal</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" name="Codigopostal" ID="Codigopostal"
                            v-model="form.Codigopostal">
                    </div>
                </div>


                <div class="form-group">
                    <button type="button" class="btn btn-primary" v-on:click="editar()">Editar</button>
                    <button type="button" class="btn btn-dark margen " v-on:click="salir()"
                        style="color: black;">Salir</button>
                </div>
            </form>
        </div>

        <div v-else>
            Cargando...
        </div>

        <!--FooterQw/>-->
        <div>
            <!--OseaNo/> -->
        </div>
        <AvatarQasd />
    </div>
</template>
<script>
///import FooterQw from '@/components/FooterQw.vue';
import HeaderQa from '@/components/HeaderQa.vue';
import AvatarQasd from '@/components/AvatarQasd.vue';
// import OseaNo from '@/components/OseaNo.vue';
import LogoYes from '@/components/LogoYes.vue';
import axios from 'axios'
export default {
    name: "EditarCvr",
    components: {
        HeaderQa,
        AvatarQasd,
        LogoYes
        //  OseaNo
        // FooterQw
    },
    data: function () {
        return {
            ID: null,
            loaded: false,
            form: {
                "ID": "",
                "Nombre": "",
                "Apellido": "",
                "DNI": "",
                "Correo": "",
                "Telefono": 0,
                "Genero": "",
                "Fechadenacimiento": "",
                "Codigopostal": "",
                "Token": "",
            }
        }
    },
    methods: {
        editar() {
            axios.put('https://65b2ac419bfb12f6eafe43ea.mockapi.io/getpaciente/getpaciente/'+this.ID, this.form)
                .then(data => {
                    console.log(data);
                    this.$router.push("/TabletaINfom");
                })
        },
        salir() {
            this.$router.push("/TabletaINfom");
        }
    },
    mounted() {
        this.ID = this.$route.params.id;
        axios.get('https://65b2ac419bfb12f6eafe43ea.mockapi.io/getpaciente/getpaciente/' + this.ID)
            .then(data => {

                console.log(data)
                this.form.Nombre = data.data.Nombre;
                this.form.Apellido = data.data.Apellido;
                this.form.DNI = data.data.DNI;
                this.form.Correo = data.data.Correo;
                this.form.Telefono = data.data.Telefono;
                this.form.Genero = data.data.Genero;
                this.form.Fechadenacimiento = data.data.Fechadenacimiento;
                this.form.Codigopostal = data.data.Codigopostal;
                this.form.Token = localStorage.getItem("token");
                console.log(this.form);

                this.loaded = true
            })
    }
}
</script>

<style scoped>
.left {
    text-align: left;
}

.container {
    background-color: green;
}</style>