<template>
  <section>
    <edit-menu-form @createOrUpdate="createOrUpdate" :menu="this.menu"></edit-menu-form>
  </section>
</template><script>
const EditMenuForm = () => import("../../components/menus/EditMenuForm.vue");
import { api } from "@/services/menuService";
export default {
  name: "edit",
  components: { "edit-menu-form": EditMenuForm },
  data: function() {
    return { menu: {},
    dataLoaded: false
     };
  },
  methods: {
    createOrUpdate: async function(menu) {
      console.log("i fired");
      await api.updateMenu(menu);
      this.flash("Menu Updated", "success");
      this.$router.push(`/menu/${menu._id}`);
    }
  },
  async mounted() {
    this.menu = await api.getMenu(this.$route.params.id);
    this.dataLoaded = true;
  }
};
</script>
<style scoped>

</style>