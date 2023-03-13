<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="black" dark v-bind="attrs" v-on="on">
        Delete Memory
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Memory Delete</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <p> ARE YOU SURE FOR DELETE THAT MEMORY?</p>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="orange darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="orange darken-1" text @click="deleteMemory"> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";
export default {
  name: "DeleteMemory",
  data : () => ({
    memoryId: null,
    dialog : false,
  }),
  props : {
    id : {
      type: Number,
      required: true
    },
  },
  methods : {
    ...mapActions({
      deleteMemoryToStore : "memory/deleteMemory",
    }),
    deleteMemory(){
      const deleteMemoryUrl = "https://e-commerce.devstudio.design/computer/memorydelete/" + this.id;
      axios
          .delete(deleteMemoryUrl)
          .then((response) => {
            if(response.status == 204) {
              console.log("Memory is Deleted!!!");
              this.deleteMemoryToStore({id:this.id});
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