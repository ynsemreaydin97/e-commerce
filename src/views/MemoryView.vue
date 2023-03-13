<template>
  <v-container>
    <add-memory></add-memory>
    <v-row>
      <v-col md="6" sm="12" lg="4" v-for="memory in memories" :key="memory.id">
        <memory-list
            :memory="memory"
        >
        </memory-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import {mapActions,mapGetters} from "vuex";
import MemoryList from "@/components/Memory/MemoryList.vue";
import AddMemory from "@/components/Memory/AddMemory.vue";
export default {
  name: "MemoryView",
  components:{
      MemoryList,AddMemory
  },
  computed:{
    ...mapGetters({
      memories : "memory/getMemories",
    })
  },
  mounted() {
    this.fetchMemories();
  },
  methods : {
    ...mapActions({
      setMemories : "memory/setMemories"
    }),
    fetchMemories(){
      const MemoryUrl = "https://e-commerce.devstudio.design/computer/memorylistcreate/";
      axios
          .get(MemoryUrl)
          .then(response => {
            if(response.status === 200) {
              console.log(response)
              this.setMemories({memories : response.data})
            } else console.log(response)
          })
          .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>