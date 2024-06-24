<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="signup">
      <input type="text" v-model="signupUsername" placeholder="Username" required>
      <input type="password" v-model="signupPassword" placeholder="Password" required>
      <button type="submit">Sign Up</button>
    </form>

    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="text" v-model="loginUsername" placeholder="Username" required>
      <input type="password" v-model="loginPassword" placeholder="Password" required>
      <button type="submit">Log In</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signupUsername: '',
      signupPassword: '',
      loginUsername: '',
      loginPassword: ''
    };
  },
  methods: {
    async signup() {
      try {
        const response = await fetch('http://localhost:3000/api/v1/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: this.signupUsername, password: this.signupPassword }),
        });
        const data = await response.json();
        if (response.ok) {
          alert('User registered successfully');
          console.log(data);
          localStorage.setItem('token', data.token);
        } else {
          alert(`Error: ${data.message}`);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
    async login() {
      try {
        const response = await fetch('http://localhost:3000/api/v1/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: this.loginUsername, password: this.loginPassword }),
        });
        const data = await response.json();
        if (response.ok) {
          alert('User logged in successfully');
          console.log(data);
          localStorage.setItem('token', data.token);
        } else {
          alert(`Error: ${data.message}`);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
};
</script>
