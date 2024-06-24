<template>
  <footer>
    <div class="footer-content">
      <router-link to="/about">About</router-link>
      <p>&copy; 2024 {{ siteName }}</p>
      <p class="disclaimer">
        This is an unofficial Star Citizen fansite, not affiliated with the Cloud Imperium group of companies. All content on this site not authored by its host or users are property of their respective owners.
      </p>
      <a href="https://robertsspaceindustries.com/" target="_blank" rel="noopener noreferrer">Visit Star Citizen</a>
      <div class="scroll-top" @click="scrollToTop">
        <i class="arrow up"></i>
      </div>
    </div>
  </footer>
</template>

<script>
import { siteName } from '@/globalConfig';

export default {
  name: 'Footer',
  data() {
    return {
      siteName,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
footer {
  background-color: var(--primary-color);
  padding: 0.5rem;
  text-align: center;
  border-top: 1px solid var(--secondary-color);
  width: 100%;
  box-shadow: var(--box-shadow);
  color: var(--accent-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.footer-content {
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

footer a {
  color: var(--text-color);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  transition: background-color var(--transition-speed), color var(--transition-speed);
  font-weight: bold;
  text-transform: uppercase;
}

footer a:hover {
  background-color: var(--secondary-color);
  color: var(--accent-color);
}

.disclaimer {
  font-size: 0.75rem;
  margin-top: var(--margin);
  color: var(--text-secondary-color);
}

.scroll-top {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  cursor: pointer;
}

.arrow.up {
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 15px solid var(--accent-color);
}

.arrow.up:hover {
  border-bottom-color: darken(var(--accent-color), 10%);
}
</style>
