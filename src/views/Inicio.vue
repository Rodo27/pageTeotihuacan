<template>
  <div>
    <!-- CAROUSEL-->
    <b-row>
      <b-col sm="12" class="text-center my-2">
        <div>
          <b-carousel indicators>
            <b-carousel-slide
              class="img-carousel"
              :img-src="require('../assets/image.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide
              class="img-carousel"
              :img-src="require('../assets/image2.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide
              class="img-carousel"
              :img-src="require('../assets/image3.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide
              class="img-carousel"
              :img-src="require('../assets/image4.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide
              class="img-carousel"
              :img-src="require('../assets/image5.jpg')"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </b-col>
    </b-row>

    <br /><br /><br /><br />

    <!-- IMAGE | CARD -->
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

    <br /><br /><br /><br />

    <!-- IMAGE -->
    <b-row align-v="center" class="mt-2">
      <b-col sm="12">
        <b-link to="whitepage">
          <b-img
            center
            :src="require('../assets/image.jpg')"
            class="img-carousel pointer"
          ></b-img>
        </b-link>
      </b-col>
    </b-row>

    <br /><br /><br /><br />

    <!-- CARDS-->
    <b-row align-v="center" class="pt-4 mx-1">
      <b-col sm="12" md="4">
        <router-link to="whitepage" class="social-links">
          <div class="target-card mt-3">
            <b-icon
              icon="exclamation-circle"
              class="pointer icons-cards"
            ></b-icon>
            <div>Some quick example.</div>
          </div>
        </router-link>
      </b-col>

      <b-col sm="12" md="4">
        <router-link to="whitepage" class="social-links">
          <div class="target-card mt-3">
            <b-icon
              icon="exclamation-circle"
              class="pointer icons-cards"
            ></b-icon>
            <div>Some quick example.</div>
          </div>
        </router-link>
      </b-col>

      <b-col sm="12" md="4">
        <router-link to="whitepage" class="social-links">
          <div class="target-card mt-3">
            <b-icon
              icon="exclamation-circle"
              class="pointer icons-cards"
            ></b-icon>
            <div>Some quick example.</div>
          </div>
        </router-link>
      </b-col>
    </b-row>

    <br /><br /><br /><br />

    <!-- CARDS CONTACT -->
    <b-row align-v="center" class="pt-4 mx-1">
      <h2>
        <p><span class="text-center titles">Numeros De Emergencia</span></p>
      </h2>

      <b-col sm="12" md="4" class="mt-3">
        <b-icon
          icon="exclamation-circle"
          style="width: 50px; height: 50px"
          class="pointer"
        ></b-icon>

        <b-card-text>
          <b><p>Mejora Regulatoria</p></b>
          <b-icon icon="telephone"></b-icon><span> 55 51525356</span>
        </b-card-text>
      </b-col>

      <b-col sm="12" md="4" class="mt-3">
        <b-icon
          icon="exclamation-circle"
          style="width: 50px; height: 50px"
          class="pointer"
        ></b-icon>

        <b-card-text>
          <b><p>Sistema Anticorrupción</p></b>
          <b-icon icon="telephone"></b-icon><span> 55 51525356</span>
        </b-card-text>
      </b-col>
      <b-col sm="12" md="4" class="mt-3">
        <b-icon
          icon="exclamation-circle"
          style="width: 50px; height: 50px"
          class="pointer"
        ></b-icon>

        <b-card-text>
          <b><p>Titulos</p></b>
          <b-icon icon="telephone"></b-icon><span> 55 51525356</span>
        </b-card-text>
      </b-col>
    </b-row>

    <br /><br /><br /><br />

    <b-row align-h="center" align-v="center">
      <b-col sm="12" md="6" class="mt-3">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=550&height=837&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="550"
          height="837"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </b-col>
      <b-col sm="12" md="6" class="mt-3">
        <blockquote class="twitter-tweet">
          <a
            href="https://twitter.com/Apple/status/1415673170196013057?ref_src=twsrc%5Etfw"
          ></a>
        </blockquote>
      </b-col>
    </b-row>
  </div>
</template>

<script>
var TwitterWidgetsLoader = require("twitter-widgets");
export default {
  mounted() {
    TwitterWidgetsLoader.load();
  },
};
</script>