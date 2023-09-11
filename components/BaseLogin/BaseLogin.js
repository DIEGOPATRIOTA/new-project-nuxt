
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      alert: {
        message: '',
        show: false
      },
      password: '',
      username: '',
      valid: false,
    };
  },
  methods: {
    ...mapActions('account', ['login', 'version']),
    handleSubmit() {
      const { username, password } = this;
      if (username && password) {
        this.login({ username, password })
          .catch((error) => {
            this.alert.message = error.message;
            this.alert.show = true;
          }).then(() => {
            this.username = '';
            this.password = '';
          }).finally(() => {
          });
      }
    }
  },
  computed: {
    hasInput: function () {
      return this.username !== '' && this.password !== '';
    },
    ...mapState('account', ['status'])
  }
};
