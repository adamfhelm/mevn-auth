<template>
  <section>
    <div class="ui header container">
       <div>
         <flash-message class="myFlash"></flash-message>
      <h1 class="ui center aligned header text-danger">Menu: {{menu.menuName}}</h1>
      </div>
    </div>
    <div class="ui menu-details container">
      <div class="ui labeled input fluid">
        <div class="ui label">
          <font-awesome-icon class="icon" :icon="barsIcon" />Menu Name:
        </div>
        <input type="text" readonly :value="menu.menuName" />
      </div>
      <div class="ui labeled input fluid">
        <div class="ui label">
          <font-awesome-icon class="icon" :icon="commentIcon" />Menu Description:
        </div>
        <input type="text" readonly :value="menu.menuDescription" />
      </div>
      <div class="ui labeled input fluid">
        <div class="ui label">
          <font-awesome-icon class="icon" :icon="wrenchIcon" />Menu Icon Class:
        </div>
        <input type="text" readonly :value="menu.menuIconClass" />
      </div>
      <div class="ui labeled input fluid">
        <div class="ui label">
          <font-awesome-icon class="icon" :icon="maskIcon" />Required Roles:
        </div>
        <input type="text" readonly :value="menu.rolesRequiredForAccess" />
      </div>
      
         <div class="ui labeled input fluid">
        <div class="ui label">
          <font-awesome-icon class="icon" :icon="maskIcon" />SubMenus:
        </div>
        <input class="input-hyperlink" 
        v-for="(submenu, i) in menu.subMenus"
            :key="i"
            @click="subMenuToUpdate(menu, i)"
        type="text" readonly :value="submenu.menuName" />
      </div>
    
    </div>
      <div class="ui center aligned container">
         <router-link
          :to="{ name: 'all-menus' }"
        >
          <button class="ui basic tiny blue button"> <font-awesome-icon class="icon" :icon="leftArrowIcon" />All Menus</button>
        </router-link>
        
          <button  @click="addSubMenu()" class="ui basic tiny green button">Add Submenu</button>
        
        <router-link
          :to="{ name: 'editMenu', params: { id: this.$route.params.id } }"
        >
          <button class="ui basic tiny yellow button">Edit Menu</button>
        </router-link>
        <router-link 
        :to="{ name: 'all-menus' }">
          <button class="ui basic tiny red button" @click="onDestroy(menu._id)">
            Delete Menu
          </button>
        </router-link>
      </div>
  </section>
</template>
<script>
import { faBars, faComment, faWrench, faTheaterMasks, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { api } from "@/services/menuService";
export default {
  name: "show",
  data() {
    return {
      menu: {},
      subMenuIndex: 0
    };
  },
  async mounted() {
     this.menu = await api.getMenu(this.$route.params.id)
     this.subMenuIndex = await this.$route.query.subMenuIndex
  },
  computed: {
    barsIcon() {
      return faBars
    },
    commentIcon() {
      return faComment
    },
    wrenchIcon() {
      return faWrench
    },
    maskIcon() {
      return faTheaterMasks
    },
    leftArrowIcon() {
      return faArrowLeft
    }
  },
  methods: {
    
     async onDestroy(id) {
      const sure = window.confirm("Are you sure?");
      if (!sure) return;
      await api.deleteMenu(id);
      this.flash("Menu Deleted", "success");
    },
    subMenuToUpdate(menuArg, subMenuIndex) {
      this.$router.push({ name: 'editSubMenu', query: { menu: menuArg, submenu: subMenuIndex } })
    },
    addSubMenu() {
      this.$router.push({name: 'addSubMenu', query: {menu: this.menu}})
    }
  }
};
</script>
<style scoped>
.myFlash {
  width: 125px;
  margin-top: 30vh;
  margin-right: 45%;
  position: absolute;
  top: 50;
  right: 0;
  z-index: 1;
}
.input-hyperlink {
  color: #4183C4 !important;
  text-decoration: underline;
  cursor: pointer;
}
div.ui.header.container {
  height: 5vh;
  margin-top: 8%;
  margin-bottom: 5%;
}

div.ui.menu-details.container {
  height: 40vh;
  margin-top: 10px;
  margin-bottom: 20px;
}

div.ui.labeled.input.fluid {
  border: none;
}
div.label {
  width: 100px;
}

button.ui.basic.tiny.button {
  margin-right: 15px;
}

.ui.center.aligned.header.text-success {
  color: green;
  font-weight: 700;
  letter-spacing: 1px;
}

@media only screen and (max-width: 767px) {
  .ui.container {
    width: auto !important;
    margin-top: 1em;
    margin-left: 0.5em !important;
    margin-right: 1em !important;
  }
}
</style>