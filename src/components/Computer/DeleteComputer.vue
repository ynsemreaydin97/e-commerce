<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="black" dark v-bind="attrs" v-on="on">
        Delete Computer
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Computer Delete</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <p> ARE YOU SURE FOR DELETE THAT COMPUTER?</p>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="orange darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="orange darken-1" text @click="deleteComputer"> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";

export default {
  name: "DeleteComputer",
  data : () => ({
    computerId: null,
    dialog: false,
  }),
  props : {
    id : {
      type : Number,
      required : true,
    },
  },
  methods : {
    ...mapActions({
      deleteComputerToStore : "computer/deleteComputer",
    }),
    deleteComputer(){
      const deleteComputerUrl = "https://e-commerce.devstudio.design/computer/computerretrievedestroy/" + this.id;
      axios
          .delete(deleteComputerUrl)
          .then((response) => {
            if(response.status === 204) {
              console.log("Computer is Deleted!!!");
              this.deleteComputerToStore({id:this.id});
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

<style scoped>

</style>