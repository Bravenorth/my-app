<template>
    <button @click="logout">Logout</button>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        this.$store.dispatch('logout');
        this.$router.push('/login');
      }
    }
  };
  </script>
  