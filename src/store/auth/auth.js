import getters from "@/store/auth/getters";
import mutations from "@/store/auth/mutations";
import actions from "@/store/auth/actions";
export default {
    namespaced: true,
    state: {
        restApi: 'https://e-commerce.devstudio.design',
        accessToken: null,
        refreshToken: null,
    },
    getters,
    mutations,
    actions
}