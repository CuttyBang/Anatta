<template lang="html">
  <div class="cb_footerNewsletterWrapper">
    <div class="cb_footerNewsletter">

      <div class="cb_footerNewsletterTitle">
        <p>
          NEWSLETTER
        </p>
      </div>

      <div class="cb_footerNewsletterForm">
        <div class="cb_footerFormInput">
          <input type="text" name="" value="" placeholder="Enter email">
        </div>
        <div class="cb_footerFormButton">
          <p>
            JOIN US
          </p>
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
.cb_footerNewsletterWrapper,
.cb_footerNewsletter  {
  height: 60px;
  width: 295px;
}



.cb_footerNewsletterTitle {
  margin-top: 7px ;
  width: 199px;
  p {
    margin: 0;
    letter-spacing: 2px;
    font-weight: bold;
    color: #fff;
    font-size: 12px;
  }
}
.cb_footerNewsletterForm {
  height: 40px;
  width: 295px;
  padding-bottom: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.cb_footerFormInput {
  width: 199px;
  height: 25px;
  padding: 4px 0 0;
  margin: 0;
  input {
    width: 199px;
    padding: 0;
    background: transparent;
    color: #fff;
    border: none;
    border-bottom: 2px solid #fff;
    padding-bottom: 11px;
    font-weight: 700;
    &::placeholder {
      font-weight: 700;
      font-size: 12px;
      opacity: 1;
      color: #fff;
    }
    &:-ms-input-placeholder {
      font-weight: 700;
      font-size: 12px;
      color: #fff;
    }
    &::-ms-input-placeholder {
      font-weight: 700;
      font-size: 12px;
      color: #fff;
    }
  }
}
.cb_footerFormButton {
  width: 87px;
  height: 39px;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: 2px solid #eee;
    color: #eee;
  }
  p {
    margin: 0;
    line-height: 10px;
    font-size: 10px;
    color: #fff;
    font-weight: 100;
  }
}
</style>
