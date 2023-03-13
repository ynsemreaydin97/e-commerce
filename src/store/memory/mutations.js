export default {
    setMemories(state, payload) {
        state.memories = payload.memories
    },
    addMemory(state,payload) {
        state.memories.push(payload.memory)
    },
    editMemory(state, payload) {
        let editedMemory = state.memories.find(memory => memory.id === payload.id);
        editedMemory.memory_size = payload.memory_size;
        state.memories = state.memories.filter(memory => memory.id !== payload.id);
        state.memories.push(editedMemory);
    },
    deleteMemory(state,payload) {
        let deletedMemory = state.memories.findIndex(memory => memory.id === payload.id);
        if(deletedMemory !== -1) {
            state.memories.splice(deletedMemory,1);
        }
    },
}