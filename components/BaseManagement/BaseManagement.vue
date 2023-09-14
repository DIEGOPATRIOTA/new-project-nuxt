<script src="./BaseManagement.js"/>
<style scoped src="./BaseManagement.css"></style>
<template>
  <v-main class="d-flex align-center justify-center">
    <v-row>
        <v-col cols="12">      
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
            item-key="id"
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
                <v-btn class="ml-8" @click="addItem" color="primary">Add Item</v-btn>
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
     <!-- Add Dialog -->
     <v-dialog v-model="addDialog" max-width="500">
      <v-card>
        <v-card-title>Add New Dessert</v-card-title>
        <v-card-text>
          <v-text-field v-model="newItem.name" label="Name"></v-text-field>
          <v-text-field v-model="newItem.calories" label="Calories"></v-text-field>
          <v-text-field v-model="newItem.fat" label="Fat"></v-text-field>
          <v-text-field v-model="newItem.carbs" label="Carbs"></v-text-field>
          <v-text-field v-model="newItem.protein" label="Protein"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="saveNewItem">Add</v-btn>
          <v-btn color="error" @click="cancelAdd">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Edit Dialog -->
    <v-dialog v-model="editDialog" max-width="500">
      <v-card>
        <v-card-title>Edit Dessert</v-card-title>
        <v-card-text>
          <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
          <v-text-field v-model="editedItem.calories" type="number" label="Calories"></v-text-field>
          <v-text-field v-model="editedItem.fat" type="number" label="Fat"></v-text-field>
          <v-text-field v-model="editedItem.carbs" type="number" label="Carbs"></v-text-field>
          <v-text-field v-model="editedItem.protein" type="number" label="Protein"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="saveEdit">Save</v-btn>
          <v-btn color="error" @click="cancelEdit">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      
    <!-- Delete Dialog -->
    <v-dialog v-model="deleteDialog" max-width="400">
      <v-card>
        <v-card-title>Confirm Deletion</v-card-title>
        <v-card-text>
          Are you sure you want to delete <strong>{{ deletedItem.name }}</strong> ?
        </v-card-text>
        <v-card-actions>
          <v-btn color="error" @click="confirmDelete">Yes</v-btn>
          <v-btn @click="cancelDelete">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-main>
</template>