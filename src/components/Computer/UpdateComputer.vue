<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="black" dark v-bind="attrs" v-on="on">
        Update Computer
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Computer Update</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field outlined label="Computer Model" v-model="computerModel">
          </v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="orange darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="orange darken-1" text @click="updateComputer"> Update </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";

export default {
  name: "UpdateComputer",
  data : () => ({
    computerModel: null,
    dialog: false,
  }),
  props : {
    id : {
      type: Number,
      required: true,
    },
  },
  methods : {
    ...mapActions({
      updateComputerToStore : "computer/editComputer",
    }),
    updateComputer(){
      const updateComputerUrl = "https://e-commerce.devstudio.design/computer/computerretrieveupdate/" + this.id + "/";
      const data = {
        model_number : this.computerModel,
      }
      axios
          .patch(updateComputerUrl,data)
          .then((response) => {
            if(response.status === 200) {
              console.log("Computer is Updated!!!");
              this.updateComputerToStore({id : this.id,model_number: this.computerModel});
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