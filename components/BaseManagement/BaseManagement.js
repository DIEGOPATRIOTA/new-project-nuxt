export default {
  data() {
    return {
      search: '',
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [
        { name: 'Frozen Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
        { name: 'Ice Cream Sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
        { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
        // Add more data here
      ],
    };
  },
  methods: {
    editItem(item) {
      // Implement your edit logic here
    },
    deleteItem(item) {
      // Implement your delete logic here
    },
  },
};