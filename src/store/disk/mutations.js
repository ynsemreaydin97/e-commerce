export default {
    setDisks(state, payload) {
        state.disks = payload.disks
    },
    addDisk(state,payload) {
        state.disks.push(payload.disk)
    },
    editDisk(state, payload) {
        let editedDisk = state.disks.find(disk => disk.id === payload.id);
        editedDisk.body = payload.body;
        state.disks = state.disks.filter(disk => disk.id !== payload.id);
        state.disks.push(editedDisk);
    },
    deleteDisk(state,payload) {
        let deletedDisk = state.disks.findIndex(disk => disk.id === payload.id);
        if(deletedDisk !== -1) {
            state.disks.splice(deletedDisk,1);
        }
    },
}