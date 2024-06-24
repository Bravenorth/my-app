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
    login() {
      const user = { username: this.username };
      this.$store.dispatch('login', user);
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.container {
  background-color: var(--primary-color);
  padding: var(--padding);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}
</style>
