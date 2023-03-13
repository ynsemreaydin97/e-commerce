<template>
  <v-app>
    <header-bar></header-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import HeaderBar from "@/components/shared/HeaderBar.vue";
import {mapGetters} from "vuex";
export default {
  name: 'App',
  components:{
    HeaderBar,
  },
  computed: {
    ...mapGetters({
      getAccessToken: 'auth/getAccessToken',
    })
  },
  created() {
    if (this.getAccessToken)
      this.$router.push({path: '/login'})
  },

  data: () => ({
    //
  }),
};
</script>
