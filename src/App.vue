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
            <b>Sitios De Interes</b>
          </b-card-text>
          <b-card-text>
            <a href="https://www.facebook.com/" class="social-links">
              <b-icon icon="link" class="social-icons"></b-icon> Sitio 1
            </a>
          </b-card-text>
          <b-card-text>
            <a href="https://www.facebook.com/" class="social-links">
              <b-icon icon="link" class="social-icons"></b-icon> Sitio 2
            </a>
          </b-card-text>
          <b-card-text>
            <a href="https://www.facebook.com/" class="social-links">
              <b-icon icon="link" class="social-icons"></b-icon> Sitio 3
            </a>
          </b-card-text>
        </b-col>

        <b-col sm="12" md="6" lg="3" class="mt-3">
          <b-card-text>
            <b>Aviso De Privacidad</b> 
          </b-card-text>
          <b-card-text>
            <b>Terminos y Condiciones</b> 
          </b-card-text>
        </b-col>

        <b-col sm="12" md="6" lg="3" class="mt-3">
          <b-card-text>
            <b>Redes Sociales</b>
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

@font-face {
  font-family: 'arial-rounded-mt-bold';
  src: url('assets/fonts/arial-rounded-mt-bold.ttf') format("truetype");

}

.titles {
  font-family: 'arial-rounded-mt-bold';
}

.items-nav {
  color:red;
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


/* styles flipbook*/


.action-bar {
  width: 100%;
  height: 30px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.action-bar .btn {
  font-size: 30px;
  color: #999;
}
.action-bar .btn svg {
  bottom: 0;
}
.action-bar .btn:not(:first-child) {
  margin-left: 10px;
}
.has-mouse .action-bar .btn:hover {
  color: #ccc;
  filter: drop-shadow(1px 1px 5px #000);
  cursor: pointer;
}
.action-bar .btn:active {
  filter: none !important;
}
.action-bar .btn.disabled {
  color: #666;
  pointer-events: none;
}
.action-bar .page-num {
  font-size: 12px;
  margin-left: 10px;
}


.flipbook .viewport {
  width: 200vw;
  /*height: calc(100vh - 50px - 40px);*/
  height: 100vh;
}

.flipbook {
  height: 90vh;
}

.flipbook .bounding-box {
  box-shadow: 0 0 20px #000;
}


#flipbook-body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  color: #ccc;
  overflow: hidden;
}


</style>


 <script>
var TwitterWidgetsLoader = require("twitter-widgets");

export default {
  mounted() {
    TwitterWidgetsLoader.load();
  }
};
</script>

