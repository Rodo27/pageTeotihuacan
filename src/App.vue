<template>

  <b-container fluid id="app" class="body-content cover-full"> 

    <!-- NAVBAR-->
    <b-row align-v="center">
      <b-col sm="12">
        <b-navbar toggleable="md"  style="color: white;" >
          <b-navbar-brand to="" class="mx-3">
            <img src="@/assets/logo teo largo.png" style="height: 35px;" class="d-inline-block align-top" >
          </b-navbar-brand>  
        
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav  class="mx-auto">
              <b-nav-item to="inicio" class="mx-4 " ><b-icon icon="pen" font-scale=".9" variant="danger" /><b class="items-nav titles"> Inicio</b></b-nav-item >
              <b-nav-item to="municipio" class="mx-4"><b-icon icon="pen" font-scale=".9" variant="danger" /><b class="items-nav titles"> Tu Municipio</b></b-nav-item>
              <b-nav-item to="tramites" class="mx-4"><b-icon icon="pen" font-scale=".9" variant="danger" /><b class="items-nav titles"> Tramites En Linea</b></b-nav-item>
              <b-nav-item to="normatividad" class="mx-4"><b-icon icon="pen" font-scale=".9" variant="danger" /><b class="items-nav titles"> Normatividad</b></b-nav-item>
              <b-nav-item to="transparencia" class="mx-4"><b-icon icon="pen" font-scale=".9" variant="danger" /><b class="items-nav titles"> Transparencia</b></b-nav-item>

            </b-navbar-nav>               
          </b-collapse>
            
        </b-navbar>
      </b-col>
    </b-row>


    <router-view/>


    <!-- FOOTER -->
    <b-container fluid id="footer" class="mt-3 mb-2" >
      <b-row align-v="center">
        <b-col sm="12" md="6" lg="3" class="mt-3">
          <img src="@/assets/logo teo largo.png" style="height: 35px;" class="d-inline-block align-top mb-3" >
          <b-card-text>
            Domicilio
          </b-card-text>
          <b-card-text>
            Telefono
          </b-card-text>
      </b-col>

        <b-col sm="12" md="6" lg="3" class="mt-3">
            <b-card-text>
            Sitios De Interes
          </b-card-text>
          <b-card-text>
            Sitio 1
          </b-card-text>
          <b-card-text>
            Sitio 2
          </b-card-text>
          <b-card-text>
            Sitio 3
          </b-card-text>
        </b-col>

        <b-col sm="12" md="6" lg="3" class="mt-3">
          <b-card-text>
            Aviso De Privacidad
          </b-card-text>
          <b-card-text>
            Terminos y Condiciones
          </b-card-text>
        </b-col>

        <b-col sm="12" md="6" lg="3" class="mt-3">
          <b-card-text>
            Redes Sociales
          </b-card-text>
          <b-card-text>
            <a href="https://www.facebook.com/" class="social-links"><b-icon icon="facebook" class="social-icons"></b-icon></a>
          </b-card-text>
          <b-card-text>
            <a href="https://twitter.com/?lang=es" class="social-links"><b-icon icon="twitter" class="social-icons"></b-icon></a>
          </b-card-text>
          <b-card-text>
            <a href="https://www.youtube.com/" class="social-links"><b-icon icon="youtube" class="social-icons"></b-icon></a>
          </b-card-text>
        </b-col>

      </b-row>
    </b-container>

    
  </b-container>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#footer {
  background-color: red;
  color: #fff;
}


.img {
  padding: 2px;
  border-radius: 2em;
  height: 300px;
  width: 300px;
  box-shadow: 5px 5px rgb(170, 163, 163);
}

.img-carousel{
  height: 400px;
  width: 100%;
}

.pointer {
  cursor: pointer;
}

.body-content {
  background-color: white;
  /*background:linear-gradient(#6d8798,#83a2b6,#99bdd5,#afd8f3);*/
}

.target-card {
  background-color: red;
  border-radius: 2em;
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 5px rgb(170, 163, 163);
  color: #fff;
}

.cover-full {
  padding-left: 0 !important;
  padding-right: 0 !important;
  width: 100% !important;
}
/*
@font-face {
  font-family: arial-rounded-mt !important;
  src: url('/assets/fonts/arial-rounded-mt.ttf') format('truetype');
}

.titles {
  font-family: arial-rounded-mt;
  background-image: linear-gradient(to right,#EE207B,#0FABB6,#F68B1F,#78C042,#EE2E3A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
*/
@font-face {
  font-family: 'arial-rounded-mt-bold';
  src: url('assets/fonts/arial-rounded-mt-bold.ttf') format("truetype");

}

.titles {
  font-family: 'arial-rounded-mt-bold';
  background-image: linear-gradient(to right,#EE207B,#0FABB6,#F68B1F,#78C042,#EE2E3A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}



.items-nav {
  color:red;
}

.flipbook {
  width: 90vw;
  height: 90vh;
}

.social-links{ 
  color: white !important; 
  text-decoration: none;
}

.social-icons {
  width: 20px; 
  height: 20px;
}

.icons-cards {
  width: 120px; height: 120px;
}

</style>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
