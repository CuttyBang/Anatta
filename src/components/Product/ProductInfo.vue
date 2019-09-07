<template lang="html">

    <div class="cb_productTitleBlockWrapper">

      <div class="cb_productTitleBlockContent">

        <div class="cb_productTitleContentLeft">

          <div class="cb_productTitle">
            <p class="cb_productTitleText">
              Red Canvas
            </p>
          </div>

          <div class="cb_productStyle">
            <p class="cb_productStyleText">
              OCA LOW
            </p>
          </div>

        </div>

        <div class="cb_productTitleContentRight">

          <div class="cb_productPrice">
            <p class="cb_productPriceText">
              $79 USD
            </p>
          </div>

          <div class="cb_productRating">
            <p class="cb_productRatingText">

<Reviews></Reviews>

              154 Reviews
            </p>
          </div>

        </div>
      </div>

    </div>

</template>

<script>
import Reviews from '../Graphics/Reviews.vue'
export default {
  components: {
    'Reviews': Reviews
  }
}
</script>

<style lang="scss" scoped>

.cb_productTitleBlockWrapper {
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cb_productTitleBlockContent {
  width: 335px;
  height: 35px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.cb_productTitleContentLeft,
.cb_productTitleContentRight {
  width: 50%;
}

p.cb_productTitleText {
  font-size: 16px;
  line-height: 16px;
  margin: 0;
  padding: 0;
  font-weight: bold;
  letter-spacing: 1.2px;
}

.cb_productStyleText {
  font-size: 10px;
  line-height: 10px;
  margin: 0;
  padding: 0;
  letter-spacing: 1.2px;
  padding-top: 11px;
}

.cb_productPrice {
  text-align: right;
}

p.cb_productPriceText {
  font-size: 14px;
  line-height: 14px;
  margin: 0;
  padding: 0;
  letter-spacing: 1.2px;
}
.cb_productRating {
  text-align: right;
}
.cb_productRatingText {
  font-size: 12px;
  line-height: 12px;
  margin: 0;
  padding: 0;
  letter-spacing: 1.2px;
  padding-top: 9px;
}
</style>
