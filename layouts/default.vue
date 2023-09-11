<template>
  <v-app dark>
    <TheSidebar />
    <TheHeader />
    <TheContainer />   
    <TheFooter />
  </v-app>
</template>

<script>
import Events from "@/utils/Events";
import TheHeader from "@/components/TheHeader/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar/TheSidebar.vue";
import TheContainer from "@/components/TheContainer/TheContainer.vue";
import TheFooter from "@/components/TheFooter/TheFooter.vue";

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheSidebar,
    TheContainer,
    TheFooter
  },
  data () {
    return {
      isThemeDark: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'management',
          to: '/management'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'management'
    }
  },
  mounted() {
    Events.$on("header-theme-dark", () => {
      this.isThemeDark = !this.isThemeDark;
      this.$vuetify.theme.dark = this.isThemeDark;
    });
  }
}
</script>
