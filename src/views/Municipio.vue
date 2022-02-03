<template>
    <div>
        <!-- CAROUSEL-->
    <b-row>
      <b-col cols="12" >
        <div>
          <b-carousel indicators :interval="3000" controls >
            <b-carousel-slide
                
                :img-src="require('../assets/municipio.jpg')"
                ></b-carousel-slide>
                <b-carousel-slide
                
                :img-src="require('../assets/municipio.jpg')"
                ></b-carousel-slide>
                <b-carousel-slide
                
                :img-src="require('../assets/municipio.jpg')"
                ></b-carousel-slide>
          </b-carousel>
        </div>
      </b-col>
    </b-row>
    
        <br>
        <h1 class="titles">
          <span style="color:#EE207B">Mu</span>
          <span style="color:#0FABB6">ni</span>
          <span style="color:#F68B1F">ci</span>
          <span style="color:#78C042">p</span>
          <span style="color:#EE2E3A">io</span>
        </h1>


        <div>
            
        </div>
    </div>
</template>