import { SET_AUTH, UNSET_AUTH } from "@/store/auth/actions";

export default {
    computed: {
       
        // return if auth is true.
        auth() {
            return !!this.$store.state.auth.username
        },
       
        user() {
           return this.$store.state.auth
       }

    },
    
    methods: {
        // sets auth in redux store and local storage.
       setAuth(payload) {
            // save item called auth to local storage to the stringified
            // version of the response data.
            localStorage.setItem('auth', JSON.stringify(payload))
            // commit the response as a authorization mutation to the Vuex store.
            this.$store.commit(SET_AUTH, payload)
            // route the end user to the all menus endpoint.
            this.$router.push(`/landing`)
        },
        // unsets auth from the redux store and local storage.

    unsetAuth() {
        localStorage.removeItem('auth')
        this.$store.commit(UNSET_AUTH)
        this.$router.push('/')
    }
    } 
}