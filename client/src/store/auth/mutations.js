import {SET_AUTH, UNSET_AUTH} from './actions'

export default {
    // SET_AUTH defined new state, login and token are payload.
    [SET_AUTH](state, { username, token } ) {
        state.username = username
        state.token = token
    },
    [UNSET_AUTH]( state ) {
        state.username = null,
        state.token = null
    }
}