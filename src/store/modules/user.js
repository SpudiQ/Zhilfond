import axios from '@/plugins/axios'

const state = {
    userData: [],
    isGettingData: false,
};

const mutations = {
    setUserData(state, userData) {
        state.userData = userData;
    },
};

const actions = {
    fetchUserData({ commit }, id) {
        axios.get(`/users/${id}`)
        .then(res => commit('setUserData', res.data))
        .catch(err => console.error(err))
    },
};

const getters = {
    getUserData: state => state.userData,
};

export default {
    state,
    mutations,
    actions,
    getters,
};