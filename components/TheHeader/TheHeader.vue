<script src="./TheHeader"/>
<style scoped src="./TheHeader.css"></style>
<template>
  <div>
    <v-app-bar
      app
    >
      <v-app-bar-nav-icon @click.stop="movingDrawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />     
      <v-btn
          class="mx-2"          
          max-width="80"
          max-height="80"
          @click.stop="changeTheme"         
      >
        <v-icon           
          color="primary"
          >
          mdi-theme-light-dark
        </v-icon>       
      </v-btn>
    </v-app-bar>
  </div>
</template>
