export default {
    setCpus(state, payload) {
        state.cpus = payload.cpus
    },
    addCpu(state, payload) {
        state.cpus.push(payload.cpu)
    },
    editCpu(state, payload) {
        payload.before = payload.updated
    },
    deleteCpu(state, payload) {
        let deletedCpu = state.cpus.findIndex(cpu => cpu.id === payload.id);
        if (deletedCpu !== -1) {
            state.cpus.splice(deletedCpu, 1);
        }
    },
}