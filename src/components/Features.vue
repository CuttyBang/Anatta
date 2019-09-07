<template lang="html">
  <div class="cb_featuresBar">
    <div class="cb_featuresBarContentWrapper">
      <div class="cb_featuresBarContent">
        <div class="cb_featuresBarItemWrapper" v-for="f in features">
          <div class="cb_featuresBarItem">
            <Feature :icon="f.one" :feat="f.two"></Feature>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeaturesItem  from './Features/FeaturesItem.vue'
export default {
  components: {
    'Feature': FeaturesItem
  },
  data() {
    return {
      features: [
        {one: 'icon cb-plane cb-plane-dims', two: "Express Shipping"},
        {one: 'icon cb-shipping cb-shipping-dims', two: "Free Returns"},
        {one: "icon cb-lock cb-lock-dims", two:"Secure Payment"}
       ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../mixins.scss';
.cb_featuresBar {
  margin-top: 60px;
  height: 60px;
  width: 100%;
  .cb_featuresBarContentWrapper {
    background: #f1f1f1;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}

.cb_featuresBarContent {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
}

.cb_featuresBarItemWrapper {
    height: 60px;
    width: 50%;
    min-width: 50%;
    padding: 0;
    margin: 0;
    @include for-tablet-portrait-up {
      width: 33%;
      min-width: 33%;
    }
}

.cb_featuresBarItem {
  width: 100%;
  height: 30px;
  margin: 15px 0;
  display:flex;
  justify-content: center;
  align-items: center;
  border-left: .5px solid #c8c8c8;
  border-right: .5px solid #c8c8c8;
}

.cb_featuresBarContentDivider {
  width: 0;
  height: 30px;
  border: .5px solid #c8c8c8;
}

.cb_featuresBarContentDividerPre {
  width: 0;
  height: 30px;
  border: 1px solid transparent;
}
</style>
