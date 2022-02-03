<template>

  <b-container fluid id="app" class="body-content cover-full"> 
    
      <!-- NAVBAR-->
      <b-row align-v="center">
        <b-col sm="12">
          <b-navbar  toggleable="md"  sticky fixed="top" style="background-color: rgba(255, 255, 255, 0.7); " >
            <b-navbar-brand to="" class="mx-3">
              <img src="@/assets/teotihuacan.png" style="height: 35px;" class="d-inline-block align-top" >
            </b-navbar-brand>  
          
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav  class="mx-auto">
                <b-nav-item to="inicio" class="mx-4 " ><b-icon icon="house-fill" font-scale=".9" variant="danger" /><b class="items-nav titles"> Inicio</b></b-nav-item >
                <b-nav-item to="municipio" class="mx-4"><b-icon icon="bell-fill" font-scale=".9" variant="danger" /><b class="items-nav titles"> Tu Municipio</b></b-nav-item>
                <b-nav-item to="gobierno" class="mx-4"><b-icon icon="diagram3-fill" font-scale=".9" variant="danger" /><b class="items-nav titles"> Gobierno</b></b-nav-item>
                <b-nav-item to="normatividad" class="mx-4"><b-icon icon="bookmark-check-fill" font-scale=".9" variant="danger" /><b class="items-nav titles"> Normatividad</b></b-nav-item>
                <b-nav-item to="transparencia" class="mx-4"><b-icon icon="search" font-scale=".9" variant="danger" /><b class="items-nav titles"> Transparencia</b></b-nav-item>

              </b-navbar-nav>               
            </b-collapse>
              
          </b-navbar>
        </b-col>
      </b-row>

    <b-row align="center" align-h="center" style="min-height:780px;">
      <b-col cols="12" >
        <router-view/>
      </b-col>
    </b-row>
    <br>
    <br>
    <br>
      <br>
    <!-- FOOTER -->
    <b-container fluid id="footer" class="mt-3 mb-2" >
      <br>
      <b-row align-v="center">
        <b-col cols="12" md="12" lg="3" >
          <!--
            <img src="@/assets/logo teo largo.png" style="height: 35px;" class="d-inline-block align-top mb-3" >
            -->
          <b-card-text class="mt-3">
            <b-icon icon="geo-alt-fill"/><b> Juarez No. 1, Col. Centro, C.P. 55800, Teotihuacán Edo. México</b>
          </b-card-text>
        </b-col>
         <b-col cols="12" md="12" lg="3" >
          <b-card-text class="mt-3">
            <b-icon icon="telephone-fill"/><b> 55 3667 4784</b>
          </b-card-text>
        </b-col>
<!--
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
        </b-col>
        -->

        <b-col cols="12" md="6" lg="3">
          <b-card-text class="mt-3 pointer" @click="showAvisoDePrivacidad=true">
            <b-icon icon="file-earmark-text-fill"/><b> Aviso De Privacidad</b>
          </b-card-text>
        </b-col>
        <b-col cols="12" md="6" lg="3" >
          <b-card-text class="mt-3 pointer" @click="showTerminosYCondiciones=true">
            <b-icon icon="file-earmark-text-fill"/><b> Terminos y Condiciones </b>
          </b-card-text>
        </b-col>
<!--
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
-->
      </b-row>
      <br>
      
    </b-container>

    <b-modal v-model="showAvisoDePrivacidad" size="lg" title="Aviso De Privacidad" hide-footer>
      <h1>En constucción ...</h1>
    </b-modal>

    <b-modal v-model="showTerminosYCondiciones" size="lg" title="Terminos Y Condiciones" hide-footer>
      <h1>En constucción ...</h1>
    </b-modal>


    
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
  background: linear-gradient(90deg, rgba(255,31,31,1) 0%, rgba(220,0,0,1) 100%);
  color: #fff;
}

.parallax {
  /* The image used */
  background-image: url("assets/teoprincipal.jpg");

  margin-top: -260px;
  /* Full height */
  /* Set a specific height */
  min-height: 1000px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}



.img {
  border-radius: 20px;
  height: 300px;
  width: 300px;
  box-shadow: 5px 5px 20px -2px #5f5f5f;
}

.img-carousel{
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
  font-family: 'Crossten Extrabold';
  src: url('assets/fonts/Horizon Type - Crossten Extrabold.otf') 

}

.titles {
  font-family: 'Crossten Extrabold';
}

.items-nav {
  color:rgb(229,0,0);
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
  color: black;
}
.action-bar .btn svg {
  bottom: 0;
}
.action-bar .btn:not(:first-child) {
  margin-left: 10px;
}
.has-mouse .action-bar .btn:hover {
  color: black;
  filter: drop-shadow(1px 1px 5px #000);
  cursor: pointer;
}
.action-bar .btn:active {
  filter: none !important;
}
.action-bar .btn.disabled {
  color: black;
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
  box-shadow: 5px 5px 20px -2px #5f5f5f;
}


#flipbook-body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #white;
  color: #ccc;
  overflow: hidden;
}

.c-shadow-sm{
  box-shadow: 5px 5px 20px -2px #5f5f5f;
  margin-bottom:10px;
  border-radius:25px !important;
}
.img-supposition-rounded{
  background: linear-gradient(90deg, rgba(28,81,141,1) 0%, rgba(0,57,120,1) 100%);
  box-shadow: 4px 4px 15px 1px #5f5f5f;
  border-radius: 50%;
  font-size:20px;
  padding:20px;
  width: 98px;
  height: 98px;
  position:absolute;
  top:-49px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}


.imagebackground1{
  border-radius: 20px;
  background-image: url("assets/plazateo1.jpg");
}

.imagebackground2{
  border-radius: 20px;
  background-image: url("assets/plazateo2.jpg");
}

.imagebackground3{
  border-radius: 20px;
  background-image: url("assets/plazateo3.jpg");
}

.redtransparent{
  border-radius: 20px;
  background:rgba(255, 0, 0, 0.671); 
}

</style>


 <script>
var TwitterWidgetsLoader = require("twitter-widgets");

export default {
  mounted() {
    TwitterWidgetsLoader.load();
  },
  data() {
    return {
      showAvisoDePrivacidad:false,
      showTerminosYCondiciones:false
    }
  }
};
</script>

