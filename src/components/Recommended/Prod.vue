<template lang="html">
  <div class="cb_recoProductBlock">
    <div class="recoImg">
      <img :src="img" />
    </div>
    <div class="cb_recoProdDesc">
      <p class="cb_recoText">
        {{ name }}
      </p>
      <p class="cb_recoPrice">
        ${{ price / 100 }}
      </p>
    </div>
  </div>

</template>

<script>
export default {
    props: ['img', 'name', 'price'],

}
</script>

<style lang="scss" >
@import '../../mixins.scss';
.cb_recoProductBlock {
  width: 100%;
  height: 253px;
  @include for-tablet-portrait-up {
    height: 424px;
  }


}

.recoImg {
  width: 100%;
  max-width: 330px;
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #333;
  @include for-tablet-portrait-up {
    height: 379px;
    
  }

  img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: auto;
    @include for-tablet-portrait-up {
      align-items: flex-start;
      width: auto;
      height: 379px;
    }
  }
}

.cb_recoProdDesc {
  height: 53px;
  width: 100%;
  padding: 8px 0;
  .cb_recoText {
    font-size: 10px;
    font-weight: bold;
    margin: 3px 0;
    padding: 0;
    line-height: 16px;
    @include for-tablet-portrait-up {
      font-size: 16px;
    }
  }
  .cb_recoPrice {
    color: #4a4a4a;
    font-size: 9px;
    font-weight: bold;
    margin: 3px 0;
    @include for-tablet-portrait-up {
      font-size: 14px;
    }
  }
}
</style>
