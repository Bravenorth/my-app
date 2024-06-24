<template>
  <div class="container">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async register() {
      const userData = {
        username: this.username,
        password: this.password,
      };
      await this.$store.dispatch('register', userData);
      if (this.$store.getters.isAuthenticated) {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 1rem;
  max-width: 400px;
  margin: 0 auto;
}
</style>
