<template>
  <div class="container">
    <h1>Forgot Password</h1>
    <form @submit.prevent="forgotPassword">
      <input type="email" v-model="email" placeholder="Email" required />
      <button type="submit">Send Reset Link</button>
      <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
    </form>
    <router-link class="form-link" to="/">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'ForgotPassword',
  data() {
    return {
      email: '',
      errorMessage: ''
    };
  },
  methods: {
    async forgotPassword() {
      this.errorMessage = '';
      try {
        const response = await fetch('http://localhost:3000/api/v1/auth/forgotPassword', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: this.email })
        });
        const data = await response.json();
        if (response.ok) {
          alert('Reset link sent to email');
        } else {
          this.errorMessage = `Error: ${data.message}`;
        }
      } catch (error) {
        this.errorMessage = 'An error occurred. Please try again.';
        console.error('Error:', error);
      }
    }
  }
};
</script>

<style src="../assets/styles.css"></style>
