<script src="./BaseLogin.js"/>
<style scoped src="./BaseLogin.css"></style>
<template>
  <v-container fill-height fluid primary>
    <v-row align="center" justify="center">
      <v-container>
        <v-row class="mb-2" align="center" justify="center">
          <v-img v-if="!this.$vuetify.theme.dark" contain src="" max-height="100" max-width="150"></v-img>
          <v-img v-else contain src="" max-height="100" max-width="150"></v-img>
          <v-divider class="d-none d-sm-flex login-divider ma-0 ml-5 mr-5" vertical></v-divider>
          <v-img
            v-if="!this.$vuetify.theme.dark"
            contain
            src=""
            max-width="120"
          ></v-img>
          <v-img
            v-else
            contain
            src=""
            max-width="120"
          ></v-img>
        </v-row>
        <v-row justify="center">
          <v-form lazy-validation ref="form" v-model="valid" @submit.prevent="handleSubmit">
            <v-card class="login-form px-md-10" elevation="10">
              <v-card-title class="justify-center">Manager</v-card-title>
              <v-card-text>
                <v-text-field
                  label="Usuário"
                  name="username"
                  prepend-icon="mdi-account"
                  type="text"
                  required
                  v-model="username"
                  color="secondary"                  
                />
                <v-text-field
                  label="Senha"
                  name="password"
                  prepend-icon="mdi-lock"
                  required
                  type="password"
                  v-model="password"
                  color="secondary"                  
                />
                <v-snackbar v-model="alert.show" color="error" :timeout="4000">{{alert.message}}</v-snackbar>
              </v-card-text>
              <v-card-actions class="pb-6">
                <v-spacer />
                <v-btn
                  class="pl-6 pr-6"
                  color="secondary"
                  elevation="10"
                  type="submit"
                  :disabled="!hasInput"
                >Entrar</v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-form>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>
