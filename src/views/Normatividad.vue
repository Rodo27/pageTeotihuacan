<template>
    <b-container fluid>
        <h1><span class="titles">Normatividad</span></h1>
        <b-row align-h="center">
    
        <Flipbook class="flipbook" :pages="pages" v-slot="flipbook" >
            
            <div class=" pt-5">
                <button class="btn btn-primary mx-3" @click="flipbook.flipLeft"><b-icon icon="arrow-left"></b-icon></button>
                <button class="btn btn-primary mx-3" @click="flipbook.flipRight"><b-icon icon="arrow-right"></b-icon></button>
            </div>
            
        </Flipbook>
        
        <div>

        </div>
        </b-row>

        <b-row>
            <div class="accordion" role="tablist">
                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text><a href="https://www.dropbox.com/s/mrlleq5c3ew0hmk/API%20de%20Java_String.pdf?dl=0">LINK 1</a></b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text ><a href="https://www.dropbox.com/s/mrlleq5c3ew0hmk/API%20de%20Java_String.pdf?dl=0">LINK 2</a></b-card-text>
                    </b-card-body>
                </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text ><a href="https://www.dropbox.com/s/mrlleq5c3ew0hmk/API%20de%20Java_String.pdf?dl=0">LINK 3</a></b-card-text>
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
        "https://picsum.photos/200/300?id=1",
        "https://picsum.photos/200/300?id=2",
        "https://picsum.photos/200/300?id=3",
        "https://picsum.photos/200/300?id=4",
        "https://picsum.photos/200/300?id=5",
        "https://picsum.photos/200/300?id=6",
        "https://picsum.photos/200/300?id=7",
        "https://picsum.photos/200/300?id=8",
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