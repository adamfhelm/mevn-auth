<template>
  <section>
    <div class="ui grid center aligned">
      <img style="margin-top: 6%" src="../../../images/mevn.png" class="ui medium image" />
    </div>
    <ValidationObserver v-slot="{ handleSubmit }">
    <sui-form action="#" @submit.prevent="handleSubmit(onSubmit)">
      <validation-provider name="email" rules="email|required" v-slot="{errors}">
        <sui-form-field>
          <div class="ui left aligned login header" style="margin-top: 10%">
            <h3>
              <span class="creds">Email:</span>
            </h3>
          </div>
          <input
            placeholder="email address"
            v-model="username"
          />
          <span class="error">{{errors[0]}}</span>
        </sui-form-field>
      </validation-provider>
      <ValidationObserver ref="observer">
        <ValidationProvider name="password" rules="pwdLength|confirmed:confirmation|required" v-slot="{ errors }">
          <sui-form-field style="margin-top: 5%">
            <div class="ui left aligned login header">
              <h3>
                <span class="creds">Password:</span>
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
            <div class="ui left aligned login header">
              <h3>
                <span class="creds">Confirm:</span>
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
          <btn :buttonDisabled="buttonDisabled" :loading="loading" :buttonColor="buttonColor" label="Sign Up"
          />
        </div>
      </div>
    </sui-form>
    </ValidationObserver>
  </section>
</template>
<script>
//import FormField from '@/components/generic/FormField.vue'
// form validation
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { email, confirmed, required } from "vee-validate/dist/rules";
extend("email", {
  ...email,
  message: "Be sure this is a valid e-mail address:)"
});
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
  name: "authenticationBase",
  // show signup field if component is initiated via Signup
  components: {
    ValidationProvider: ValidationProvider,
    ValidationObserver: ValidationObserver
  },
 props: {
     loading: {
     type: Boolean,
     default: false
   },
    buttonColor: {
    type: String
  },
  login: {
      type: Object,
      required: false,
      default: () => {
        return {
          username: "",
          password: ""
        };
      }
    }
 },
 data: () => {
   return {
     username: "",
     password: "",
     confirmPassword: "",
     buttonDisabled: true
   }
 },
 // once all the "pegs" fields have been filled out, button is active so
  // that form can be submitted.
  watch: {
    username: function() {
      this.setRequiredFields();
    },
    password: function() {
      this.setRequiredFields();
    },
    confirmPassword: function() {
      this.setRequiredFields();
    }
  },
  methods: {
    onSubmit: function() {
      //const login = {}
      this.login.username = this.username
      this.login.password = this.password
      this.$emit("createOrUpdate", this.login)
    },
     // make sure all the fields are entered in order for the submit button to not
     // be hidden
    setRequiredFields: function() {
      if (this.username && 
      this.password.length > 1 &&
      this.password === this.confirmPassword) {
        this.buttonDisabled = false;
      }
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
  margin-left: .5em;
  letter-spacing: 0.5px;
}



.icon {
  text-decoration: none;
  color: $color-red;
}
</style>