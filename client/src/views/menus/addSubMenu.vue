<template>
  <section>
    <add-sub-menu-form @createOrUpdate="createOrUpdate" :menu="this.menu"></add-sub-menu-form>
  </section>
</template><script>
const AddSubMenuForm = () => import("../../components/menus/AddSubMenuForm.vue")
import { api } from "@/services/menuService"
export default {
  name: "edit",
  components: { "add-sub-menu-form": AddSubMenuForm },
  data: function() {
    return { menu: {},
    menuLevel: 0
     };
  },
  methods: {
    createOrUpdate: async function(menu) {
      console.log("menu", menu)
      await api.updateMenu(menu)
      this.flash("Menu Updated", "success")
      this.$router.push(`/menu/${menu._id}`)
    }
  },
   async mounted() {
     this.menu = await this.$route.query.menu
     this.menuLevel = await this.$route.query.menuLevel
     console.log("menu level", this.menuLevel)
   }
};
</script>
<style scoped>

</style>