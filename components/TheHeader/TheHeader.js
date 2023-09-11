import Events from "@/utils/Events";

export default {
  data: () => ({
      title: 'Management'
  }),
  methods: {
    movingDrawer() {
      Events.$emit('thesidebar-drawer');
    },
    changeTheme() {
      Events.$emit('header-theme-dark');
    }   
  }
};
