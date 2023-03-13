<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="orange darken-1" dark v-bind="attrs" v-on="on">
        Add Memory
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Memory Add</span>
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
        <v-btn color="orange darken-1" text @click="addMemory"> Add </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";
export default {
  name: "AddMemory",
  data : () => ({
    memorySize : null,
    dialog : false,
  }),
  mounted () {},
  methods : {
    ...mapActions({
      addMemoryToStore : "memory/addMemory",
    }),
    addMemory(){
      const addMemoryUrl = "https://e-commerce.devstudio.design/computer/memorylistcreate/";
      const data = {
        memory_size : this.memorySize
      };
      axios
          .post(addMemoryUrl,data)
          .then((response) => {
            if(response.status === 201){
              console.log("Memory is Added!!!");
              this.addMemoryToStore({memory: response.data});
            } else console.log("Memory is Not Added!!!");
          })
          .catch((err) => console.log(err));
      this.dialog = false
    }
  }
}
</script>

<style scoped>

</style>