<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-card-text>
                <v-text-field
                    v-model="username"
                    name="username"
                    label="Username"
                    type="text"
                    placeholder="username"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="password"
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="password"
                    required
                ></v-text-field>

              </v-card-text>

              <v-card-actions>
                <v-spacer/>
                <v-btn
                    outlined
                    rounded
                    class="orange--text"
                    @click="login"
                >
                  <span>Login</span>
                </v-btn>
              </v-card-actions>

            </v-card>

          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import axios from "axios";
export default {
  name: "LoginPage",
  data: () => ({
    username: null,
    password: null
  }),
  methods: {
    ...mapActions({
      setAccessToken: 'auth/setAccessToken',
      setRefreshToken: 'auth/setRefreshToken',
    }),
    login() {
      const loginUrl = this.restApi + '/api/token/';
      const myForm = {
        username: this.username,
        password: this.password
      }
      axios.post(loginUrl, myForm)
          .then(response => {
            if (response.status === 200) {
              this.setAccessToken({access: response.data.access})
              this.setRefreshToken({refresh: response.data.refresh})
              this.$router.push({path: '/'})
            } else console.log(response)
          })
          .catch(err => console.log(err))
    }
  },
  computed: {
    ...mapGetters({
      restApi: 'auth/getRestApi',
    })
  }
};
</script>

<style scoped>

</style>