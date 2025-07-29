import { defineStore } from "pinia"

export default {
    components: { useAuthStore },

    state: () => ({
        user: null,
        token: null,
    }),
    
    getters: {
        isAuthenticated: (state) => !!state.user,
    },

    actions: {
        login(userData) {
            this.user = userData
            this.token = userData.token
        },

        logout() {
            this.user = null
            this.token = null
        },
    },

}