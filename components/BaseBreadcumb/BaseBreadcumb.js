export default {
  data: () => ({
    items: []
  }),
  created() {
    this.updateItems();
  },
  methods: {
    addItem(paths, rootPath, routes) {
      if (paths && routes) {
        const path = paths.shift();
        for (const route of routes) {
          const routePath = route.path ? route.path.replace('/', '') : '';
          if (path === routePath) {
            rootPath += `${routePath}/`;
            this.items.push({
              disabled: route.children !== undefined,
              href: rootPath,
              title: route.title
            });
            this.addItem(paths, rootPath, route.children);
          }
        }
      }
    },
    updateItems() {
      this.items = [];
      const paths = this.$route.path.substr(1).split('/');
      const routes = this.$router.options.routes;
      this.addItem(paths, '/', routes);
    }
  },
  watch: {
    $route() {
      this.updateItems();
    }
  }
};
