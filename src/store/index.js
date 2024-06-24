import { createStore } from 'vuex';
import auth from './modules/auth'; // Importer le module auth

export default createStore({
  modules: {
    auth // Ajouter le module auth
  },
  actions: {
    initializeStore({ commit }) {
      const token = localStorage.getItem('token');
      if (token) {
        commit('auth/setToken', token);
        // Vous pouvez également ajouter une action pour obtenir l'utilisateur avec le token
      }
    }
  },
  getters: {
    isAuthenticated: (state) => state.auth.isAuthenticated,
    getToken: (state) => state.auth.token,
  },
});
