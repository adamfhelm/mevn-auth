<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out all fields!</p>
<div class="ui container header section">
  <div>
      <h1 class="ui center aligned header text-danger">Editing SubMenu: {{subMenu.menuName}}</h1>
      
 </div>
      </div>
      <div class="ui menu-details container">
        <div class="ui labeled input fluid">
          <div class="ui label"><font-awesome-icon class="icon" :icon="barsIcon" />Menu Name</div>
          <input
            type="text"
            placeholder="Menu Name"
            v-model="subMenu.menuName"
          />
        </div>
        <div class="ui labeled input fluid">
          <div class="ui label points-padding">
            <font-awesome-icon class="icon" :icon="commentIcon" /> Menu Description
          </div>
          <input
            type="text"
            placeholder="Menu Description"
            v-model="subMenu.menuDescription"
          />
        </div>  
        <div class="ui labeled input fluid">
          <div class="ui label points-padding">
            <font-awesome-icon class="icon" :icon="wrenchIcon" /> Menu Icon Class
          </div>
          <input
            type="text"
            placeholder="Menu Icon ClassId"
            v-model="subMenu.menuIconClass"
          />
        </div>
        <div class="ui labeled input fluid">
          <div class="ui label points-padding">
            <font-awesome-icon class="icon" :icon="maskIcon" /> Role(s) Required
          </div>
          <input
            type="text"
            placeholder="Separate With Commas"
            v-model="subMenu.rolesRequiredForAccess"
          />
        </div>
         <div class="ui labeled input fluid">
        <div class="ui label">
          <font-awesome-icon class="icon" :icon="maskIcon" />SubMenus:
        </div>
        <input class="input-hyperlink" 
        v-for="(submenu, i) in subMenu.subMenus"
            :key="i"
            @click="subMenuToUpdate(menu, i)"
        type="text" readonly :value="submenu.menuName" />
      </div>
      </div>
      <div class="ui center aligned header">
      <div class="ui container">
        <router-link :to="{ name: 'showMenu' }">
          <button class="ui basic tiny blue button">
            <font-awesome-icon class="icon" :icon="leftArrowIcon" />
            Back
          </button>
        </router-link>
        <button class="ui basic tiny green button">Update Menu</button>
      <button @click="deleteSubMenu" class="ui basic tiny red button">Delete</button>
      </div>
      </div>
  </form>
</template>

<script>
import { faBars, faComment, faWrench, faTheaterMasks, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export default {
  name: 'menu-form',
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {
        return {
          menuName: ""
        }
      }
    },
    subMenu: Object,
    subMenuIndex: Number
  },
  data() {
    return {
      errorsPresent: false,
      subMenuDelete: false
    };
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
    onSubmit: function() {
      if(this.subMenuDelete) {
        console.log("on submit")
        this.$emit('createOrUpdate', this.menu)
      } else {
      this.menu.subMenus[this.subMenuIndex] = {
        menuName: this.subMenu.menuName,
        menuDescription: this.subMenu.menuDescription,
        menuIconClass: this.subMenu.menuIconClass,
        rolesRequiredForAccess: this.subMenu.rolesRequiredForAccess,
        subMenus: this.subMenu.subMenus
        }
      
      //console.log("heres the menu now", this.menu)
      if (this.menu.menuName === '' 
        || this.menu.menuDescription === '' ) 
        {
        this.errorsPresent = true
      } else {
        this.$emit('createOrUpdate', this.menu)
      }
    }
    },
    deleteSubMenu: function() {
      this.subMenuDelete = true
      this.menu.subMenus.splice(this.subMenuIndex, 1)
    },
    // addSubMenu() {
    //   this.$router.push({name: 'addChildToSubmenu', query: {menu: this.menu, subMenuIndex: this.subMenuIndex}})
    // },
    subMenuToUpdate(menuArg, subMenuIndex) {
      this.$router.push({ name: 'editChildSubMenu', query: { menu: menuArg, submenu: subMenuIndex } })
    }
  }
};
</script>

<style scoped>

div.ui.header.container {
  height: 5vh;
  margin-top: 10%;
  margin-bottom: 5%;
}

.input-hyperlink {
  color: #4183C4 !important;
  text-decoration: underline;
  cursor: pointer;
}

div.ui.menu-details.container {
  height: 40vh;
  margin-top: 80px;
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


@media only screen and (max-width: 767px) {
.ui.container  {
    width: auto !important;
    margin-top: 1em;
    margin-left: .5em !important;
    margin-right: 1em !important;
}
}
      
</style>