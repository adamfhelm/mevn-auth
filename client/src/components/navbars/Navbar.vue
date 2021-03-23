<template>
  <div class="ui large top fixed menu">
  <div class="ui container">
    <div class="column icon-columns">
            <router-link v-if="menuActive" to="/landing" exact class="item">
              <font-awesome-icon class="icon" :icon="appIcon" /> Home
            </router-link>
    </div>
    <div class="right menu">
      <div class="item">
        <sui-dropdown :text="authent" button pointing>
              <sui-dropdown-menu>
                <sui-dropdown-item @click="setMenuActive">
                  <router-link :to="{ name: 'all-menus' }" class="dropdown">
                    Menu Setup
                  </router-link>
                </sui-dropdown-item>
                <sui-dropdown-item v-if="auth">
                  <div class="item item-text" @click="unsetAuth">Logout</div>
                </sui-dropdown-item>
              </sui-dropdown-menu>
            </sui-dropdown>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "navbar",
  data: () => {
    return {
      authent: "",
      menuActive: false
    };
  },
  mounted() {
    this.authent = this.$store.state.auth.username;
  },
  methods: {
    setMenuActive: function() {
      return this.menuActive = true;
    }
  },
  computed: {
    appIcon() {
      return faHome;
    },
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 1024px) and (orientation: landscape) {
  .navbar-section {
    display: none;
  }
}

a {
  color: black;
}
.ui.inverted.segment {
  background: #262626;
  border-radius: 0px;
}

.icon {
  color: #d3ab55;
  margin-right: 10px;
}

.item.router-link-exact-active.active {
  color: green;
  font-weight: 800;
}
a.item {
  color: white;
  font-weight: 200;
  letter-spacing: 0.02rem;
}

@media (max-width: 600px) {
  div.ui.button.dropdown {
    margin-left: -30px;
    width: 45px;
    height: 30px;
    background: #262626;
    color: white;
  }
  div.menu.visible.active.transition {
    background: #262626;
  }
  .ui.buttons .button,
  .ui.buttons .or,
  .ui.button {
    font-size: 0.8rem;
    color: white;
  }
  a.dropdown {
    font-size: 10px;
    color: green;
    text-decoration: underline;
    padding: 2px 2px;
  }
}

@media (min-width: 743px) {
  .ui.button.dropdown {
    color: white;
    background: #262626;
    font-weight: 300;
    letter-spacing: 0.5px;
  }
  a.dropdown {
    font-size: 16px;
    color: green;
    letter-spacing: 1px;
    font-weight: 600;
    text-decoration: underline;
  }
  .icon-columns {
    margin-top: 7.5px;
  }
}
</style>