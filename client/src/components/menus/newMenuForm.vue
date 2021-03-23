<template>
  <section>
    <form action="#" @submit.prevent="onSubmit">
      <p v-if="errorsPresent" class="error">Please fill out all fields!</p>
      <div class="ui container header section">
        <h1 class="ui center aligned header text-success">New Menu</h1>
      </div>
      <div class="ui menu-details container">
        <div class="ui labeled input fluid">
          <div class="ui label"><font-awesome-icon class="icon" :icon="barsIcon" />Menu Name</div>
          <input
            type="text"
            placeholder="Menu Name"
            v-model="menu.menuName"
          />
        </div>
        <div class="ui labeled input fluid">
          <div class="ui label points-padding">
            <font-awesome-icon class="icon" :icon="commentIcon" /> Menu Description
          </div>
          <input
            type="text"
            placeholder="Menu Description"
            v-model="menu.menuDescription"
          />
        </div>  
        <div class="ui labeled input fluid">
          <div class="ui label points-padding">
            <font-awesome-icon class="icon" :icon="wrenchIcon" /> Menu Icon Class
          </div>
          <input
            type="text"
            placeholder="Menu Icon ClassId"
            v-model="menu.menuIconClass"
          />
        </div>
        <div class="ui labeled input fluid">
          <div class="ui label points-padding">
            <font-awesome-icon class="icon" :icon="maskIcon" /> Role(s) Required
          </div>
          <input
            type="text"
            placeholder="Separate With Commas"
            v-model="menu.rolesRequiredForAccess"
          />
        </div>
      </div>
      <div class="ui buttons container center aligned">
        <button class="ui basic tiny green button">Add Menu</button>
      </div>
    </form>
  </section>
</template>

<script>
import { faBars, faComment, faWrench, faTheaterMasks } from "@fortawesome/free-solid-svg-icons";
export default {
  name: "new-menu-form",
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {
        return {
          menuName: "",
          menuDescription: "",
          menuIconClass: "",
          rolesRequiredForAccess: []
          // parentMenuName: "",
          // menuAncestors: [],
        };
      },
    },
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  mounted() {
      setInterval(this.getNow)
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
    }
  },
  methods: {
    onSubmit: function () {
      if (
        this.menu.menuName === "" ||
        this.menu.menuDescription === ""
      ) {
        this.errorsPresent = true;
      } else {
        this.$emit("createOrUpdate", this.menu);
      }
    },
  },
};
</script>

<style scoped>


.error {
  color: red;
}
div.ui.labeled.input.fluid {
  border: none;
}

div.label {
  width: 100px;
}

@media (max-width: 500px) {
  .ui.menu-details.container {
    margin-top: 35px;
    margin-bottom: 10px;
    height: 32vh;
  }
}

.ui.green.buttons .button,
.ui.green.button {
  background-color: #21ba45;
  color: #ffffff;
  border-radius: 5px;
  margin-top: 12px;
  letter-spacing: 0.5px;
}

.ui.center.aligned.header.text-success {
  color: green;
  letter-spacing: 1px;
  font-weight: 500;
}
</style>