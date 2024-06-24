<template>
  <div class="container">
    <h1>Reset Password</h1>
    <form @submit.prevent="resetPassword">
      <input type="password" v-model="password" placeholder="New Password" required />
      <button type="submit">Reset Password</button>
      <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
    </form>
    <router-link class="form-link" to="/">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'ResetPassword',
  data() {
    return {
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async resetPassword() {
      this.errorMessage = '';
      const token = this.$route.query.token;
      try {
        const response = await fetch(`http://localhost:3000/api/v1/auth/resetPassword/${token}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ password: this.password })
        });
        const data = await response.json();
        if (response.ok) {
          alert('Password reset successfully');
          this.$router.push('/login');
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
