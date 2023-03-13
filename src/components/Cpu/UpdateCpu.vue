<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="black" dark v-bind="attrs" v-on="on">
        Update Cpu
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Cpu Update</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field outlined label="Cpu Type" v-model="clonedCpu.cpu_type">
          </v-text-field>
          <v-text-field outlined label="Cpu Generation" v-model="clonedCpu.cpu_generation">
          </v-text-field>
          <v-text-field outlined label="Cpu Type" v-model="clonedCpu.full_cpu">
          </v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="orange darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="orange darken-1" text @click="updateCpu"> Update </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";

export default {
  mounted() {
    this.clonedCpu = JSON.parse(JSON.stringify(this.cpu))
  },
  name: "UpdateCpu",
  data : () => ({
    clonedCpu: null,
    //diğer propertyleri manipüle etmek istedikçe buraya ekleyip autocomplate ile düzenleme yapabilirim.
    dialog: false,
  }),
  props : {
    cpu : {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      updateCpuToStore : "cpu/editCpu",
    }),
    updateCpu(){
      const updateCpuUrl = "https://e-commerce.devstudio.design/computer/cpuupdate/" + this.cpu.id + '/';
      axios
          .patch(updateCpuUrl,this.clonedCpu)
          .then((response) => {
            if(response.status === 200) {
              console.log("Cpu is Updated!!!");
              this.updateCpuToStore({updated: response.data, before: this.cpu});
              //{memory: response.data} --{id:this.id,cpu_type:this.cpuType}
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

