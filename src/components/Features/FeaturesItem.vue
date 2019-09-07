<template lang="html">
    <div class="cb_featuresBarItemText">
      <div :class="icon"></div>
      <p>{{ feat }}</p>
    </div>
</template>

<script>
export default {
  props: ['icon', 'feat']
}
</script>

<style lang="scss" scoped>


.cb_featuresBarItemText {
  display: flex;
  justify-content: center;
  align-items: center;
  div.icon {
    margin-right: 3px;
  }
}

</style>
