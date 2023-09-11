<template>
  <v-row>
    <BaseManagement />
  </v-row>
</template>

<script>
import BaseManagement from "@/components/BaseManagement/BaseManagement.vue";
import BaseBreadcumb from '@/components/BaseBreadcumb/BaseBreadcumb.vue';

export default {
  name: 'managementPage',
  components: {
    BaseManagement,
    BaseBreadcumb
  }
}
</script>
