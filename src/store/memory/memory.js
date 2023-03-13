import getters from "@/store/memory/getters"
import mutations from "@/store/memory/mutations"
import actions from "@/store/memory/actions"
export default {
    namespaced: true,
    state : {
        memories:[],
    },
    getters,
    mutations,
    actions
}