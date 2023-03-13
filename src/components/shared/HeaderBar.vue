<template>
  <div>
    <v-app-bar
    color="black">
      <h1 class="text-center white--text mt-2" style="font-size: 50px; font-family: AppleGothic;"> E-COMMERCE PROJECT</h1>
      <v-row
          align="center"
          justify="space-around"
      >

        <v-btn
            class="white--text"
            depressed
            color="orange darken-3"
            @click="$router.push({path: '/computers'})"
        >
          COMPUTERS
        </v-btn>
        <v-btn
            class="white--text"
            depressed
            color="orange darken-2"
            @click="$router.push({path: '/cpus'})"
        >
          CPU'S
        </v-btn>
        <v-btn
            class="white--text"
            depressed
            color="orange darken-1"
            @click="$router.push({path: '/disks'})"
        >
          DISK'S
        </v-btn>
        <v-btn
            class="white--text"
            depressed
            color="orange lighten-1"
            @click="$router.push({path: '/memories'})"
        >
          MEMORIES
        </v-btn>
      </v-row>
      <br>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "HeaderBar"
}
</script>

<style scoped>

</style>