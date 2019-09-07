<template lang="html">
  <div id="app">
    <HeaderBar :topText="topText" id="cb_Header"></HeaderBar>
    <Product :products="products" id="cb_Product"></Product>
    <Recommended :products="products" :recoHeadline="recoHeadline" id="cb_Recommended"></Recommended>
    <Features id="cb_Features"></Features>
    <Footer id="cb_Footer"></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Product from './components/Product.vue';
import Features from './components/Features.vue';
import Recommended from './components/Recommended.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    'HeaderBar': Header,
    'Product': Product,
    'Features': Features,
    'Recommended': Recommended,
    'Footer': Footer
  },
  data() {
    return {
      topText: "FREE US SHIPPING AND RETURN",
      recoHeadline: "You'll Also Like",
      products: []
    }
  },
  methods: {
    getProducts() {
      const url = 'https://anatta-demo-app.herokuapp.com/api/products';
      const temp = [];
      this.$http.get(url)
        .then(response => {
          const data = response.json();
          return data;
        })
        .then(d => {
          for(let i = 0; i < d.length; i++){
            let images = this.getImages(d[i].id);
            this.products.push({
              color: d[i].color,
              description: d[i].description,
              id: d[i].id,
              name: d[i].name,
              price: d[i].price,
              img: images
            });
          }
        });

    },
    imgExists(pid) {
      const existsUrl = 'https://anatta-demo-app.herokuapp.com/api/products/' + pid + '/exists';
      this.$http.get(existsUrl)
        .then(response => {
          return response.body.exists;
        })
        .then(bool => {
          return bool;
        });
    },
    getImages(id){
      const exist = this.imgExists(id);
      const imgArray = [];
      const imgUrl = 'https://anatta-demo-app.herokuapp.com/api/products/' + id + '/image';
      this.$http.get(imgUrl).then(response => {
          return response.body;
        }).then(imgs => {
          for(var i = 0; i < imgs.length; i++){
            imgArray.push(imgs[i].url);
          }
        });
      return imgArray;
    }
  },
  beforeMount() {
    this.getProducts();
  },
  mounted() {

  }
}
</script>

<style lang="scss">
@import './mixins.scss';

#app {
  height: 100%;
  width: 100%;
  min-width: 375px;
  padding: 0;
  margin: 0 auto;
  @include for-phone-only {
    max-width: 599px;
  }

  @include for-desktop-up {
    max-width: 1440px;
  }
}

#cb_Header {
  height: 105px;
  width: 100%;
  @include for-desktop-up {
    height: 127px;
  }
}

#cb_Product {
  width: 100%;
  @include for-desktop-up {
    height: 700px;
  }
}

#cb_Recommended {
  width: 100%;
  @include for-desktop-up {
    height: 555px;
  }
}

#cb_Features {
  width: 100%;
}

#cb_Footer {
  width: 100%;
}
</style>
