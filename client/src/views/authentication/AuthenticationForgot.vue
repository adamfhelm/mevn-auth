<template>
  <section class="background">
    <flash-message class="myFlash"></flash-message>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <div class="ui grid center aligned entire">
      <sui-card>
        <div class="ui grid center aligned">
          <sui-card style="margin-top: 2%">
            <div class="row">
              <div class="six wide computer column catcpa">
                <sui-form>
                  <base-form @sendMail="sendMail" :buttonColor="buttonColor" :login="login" :loading="loading" />
                </sui-form>
              </div>
            </div>
          </sui-card>
        </div>
      </sui-card>
    </div>
  </section>
</template>
<script>
 
 import BaseForm from "@/components/authentication/core/AuthenticationForgotForm.vue"
 import { POST_FORGOT_PASSWORD } from "@/store/auth/actions";
 
export default {
  name: "authentication",
  components: {
    BaseForm: BaseForm
  },
   data: function() {
      return {
        loading: false,
        buttonColor: "green",
        login: {
          username: ""
        }
      }
    },
    methods: {
    sendMail: function() {
      console.log("usern", this.login)
     // while the login creation is doing its thing set the state to loading.
        this.loading = true
      // dispatch createLogin method from the vuex store.
        this.$store.dispatch(POST_FORGOT_PASSWORD, this.login).then(response => {
        console.log(response)
        this.$router.push('/authentication/signup/confirm-message-sent')
      }).catch(error => {
       this.loading = false
        this.flash(error.response.data.username, "error");
        console.log("error", error.response.data)
      })
    }
  }
}
</script>
<style scoped lang="scss">
$color-red: #a82236;
$color-gold: #d3ab55;
$color-black:  #262626;
$color-white:  #fff;

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

.background {
  width: 100%;
  height: 102vh;
  position: relative;
  background: linear-gradient(rgba($color-black, 0.7), rgba($color-black, 0.7)),
    url(../../images/background-hex.jpg) center no-repeat;
  background-size: cover;
}
.ui.card {
  background: $color-white; /* For Safari 5.1 to 6.0 */
  box-shadow: none;
  border-radius: 10px;
}

.creds {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  letter-spacing: 0.5px;
}

.or {
  color: black;
  padding: 10px;
}
.item {
  color: $color-gold;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-decoration: underline;
}
.icon {
  text-decoration: none;
  color: $color-red;
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