<template>
  <section class="background">
    <flash-message class="myFlash"></flash-message>
    <div class="ui grid center aligned entire">
      <sui-card>
        <div class="ui grid center aligned">
          <sui-card style="margin-top: 2%">
            <div class="row">
              <div class="six wide computer column catcpa">
               <h1>Check Your Inbox For Account Confirmation</h1>
              </div>
            </div>
          </sui-card>
        </div>
      </sui-card>
    </div>
  </section>
</template>
<script>

</script>

<style lang="scss" scoped>
$color-red: #a82236;
$color-gold: #d3ab55;
$color-black:  #262626;
$color-white:  #fff;

.background {
  width: 100%;
  height: 102vh;
  position: relative;
  background: linear-gradient(rgba($color-black, 0.7), rgba($color-black, 0.7)),
    url(../../images/background-hex.jpg) center no-repeat;
  background-size: cover;
}
button.ui.basic.medium.button {
  letter-spacing: 1px;
  background: none;
  color: $color-gold !important;
  box-shadow: 0px 0px 0px 1px $color-gold;
  &:hover {
    color: white !important;
    background-color: $color-gold !important;
  }
}
div.ui.grid.center.aligned.entire {
  padding-top: 12%;
  @media (max-width: 600px) {
    padding-top: 30%;
  }
  @media (max-width: 500px) {
    padding-top: 35%;
  }
  @media (max-width: 375px) {
    padding-top: 45%;
  }
}
.ui.card {
  background: $color-white; /* For Safari 5.1 to 6.0 */
  box-shadow: none;
  border-radius: 10px;
}
.myFlash {
  width: 250px;
  margin: 10px;
  position: absolute;
  top: 10%;
  left: 40%;
  z-index: 1;
}
</style>