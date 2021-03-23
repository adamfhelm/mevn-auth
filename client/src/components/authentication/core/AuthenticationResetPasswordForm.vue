<template>
  <section>
    <div class="ui grid center aligned">
      <img style="margin-top: 6%" src="../../../images/mevn.png" class="ui medium image" />
    </div>
      <ValidationObserver v-slot="{ handleSubmit }">
        <sui-form action="#" @submit.prevent="handleSubmit(onSubmit)">
     <ValidationObserver ref="observer">
        <ValidationProvider name="password" rules="pwdLength|confirmed:confirmation|required" v-slot="{ errors }">
          <sui-form-field>
            <div class="ui left aligned login header creds" style="margin-top: 10%">
              <h3>
                <span class="creds">New Password:</span>
              </h3>
            </div>
            <input
              type="password"
              placeholder="password"
              v-model="password"
            />
            <span class="error">{{errors[0]}}</span>
          </sui-form-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" vid="confirmation">
          <sui-form-field style="margin-top: 5%">
            <div class="ui left aligned login header creds">
              <h3>
                <span class="creds">Confirm Password:</span>
              </h3>
            </div>
            <input
              type="password"
              placeholder="confirm password"
              v-model="confirmPassword"
            />
          </sui-form-field>
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>
      </ValidationObserver>
         <div class="ui segment">
        <div class="ui center aligned header">
          <btn 
            :loading="loading"
            :buttonColor="buttonColor"
            :buttonDisabled=false
            label="Reset Now"
          />
        </div>
      </div>
        </sui-form>
      </ValidationObserver>
  </section>
</template>
<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { confirmed, required } from "vee-validate/dist/rules";
extend("confirmed", {
  ...confirmed,
  message: "Please Confirm Your Password"
});
extend("pwdLength", value => {
  if (value.length > 3) {
    return true;
  }
  return "Your password must contain at least four characters";
});
extend("required", {
  ...required,
    message: "A valid {_field_} is required"
});
export default {
  name: "authenticationForgot",
  // show signup field if component is initiated via Signup
  components: {
    ValidationProvider: ValidationProvider,
    ValidationObserver: ValidationObserver
  },
  data: () => {
    return {
      password: "",
      confirmPassword: "",
    };
  },
  props: {
    login: {
      type: Object,
      required: false,
      default: () => {
        return {
          password: ""
        };
      }
    },
    buttonColor: {
      type: String,
      default: "green"
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // since the props can't be mutated set prop equal
    // data element before submitting.
    onSubmit: function() {
      this.login.password = this.password
      this.$emit("sendMail", this.login)
    }
  }
};
</script>
<style lang="scss" scoped>
$color-red: #a82236;

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

.creds {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  letter-spacing: 0.5px;
}


.error {
  color: $color-red;
  font-weight: 800;
  letter-spacing: 0.5px;
}
</style>