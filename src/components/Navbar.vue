<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link class="navbar-brand" to="/">MyApp</router-link>
      <div class="navbar-links">
        <router-link class="navbar-link" to="/">Home</router-link>
        <template v-if="!isAuthenticated">
          <router-link class="navbar-link" to="/login">Login</router-link>
          <router-link class="navbar-link" to="/signup">Signup</router-link>
        </template>
        <template v-else>
          <span class="navbar-user">Bienvenue, {{ user.username }}</span>
          <button @click="logout">Déconnexion</button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Navbar',
  computed: {
    ...mapGetters(['isAuthenticated', 'user'])
  },
  methods: {
    ...mapActions(['logout'])
  },
  created() {
    this.$store.dispatch('fetchUser');
  }
};
</script>

<style scoped>
.navbar {
  background-color: #1e1e1e;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.navbar-brand {
  color: #bb86fc;
  text-decoration: none;
  font-size: 1.5em;
  font-weight: bold;
}

.navbar-links {
  display: flex;
  gap: 20px;
}

.navbar-link {
  color: #e0e0e0;
  text-decoration: none;
  font-size: 1em;
}

.navbar-link button {
  background: none;
  border: none;
  color: #e0e0e0;
  cursor: pointer;
  font-size: 1em;
}

.navbar-link button:hover {
  text-decoration: underline;
}

.navbar-link:hover {
  text-decoration: underline;
}

.navbar-user {
  color: #e0e0e0;
  font-size: 1em;
}
</style>
