<template lang="pug">
  carousel-3d
    slide(:index='0')
      img.carousel-slide(src='/assets/img/sl-prj/1.png')
    slide(:index='1')
      img.carousel-slide(src='/assets/img/sl-prj/2.png')
    slide(:index='2')
      img.carousel-slide(src='/assets/img/sl-prj/3.png')
    slide(:index='3')
      img.carousel-slide(src='/assets/img/sl-prj/4.png')
    slide(:index='4')
      img.carousel-slide(src='/assets/img/sl-prj/5.png')
    slide(:index='5')
      img.carousel-slide(src='/assets/img/sl-prj/6.png')
    slide(:index='6')
      img.carousel-slide(src='/assets/img/sl-prj/7.png')

</template>

<script>
  import {Carousel3d, Slide} from 'vue-carousel-3d';

  export default {
    name: "slider-projects",
    components: {
      Carousel3d,
      Slide
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/main";

  .carousel-3d-container {
    height: 540px !important;
  }

  .carousel-3d-slide {
    height: 500px !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border: none !important;

    @include laptop {
      height: 400px !important;
      width: 300px !important;
    }
  }

  .carousel-slide {
    height: 100%;
    width: 100%;
  }
</style>
