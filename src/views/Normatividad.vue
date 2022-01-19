<template>
    <b-container fluid>
        <h1 class="titles">
          <span style="color:#EE207B">Nor</span>
          <span style="color:#0FABB6">ma</span>
          <span style="color:#F68B1F">ti</span>
          <span style="color:#78C042">vi</span>
          <span style="color:#EE2E3A">dad</span>
        </h1>
        <b-row align-h="center" id="flipbook-body" 
            :class="{ 'has-mouse': hasMouse }"
            @touchstart="hasMouse = false">
            
            <Flipbook class="flipbook" :pages="pages" v-slot="flipbook" >
                
                <!--
                <div class=" pt-5">
                    <button class="btn btn-primary mx-3" @click="flipbook.flipLeft"><b-icon icon="arrow-left"></b-icon></button>
                    <button class="btn btn-primary mx-3" @click="flipbook.flipRight"><b-icon icon="arrow-right"></b-icon></button>
                </div>
                -->
                <div class="action-bar">
                    
                    <b-icon
                        class="pointer mx-2"
                        icon="arrow-left-circle-fill"
                        :class="{ disabled: !flipbook.canFlipLeft }"
                        @click="flipbook.flipLeft"
                    >
                    </b-icon>
                    
                    <b-icon
                        class="pointer"
                        icon="plus-circle-fill"
                        :class="{ disabled: !flipbook.canZoomIn }"
                        @click="flipbook.zoomIn"
                    >
                    </b-icon>
                
                    <span class="mx-2">
                    Pagina {{ flipbook.page }} de {{ flipbook.numPages }}
                    </span>
                
                    <b-icon
                        class="pointer"
                        icon="dash-circle-fill"
                        :class="{ disabled: !flipbook.canZoomOut }"
                        @click="flipbook.zoomOut"
                    >
                    </b-icon>
                
                    <b-icon
                        class="pointer mx-2"
                        icon="arrow-right-circle-fill"
                        :class="{ disabled: !flipbook.canFlipRight }"
                        @click="flipbook.flipRight"
                    >
                    </b-icon>
                                    
                </div>
                
            </Flipbook>            
        </b-row>

        <b-row class="mt-5">
            <div class="accordion" role="tablist">
                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1 style="width:100%; background-color:red;">Accordion 1</b-button>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body style="text-align: left">
                        <b-card-text><a href="https://www.dropbox.com/s/mrlleq5c3ew0hmk/API%20de%20Java_String.pdf?dl=0"><b-icon icon="link"></b-icon> LINK 1</a></b-card-text>
                        <b-card-text><a href="https://www.dropbox.com/s/mrlleq5c3ew0hmk/API%20de%20Java_String.pdf?dl=0"><b-icon icon="link"></b-icon> LINK 2</a></b-card-text>
                        <b-card-text><a href="https://www.dropbox.com/s/mrlleq5c3ew0hmk/API%20de%20Java_String.pdf?dl=0"><b-icon icon="link"></b-icon> LINK 3</a></b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2 style="width:100%; background-color:red;">Accordion 2</b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body style="text-align: left">
                        <b-card-text><a href="https://www.dropbox.com/s/mrlleq5c3ew0hmk/API%20de%20Java_String.pdf?dl=0"><b-icon icon="link"></b-icon> LINK 1</a></b-card-text>
                        <b-card-text><a href="https://www.dropbox.com/s/mrlleq5c3ew0hmk/API%20de%20Java_String.pdf?dl=0"><b-icon icon="link"></b-icon> LINK 2</a></b-card-text>
                        <b-card-text><a href="https://www.dropbox.com/s/mrlleq5c3ew0hmk/API%20de%20Java_String.pdf?dl=0"><b-icon icon="link"></b-icon> LINK 3</a></b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-3 style="width:100%; background-color:red;">Accordion 3</b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                    <b-card-body style="text-align: left">
                        <b-card-text><a href="https://www.dropbox.com/s/mrlleq5c3ew0hmk/API%20de%20Java_String.pdf?dl=0"><b-icon icon="link"></b-icon> LINK 1</a></b-card-text>
                        <b-card-text><a href="https://www.dropbox.com/s/mrlleq5c3ew0hmk/API%20de%20Java_String.pdf?dl=0"><b-icon icon="link"></b-icon> LINK 2</a></b-card-text>
                        <b-card-text><a href="https://www.dropbox.com/s/mrlleq5c3ew0hmk/API%20de%20Java_String.pdf?dl=0"><b-icon icon="link"></b-icon> LINK 3</a></b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>
            </div>
        </b-row>
    </b-container>
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