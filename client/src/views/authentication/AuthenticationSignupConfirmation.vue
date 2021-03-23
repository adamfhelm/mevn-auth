<template>
  <section class="background">
    <flash-message class="myFlash"></flash-message>
    <link
      href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
      rel="stylesheet"
    />
    <div class="ui grid center aligned entire">
      <sui-card>
        <div class="ui grid center aligned">
          <sui-card style="margin-top: 2%">
            <div class="row">
              <div class="six wide computer column catcpa">
                <confirmation-form @signupSuccess="signupSuccess" :buttonColor="buttonColor" :loading="loading"/>
              </div>
            </div>
          </sui-card>
        </div>
      </sui-card>
    </div>
  </section>
</template>
<script>
import ConfirmationForm from "@/components/authentication/core/AuthenticationSignupConfirmationForm.vue"
import { POST_CONFIRM_LOGIN } from "@/store/auth/actions";
export default {
  components: {
    ConfirmationForm: ConfirmationForm
  },
  data: function() {
    return {
      //controlls spinner on button
      loading: false,
      // sets the color property of the button
      buttonColor: "green"
    };
  },
  methods: {
     signupSuccess: function() {
      // while the login creation is doing its thing set the state to loading.
        this.loading = true
      
      // dispatch reset password method from the vuex store.
         this.$store.dispatch(POST_CONFIRM_LOGIN, {
           emailConfirmToken: this.$route.params.emailConfirmToken
         }).then(() => {
         this.loading = false
         this.$router.push('/')
       }).catch(error => {
        this.loading = false
         this.flash(error.response.data.password, "error");
         console.log("error", error.response.data)
       })
    }
  }
};
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