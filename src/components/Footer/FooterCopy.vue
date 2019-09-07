<template lang="html">
  <div class="cb_footerCopyWrapper">
    <div class="cb_footerCopyContent">
      <div class="cb_footerCopyText">
        <p>Copyright © 2019 CARIUMA. All Rights Reserved.</p>
        <a>Terms of Use</a> | <a>Privacy Policy</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.cb_footerCopyWrapper {
  height: 51px;
  width: 100%;

  .cb_footerCopyContent {
    padding: 0 13px;
    border-top: 1px solid #f9f9f9;
    padding-top: 15px;
  }
}

.cb_footerCopyText {
  color: #ffffff;
  font-size: 12px;
  text-align: center;
  p {
    margin: 0;
    margin-bottom: 10px;
  }
}
</style>
