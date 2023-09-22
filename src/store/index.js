import Vuex from 'vuex'
import userModule from './modules/user'
import staffModule from './modules/staff'

const store = new Vuex.Store({
    modules: {
        user: userModule,
        staff: staffModule,
    },
});
  
export default store;