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
          <span style="color:#EE207B">Go</span>
          <span style="color:#0FABB6">bi</span>
          <span style="color:#F68B1F">er</span>
          <span style="color:#78C042">no</span>
        </h1>
        <b-row>
            <b-col cols="12" sm="12" md="4" class="mt-5" >

            </b-col>
        </b-row>

    </div>
</template>