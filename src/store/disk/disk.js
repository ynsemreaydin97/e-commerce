import getters from "@/store/disk/getters"
import mutations from "@/store/disk/mutations"
import actions from "@/store/disk/actions"
export default {
    namespaced: true,
    state : {
      disks:[],
    },
    getters,
    mutations,
    actions
}
