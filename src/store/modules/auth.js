import api from '@/services/api';

const state = {
  user: null,
  token: null,
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setToken(state, token) {
    state.token = token;
  },
  clearUser(state) {
    state.user = null;
    state.token = null;
  },
};

const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await api.login(credentials);
      commit('setUser', response.data.user);
      commit('setToken', response.data.token);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Failed to login:', error);
    }
  },
  async register({ commit }, userData) {
    try {
      const response = await api.register(userData);
      commit('setUser', response.data.user);
      commit('setToken', response.data.token);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Failed to register:', error);
    }
  },
  logout({ commit }) {
    commit('clearUser');
    localStorage.removeItem('token');
  },
};

const getters = {
  isAuthenticated: (state) => !!state.user,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
