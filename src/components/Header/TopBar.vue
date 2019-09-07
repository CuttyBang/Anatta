<template lang="html">
  <div class="cb_topBar">
    <div class="cb_topBarContentWrapper">
      <div class="cb_topBarContent">
        <span class="cb_topBarContentText">{{ topText }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['topText'],
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.cb_topBar {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
}
.cb_topBarContentWrapper {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background: #000;
  .cb_topBarContent {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    padding: 0;
    margin: 0;
    span {
      color: #fff;
      letter-spacing: 2px;
      font-size: 12px;
      font-family: 'Open Sans', 'Helvetica', Helvetica, sans-serif;
    }
  }
}

</style>
