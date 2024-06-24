<template>
  <div class="container" v-if="!isAuthenticated">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
    </form>
    <router-link class="form-link" to="/">Back to Home</router-link>
    <router-link class="form-link" to="/forgot-password">Forgot Password?</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions(['login']),
    async login() {
      this.errorMessage = '';
      try {
        const response = await fetch('http://localhost:3000/api/v1/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username: this.username, password: this.password })
        });
        const data = await response.json();
        if (response.ok) {
          this.login({ user: data.user, token: data.token });
          this.$router.push('/');
        } else {
          this.errorMessage = `Error: ${data.message}`;
        }
      } catch (error) {
        this.errorMessage = 'An error occurred. Please try again.';
        console.error('Error:', error);
      }
    }
  },
  mounted() {
    if (this.isAuthenticated) {
      this.$router.push('/');
    }
  }
};
</script>

<style src="../assets/styles.css"></style>
