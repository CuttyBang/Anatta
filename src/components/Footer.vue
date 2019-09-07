<template lang="html">
  <div class="cb_footerContainer">
    <div class="cb_footerContent">
      <div class="cb_footerTop">
        <div class="cb_footerContact">
          <Newsletter></Newsletter>
          <Socials></Socials>
        </div>
        <Menu></Menu>
      </div>

      <Copyright></Copyright>

    </div>
  </div>
</template>

<script>
import FooterNewsletter from './Footer/FooterNewsletter.vue'
import FooterSocials from './Footer/FooterSocials.vue'
import FooterMenu from './Footer/FooterMenu.vue'
import FooterCopy from './Footer/FooterCopy.vue'
export default {
  components: {
    'Newsletter': FooterNewsletter,
    'Socials': FooterSocials,
    'Menu': FooterMenu,
    'Copyright': FooterCopy
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '../mixins.scss';
.cb_footerContainer {
  width: 100%;
  height: 648px;
  background: #000;
  @include for-tablet-landscape-up  {
     height: 296px;
  }
}
.cb_footerContent {
  height: 503px;
  width: 295px;
  padding: 49px 40px 31px;
  background: #000;
  margin: 0 auto;
  @include for-tablet-landscape-up  {
    width: 95vw;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 30px;
    height: 170px;
  }
  @include for-desktop-up {
    width: 1294px;
  }
}
.cb_footerTop {
  @media (max-width: 899px) {
      width: 100%;
      display: block
  }
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  @include for-tablet-landscape-up  {
    height: 167px;
  }
}
</style>
