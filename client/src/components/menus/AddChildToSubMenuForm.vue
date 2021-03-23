<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out all fields!</p>
<div class="ui container header section">
  <div>
      <h1 class="ui center aligned header text-danger">Add Child Submenu to Parent: {{ menu.subMenus[subMenuIndex].menuName}}</h1>
      
 </div>
      </div>
      <div class="ui menu-details container">
        <div class="ui labeled input fluid">
          <div class="ui label"><font-awesome-icon class="icon" :icon="barsIcon" />Submenu Name</div>
          <input
            type="text"
            placeholder="Menu Name"
            v-model="subMenuName"
          />
        </div>
        <div class="ui labeled input fluid">
          <div class="ui label"><font-awesome-icon class="icon" :icon="barsIcon" />Parent Menu</div>
          <input
            type="text" readonly
            placeholder="Parent Menu"
            v-model="menu.subMenus[subMenuIndex].menuName"
          />
        </div>
        <div class="ui labeled input fluid">
          <div class="ui label points-padding">
            <font-awesome-icon class="icon" :icon="commentIcon" /> Menu Description
          </div>
          <input
            type="text"
            placeholder="Menu Description"
            v-model="subMenuDescription"
          />
        </div>  
        <div class="ui labeled input fluid">
          <div class="ui label points-padding">
            <font-awesome-icon class="icon" :icon="wrenchIcon" /> Menu Icon Class
          </div>
          <input
            type="text"
            placeholder="Menu Icon ClassId"
            v-model="subMenuIconClass"
          />
        </div>
        <div class="ui labeled input fluid">
          <div class="ui label points-padding">
            <font-awesome-icon class="icon" :icon="maskIcon" /> Role(s) Required
          </div>
          <input
            type="text"
            placeholder="Separate With Commas"
            v-model="subMenuRolesRequiredForAccess"
          />
        </div>
      </div>
       <div class="ui center aligned header">
      <div class="ui container">
               <router-link
          :to="{ name: 'showMenu' }"
        >
        <button class="ui basic tiny blue button"> <font-awesome-icon class="icon" :icon="leftArrowIcon" />All Menus</button>
               </router-link>
        <button class="ui basic tiny green button">Add Submenu</button>
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
          subMenus: []
        };
      }
    },
    subMenuIndex: Number
  },
  data() {
    return {
      errorsPresent: false,
      // new submenu names
      subMenuName: "",
      subMenuDescription: '',
      subMenuIconClass: '',
      subMenuRolesRequiredForAccess: '',
      // data store for future submenus
      subMenus: []
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
        // with values set in the form,
        // push a new submenu document object to the menu.subMenus array
        console.log("parms", this.menu.subMenus[this.subMenuIndex], this.subMenuIndex)
      //   this.menu.subMenus[this.subMenuIndex].subMenus.push({
      //   parentMenuName: this.menu.subMenus[this.subMenuIndex].menuName,
      //   menuName: this.subMenuName,
      //   menuDescription: this.subMenuDescription,
      //   menuIconClass: this.subMenuIconClass,
      //   rolesRequiredForAccess: this.menu.rolesRequiredForAccess
      //   })
      // if (this.menu.menuName === '' 
      //   || this.menu.menuDescription === '' ) 
      //   {
      //   this.errorsPresent = true
      // } else {
      //   this.$emit('createOrUpdate', this.menu)
      // }
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
      
</style>