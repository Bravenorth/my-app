import { createStore } from 'vuex';
import api from '@/services/api';

export default createStore({
  state: {
    user: null,
    isAuthenticated: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isAuthenticated = !!user;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await api.login(credentials);
        commit('setUser', response.data.user);
      } catch (error) {
        console.error('Failed to login:', error);
      }
    },
    async register({ commit }, userData) {
      try {
        const response = await api.register(userData);
        commit('setUser', response.data.user);
      } catch (error) {
        console.error('Failed to register:', error);
      }
    },
    async logout({ commit }) {
      try {
        await apiClient.post('/auth/logout'); // Ajoutez cette route dans votre backend si nécessaire
        commit('setUser', null);
      } catch (error) {
        console.error('Failed to logout:', error);
      }
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
  },
});
