<script src="./BaseBreadcumb.js"/>
<style scoped src="./BaseBreadcumb.css"></style>
<template>
  <div class="d-flex">
    <v-icon>mdi-home-outline</v-icon>
      <v-breadcrumbs class="pa-0" :items="items" divider="">
      <template v-slot:item="{ item }">
        <v-icon>mdi-chevron-right</v-icon>        
        <v-breadcrumbs-item :disabled="item.disabled">{{ item.title }}</v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </div>
</template>
