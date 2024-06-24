import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Import Vuex store
import './assets/styles.css'; // Import global CSS

const app = createApp(App);

app.use(router);
app.use(store); // Utiliser Vuex store

app.mount('#app');
