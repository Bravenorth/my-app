import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    clearAuthData(state) {
      state.user = null;
      state.token = '';
      localStorage.removeItem('token');
    }
  },
  actions: {
    login({ commit }, authData) {
      commit('setUser', authData.user);
      commit('setToken', authData.token);
    },
    logout({ commit }) {
      commit('clearAuthData');
    },
    fetchUser({ commit }) {
      const token = localStorage.getItem('token');
      if (token) {
        fetch('http://localhost:3000/api/v1/auth/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .then(response => response.json())
          .then(data => {
            if (data && data.user) {
              commit('setUser', data.user);
              commit('setToken', token);
            } else {
              commit('clearAuthData');
            }
          })
          .catch(() => {
            commit('clearAuthData');
          });
      }
    }
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    user(state) {
      return state.user;
    }
  }
});
