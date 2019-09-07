<template lang="html">
  <div class="cb_footerMenuWrapper">
    <div class="cb_footerMenuContent">
      <div class="cb_footerMenu">
        <div class="cb_footerMenuItem">
          <div class="cb_footerMenuItemHeader">
            <p>
              SHOP
            </p>
          </div>
          <div class="cb_footerMenuDrop">
            <div class="cb_footerMenuDropItem">
              <a href="#">CATIBA</a>
            </div>
            <div class="cb_footerMenuDropItem">
              <a href="#">OCA</a>
            </div>
          </div>
        </div>
        <div class="cb_footerMenuItem">
          <div class="cb_footerMenuItemHeader">
            <p>
              SUPPORT
            </p>
          </div>
          <div class="cb_footerMenuDrop">
            <div class="cb_footerMenuDropItem">
              <a href="#">FAQ</a>
            </div>
            <div class="cb_footerMenuDropItem">
              <a href="#">RETURNS</a>
            </div>
            <div class="cb_footerMenuDropItem">
              <a href="#">LIVE</a>
            </div>
            <div class="cb_footerMenuDropItem">
              <a href="#">CHAT</a>
            </div>
          </div>
        </div>
        <div class="cb_footerMenuItem">
          <div class="cb_footerMenuItemHeader">
            <p>
              ABOUT
            </p>
          </div>
        </div>
        <div class="cb_footerMenuItem">
          <div class="cb_footerMenuItemHeader">
            <p>
              BLOG
            </p>
          </div>
        </div>
        <div class="cb_footerMenuItem">
          <div class="cb_footerMenuItemHeader">
            <p>
              POP UP STORES
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../../mixins.scss';
.cb_footerMenuWrapper {
  width: 295px;
  height: 267px;
  margin-top: 50px;
  .cb_footerMenuContent  {
    padding-top: 8px;
    height: 100%;
    width: 100%;
    height: 267px;
    max-height: 267px;
  }
}
.cb_footerMenu {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: 267px;
  width: 375px;
  max-height: 267px;
  @include for-tablet-landscape-up  {
     width: 600px;
     padding-top: 30px;
     height: 170px;
     flex-direction: row;
     align-items: flex-start;
     flex-wrap: nowrap;
     justify-content: flex-start;
  }
  @include for-desktop-up {
    justify-content: space-between;
    width: 900px;

  }
  .cb_footerMenuItem {
    margin-bottom: 40px;
    width: 50%;
  }
}

.cb_footerMenuItemHeader{
  height: 12px;
  padding: 1px 0 2px;
  margin: 0;
  p {
    margin: 0;
    line-height: 10px;
    font-size: 12px;
    letter-spacing: 2px;
    color: #fff;
    font-weight: bold;
  }
}

.cb_footerMenuDropItem {
  height: 25px;
  margin-bottom: 1px;
  a {
    text-decoration: none;
    cursor: pointer;
    margin: 13px 0;
    line-height: 12px;
    font-size: 12px;
    letter-spacing: 2px;
    color: #fff;
    font-weight: 100;
  }
}

</style>
