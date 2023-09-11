import Events from "@/utils/Events";

export default {
  data() {
    return {
      clipped: false,
        drawer: false,
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
            icon: 'mdi-theme-light-dark',
            title: 'management',
            to: '/management'
          }
        ],
        miniVariant: false,
        right: false,
        rightDrawer: false,
        title: 'Management'
    }
  },
  mounted() {
    Events.$on('thesidebar-drawer', () => {
      this.drawer = !this.drawer;           
    })
  }
};
