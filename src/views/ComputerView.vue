<template>
  <v-container>
    <add-computer></add-computer>
    <v-row>
      <v-col md="6" sm="12" lg="4" v-for="computer in computers" :key="computer.id">
        <computer-list
            :computer="computer"
        >
        </computer-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import  {mapActions,mapGetters} from "vuex";
import ComputerList from "@/components/Computer/ComputerList.vue";
import AddComputer from "@/components/Computer/AddComputer.vue";

export default {
  name: "ComputerView",
  components : {
    ComputerList,AddComputer
  },
  computed:{
    ...mapGetters({
      computers : "computer/getComputers"
    })
  },
  mounted() {
    this.fetchComputers();
  },
  methods : {
    ...mapActions({
      setComputers : "computer/setComputers"
    }),
    fetchComputers(){
      const ComputerUrl = 'https://e-commerce.devstudio.design/computer/computerlistcreate/';
      axios.get(ComputerUrl)
          .then(response => {
            if(response.status === 200) {
              console.log(response)
              this.setComputers({computers: response.data})
            } else console.log(response)
          })
          .catch(err => console.log(err))
    }
}

}
</script>
