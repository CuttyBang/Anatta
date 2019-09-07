<template lang="html">
    <a :href="link">
      <div :class="icon"></div>
    </a>
</template>

<script>
export default {
    props: ['icon', 'link']
}
</script>

<style lang="css" scoped>
</style>
