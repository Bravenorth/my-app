<template>
  <div class="container" v-if="!isAuthenticated">
    <h1>Connexion</h1>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Nom d'utilisateur" required />
      <input type="password" v-model="password" placeholder="Mot de passe" required />
      <button type="submit">Connexion</button>
      <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
    </form>
    <router-link class="form-link" to="/">Retour à l'accueil</router-link>
    <router-link class="form-link" to="/forgot-password">Mot de passe oublié ?</router-link>
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
          this.errorMessage = `Erreur : ${data.message}`;
        }
      } catch (error) {
        this.errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
        console.error('Erreur:', error);
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
