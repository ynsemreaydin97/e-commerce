export default {
    setDisks(context,payload){
        context.commit('setDisks',payload)
    },
    addDisk(context,payload){
        context.commit('addDisk',payload)
    },
    editDisk(context,payload){
        context.commit('editDisk',payload)
    },
    deleteDisk(context,payload){
        context.commit('deleteDisk',payload)
    },
}