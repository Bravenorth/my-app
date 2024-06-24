<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li v-if="!isAuthenticated"><router-link to="/login">Login</router-link></li>
      <li v-if="!isAuthenticated"><router-link to="/register">Register</router-link></li>
      <li v-if="isAuthenticated" @click="logout">Logout</li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NavBar',
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: var(--primary-color);
  padding: var(--padding);
  border-bottom: 1px solid var(--secondary-color);
  box-shadow: var(--box-shadow);
}

.navbar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
}

.navbar li {
  margin-right: var(--margin);
}

.navbar a {
  color: var(--text-color);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  transition: background-color var(--transition-speed), color var(--transition-speed);
}

.navbar a:hover {
  background-color: var(--secondary-color);
  color: var(--accent-color);
}
</style>
