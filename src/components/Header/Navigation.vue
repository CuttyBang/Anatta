<template lang="html">
  <div class="cb_navContentWrapper">
    <div class="cb_navContent">
      <div class="cb_navContentLeft">
        <div class="cb_hamburgerWrapper">
          <a href="#">
            <i class="fas fa-bars cb_hamburger"></i>
          </a>
        </div>
        <div class="deskMenu">
          <div class="cb_men">
            <b>MEN</b>
          </div>
          <div class="cb_men">
            <b>WOMEN</b>
          </div>
        </div>
      </div>
      <div class="cb_navContentCenter">
        <div class="cb_logoWrapper">
          <div class="cb_logo">
            <a href="#"><div class="icon cb-logo cb-logo-dims"></div></a>
          </div>
        </div>
      </div>
      <div class="cb_navContentRight">
        <div class="cb_userIconWrapper">
          <a href="#"><div class="icon cb-user cb-user-dims"></div></a>
        </div>
        <div class="cb_cartIconWrapper">
          <a href="#"><div class="icon cb-bag cb-bag-dims"></div></a>
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
.cb_navContentWrapper {
  height: 70px;
  width: 100%;
  margin: 0;
  padding: 0;
  @include for-desktop-up {
    border-bottom: 1px solid #999;
  }

}
.cb_navContent {
  display: flex;
  height: 70px;
}

.cb_navContentLeft,
.cb_navContentRight,
.cb_navContentCenter {
  height: 100%;
  margin: 0;
}
.cb_navContentLeft,
.cb_navContentRight {
  width: 25%;
}

.cb_navContentRight,
.cb_navContentCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cb_navContentLeft{
  @include for-desktop-up {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

}
@include for-desktop-up {
  .cb_navContentRight {
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
  }
}


.cb_navContentCenter {
  width: 50%;
}

.cb_navContentRight {
  padding-top: 5px;
}

.cb_logoWrapper {
  padding-top: 7px;
  .cb_logo span {
    width: 63px;
    height: 39px;
  }
}
.cb_userIconWrapper,
.cb_cartIconWrapper {
  margin-left: 10px;
}


.cb_hamburgerWrapper {
  height: 100%;
  padding-left: 20px;
  padding-top: 29px;
  @include for-desktop-up {
    display: none;
  }
  .cb_hamburger {
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
    height: 14px;
    width: 18px;
  }
}
.deskMenu { display: none;}
@include for-desktop-up {
  .deskMenu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 50px;
    .cb_men {
      margin-right: 40px;
    }
  }

}



</style>
