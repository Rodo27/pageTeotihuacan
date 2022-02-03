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

        <br>
        <h1 class="titles">
          <span style="color:#EE207B">Nor</span>
          <span style="color:#0FABB6">ma</span>
          <span style="color:#F68B1F">ti</span>
          <span style="color:#78C042">vi</span>
          <span style="color:#EE2E3A">dad</span>
        </h1>
<!--
        <b-row align-h="center" id="flipbook-body" 
            :class="{ 'has-mouse': hasMouse }"
            @touchstart="hasMouse = false">
            
            <Flipbook class="flipbook" :pages="pages" v-slot="flipbook" >
                
        
                <div class="action-bar">
                    
                    <b-icon
                        variant="dark"
                        font-scale="1.5"
                        class="pointer mx-2"
                        icon="arrow-left-circle-fill"
                        :class="{ disabled: !flipbook.canFlipLeft }"
                        @click="flipbook.flipLeft"
                    >
                    </b-icon>
                    
                    <b-icon
                        variant="dark"
                        font-scale="1.5"
                        class="pointer"
                        icon="plus-circle-fill"
                        :class="{ disabled: !flipbook.canZoomIn }"
                        @click="flipbook.zoomIn"
                    >
                    </b-icon>
                
                    <span class="mx-2" style="color:black;">
                    Pagina {{ flipbook.page }} de {{ flipbook.numPages }}
                    </span>
                
                    <b-icon
                        variant="dark"
                        font-scale="1.5"
                        class="pointer"
                        icon="dash-circle-fill"
                        :class="{ disabled: !flipbook.canZoomOut }"
                        @click="flipbook.zoomOut"
                    >
                    </b-icon>
                
                    <b-icon
                        variant="dark"
                        font-scale="1.5"
                        class="pointer mx-2"
                        icon="arrow-right-circle-fill"
                        :class="{ disabled: !flipbook.canFlipRight }"
                        @click="flipbook.flipRight"
                    >
                    </b-icon>
                                    
                </div>
                
            </Flipbook>            
        </b-row>
        -->

        <b-row class="mt-5" align-h="center">
            <b-col cols="11" md="10" lg="8">
            <div class="accordion" role="tablist">
                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1 style="width:100%;   text-align:left; "><b-icon icon="files"/> Regulaciones Municipales</b-button>
                </b-card-header>
                <b-collapse id="accordion-1"  accordion="my-accordion" role="tabpanel">
                    <b-card-body style="text-align: left">
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Plan de Desarrollo Municipal</a></b-card-text>
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Reglamentos Internos</a></b-card-text>
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Manuales de Operación</a></b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2 style="width:100%; text-align:left;"><b-icon icon="files"/> Mejora Regulatoria</b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body style="text-align: left">
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Plan Anual de Mejora Regulatoria 2022</a></b-card-text>
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Avances Primer Trimestre</a></b-card-text>
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Acta Constitutiva CMMR</a></b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-3 style="width:100%; text-align:left;"><b-icon icon="files"/> Periodico Oficial Municipal</b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                    <b-card-body style="text-align: left">
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Gaceta 2022</a></b-card-text>
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Gaceta 2021</a></b-card-text>
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Gaceta 2020</a></b-card-text>
                        <b-card-text><a href="https://www.teotihuacan.gob.mx"><b-icon icon="file-earmark-text-fill"></b-icon> Gaceta 2019</a></b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>
            </div>
            </b-col>
        </b-row>
    </div>
</template>


<script>
import Flipbook from "flipbook-vue";

export default {
  components: {
    Flipbook,
  },
  data() {
    return {
      
      pages: [
        "https://picsum.photos/600/600?id=1",
        "https://picsum.photos/600/600?id=2",
        "https://picsum.photos/600/600?id=3",
        "https://picsum.photos/600/600?id=4",
        "https://picsum.photos/600/600?id=5",
        "https://picsum.photos/600/600?id=6",
        "https://picsum.photos/600/600?id=7",
        "https://picsum.photos/600/600?id=8",
      ],
    };
  },
};
</script>

<style>
.flipbook .viewport {
    width: 90vw;
    height: 90vh;
}
.flipbook .bounding-box {
  box-shadow: 0 0 20px #000;
}

</style>