<template>
  <div class="container">
    <h2>About</h2>
    <p>This is a Star Citizen fansite created by Bravenorth. It is completely free to use and is not affiliated with the Cloud Imperium group of companies. All content on this site not authored by its host or users is property of their respective owners.</p>
    <h3>Author</h3>
    <p>Bravenorth - Author, Owner, and Maintainer of {{ siteName }}.</p>
    <h3>Tools Used</h3>
    <ul>
      <li>Vue.js</li>
      <li>Vue Router</li>
      <li>Vuex</li>
      <li>Axios</li>
      <li>CSS3</li>
      <li>HTML5</li>
    </ul>
  </div>
</template>

<script>
import { siteName } from '@/globalConfig';

export default {
  name: 'About',
  data() {
    return {
      siteName,
    };
  }
};
</script>

<style scoped>
.container {
  background-color: var(--primary-color);
  padding: var(--padding);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  width: 100%;
  max-width: 800px;
  color: var(--text-color);
}

h2, h3 {
  color: var(--accent-color);
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  background-color: var(--secondary-color);
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}
</style>
