<template lang="html">

  <div class="cb_addToCartContainer">

    <div class="cb_addToCartContentWrapper">
      <ATC></ATC>
    </div>

  </div>


</template>

<script>
import ATC from '../Graphics/ATC.vue';
export default {
  components: {
    'ATC': ATC
  }
}
</script>

<style lang="scss" scoped>
.cb_addToCartContainer {
  height: 440px;
  width: 100%;
  padding: 0;
  margin: 0;
}
.cb_addToCartContentWrapper {
  width: 335px;
  margin: 0 auto;
}
</style>
