export default {
    setComputers(context,payload){
        context.commit('setComputers',payload)
    },
    addComputer(context,payload){
        context.commit('addComputer',payload)
    },
    editComputer(context,payload){
        context.commit('editComputer',payload)
    },
    deleteComputer(context,payload){
        context.commit('deleteComputer',payload)
    },
}