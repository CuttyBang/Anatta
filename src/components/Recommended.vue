<template lang="html">
  <div class="cb_recoContentWrapper">
    <div class="cb_recoContent">

      <div class="cb_recoHeadline">
        <div class="cb_recoHeadlineText">
          <p>{{ recoHeadline }}</p>
        </div>
      </div>

      <div class="cb_recoImageBlock">
        <div class="cb_recoImageBlockContent">
          <div class="cb_prod" v-for="(p, index) in products">
              <Recommended ref="reco" :img="p.img[0]" :name="p.name" :index="index" :price="p.price" :key="index"></Recommended>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Recommended from './Recommended/RecoProduct.vue'
export default {
  components: {
    'Recommended': Recommended
  },
  props: ['recoHeadline', 'products']
}
</script>

<style lang="scss" scoped>
@import '../mixins.scss';

.cb_recoContentWrapper {
  overflow: hidden;
  height: 589px;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #f1f1f1;
  @include for-tablet-portrait-up {
    height: 345px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @include for-desktop-up {
    height: 555px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.cb_recoContent {
  height: 555px;
  width: 365px;
  max-height: 589px;
  margin: 0 auto;
  @include for-tablet-portrait-up {
    height: 305px;
    width: 100%;
  }
  @include for-desktop-up {
    height: 485px;
    width: 90%;
    max-width: 1340px;

  }
}

.cb_recoHeadline {
  width: 100%;
  height: 49px;
  @include for-tablet-portrait-up {
    height: 61px
  }
}

.cb_recoHeadlineText {
  width: 100%;
  text-align: center;
  height: 20px;
  position: relative;
  top: 13px;
  @include for-tablet-portrait-up {
    text-align: left;
    height: 47px;
    position: static;
  }
  p {
    margin: 0;
    padding-top: 3px;
    font-size: 16px;
    font-family: 'Helvetica';
    color: #4a4a4a;
    @include for-tablet-portrait-up {
      font-size: 20px;
      margin-top: 10px;
    }
  }
}

.cb_recoImageBlock {
  width: 100%;
  height: 506px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  @include for-tablet-portrait-up {
    height: 253px;
    width: 100%;
  }
  @include for-desktop-up {
    height: 425px;
  }
}

.cb_recoImageBlockContent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @include for-tablet-portrait-up {
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    height: 424px;
  }
}

.cb_prod {
  width: 174px;
  height: 245px;
  margin: 4px;
  @include for-tablet-portrait-up {
    margin: 0;
    margin-right: 8px;
    width: 33vw;
  }
  @include for-tablet-landscape-up {
    width: 25vw;
  }
  @include for-desktop-up  {
    width: 330px;
    margin: 0 4px;
  }
}



</style>
