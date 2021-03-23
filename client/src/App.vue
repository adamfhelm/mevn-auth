<template>
  <div id="app">
    <!-- <flash-message class="myFlash"></flash-message> -->
    <navbar v-if="this.$store.state.auth.username" />
    <router-link to="/landing"></router-link>
    <router-view />
  </div>
</template>
<script>
import Navbar from '@/components/navbars/Navbar.vue'
export default {
  name: "app",
  components: {
    navbar: Navbar,
  }
};

</script>
<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}




.ui.center.aligned.header.text-danger {
    margin-top: 25px;
    color: #a82236;
    font-weight: 700;
    letter-spacing: 1px;
  }

  

</style>