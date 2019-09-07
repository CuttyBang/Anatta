<template lang="html">
  <div class="cb_headerContentWrapper">
    <TopBar :topText="topText"></TopBar>
    <Navigation></Navigation>
  </div>
</template>

<script>
import TopBar from './Header/TopBar.vue';
import Navigation from './Header/Navigation.vue';
export default {
  props: ['topText'],
  data() {
    return {

    }
  },
  components: {
    'TopBar': TopBar,
    'Navigation': Navigation
  },
}
</script>

<style lang="css" scoped>
.cb_headerContentWrapper {
  width: 100%;
}
</style>
