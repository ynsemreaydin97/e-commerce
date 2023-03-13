export default {
    setMemories(context,payload){
        context.commit('setMemories',payload)
    },
    addMemory(context,payload){
        context.commit('addMemory',payload)
    },
    editMemory(context,payload){
        context.commit('editMemory',payload)
    },
    deleteMemory(context,payload){
        context.commit('deleteMemory',payload)
    },
}