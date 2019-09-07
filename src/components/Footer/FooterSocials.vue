<template lang="html">
  <div class="cb_footerSocialsWrapper">
    <div class="cb_footerSocialsContent">
      <div class="cb_footerSocialsIcon" v-for="icon in icons">
        <Icon :icon="icon.one" :link="icon.two"></Icon>
      </div>
    </div>
  </div>
</template>

<script>
import FooterSocialIcon from './FooterSocialIcon.vue'
export default {
  components: {
    'Icon': FooterSocialIcon
  },
  data() {
    return {
      icons: [
        {one:'icon cb-instagram cb-instagram-dims', two: 'https://instagram.com'},
        {one: 'icon cb-facebook-logo cb-facebook-logo-dims', two: 'https://facebook.com'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.cb_footerSocialsWrapper {
  width: 295px;
  height: 28px;
  margin-top: 35px;
  .cb_footerSocialsContent {
    width: 295px;
    height: 28px;
    padding: 1px 0 2px;
    display: flex;
  }
}

.cb_footerSocialsIcon {
  width: 25px;
  height: 25px;
  margin-right: 28px;

}

</style>
