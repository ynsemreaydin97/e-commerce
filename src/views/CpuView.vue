<template>
 <v-container>
   <add-cpu></add-cpu>
   <v-row>
     <v-col md="6" sm="12" lg="4" v-for="cpu in cpus" :key="cpu.id">
       <cpu-list
           :cpu="cpu"
       >
       </cpu-list>
     </v-col>
   </v-row>
 </v-container>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
import CpuList from "@/components/Cpu/CpuList.vue";
import AddCpu from "@/components/Cpu/AddCpu.vue";


export default {
  name: 'CpuView',

  components: {
    CpuList,AddCpu
  },
  computed:{
    ...mapGetters({
      cpus : "cpu/getCpus",
    })
  },
  mounted(){
    this.fetchCpus();
  },
  methods:{
    ...mapActions({
      setCpus : "cpu/setCpus"
    }),
    fetchCpus(){
      const CpuUrl = 'https://e-commerce.devstudio.design/computer/cpulistcreate/';
      axios.get(CpuUrl)
          .then(response => {
            if(response.status === 200) {
              console.log(response)
              this.setCpus({cpus: response.data})
            } else console.log(response)
          })
          .catch(err => console.log(err))
    }
  },


}
</script>
