<template>
  <section>
    <div class="ui container">
      <div class="menu-header">
        <div class="ui center aligned header">
          <flash-message class="myFlash"></flash-message>
          <div class="ui two column grid">
            <div class="column">
              <h2>Menus</h2>
            </div>
            <div class="column">
              <router-link
                :to="{
                  name: 'newMenu',
                  params: { id: this.$route.params.id },
                }"
              >
                <button class="ui basic green button">Add Menu</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
     
     <div class="ui container" v-if="dataFetched">
      <div class="ui one column grid">
        <div class="row center aligned">
          <table id="teams" class="ui celled unstackable center aligned table">
            <thead>
              <tr>
                <th>Menu Name</th>
                <th>Menu Description</th>
                <th>Parent Menu Name</th>
                <th>Menu Icon Class</th>
                <th>Role(s) Required</th>
                <th colspan="3"></th>
              </tr>
            </thead>
             <tr v-for="(menu, i) in menus" :key="i">
              <td>{{ menu.menuName }}</td>
              <td>{{ menu.menuDescription }}</td>
              <td>{{ menu.parentMenuName}}</td>
              <td>{{ menu.menuIconClass}}</td>
              <td>{{ menu.rolesRequiredForAccess}}</td>
              <td width="75" class="ui center aligned">
                <router-link :to="{ name: 'showMenu', params: { id: menu._id }}">Show</router-link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    </div>
  </section>
</template>
<script>
import { api } from "@/services/menuService";
export default {
  data() {
    return {
      menus: [],
      dataFetched: false
    }
  },
  async mounted() {
    this.menus = this.getData()
  },
  methods: { 
  getData: async function() {
    this.menus = await api.getMenus()
    this.dataFetched = true;
  }
  }
};
</script>
<style scoped>
.myFlash {
  width: 125px;
  margin-top: 20%;
  margin-right: 50%;
  position: absolute;
  top: 50;
  right: 0;
  z-index: 1;
}
h2 {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
}

.menu-header {
  margin-top: 7em;
  margin-bottom: 40px;
}

@media (max-width: 600px) {
  .ui.table td {
    padding: 0.55em 0.55em;
    font-size: 0.75em;
    text-align: inherit;
  }
}
@media (max-width: 455px) {
  .ui.table td {
    padding: 0.45em 0.45em;
    font-size: 0.65em;
    text-align: inherit;
  }
}
@media (max-width: 375px) {
  .ui.table td {
    padding: 0.05em 0.05em;
    font-size: 0.75em;
    text-align: inherit;
  }
}
h2 {
  color: black;
  letter-spacing: 1px;
  font-weight: 500;
}

a {
  color: green;
  font-weight: 500;
  letter-spacing: 0.3px;
}
</style>