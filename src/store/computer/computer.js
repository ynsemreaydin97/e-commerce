import getters from "@/store/computer/getters"
import mutations from "@/store/computer/mutations"
import actions from "@/store/computer/actions"
export default {
    namespaced : true,
    state : {
        computers:[],
    },
    getters,
    mutations,
    actions
}