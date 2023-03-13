export default {
    setComputers(state, payload) {
        state.computers = payload.computers
    },
    addComputer(state, payload) {
        state.computers.push(payload.computer)
    },
    editComputer(state, payload) {
        let editedComputer = state.computers.find(computer => computer.id === payload.id);
        editedComputer.body = payload.body;
        state.computers = state.computers.filter(computer => computer.id !== payload.id);
        state.computers.push(editedComputer);
    },
    deleteComputer(state, payload) {
        let deletedComputer = state.computers.findIndex(computer => computer.id === payload.id);
        if (deletedComputer !== -1) {
            state.computers.splice(deletedComputer, 1);
        }
    },
}