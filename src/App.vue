<template>
  <div id="app">
    <div class="background"></div>
    <NavBar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/background.png') no-repeat center center fixed;
  background-size: cover;
  opacity: 0.5;
  filter: blur(1px);
  z-index: -1;
}

main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--padding);
}

.container {
  padding: var(--padding);
  margin: var(--margin);
  max-width: 800px;
  background-color: rgba(31, 31, 31, 0.8); /* Opacité ajoutée */
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  border: 1px solid var(--accent-color);
  width: 100%;
}

button {
  background-color: var(--accent-color);
  color: var(--primary-color);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color var(--transition-speed);
  box-shadow: var(--box-shadow);
  font-weight: bold;
  text-transform: uppercase;
}

button:hover {
  background-color: darken(var(--accent-color), 10%);
}

input, textarea {
  background-color: rgba(31, 31, 31, 0.8); /* Opacité ajoutée */
  color: var(--text-color);
  border: 1px solid var(--input-border);
  padding: 0.75rem;
  border-radius: var(--border-radius);
  width: 100%;
  box-sizing: border-box;
  margin-bottom: var(--margin);
  box-shadow: var(--box-shadow);
  transition: border-color var(--transition-speed);
}

input::placeholder, textarea::placeholder {
  color: var(--text-secondary-color);
}

input:focus, textarea:focus {
  border-color: var(--input-focus-border);
  outline: none;
}

footer {
  background-color: rgba(31, 31, 31, 0.8); /* Opacité ajoutée */
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
</style>
