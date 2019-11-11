// https://vuex.vuejs.org/en/mutations.html

export default {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    setUserData(state, data) {
      state.user.userDetails = data;
    },
    removeUser(state, data) {
      state.user.userDetails = null;
    }
}
