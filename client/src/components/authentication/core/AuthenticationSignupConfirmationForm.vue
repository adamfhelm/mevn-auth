<template>
  <section>
    <div class="ui grid center aligned">
      <img style="margin-top: 6%" src="../../../images/mevn.png" class="ui medium image" />
    </div>

    <sui-form action="#" @submit.prevent="onSubmit">
      <div class="ui left aligned login header creds" style="margin-top: 10%">
        <h3>
          <div>
            <i class="icon play circle outline"></i>
            <span class="creds">Sign up successful!</span>
          </div>
        </h3>
      </div>

      <div class="ui segment">
        <div class="ui center aligned header">
          <btn
            :loading="loading"
            :buttonColor="buttonColor"
            :buttonDisabled="false"
            label="Continue"
          />
        </div>
      </div>
    </sui-form>
  </section>
</template>
<script>
export default {
  // show signup field if component is initiated via Signup

  props: {
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
      this.$emit("signupSuccess");
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

// div.ui.left.aligned.login.header.username {
//   margin-top: 10px;
// }

.icon {
  text-decoration: none;
  color: $color-red;
}
</style>