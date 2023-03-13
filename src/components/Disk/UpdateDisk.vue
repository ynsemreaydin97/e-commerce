<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="black" dark v-bind="attrs" v-on="on">
        Update Disk
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Disk Update</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field outlined label="Disk FullName" v-model="diskFull">
          </v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="orange darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="orange darken-1" text @click="updateDisk"> Update </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";

export default {
  name: "UpdateDisk",
  data : () => ({
    diskFull: null,
    dialog: false,
  }),
  props : {
    id : {
      type : Number,
      required: true,
    },
  },
  methods : {
    ...mapActions({
      updateDiskToStore : "disk/editDisk",
    }),
    updateDisk(){
      const updateDiskUrl = "https://e-commerce.devstudio.design/computer/diskupdate/" + this.id + '/';
      const data = {
        detail: this.diskFull,
      }
      axios
          .patch(updateDiskUrl,data)
          .then((response) => {
            if(response.status === 200) {
              console.log("Disk is Updated!!!");
              this.updateDiskToStore({id:this.id,detail: this.diskFull});
            } else {
              console.log(response.data);
            }
          })
          .catch((err) => console.log(err));
      this.dialog = false;
    }
  }
}
</script>

