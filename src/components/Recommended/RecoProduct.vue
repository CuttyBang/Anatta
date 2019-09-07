<template lang="html">
  <a href="#">
    <div class="cb_recoProductContainer" :id="index">
      <div class="cb_recoProductWrapper">
         <Prod :img="img" :name="name" :price="price"></Prod>
      </div>
    </div>
  </a>
</template>

<script>
import Prod from '../Recommended/Prod.vue'
export default {
  props: ['img', 'name', 'index', 'price'],
  components: {
    'Prod': Prod
  },
}
</script>

<style lang="scss" scoped>
@import '../../mixins.scss';
a {
  text-decoration: none;
  color: #000;
}
.cb_recoProductContainer {
  width: 100%;
  padding: 0;
  margin: 0;
  @include for-tablet-portrait-up {
    width: 33vw;
  }
  @include for-tablet-landscape-up {
    width: 330px;
  }
  .cb_recoProductWrapper {
    width: 100%;
    height: 253px;
  }
}
</style>
