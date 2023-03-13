<template>
  <v-container>
    <v-row>
      <v-card
          class="mx-auto my-12 d-block"
          max-width="374"
          color="orange darken-2"
      >
        <v-card-title class="black--text">
          {{disk.full_disk}}
        </v-card-title>
        <v-card-text>
          <p> Disk Type : {{disk.disk_type}}</p>
        </v-card-text>
        <delete-disk :id="disk.id"></delete-disk>
        <update-disk :id="disk.id"></update-disk>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import DeleteDisk from "@/components/Disk/DeleteDisk.vue"
import UpdateDisk from "@/components/Disk/UpdateDisk.vue"
export default {
  name: "DiskList",
  components:{
    DeleteDisk,UpdateDisk
  },
  props : {
    disk : {
      type: Object,
      required : true
    }
  }
}
</script>

<style scoped>

</style>