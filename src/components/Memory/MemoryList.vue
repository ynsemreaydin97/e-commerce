<template>
  <v-container>
    <v-row>
      <v-card
          class="mx-auto my-12 d-block"
          max-width="374"
          color="orange darken-2"
      >
        <v-card-title class="black--text">
          {{memory.memory_size}}
        </v-card-title>
        <delete-memory :id="memory.id"></delete-memory>
        <update-memory :id="memory.id"></update-memory>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import DeleteMemory from "@/components/Memory/DeleteMemory.vue"
import UpdateMemory from "@/components/Memory/UpdateMemory.vue"

export default {
  name: "MemoryList",
  components : {
    DeleteMemory,UpdateMemory
  },
  props : {
    memory : {
      type: Object,
      required : true
    }
  }
}
</script>

<style scoped>

</style>