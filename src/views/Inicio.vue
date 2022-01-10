<template>
    <div>
    <!-- CAROUSEL-->
    <b-row>  
      <b-col sm="12" class="text-center my-2">
        <div>
        <b-carousel
          indicators
          img-width="1024"
          img-height="300px"
        >
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=10"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=12"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=22"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=12"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=22"
          ></b-carousel-slide>
        </b-carousel>
        </div>
      </b-col>
    </b-row>

    <br><br><br><br>
    
    <!-- IMAGE | CARD -->
    <b-row align-v="center" class="mx-1">
      <b-col sm="12" md="6">
        <b-container fluid class="my-auto">
            <b-link to="whitepage">
                <b-img src="https://picsum.photos/1024/400/?image=41" class="img pointer" fluid alt="Responsive image"></b-img>
            </b-link>
        </b-container>
      </b-col>
      <b-col sm="12" md="6" class="text-center mt-3">

        <h1><span class="titles">Bienvenidos</span></h1>

        <b-card
          title="Card Title"
          class="mb-3"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>

        </b-card>

      </b-col>
    </b-row>

    <br><br><br><br>

    <!-- IMAGE -->
    <b-row align-v="center" class="mt-2">
      <b-col sm="12" >
        <b-link to="whitepage">
            <b-img src="https://picsum.photos/1024/400/?image=41" class="img pointer" fluid alt="Responsive image"></b-img>
        </b-link>
      </b-col>
    </b-row>

    <br><br><br><br>

    <!-- CARDS-->
    <b-row align-v="center" class="pt-4 mx-1" >

      <b-col sm="12" md="4">
        <div class="target-card mt-3">
           <router-link to="whitepage" class="social-links"><b-icon icon="exclamation-circle" class="pointer icons-cards"></b-icon></router-link>              
          <div>
            Some quick example.
          </div> 
        </div>
      </b-col>

      <b-col sm="12" md="4">
        <div class="target-card mt-3">
          <router-link to="whitepage" class="social-links"><b-icon icon="exclamation-circle" class="pointer icons-cards"></b-icon></router-link>              
            <div>
            Some quick example.
          </div> 
        </div>
      </b-col>

      <b-col sm="12" md="4">
        <div class="target-card mt-3">
          <router-link to="whitepage" class="social-links"><b-icon icon="exclamation-circle" class="pointer icons-cards"></b-icon></router-link>              
            <div>
            Some quick example.
          </div> 
        </div>
      </b-col>

      
    </b-row>

    <br><br><br><br>

    <!-- CARDS CONTACT -->
    <b-row align-v="center" class="pt-4 mx-1" >
     
     
       <h2><p><span class="text-center titles">Numeros De Emergencia</span></p></h2>
     
      
      <b-col sm="12" md="4" class="mt-3">
        <b-icon icon="exclamation-circle" style="width: 50px; height: 50px;" class="pointer"></b-icon>
      
          <b-card-text>
            <b><p>Mejora Regulatoria</p></b> 
            <b-icon icon="telephone"></b-icon><span> 55 51525356</span> 
          </b-card-text>
          
      </b-col>

      <b-col sm="12" md="4" class="mt-3">
        <b-icon icon="exclamation-circle" style="width: 50px; height: 50px;" class="pointer"></b-icon>
        
          <b-card-text>
            <b><p>Sistema Anticorrupción</p></b> 
            <b-icon icon="telephone"></b-icon><span> 55 51525356</span> 
          </b-card-text>
              
      </b-col>
      <b-col sm="12" md="4" class="mt-3">
        <b-icon icon="exclamation-circle" style="width: 50px; height: 50px;" class="pointer"></b-icon>
        
          <b-card-text>
            <b><p>Titulos</p></b> 
            <b-icon icon="telephone"></b-icon><span> 55 51525356</span> 
          </b-card-text>
        
      </b-col>
      
    </b-row>

    <br><br><br><br>

    <b-row>
        <b-col sm="12" md="4" class="mt-3">
            <div>
            <vue-facebook-page data-href="https://www.facebook.com/rodrigo.hernandezlopez3" link-text="Aldo Rodrigo" />
            </div>
        </b-col>
        <b-col></b-col>
    </b-row>

    </div>
</template>