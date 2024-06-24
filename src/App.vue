<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  },
  methods: {
    ...mapActions(['fetchUser'])
  },
  created() {
    this.fetchUser();
  }
};
</script>

<style src="./assets/styles.css"></style>
