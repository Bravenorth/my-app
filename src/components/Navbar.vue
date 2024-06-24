<template>
  <nav class="navbar">
    <div class="nav-left">
      <router-link to="/">{{ siteName }}</router-link>
    </div>
    <div class="nav-right">
      <router-link v-if="!isAuthenticated" to="/login">Login</router-link>
      <router-link v-if="!isAuthenticated" to="/register">Register</router-link>
      <a v-if="isAuthenticated" @click="logout">Logout</a>
    </div>
  </nav>
</template>

<script>
import { siteName } from '@/globalConfig';
import { mapGetters } from 'vuex';

export default {
  name: 'NavBar',
  data() {
    return {
      siteName,
    };
  },
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);
  padding: var(--padding);
  border-bottom: 1px solid var(--secondary-color);
  box-shadow: var(--box-shadow);
}

.nav-left, .nav-right {
  display: flex;
  align-items: center;
}

.nav-left a, .nav-right a {
  color: var(--text-color);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  transition: background-color var(--transition-speed), color var(--transition-speed);
  font-weight: bold;
  text-transform: uppercase;
  margin-right: var(--margin);
}

.nav-left a:hover, .nav-right a:hover {
  background-color: var(--secondary-color);
  color: var(--accent-color);
}
</style>
