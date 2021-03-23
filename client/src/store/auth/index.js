
import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

// get initial vuex state from local storage.
let initialState = null

try {
   initialState = JSON.parse(localStorage.getItem('auth')) 
} catch (e) {
    initialState = {
     login: null,
     token: null   
    }
} 

export default {
    state: initialState,
    actions,
    getters,
    mutations
}