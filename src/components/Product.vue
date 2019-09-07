<template lang="html">
  <div class="cb_productContentWrapper">
    <div class="cb_productContent">

      <div class="cbCarouselContainer">
          <div class="wrapper">
            <carousel ref="caro" class="mainSlide" :perPage="1" >

              <slide v-for="(img, i) in products[6].img" :key="i">
                  <img :src="img" alt="">
              </slide>

            </carousel>

            <div class="indexSlides">
              <div :key="i" :id="`Value${i}`" class="slideWrapper" v-for="(img, i) in products[6].img" @click="going(i); hilite(i);">
                <img :src="img" alt="">
                <div ref="frame" :id="`frame__${i}`" class="frames"></div>
              </div>
            </div>
          </div>
      </div>

      <div class="cbInfoAndCartContainer">
        <ProductInfo></ProductInfo>
        <AddToCart></AddToCart>
      </div>

    </div>
  </div>
</template>

<script>
import ProductInfo from './Product/ProductInfo.vue';
import AddToCart from './Product/AddToCart.vue';
import { Carousel, Slide } from 'vue-carousel';
export default {
  props: ['products'],
  components: {
    'Carousel': Carousel,
    'Slide': Slide,
    'ProductInfo': ProductInfo,
    'AddToCart': AddToCart
  },
  methods: {
    going(t) {
      this.$refs.caro.goToPage(t);
    },
    hilite(n) {
      let highlighted = document.getElementsByClassName('frames');
      let highlight = 'frame__' + n;
      Array.from(highlighted).forEach((hl) => {
        if(hl.classList.contains('light')){
          hl.classList.remove('light');
        }
      });
      document.getElementById(highlight).classList.add('light');
    }
  },
  mounted() {
    console.log(this.products);
  }
}
</script>

<style lang="scss" >
@import '../mixins.scss';

.cb_productContentWrapper {
  height: 868px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @include for-desktop-up {
    align-items: flex-start;
    justify-content: flex-start;
  }
}

.cb_productContent {
  max-height: 868px;
  @include for-desktop-up {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: flex-start;
    width: 90%;
    max-width: 1339px;
    margin: 0 auto
  }
}

.cbCarouselContainer {
  height: 356px;
  @include for-desktop-up {
    height: auto;
    max-width: 890px;
    width: calc(100% - 316px);
  }
}

.cbInfoAndCartContainer {
  height: 512px;
  @include for-desktop-up {
   margin-right: 51px
  }
}

.wrapper {
  width: 100vw;
  height: auto;
  padding-bottom: 3px;
  @include for-desktop-up {
    width: 100%;
    max-width: 890px;
    height: 600px;
  }
}

.mainSlide {
  height: 300px;
  overflow: hidden;
  @include for-desktop-up {
    height: 535px;
    max-width: 890px;
    width: 100%;
  }
}

.VueCarousel-slide {
  width: auto;
  height: 100%;
  background: #eee;
  img {
    height: 300px;
    margin: 0 auto;
    display: block;
    @include for-desktop-up {
      height: 535px;
    }

  }

}

.indexSlides {
  width: 100%;
  max-width: 590px;
  padding: 0 5px;
  margin: 3px auto 0;//5px
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @include for-tablet-landscape-up {
    margin: 5px auto 0;
    width: auto;
  }
  @include for-desktop-up {
    justify-content: flex-start;
    align-items: flex-start;
    margin: 5px;
  }
}
.slideWrapper {
  position: relative;
  height: 50px;
  width: 50px;
  margin-right: 3px; //5px
  @include for-tablet-landscape-up {
    margin-right:5px;
    height: 60px;
    width: 80px;
    border: 1px solid #aaa;

  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    margin-left: auto;
    @include for-tablet-landscape-up {
      height: 100%;
      width: auto;
      margin: 0 auto;
    }
  }
}
.light  {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
    box-shadow: 0 0 0 4px #7DC242 inset;
}
.VueCarousel-pagination{
  height: 0;
  display: none;

}
.VueCarousel-dot-container {

  width: 100%;
  height: 100%;
  margin-top: 0;
  &:active {
    outline: none;}
}

.VueCarousel-dot {
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 20px !important;
}

.VueCarousel-dot--active {
  background: #649c2e;
}
</style>
