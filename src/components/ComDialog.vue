<template>
  <div class="text-right" style="display:inline">
     <v-dialog v-model="dialog" width="800">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="success" v-bind="attrs" v-on="on" @click="getInterApi()">
          Click Me see dialog component
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Entries
        </v-card-title>
        <v-card-text>
          <v-simple-table>
            <tr>
              <th>№</th>
              <th>API</th>
              <th>Cors</th>
              <th>Description</th>
              <th>HTTPS</th>
            </tr>
            <tr v-for="(item, itemIndex) in Entries" :key="itemIndex">
              <td>{{itemIndex + 1}}</td>
              <td>{{item.API}}</td>
              <td>{{item.Cors}}</td>
              <td>{{item.Description}}</td>
              <td class="cursor pointer-hand">
                <v-icon>
                  {{item.HTTPS ? 'mdi-toggle-switch' : 'mdi-toggle-switch-off'}}
                </v-icon>
              </td>
            </tr>
          </v-simple-table>
          </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="dialog = false">
            back
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { pageList } from '../http/request/homeRequest2'
import TittleMixins from '../mixins/TittleMixins'

export default {
  name: 'ComDialog',
  mixins: [TittleMixins],
  data() {
    return {
      Entries: [],
      dialog: false
    }
  },
  computed: {
    // colorChange() {
    //   return
    // }
  },
  methods: {
    getInterApi() {
      pageList().then((res) => {
        if (res.error && res.status === 200) {
          this.errorNotification()
        } else {
          // console.log(res.data.entries)
          this.Entries = res.data.entries
          this.succesNotification()
        }
      })
      this.dialog = false
    }
  },
  created() {
    
  }
}
</script>
<style scoped>
  
</style>
