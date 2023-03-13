<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="black" dark v-bind="attrs" v-on="on">
        Delete Cpu
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Cpu Delete</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <p> ARE YOU SURE FOR DELETE THAT CPU?</p>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="orange darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="orange darken-1" text @click="deleteCpu"> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";

export default {
  name: "DeleteCpu",
  data : () => ({
      cpuId:null,
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
      deleteCpuToStore : "cpu/deleteCpu",
    }),
    deleteCpu(){
      const deleteCpuUrl = "https://e-commerce.devstudio.design/computer/cpudelete/" + this.id;
      axios
          .delete(deleteCpuUrl)
          .then((response) => {
            if (response.status === 204) {
                console.log("Cpu is Deleted!!!");
                this.deleteCpuToStore({id:this.id});
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