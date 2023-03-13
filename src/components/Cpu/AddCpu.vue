<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="orange darken-1" dark v-bind="attrs" v-on="on">
        Add Cpu
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Cpu Add</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field outlined label="Cpu Type" v-model="cpuType">
          </v-text-field>
          <v-text-field outlined label="Cpu Generation" v-model="cpuGen">
          </v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="orange darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="orange darken-1" text @click="addCpu"> Add </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";

export default {
  name: "AddCpu",
  data: () => ({
    cpuType : null,
    cpuGen : null,
    dialog : false,
  }),
  mounted () {},
  methods: {
    ...mapActions({
      addCpuToStore : "cpu/addCpu",
    }),
    addCpu() {
      const addCpuUrl = "https://e-commerce.devstudio.design/computer/cpulistcreate/";
      const data = {
        cpu_type : this.cpuType,
        cpu_generation : this.cpuGen
      };
      axios
          .post(addCpuUrl,data)
          .then((response) => {
            if(response.status === 201) {
              console.log("Cpu is Added!!");
              this.addCpuToStore({cpu : response.data});
            } else console.log("Cpu is Not Added!!!",response.data);
          })
          .catch((err) => console.log(err));
      this.dialog = false
    }
  }
}
</script>

<style scoped>

</style>