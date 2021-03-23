<template>
  <section>
    <div class="ui grid center aligned">
      <img style="margin-top: 6%" src="../../../images/mevn.png" class="ui medium image" />
    </div>
    <sui-form>
      <sui-form-field>
        <div class="ui left aligned login header" style="margin-top: 10%">
          <h3>
            <span class="creds">Username:</span>
          </h3>
        </div>
        <div class="ui center aligned header">
        <input
          placeholder="e-mail address"
          v-model="login.username"
          @input="$emit('input', $event.target.value)" />
        </div>
      </sui-form-field>
      <sui-form-field>
        <div class="ui left aligned login header creds">
          <h3>
            <span class="creds">Password:</span>
          </h3>
        </div>
        <div class="ui center aligned header">
        <input 
          type="password"
          placeholder="password"
          v-model="login.password"
          @input="$emit('input', $event.target.value)" />
          </div>
      </sui-form-field>
    </sui-form>
  </section>
</template>
<script>
export default {
  name: "authenticationBase",
  // show signup field if component is initiated via Signup

  props: {
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