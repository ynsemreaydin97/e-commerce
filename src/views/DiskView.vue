<template>
  <v-container>
    <add-disk></add-disk>
    <v-row>
      <v-col md="6" sm="12" lg="4" v-for="disk in disks" :key="disk.id">
        <disk-list
            :disk="disk"
        >
        </disk-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import {mapActions,mapGetters} from "vuex";
import DiskList from "@/components/Disk/DiskList.vue";
import AddDisk from "@/components/Disk/AddDisk.vue";
export default {
  name: "DiskView",
  components:{
    AddDisk,
    DiskList,
  },
  computed:{
    ...mapGetters({
      disks : "disk/getDisks",
    })
  },
  mounted() {
    this.fetchDisks();
  },
  methods:{
    ...mapActions({
      setDisks : "disk/setDisks"
    }),
    fetchDisks(){
      const DiskUrl = 'https://e-commerce.devstudio.design/computer/disklistcreate/';
      axios
          .get(DiskUrl)
          .then(response => {
            if(response.status === 200) {
              console.log(response)
              this.setDisks({disks: response.data})
            } else console.log(response)
          })
          .catch(err => console.log(err))
    }
  }
}
</script>
