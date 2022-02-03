<template>
  <div>
    <!-- CAROUSEL-->
    <b-row>
      <b-col cols="12" >
        <div>
          <b-carousel indicators :interval="3000" controls >
            <b-carousel-slide
              class="img-carousel"
              :img-src="require('../assets/plazateo.jpg')"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </b-col>
    </b-row>
    <div>
      <br>
        <h1 class="titles">
          <span style="color:#EE207B">Tra</span>
          <span style="color:#0FABB6">ns</span>
          <span style="color:#F68B1F">par</span>
          <span style="color:#78C042">en</span>
          <span style="color:#EE2E3A">cia</span>
        </h1>
    </div>
    <!-- CARDS-->
    <b-row align-v="center" align-h="center" class="mt-5">
      <b-col sm="12" md="3">
        <b-card class=" c-shadow-sm" style="margin-top:40px; margin-bottom:60px; min-height:160px;" >
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
            <b-col style=" margin-top:60px;" cols="12">
              <h4><b>SAIMEX</b></h4>
              </b-col>
          </b-row>   
          <b-row><b-col class="mb-1"><b-button pill size="sm" variant="secondary">Ir al Sitio <b-icon icon="arrow-right-circle-fill"/></b-button></b-col></b-row>
        </b-card>
      </b-col>

      <b-col sm="12" md="3">
        <b-card class=" c-shadow-sm" style="margin-top:40px; margin-bottom:60px; min-height:160px;" >
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
            <b-col style=" margin-top:60px;" cols="12">
              <h4><b>INFOEM</b></h4>
              </b-col>
          </b-row>   
          <b-row><b-col class="mb-1"><b-button pill size="sm" variant="secondary">Ir al Sitio <b-icon icon="arrow-right-circle-fill"/></b-button></b-col></b-row>
        </b-card>
      </b-col>

      
    </b-row>
    <b-row class="mt-5" align-h="center">
        <b-col cols="11" md="10" lg="8">
            <div class="accordion" role="tablist">
                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1 style="width:100%;   text-align:left; "><b-icon icon="files"/>Información Financiera 2022</b-button>
                </b-card-header>
                <b-collapse id="accordion-1"  accordion="my-accordion" role="tabpanel">
                    <b-card-body style="text-align: left">
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Información Contable</a></b-card-text>
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Información Presupuestaria</a></b-card-text>
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Información Programática</a></b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2 style="width:100%;   text-align:left; "><b-icon icon="files"/>Información Financiera 2021</b-button>
                </b-card-header>
                <b-collapse id="accordion-2"  accordion="my-accordion" role="tabpanel">
                    <b-card-body style="text-align: left">
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Información Contable</a></b-card-text>
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Información Presupuestaria</a></b-card-text>
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Información Programática</a></b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-3 style="width:100%;   text-align:left; "><b-icon icon="files"/>Información Financiera 2020</b-button>
                </b-card-header>
                <b-collapse id="accordion-3"  accordion="my-accordion" role="tabpanel">
                    <b-card-body style="text-align: left">
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Información Contable</a></b-card-text>
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Información Presupuestaria</a></b-card-text>
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Información Programática</a></b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-4 style="width:100%;   text-align:left; "><b-icon icon="files"/>Información Financiera 2019</b-button>
                </b-card-header>
                <b-collapse id="accordion-4"  accordion="my-accordion" role="tabpanel">
                    <b-card-body style="text-align: left">
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Información Contable</a></b-card-text>
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Información Presupuestaria</a></b-card-text>
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Información Programática</a></b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-5 style="width:100%;   text-align:left; "><b-icon icon="files"/>Información Financiera 2018</b-button>
                </b-card-header>
                <b-collapse id="accordion-5"  accordion="my-accordion" role="tabpanel">
                    <b-card-body style="text-align: left">
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Información Contable</a></b-card-text>
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Información Presupuestaria</a></b-card-text>
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Información Programática</a></b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-6 style="width:100%;   text-align:left; "><b-icon icon="files"/>Información Financiera 2017</b-button>
                </b-card-header>
                <b-collapse id="accordion-6"  accordion="my-accordion" role="tabpanel">
                    <b-card-body style="text-align: left">
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Información Contable</a></b-card-text>
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Información Presupuestaria</a></b-card-text>
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Información Programática</a></b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

            </div>
          </b-col>
        </b-row>
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
    
  }
</script>
