<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="orange darken-1" dark v-bind="attrs" v-on="on">
        Add Disk
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Disk Add</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field outlined label="Disk Type" v-model="diskType">
          </v-text-field>
          <v-text-field outlined label="Disk Size" v-model="diskSize">
          </v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="orange darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="orange darken-1" text @click="addDisk"> Add </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";

export default {
  name: "AddDisk",
  data: () => ({
    diskType : null,
    diskSize : null,
    dialog : false,
  }),
  mounted () {},
  methods: {
    ...mapActions({
      addDiskToStore : "disk/addDisk",
    }),
    addDisk() {
      const addDiskUrl = "https://e-commerce.devstudio.design/computer/disklistcreate/";
      const data = {
        disk_type : this.diskType,
        disk_size : this.diskSize
      };
      axios
          .post(addDiskUrl,data)
          .then((response) => {
            if (response.status === 201) {
              console.log("Disk is Added!!!");
              this.addDiskToStore({disk: response.data});
            } else console.log("Disk is Not Added!!!");
          })
          .catch((err) => console.log(err));
      this.dialog = false
    }
  }
}
</script>

<style scoped>

</style>