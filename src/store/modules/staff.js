import axios from '@/plugins/axios'

const state = {
    staffData: null,
    isGettingData: false,
    chosenStaffData: null,
};

const mutations = {
    setStaffData(state, staffData) {
        state.staffData = staffData;
    },
    setIsGettingData(state, status) {
        state.isGettingData = status;
    },
    setChosenStaffData(state, staffData) {
        state.chosenStaffData = staffData;
    },
};

const actions = {
    fetchStaffData({ commit }, search) {
        commit('setIsGettingData', true);

        let params = {}

        const searchAsNumber = parseFloat(search);

        if (!isNaN(searchAsNumber)) {
            params.id = searchAsNumber;
        } else if (search.trim() !== '') {
            params.username = search;
        }

        axios.get('/users', {params: params})
        .then(res => {
            commit('setStaffData', res.data)
        })
        .catch(err => {
            console.error(err)
        })
        .finally(() => {
            commit('setIsGettingData', false);
        });
    },
};

const getters = {
    getStaffData: state => state.staffData,
    isGettingData: state => state.isGettingData,
    getChosenStaffData: state => state.chosenStaffData,
};

export default {
    state,
    mutations,
    actions,
    getters,
};