<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
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
    async login() {
      const credentials = {
        username: this.username,
        password: this.password,
      };
      await this.$store.dispatch('auth/login', credentials);
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
