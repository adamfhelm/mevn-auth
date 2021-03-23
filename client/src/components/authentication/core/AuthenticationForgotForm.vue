<template>
  <section>
    <div class="ui grid center aligned">
      <img style="margin-top: 6%" src="../../../images/mevn.png" class="ui medium image" />
    </div>
      <ValidationObserver v-slot="{ handleSubmit }">
      <validation-provider name="email" rules="email|required" v-slot="{errors}">
    <sui-form action="#" @submit.prevent="handleSubmit(onSubmit)">
        <sui-form-field>
          <div class="ui left aligned login header creds" style="margin-top: 10%">
            <h3>
              <div v-if="credsReqd">
              <span class="creds">e-mail my new password:</span>
              </div>
            </h3>
          </div>
          <span class="error">{{errors[0]}}</span>
          <input placeholder="email" v-model="username" />
        </sui-form-field>
      <div class="ui segment">
        <div class="ui center aligned header">
          <btn 
            :loading="loading"
            :buttonColor="buttonColor"
            :buttonDisabled=false
            label="e-mail me"
          />
        </div>
      </div>
    </sui-form>
      </validation-provider>
      </ValidationObserver>
  </section>
</template>
<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { email, required } from "vee-validate/dist/rules";
extend("email", {
  ...email,
  message: "Be sure this is a valid e-mail address:)"
});
extend("required", {
  ...required,
  message: "A valid {_field_} address is required"
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
      username: "",
      credsReqd: true
    };
  },
  props: {
    login: {
      type: Object,
      required: false,
      default: () => {
        return {
          username: ""
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
  watch: {
    username: function() {
      this.setRequiredFields();
    }
  },
  methods: {
    // if the user begins to type an e-mail, the validation
    // rules replace the initial message rendered.  see the
    // v-if on the div associated with "e-mail me my password"
    setRequiredFields: function() {
      //console.log(this.username.length > 0)
      if (this.username.length > 0) {
        this.credsReqd = false
      }
    },
    // since the props can't be mutated set prop equal
    // data element before submitting.
    onSubmit: function() {
      this.login.username = this.username
      this.$emit("sendMail", this.login)
    }
  }
};
</script>
<style lang="scss" scoped>


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

// div.ui.left.aligned.login.header.username {
//   margin-top: 10px;
// }


</style>