<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  watch: {
    isAuthenticated(value) {
      if (!value && this.$route.meta.requiresAuth) {
        this.$router.push('/login');
      }
    }
  },
  created() {
    this.$store.dispatch('initializeStore');
  }
};
</script>

<style>
/* Styles globaux pour votre application */
</style>
