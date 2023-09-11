<script src="./TheFooter.js"/>
<style scoped src="./TheFooter.css"></style>
<template>
  <v-footer class="d-flex flex-column">
    <div class="px-4 py-2 bg-black text-center w-100">
      <strong>System</strong> - {{ new Date().getFullYear() }}
    </div>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<script>
  export default {
    data: () => ({}),
  }
</script>
