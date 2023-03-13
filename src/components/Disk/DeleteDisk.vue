<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="black" dark v-bind="attrs" v-on="on">
        Delete Disk
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Disk Delete</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <p> ARE YOU SURE FOR DELETE THAT DISK?</p>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="orange darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="orange darken-1" text @click="deleteDisk"> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";

export default {
  name: "DeleteDisk",
  data : () => ({
    diskId:null,
    dialog: false,
  }),
  props : {
    id : {
      type: Number,
      required: true
    },
  },
  methods : {
    ...mapActions({
      deleteDiskToStore : "disk/deleteDisk",
    }),
    deleteDisk(){
      const deleteDiskUrl = "https://e-commerce.devstudio.design/computer/diskdelete/" + this.id;
      axios
          .delete(deleteDiskUrl)
          .then((response) => {
            if (response.status === 204) {
              console.log("Disk is Deleted!!!");
              this.deleteDiskToStore({id:this.id});
            } else {
              console.log(response.data);
            }
          })
          .catch((err) => console.log(err));
      this.dialog = true;
    }
  }
}
</script>

<style scoped>

</style>