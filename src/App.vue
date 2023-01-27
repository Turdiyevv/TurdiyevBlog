<template>
  <v-app>
    <v-app-bar
      color="blue-grey darken-2"
      app height="80"
      style="border-radius: 12px"
      class="mx-5 my-3"
    >
      <v-row>
        <div class="d-flex px-4">
          <v-btn @click="navigation" dark outlined class="rounded-xl">
            <v-icon>mdi-account</v-icon>
            <span class="mx-2 click-anime">cabinet</span>
          </v-btn>
          <v-spacer></v-spacer>
            <v-icon
              @click="$router.push('/calendar-3')"
              x-large style="color: aqua"
              class="mr-4"
            >mdi-calendar
            </v-icon>
          <!-- login-menu -->
          <div class="text-center">
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-width="200"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" dark outlined >log in</v-btn>
              </template>

              <v-card>
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar color="teal">
                      <v-icon>mdi-account</v-icon>
                      <!-- <img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                      > -->
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>creator information</v-list-item-title>
                      <v-list-item-subtitle>{{  }} {{  }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list class="px-2">
                  <!-- <v-form ref="myForm">
                  </v-form> -->
                    <v-text-field v-model="Fio.firstName" label="first name" outlined></v-text-field>
                    <v-text-field v-model="Fio.lastName" label="last name" outlined></v-text-field>
                </v-list>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="error" text @click="empty">Cancel</v-btn>
                  <v-btn color="primary" text @click="loginUser">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </div>
          <!-- login-menu -->
        </div>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer
      class="ma-3"
      color="blue-grey darken-3"
      app v-model="navigat"
      style="border-radius: 12px"
    >
        <left-menu :Fio="Fio"/>
    </v-navigation-drawer>

    <v-main class="backgraund">
      <div class="pa-3">
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import LeftMenu from '@/views/LeftMenu'

export default {
  name: 'App',
  components: {
    LeftMenu
  },
  data () {
    return {
      menu: false,
      navigat: true,
      langShow: false,
      list: ['uzb', 'eng', 'rus'],
      Fio: {
        firstName: '',
        lastName: '',
      },
    }
  },
  methods: {
    loginUser() {
      // this.name1 = this.Fio.firstName
      // this.name2 = this.Fio.lastName
      this.empty()
    },
    empty() {
      this.Fio.firstName = ''
      this.Fio.lastName = ''
      this.menu = false
    },
    navigation() {
      this.navigat = !this.navigat
    },
  },
}
</script>
<style scoped>
/* .click-anime {
  font-family: 'Helvetica', 'Arial', sans-serif;
} */
  .backgraund {
    background-color: #ffffff;
  }
</style>
