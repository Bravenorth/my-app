<template>
  <div class="container">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { siteName } from '@/globalConfig';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      siteName,
    };
  },
  methods: {
    register() {
      const user = { username: this.username, email: this.email, password: this.password };
      this.$store.dispatch('register', user);
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.container {
  padding: var(--padding);
  margin: var(--margin);
  max-width: 800px;
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  border: 1px solid var(--accent-color);
  width: 100%;
}

h2 {
  color: var(--accent-color);
}
</style>
