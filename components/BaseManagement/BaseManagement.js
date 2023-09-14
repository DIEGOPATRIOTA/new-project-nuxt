const { v4: uuidv4 } = require('uuid');

export default {
  data() {
    return {
      search: '',
      editDialog: false,
      deleteDialog: false,
      addDialog: false,
      deletedItem: {
        name: ''
      },    
      editedItem: {
        id: '',
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      newItem: {
        id: '',
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [
        { id: 'c121c14a-657f-42c4-957f-11ea15845e5b', name: 'Frozen Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
        { id: 'cf55d6f0-cc66-425d-b97d-1dc23f2a775e', name: 'Ice Cream Sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
        { id: '8e3f46ab-610f-43fb-bc5d-678f0b8c9e97', name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
        { id: 'fb181bd3-448a-4212-8b8f-2b2377d8c1bd', name: 'Cheesecake', calories: 321, fat: 19, carbs: 34, protein: 5 },
        { id: '0d2a5279-9b85-4369-ac1f-ef391cd0cc05', name: 'Cupcake', calories: 131, fat: 4, carbs: 22, protein: 2 },
        { id: '5953a864-6b67-495f-9251-09aebf03cde5', name: 'Gingerbread Cookie', calories: 239, fat: 9, carbs: 37, protein: 3 },
        { id: 'f77487b5-4baa-4a0f-876f-6fff73c6f496', name: 'Chocolate Cake', calories: 369, fat: 15, carbs: 56, protein: 4 },
        { id: '6e24aaa1-11df-47c4-8527-5edf71b22f58', name: 'Apple Pie', calories: 320, fat: 15, carbs: 42, protein: 3 },
        { id: '7aca8f3b-eb99-4e56-ad76-7cb196df811f', name: 'Brownie', calories: 225, fat: 12, carbs: 28, protein: 2 },
        { id: '7ecbbc15-e5a4-446c-80c7-99952ed2b318', name: 'Lemon Tart', calories: 242, fat: 16, carbs: 21, protein: 3 },
        { id: '3aca77ad-89f8-4700-97dd-8bc5e23659e2', name: 'Strawberry Shortcake', calories: 208, fat: 10, carbs: 30, protein: 2 },
        { id: 'cccd56b7-c119-4db9-bed3-3ed11d3cfc19', name: 'Pumpkin Pie', calories: 323, fat: 14, carbs: 46, protein: 5 },
        { id: 'a5e047b4-02c5-4f4e-8949-857e035b25f3', name: 'Tiramisu', calories: 450, fat: 20, carbs: 47, protein: 5 },
        { id: '003dae24-53e3-4db1-ac42-4021715c0065', name: 'Chocolate Chip Cookie', calories: 50, fat: 3, carbs: 9, protein: 1 },
        { id: '93e8aeb5-430e-491f-a2a9-3b8a6c50b4b2', name: 'Blueberry Muffin', calories: 265, fat: 9, carbs: 43, protein: 4 },
        { id: 'e25bb5c0-8b01-48a8-9f0a-7a86227db44e', name: 'Pecan Pie', calories: 456, fat: 21, carbs: 63, protein: 4 },
        { id: 'dd48e0c4-b64c-425d-905e-f85e33937a47', name: 'Red Velvet Cake', calories: 300, fat: 12, carbs: 45, protein: 3 },
        { id: '8f557654-0ab6-4d79-9fd4-2b6e22304960', name: 'Carrot Cake', calories: 348, fat: 18, carbs: 46, protein: 3 },
        { id: 'cf453d95-cd96-486d-98b3-dd0c19db7d37', name: 'Banana Bread', calories: 196, fat: 4, carbs: 38, protein: 3 },
        { id: 'b7cfcbf0-7352-4656-8be0-2ce92f672e3e', name: 'Key Lime Pie', calories: 345, fat: 17, carbs: 42, protein: 4 },
        { id: 'a254885a-3773-44cb-85f5-9bb8837374c2', name: 'Peach Cobbler', calories: 255, fat: 7, carbs: 45, protein: 3 },
        { id: '63c56926-006b-4ec9-b0bd-8345511b4de0', name: 'Rice Pudding', calories: 135, fat: 1, carbs: 29, protein: 3 },
        { id: '8b4b371c-d630-4e84-bdf1-4fc71aecf6b6', name: 'Chocolate Pudding', calories: 164, fat: 6, carbs: 27, protein: 2 },
        { id: '3965352b-350a-4c3d-8a0e-d78c7465c8c0', name: 'Lava Cake', calories: 380, fat: 23, carbs: 43, protein: 5 },
        { id: '3e7df5f8-952d-4106-bf7d-fbb75562849d', name: 'Cherry Pie', calories: 316, fat: 15, carbs: 44, protein: 3 },
        { id: 'c85eb582-1040-4d77-bf61-ec0f2846f0b5', name: 'Peanut Butter Cookies', calories: 58, fat: 3, carbs: 7, protein: 1 },
        { id: '3a7946bc-1f2f-452b-864e-458962d8b5e8', name: 'Coconut Macaroons', calories: 120, fat: 6, carbs: 16, protein: 1 },
        { id: '3d152e57-7202-4214-9e2e-bdad06d162f9', name: 'Pumpkin Roll', calories: 322, fat: 16, carbs: 42, protein: 4 },
        { id: '4efac455-efc4-41d3-9f5c-5d558d957fc5', name: 'Angel Food Cake', calories: 72, fat: 0, carbs: 16, protein: 2 },
        { id: '37a0178c-e0db-4b13-b47f-1564630bb3f8', name: 'Lemon Bars', calories: 133, fat: 6, carbs: 18, protein: 2 },
        { id: 'b57b2c06-8521-4ff4-8b7b-4ece446859b3', name: 'Raspberry Tart', calories: 300, fat: 15, carbs: 37, protein: 4 },
        { id: 'd6336d30-4bbc-440b-9b6d-3346edd0cac8', name: 'Oatmeal Cookies', calories: 53, fat: 2, carbs: 8, protein: 1 },
        { id: 'fc384cb0-a3f3-4428-9564-31f174e3388f', name: 'Black Forest Cake', calories: 360, fat: 20, carbs: 42, protein: 3 },
        { id: '0c189d19-2c0e-4ce0-8399-5c3f0eb1ff3b', name: 'Caramel Flan', calories: 285, fat: 9, carbs: 45, protein: 4 },
        { id: '3679a7d6-5e48-40d1-81b9-2b0dd98f023b', name: 'Chocolate Eclair', calories: 272, fat: 18, carbs: 24, protein: 4 },
        { id: '29712a54-c8af-429a-9389-15e4f9c54691', name: 'Rice Krispie Treats', calories: 90, fat: 2, carbs: 18, protein: 1 },
        { id: 'b5c5a2e3-b3eb-473b-9813-8552d6ecc785', name: 'Peach Pie', calories: 320, fat: 14, carbs: 46, protein: 3 },
        { id: 'e24f69f0-65d7-4618-9d44-ca88edf62ed0', name: 'Molten Chocolate Cake', calories: 345, fat: 19, carbs: 42, protein: 4 },
        { id: 'dc88f66d-ee5c-44e1-b98e-03669c829a21', name: 'Pistachio Ice Cream', calories: 150, fat: 8, carbs: 17, protein: 2 },
        { id: '323ed930-5ab5-457c-95e4-4c1f462c0579', name: 'Cinnamon Roll', calories: 310, fat: 12, carbs: 45, protein: 3 },
        { id: '1f0fb6eb-7c2e-442b-a1d8-070ab57bf1eb', name: 'Strawberry Cheesecake', calories: 320, fat: 15, carbs: 43, protein: 4 },
        { id: '442c8685-ec48-4bfb-8aaf-55eef073584a', name: 'Pralines', calories: 206, fat: 14, carbs: 19, protein: 2 },
        { id: '56c6a68e-033a-4f4e-9884-9ca69f82c172', name: 'Fruit Salad', calories: 100, fat: 0, carbs: 26, protein: 1 },
        { id: '0bd509bc-9cfb-4b8e-87d3-5e1890ccaa47', name: 'Chocolate Fondue', calories: 376, fat: 21, carbs: 44, protein: 4 },
        { id: '1962ae9c-0d84-4a7a-bf37-f2c2d7ac7ae2', name: 'Lemon Sorbet', calories: 97, fat: 0, carbs: 25, protein: 0 },
        { id: '8f3a6564-a648-4427-bb86-1f39731bae72', name: 'Apple Crisp', calories: 215, fat: 7, carbs: 39, protein: 2 },
        { id: 'dcb1420d-e100-4db7-bd16-17281de6514b', name: 'Tapioca Pudding', calories: 139, fat: 2, carbs: 26, protein: 2 },
        { id: 'cf791bfe-2c0c-456d-9208-cd56993340b8', name: 'Pumpkin Cheesecake', calories: 327, fat: 21, carbs: 31, protein: 5 },
        { id: '936eb9e5-0b12-4cff-96ef-7eae4618f73d', name: 'Cherry Cobbler', calories: 320, fat: 10, carbs: 54, protein: 2 },
        { id: '9b29b9c4-b80d-4e09-b2b7-e83bfb021808', name: 'White Chocolate Mousse', calories: 488, fat: 31, carbs: 46, protein: 6 },
        { id: 'e32f0e4b-50eb-48bd-b4ba-2047807d93de', name: 'Bread Pudding', calories: 306, fat: 10, carbs: 47, protein: 5 },
        { id: 'f4a26b6b-2fe4-444b-826c-13db58e263da', name: 'Lemon Meringue Pie', calories: 320, fat: 10, carbs: 53, protein: 3 },
        { id: '01115617-7174-4212-9c75-6b344a009220', name: 'Chocolate Souffle', calories: 259, fat: 17, carbs: 25, protein: 5 },
        { id: '778365e0-65c0-4328-ad8c-0dfcf9cdbbae', name: 'Fruit Tart', calories: 233, fat: 12, carbs: 29, protein: 3 },
        { id: '27f9251c-f0a2-46f0-befb-eb34d3d09b0d', name: 'Coconut Cream Pie', calories: 287, fat: 15, carbs: 36, protein: 4 },
        { id: '90e06c46-a088-4389-86b2-4248263a1602', name: 'Pumpkin Muffin', calories: 172, fat: 4, carbs: 33, protein: 3 },
        { id: 'd94540af-bc25-48f0-88ba-d418feded3a1', name: 'Chocolate Truffles', calories: 230, fat: 15, carbs: 21, protein: 3 },
        { id: 'cadab939-1bd3-495d-906b-dcf74c768046', name: 'Baklava', calories: 260, fat: 15, carbs: 28, protein: 3 },
        { id: 'ce2c794f-7b58-4e40-9b4d-1cf186333f1f', name: 'Blueberry Pancakes', calories: 151, fat: 2, carbs: 31, protein: 3 },
        { id: '58ad4fa8-8721-4a67-a8e5-72552261df24', name: 'Cherry Cheesecake', calories: 321, fat: 16, carbs: 39, protein: 4 },
        { id: '084cf087-c070-4212-8fbd-a1bc6ae634c0', name: 'Strawberry Shortcake Ice Cream', calories: 221, fat: 11, carbs: 29, protein: 3 },
        { id: '922b856b-8a03-4f7c-85e3-1a12825ab676', name: 'Fudge Brownie', calories: 365, fat: 19, carbs: 47, protein: 3 },
        { id: 'f6931d27-fdf4-4906-9eff-0507b8db4f0c', name: 'Butterscotch Pudding', calories: 355, fat: 14, carbs: 54, protein: 2 },
        { id: '7ae15b9a-d7ae-4e87-8c33-0a0b5bb0f061', name: 'Pina Colada Sorbet', calories: 120, fat: 0, carbs: 29, protein: 0 },
      ],
    };
  },
  methods: {
    addItem() {
      // Open the add dialog
      this.addDialog = true;
    },
    saveNewItem() {
      // Implement the save new item logic here
      console.log(`Adding new item: ${this.newItem.name}`);

      this.newItem.id = uuidv4()

      const dessertsCurrent  = this.desserts

      // Add the new item to the list
      dessertsCurrent.push(this.newItem);

      this.desserts = [ ...dessertsCurrent ]

      this.addDialog = false; // Close the add dialog
      // You can reset the newItem data if needed
      this.newItem = {
        id: '',
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      };
    },
    cancelAdd() {
      // Close the add dialog without adding
      this.addDialog = false;
      // You can reset the newItem data if needed
      this.newItem = {
        id: '',
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      };
    },
    editItem(item) {
      // Open the edit dialog
      this.editedItem = { ...item }; // Clone the item
      this.editDialog = true;
    },
    saveEdit() {
      // Find the index of the edited item in the desserts array
      
      const index = this.desserts.findIndex(
        (dessert) => dessert.id === this.editedItem.id
      );
          
      if (index !== -1) {
        // Update the dessert with the edited values
        const dessertsCurrent  = this.desserts
        dessertsCurrent[index] = { ...this.editedItem };
        
        this.desserts = [ ...dessertsCurrent ]

        console.log(`Saved edited item: ${this.editedItem.name}`);
        this.editDialog = false; // Close the edit dialog
      } else {
        console.log("Dessert not found for editing");
      }
    },
    cancelEdit() {
      // Close the edit dialog without saving
      this.editDialog = false;
    },
    deleteItem(item) {
      // Open the delete confirmation dialog
      this.deletedItem = item;
      this.deleteDialog = true;
    },
    confirmDelete() {
      // Implement the delete logic here
      const index = this.desserts.indexOf(this.deletedItem);
      if (index !== -1) {
        this.desserts.splice(index, 1);
        console.log(`Deleted item: ${this.deletedItem.name}`);
        this.deleteDialog = false; // Close the delete confirmation dialog
      }
    },
    cancelDelete() {
      // Close the delete confirmation dialog without deleting
      this.deleteDialog = false;
    },
  }  
};