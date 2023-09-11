<script src="./BaseManagement"/>
<style scoped src="./BaseManagement.css"></style>
<template>
    <v-row>
        <v-col cols="12">      
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
            class="mx-8 elevation-6"                  
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Desert Data</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small @click="editItem(item)">mdi-pencil</v-icon>
              <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </template>
            <template v-slot:no-data>
              <v-alert :value="true" color="error" icon="mdi-alert">
                Sorry, nothing to display here.
              </v-alert>
            </template>
          </v-data-table>
        </v-col>
    </v-row>
</template>