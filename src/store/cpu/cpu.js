import getters from "@/store/cpu/getters"
import mutations from "@/store/cpu/mutations"
import actions from "@/store/cpu/actions"

export default {
    namespaced: true,
    state: {
        cpus:[],
    },
    getters,
    mutations,
    actions
}