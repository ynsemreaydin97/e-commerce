<template>
<v-container>
  <v-row>
    <v-card
    class="mx-auto my-12 d-block"
    max-width="374"
    color="orange darken-2"
    >
    <v-card-title class="black--text">
      {{cpu.full_cpu}}
    </v-card-title>
      <v-card-text>
        <p> Cpu Type : {{cpu.cpu_type}}</p>
        <p> Cpu Gen : {{cpu.cpu_generation}}</p>
      </v-card-text>
      <delete-cpu :id="cpu.id"></delete-cpu>
      <update-cpu :cpu="cpu"></update-cpu>
    </v-card>
  </v-row>
</v-container>
</template>

<script>
import DeleteCpu from "@/components/Cpu/DeleteCpu.vue";
import UpdateCpu from "@/components/Cpu/UpdateCpu.vue";

export default {
  name: "CpuList",
  components: {DeleteCpu,UpdateCpu},
  props : {
      cpu : {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>

</style>