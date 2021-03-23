<template>
  <section>
    <edit-submenu-form @createOrUpdate="createOrUpdate" :menu="this.menu" :subMenu="this.subMenu" :subMenuIndex="this.subMenuIndex" ></edit-submenu-form>
  </section>
</template><script>
const EditSubMenuForm = () => import("../../components/menus/EditSubMenuForm")
import { api } from "@/services/menuService";
export default {
  name: "edit",
  components: { "edit-submenu-form": EditSubMenuForm },
  data: function() {
    return { 
    menu: {},
    subMenu: {},
    subMenuIndex: 0
     };
  },
  methods: {
    createOrUpdate: async function(menu) {
      await api.updateMenu(menu)
      this.flash("Menu Updated", "success")
      this.$router.push(`/menu/${menu._id}`)
    }
  },
  async mounted() {
   //console.log("parms to play with", this.$route.query.menu, this.$route.query.submenu)
   // console.log("query", this.$route.query.menu.subMenus[this.$route.query.submenu])
    this.menu = await this.$route.query.menu
   //console.log("menu", this.menu.subMenus[this.$route.query.submenu.menuName])
    this.subMenu = await this.$route.query.menu.subMenus[this.$route.query.submenu]
   // console.log("menuIndex", this.subMenuIndex)
   this.subMenuIndex = this.$route.query.submenu
  }
};
</script>
<style scoped>

</style>