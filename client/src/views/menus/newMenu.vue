  
<template>
<section>
  <div class="ui container">
    <new-menu-form class="menu-header" @createOrUpdate="createOrUpdate"></new-menu-form>
  </div>
</section>
</template>

<script>
const NewMenuForm = () => import ('../../components/menus/newMenuForm.vue');
import { api } from "@/services/menuService";
export default {
  name: 'new-menu',
  components: {
    'new-menu-form': NewMenuForm
  },
  methods: {
    createOrUpdate: async function(menu) {
      const res = await api.createMenu(menu);
      this.$router.push(`/menu/${res.menu._id}`);
      this.flash('Menu Created', 'success');
    }
  }
};
</script>
<style scoped>

.menu-header {
  margin-top: 7em;
  margin-bottom: 40px;
}

</style>
