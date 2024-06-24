const state = {
    user: null,
  };
  
  const mutations = {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
    },
  };
  
  const actions = {
    login({ commit }, user) {
      // Simulate an API call
      commit('setUser', user);
    },
    logout({ commit }) {
      commit('clearUser');
    },
  };
  
  const getters = {
    isAuthenticated: (state) => !!state.user,
  };
  
  export default {
    state,
    mutations,
    actions,
    getters,
  };
  