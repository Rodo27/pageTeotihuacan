<template>
  <div>
    <!--
    <div class="parallax">
    </div>
    -->
    <!-- CAROUSEL-->
    <b-row>
      <b-col cols="12" >
        <div>
          <b-carousel indicators :interval="5000" controls >
            <b-carousel-slide
                
                :img-src="require('../assets/teoprincipal.jpg')"
                ></b-carousel-slide>
                <b-carousel-slide
                
                :img-src="require('../assets/teoprincipal.jpg')"
                ></b-carousel-slide>
                <b-carousel-slide
                
                :img-src="require('../assets/teoprincipal.jpg')"
                ></b-carousel-slide>
          </b-carousel>
        </div>
      </b-col>
    </b-row>

    <h1 class="titles mt-5">
     <span style="color: #ee207b">Bi</span>
          <span style="color: #0fabb6">en</span>
          <span style="color: #f68b1f">ve</span>
          <span style="color: #78c042">ni</span>
          <span style="color: #ee2e3a">do</span>
          <span style="color: #ee207b">s</span>
    </h1>

    <!-- ANUNCIOS-->
    <b-row align-h="center" align="center" class="mt-5">
      <b-col cols="11" sm="10" md="10" lg="8">
        <div class="c-shadow-sm">
          <b-carousel indicators :interval="3000" controls >
            <b-carousel-slide
              class="img-carousel"
              :img-src="require('../assets/banner2.png')"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </b-col>
    </b-row>

    <br /><br /><br /><br />

    <!-- IMAGE | CARD 
    <b-row align-h="center" align-v="center" class="mx-1">
      <b-col sm="12" md="6">
        <b-link to="whitepage">
          <img center src="@/assets/image.jpg" responsive class="img" />
        </b-link>
      </b-col>
      <b-col sm="12" md="6" class="text-center mt-3">
        <h1 class="titles">
          <span style="color: #ee207b">Bi</span>
          <span style="color: #0fabb6">en</span>
          <span style="color: #f68b1f">ve</span>
          <span style="color: #78c042">ni</span>
          <span style="color: #ee2e3a">dos</span>
        </h1>

        <b-card title="Card Title" class="mb-3">
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <br /><br /><br /><br />-->

    <!-- CATALOGO DE TRAMITES -->
    <b-row>

        <br>
        <h1 class="titles">
          <span style="color:#EE207B">Tr</span>
          <span style="color:#0FABB6">á</span>
          <span style="color:#F68B1F">mi</span>
          <span style="color:#78C042">t</span>
          <span style="color:#EE2E3A">es</span>
           <span style="color:#EE207B"> En</span>
          <span style="color:#0FABB6"> Lí</span>
          <span style="color:#F68B1F">ne</span>
          <span style="color:#78C042">a</span>
        </h1>
    </b-row>

    <b-row align-h="center" align="center">
        <b-col cols="10" sm="8" md="10" lg="8" class="mt-5" >
          <b-row align-h="center" align="center">

            <b-col cols="7" sm="8" md="4" class="mt-5" >
              <div class="imagebackground1 c-shadow-sm" style="cursor:pointer;" @click="showSiprem=true">
                <div class="redtransparent">
                  <b-row >
                    <b-col cols="12" class="mt-5">
                      <b-icon style="color:white;" font-scale="6" icon="house-door"></b-icon>
                    </b-col>
                    <b-col cols="12" style="color:white;" class="mt-4 mb-5"><h4>Impuesto Predial</h4>
                    </b-col>
                  </b-row>
                </div>               
              </div>                      
            </b-col>

            <b-col cols="7" sm="8" md="4" class="mt-5" >
              <div class="imagebackground2 c-shadow-sm" style="cursor:pointer;" @click="showSiprem=true">
                <div class="redtransparent">
                  <b-row >
                    <b-col cols="12" class="mt-5">
                      <b-icon style="color:white;" font-scale="6" icon="file-earmark-text"></b-icon>
                    </b-col>
                    <b-col cols="12" style="color:white;" class="mt-4 mb-5"><h4>Facturación</h4>
                    </b-col>
                  </b-row>
                </div>               
              </div>                      
            </b-col>

            <b-col cols="7" sm="8" md="4" class="mt-5" >
              <div class="imagebackground3 c-shadow-sm" style="cursor:pointer;" @click="showGobinet=true">
                <div class="redtransparent">
                  <b-row >
                    <b-col cols="12" class="mt-5">
                      <b-icon style="color:white;" font-scale="6" icon="columns-gap"></b-icon>
                    </b-col>
                    <b-col cols="12" style="color:white;" class="mt-4 mb-5"><h4>Trámites En Línea</h4>
                    </b-col>
                  </b-row>
                </div>               
              </div>                      
            </b-col>
            
          </b-row>
        </b-col> 
    </b-row>

    <br /><br /><br /><br />
    <b-row class="mt-5">
      <b-col>
        <h1 class="titles">
          <span style="color:#EE207B">Or</span>
          <span style="color:#0FABB6">ga</span>
          <span style="color:#F68B1F">ni</span>
          <span style="color:#78C042">sm</span>
          <span style="color:#EE2E3A">os</span>
          <span style="color:#EE207B"> Au</span>
          <span style="color:#0FABB6">xi</span>
          <span style="color:#F68B1F">li</span>
          <span style="color:#78C042">ar</span>
          <span style="color:#EE2E3A">es</span>
        </h1>
        <br><br>
      </b-col>
    </b-row>
    <!-- CARDS-->
    <b-row align-v="center" align-h="center" align="center">
      <b-col cols="10" sm="7" md="4" lg="3" xl="2">
        <b-card style="margin-top:40px; margin-bottom:60px;  " class="c-shadow-sm"  >
          <b-row align="center" justify="center">
            <b-col>
            <div class="img-supposition-rounded">
              <div :style="iconBall"> 
                <img width="45px;" height="45px;" style="margin-top:25px;" :src="require('../assets/palacio.png')" />
              </div>
            </div>
            </b-col>
          </b-row>
          <b-row  style="min-height:60px;" class=" text-center" align-h="center" align-v="center">
            <b-col style=" margin-top:60px; min-height:60px;" cols="12">
              <h5><b>Imcufidet</b></h5>
              </b-col>
          </b-row>   
          <b-row><b-col class="mb-1"><b-button pill size="sm" variant="secondary">Conoce más <b-icon icon="arrow-right-circle-fill"/></b-button></b-col></b-row>
        </b-card>
      </b-col>
      <br>
      <b-col cols="10" sm="7" md="4" lg="3" xl="2">
        <b-card class=" c-shadow-sm" style="margin-top:40px; margin-bottom:60px; min-height:60px;" >
          <b-row align="center" justify="center">
            <b-col>
            <div class="img-supposition-rounded">
              <div :style="iconBall"> 
                <img width="45px;" height="45px;" style="margin-top:25px;" :src="require('../assets/family-room.png')" />
              </div>
            </div>
            </b-col>
          </b-row>
          <b-row  style="min-height:60px;" class=" text-center" align-h="center" align-v="center">
            <b-col style=" margin-top:60px; min-height:60px;" cols="12">
              <h5><b>DIF Municipal</b></h5>
              </b-col>
          </b-row>   
          <b-row><b-col class="mb-1"><b-button pill size="sm" variant="secondary">Conoce más <b-icon icon="arrow-right-circle-fill"/></b-button></b-col></b-row>
        </b-card>
      </b-col>
      <br>
      <b-col cols="10" sm="7" md="4" lg="3" xl="2">
        <b-card class=" c-shadow-sm" style="margin-top:40px; margin-bottom:60px; " >
          <b-row align="center" justify="center">
            <b-col>
            <div class="img-supposition-rounded">
              <div :style="iconBall"> 
                <img width="45px;" height="45px;" style="margin-top:25px;" :src="require('../assets/agua.png')" />
              </div>
            </div>
            </b-col>
          </b-row>
          <b-row  style="min-height:60px;" class=" text-center" align-h="center" align-v="center">
            <b-col style=" margin-top:60px; min-height:60px;" cols="12">
              <h5><b>Organismo de Agua</b></h5>
              </b-col>
          </b-row>   
          <b-row><b-col class="mb-1"><b-button pill size="sm" variant="secondary">Conoce más <b-icon icon="arrow-right-circle-fill"/></b-button></b-col></b-row>
        </b-card>
      </b-col>
    </b-row>

    <br /><br /><br /><br />

    <!-- CARDS CONTACT -->
    <b-row align-v="center" align-h="center" align="center" class="pt-4 mx-1">
      <h1 class="titles">
          <span style="color: #ee207b">Nú</span>
          <span style="color: #0fabb6">me</span>
          <span style="color: #f68b1f">ro</span>
          <span style="color: #78c042">s</span>
          <span style="color: #ee207b"> de</span>
          <span style="color: #0fabb6"> Em</span>
          <span style="color: #f68b1f">er</span>
          <span style="color: #78c042">ge</span>
          <span style="color: #ee2e3a">nc</span>
          <span style="color: #ee207b">ia</span>
        </h1>
    </b-row>
    <div style="background: linear-gradient(90deg, rgba(221,221,221,1) 0%, rgba(219,219,219,1) 0%, rgba(164,164,164,1) 100%); margin-top:250px;">
      <b-row align-v="center" align-h="center" align="center" class="pt-4 mx-1">
        <b-col cols="12" style="margin-top:-250px;">
          <b-link to="whitepage">
            <b-img
              center
              :src="require('../assets/phone-eme.png')"
              style="max-height:500px"
            ></b-img>
          </b-link>
        </b-col>

        <b-col cols="10" sm="7" md="4" lg="3" xl="2" class="mt-4">
          <b-card class="c-shadow-sm" style="min-height:155px;">
            <b-icon
              icon="shield-fill-check"
              font-scale="2"
              class="pointer"
              variant="danger"
            ></b-icon>
            <b-card-text>
              <b><p>Seguridad Pública</p></b>
              <b-icon  icon="telephone-fill"></b-icon><span> 55 3667 4784</span>
            </b-card-text>
          </b-card>
        </b-col>

        <b-col cols="10" sm="7" md="4" lg="3" xl="2" class="mt-4">
          <b-card class="c-shadow-sm" style="min-height:155px;">
          <b-icon
            icon="bell-fill"
            font-scale="2"
            class="pointer"
            variant="danger"
          ></b-icon>
          <b-card-text>
            <b><p >Protección Civil y Bomberos</p></b>
            <b-icon icon="telephone-fill"></b-icon><span> 594 956 8483</span>
          </b-card-text>
          </b-card>
        </b-col>

        <b-col cols="10" sm="7" md="4" lg="3" xl="2" class="mt-4">
          <b-card class="c-shadow-sm" style="min-height:155px;">
          <b-icon
            icon="bag-plus-fill"
            font-scale="2"
            class="pointer"
            variant="danger"
          ></b-icon>
          <b-card-text>
            <b><p>Cruz Roja Mexicana</p></b>
            <b-icon icon="telephone-fill"></b-icon><span> 594 958 4900</span>
          </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <br><br>
    </div>

    <br /><br /><br /><br />

    <b-row align-h="center">
      <h1 class="titles">
          <span style="color: #ee207b">Re</span>
          <span style="color: #0fabb6">de</span>
          <span style="color: #f68b1f">s</span>
          <span style="color: #ee207b"> So</span>
          <span style="color: #0fabb6">ci</span>
          <span style="color: #f68b1f">al</span>
          <span style="color: #78c042">es</span>
        </h1>
      <b-col sm="12" md="6" lg="6" class="mt-3">
        <b-container fluid 
          style="
            max-width: 550px;
            min-width: 100px;
            overflow-y: scroll;
            overflow-x: scroll;
            aling: center;
          "

          class="py-5 c-shadow-sm"
        
        >
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMunicipioConTradicionyFuturo&tabs=timeline&width=550&height=837&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1147021662499057"
            height="1000"
            style="border: none; overflow: hidden; width:100%"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            data-adapt-container-width="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            
          ></iframe>
        </b-container>
      </b-col>
      
    </b-row>
    <b-modal v-model="showSiprem" size="lg" title="Tesorería En Línea" hide-footer>
      <b-embed
        type="iframe"
        src="http://siprem-221621.appspot.com/teotihuacan/portalcontribuyente"
        allowfullscreen     
        style="width:100%; height:1000px;"
        >

      </b-embed>
    </b-modal>
    <b-modal v-model="showGobinet" size="lg" title="Trámites En Línea" hide-footer>
      <h1>En constucción ...</h1>
    </b-modal>
  </div>
</template>
<script>

  export default {
    computed: {
      styleIconBall: function(){
        var style = this.iconBall;
        if(this.width <= 768){
          style=this.iconBallSm;
        }
        return style;
      },
      iconBall: function(){
        return " display: block; width: 100%; height: 100%; align-items: center; " +
        "background: linear-gradient(90deg, rgba(255,31,31,1) 0%, rgba(248,0,0,1) 100%);" +
        "border-radius: 50%; " +
        "box-shadow: inset -25px -25px 40px rgba(10,10,30,.4); " +
        "background-image: -webkit-linear-gradient(-45deg, rgba(255,255,220,.2) 0%, transparent 100%); " +
        "background-image: -moz-linear-gradient(-45deg, rgba(255,255,220,.2) 0%, transparent 100%); " +
        "background-image: -o-linear-gradient(-45deg, rgba(255,255,220,.2) 0%, transparent 100%); " +
        "background-image: -ms-linear-gradient(-45deg, rgba(255,255,220,.2) 0%, transparent 100%); " +
        "position:absolute; left: 0px; top:0px; text-align:center; ";
      }
    },
    data() {
      return {
        showSiprem:false,
        showGobinet:false
      }
    }
    
  }
</script>