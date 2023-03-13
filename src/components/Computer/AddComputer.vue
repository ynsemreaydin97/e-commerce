<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="orange darken-1" dark v-bind="attrs" v-on="on">
        Add Computer
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Computer Add</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field outlined label="Computer Model" v-model="computerModel">
          </v-text-field>
          <v-text-field outlined label="Computer Serial Number" v-model="computerSerial">
          </v-text-field>
          <v-text-field outlined label="Computer Brand" v-model="computerBrand">
          </v-text-field>
          <v-text-field outlined label="Computer Cpu" v-model="computerCpu">
          </v-text-field>
          <v-text-field outlined label="Computer Disk" v-model="computerDisk">
          </v-text-field>
          <v-text-field outlined label="Computer Memory" v-model="computerMemory">
          </v-text-field>
          <v-text-field outlined label="Computer OS" v-model="computerOS">
          </v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="orange darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="orange darken-1" text @click="addComputer"> Add </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";
export default {
  name: "AddComputer",
  data : () => ({
    computerModel : null,
    computerSerial : null,
    computerBrand : null,
    computerCpu : null,
    computerDisk : null,
    computerMemory : null,
    computerOS : null,
    dialog : false,
  }),
  mounted () {},
  methods: {
    ...mapActions({
      addComputerToStore : "computer/addComputer",
    }),
    addComputer() {
      const addComputerUrl = "https://e-commerce.devstudio.design/computer/computerlistcreate/";
      const data = {
        model_number : this.computerModel,
        serial_number : this.computerSerial,
        brand : this.computerBrand,
        cpu : this.computerCpu,
        disk : this.computerDisk,
        memory : this.computerMemory,
        os : this.computerOS
      };
      axios
          .post(addComputerUrl,data)
          .then((response) => {
            if(response.status === 201) {
              console.log("Computer is Added!!!");
              this.addComputerToStore({computer : response.data});
            } else console.log("Computer is Not Added!!!",response.data);
          })
          .catch((err) => console.log(err));
      this.dialog = false
    }
  }
}
</script>

<style scoped>

</style>