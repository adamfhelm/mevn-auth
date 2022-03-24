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
                <signup-form @createOrUpdate="createOrUpdate" :buttonColor="buttonColor" :loading="loading" :login="login"/>
              </div>
            </div>
          </sui-card>
        </div>
      </sui-card>
    </div>
  </section>
</template>
<script>
import AuthSignupForm from "@/components/authentication/core/AuthenticationSignupForm.vue";
import { SET_AUTH } from "@/store/auth/actions";
export default {
  name: "authSignup",
  components: {
    SignupForm: AuthSignupForm
  },
  data: function() {
    return {
      //controlls spinner on button
      loading: false,
      // sets the color property of the button
      buttonColor: "green",
      login: {
          username: "",
          password: ""
        }
    };
  },
  methods: {
    createOrUpdate: function() {
        // while the login creation is doing its thing set the state to loading.
        this.loading = true
        // dispatch createLogin method from the vuex store.
        this.$store.dispatch(SET_AUTH, this.login).then(response => {
        // use auth mixin in @mixins and registered globally to save response to local storage and make the
        // SET_AUTH mutation in vuex
        // this.$store.state.auth.username = response.data.username
         console.log("response", response)
        //this.setAuth(response.data)
        this.$router.push('/authentication/signup/confirm-message-sent')
       })
       // send flash message
       .catch(error => {
       this.loading = false
        this.flash(error.response.data.username, "error");
        console.log("error", error.response.data)
        
      })
    }
  }
};
</script>

<style lang="scss" scoped>
$color-white:  #fff;
$color-gold: #d3ab55;
$color-black:  #262626;

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