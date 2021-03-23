<template>
  <section class="background">
    <flash-message class="myFlash"></flash-message>
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <div class="ui grid center aligned entire">
      <sui-card>
        <div class="ui grid center aligned">
          <sui-card style="margin-top: 2%">
            <div class="row">
              <div class="six wide computer column catcpa">
                <sui-form @submit.prevent="onSubmit">
                  <base-form :login="login" :loading="loading" />
                  <div class="ui segment">
                    <div class="ui center aligned header">
                      <btn :buttonDisabled="buttonDisabled" :loading="loading" :buttonColor="buttonColor" label="Sign In" />
                    </div>
                    <sui-header text-align="center" size="small">
                      <router-link to="/authentication/forgot" exact class="item">
                         Forgot Password
                      </router-link>
                      <span class="or">or</span>
                      <router-link to="/authentication/signup" exact class="item">
                         Signup
                      </router-link>
                    </sui-header>
                  </div>
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
 //import _ from 'lodash'
 import BaseForm from "@/components/authentication/core/AuthenticationBaseForm.vue"
 import { POST_LOGIN } from "@/store/auth/actions";
 
export default {
  name: "authentication",
  components: {
    BaseForm: BaseForm
  },
   data: function() {
      return {
        loading: false,
        buttonDisabled: false,
        buttonColor: "green",
        login: {
          username: "",
          password: ""
        }
      }
    },
    methods: {
    onSubmit: function() {
      // while the login creation is doing its thing set the state to loading.
        this.loading = true
      // dispatch createLogin method from the vuex store.
        this.$store.dispatch(POST_LOGIN, this.login).then(response => {
        // use auth mixin to save response to local storage and make the
        // SET_AUTH mutation in vuex
        this.setAuth(response.data)
      }).catch(error => {
        this.loading = false
        if(error.response.data.username != undefined) {
        this.flash(error.response.data.username, "error")
        } else {
        this.flash(error.response.data.password, "error")
        }
      })
    }
  },
  mounted: function () {
    if(this.auth) {
      this.$router.push('/landing')
    }
  }
}
</script>
<style scoped lang="scss">
$color-white:  #fff;
$color-black:  #262626;
$color-blue: blue;


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
  color: $color-blue;
  font-weight: 500;
  letter-spacing: 0.5px;
}
.icon {
  text-decoration: none;
  color: $color-black;
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