export default {
    setCpus(context,payload){
        context.commit('setCpus',payload)
    },
    addCpu(context,payload){
        context.commit('addCpu',payload)
    },
    editCpu(context,payload){
        context.commit('editCpu',payload)
    },
    deleteCpu(context,payload){
        context.commit('deleteCpu',payload)
    },
}