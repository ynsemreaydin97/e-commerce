<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="black" dark v-bind="attrs" v-on="on">
        Update Memory
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Memory Update</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field outlined label="Memory Size" v-model="memorySize">
          </v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="orange darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="orange darken-1" text @click="updateMemory"> Update </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";

export default {
  name: "UpdateMemory",
  data : () => ({
    memorySize : null,
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
      updateMemoryToStore : "memory/editMemory",
    }),
    updateMemory(){
      const updateMemoryUrl = "https://e-commerce.devstudio.design/computer/memoryupdate/" + this.id + '/';
      const data = {
        memory_size : this.memorySize,
      }
      axios
          .patch(updateMemoryUrl,data)
          .then((response) => {
            if(response.status === 200) {
              console.log("Memory is Updated!!!");
              this.updateMemoryToStore({id:this.id,memory_size: this.memorySize});
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

