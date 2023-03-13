<template>
  <v-container>
    <v-row>
      <v-card
          class="mx-auto my-12 d-block"
          max-width="374"
          color="orange darken-2"
      >
        <v-card-title class="black--text">
          {{computer.model_number}}
        </v-card-title>
        <v-card-text>
          <p> Cpu TYPE : {{computer.cpu_data.full_cpu}}</p>
          <p> Disk TYPE : {{computer.disk_data.full_disk}}</p>
        </v-card-text>
        <delete-computer :id="computer.id"></delete-computer>
        <update-computer :id="computer.id"></update-computer>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import DeleteComputer from "@/components/Computer/DeleteComputer.vue";
import UpdateComputer from "@/components/Computer/UpdateComputer.vue";

export default {
  name: "ComputerList",
  components: {DeleteComputer,UpdateComputer},
  props: {
    computer : {
      type : Object,
      required : true,
    }
  }
};
</script>

<style scoped>

</style>