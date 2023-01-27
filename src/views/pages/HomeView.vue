<template>
  <div class="pa-2">
    <v-card class="d-flex justify-space-between pa-2">
      <h6 class="my-auto">this is home wiev page</h6>
      <div class="my-auto">
        <div v-if="logged">xush kelibsiz</div>
        <div v-else>sistemaga kiring</div>
      </div>
      <v-btn color="primary" @click="getApiFunction()">click get information</v-btn>
    </v-card>
    <v-card class="mt-2">
      <v-card-title>this is data</v-card-title>
      <v-card-text>
        <v-simple-table>
          <tr>
            <th>Method</th>
            <th class="px-2">CHartName</th>
            <th class="px-2">Disclaimer</th>
            <th>Data</th>
          </tr>
          <tr>
            <td>{{Headerdata}}</td>
            <td>{{chartName}}</td>
            <td>{{disclaimer}}</td>
            <td>{{contentLength}}</td>
          </tr>
        </v-simple-table>
        
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import {currencyList} from '../../http/request/homeRequest'
// import {Message} from 'element-ui'
import TittleMixins from '@/mixins/TittleMixins'

export default {
  name: 'HomeView',
  components: {  
  },
  mixins: [TittleMixins],
  data() {
    return {
      Headerdata: '',
      chartName: '',
      disclaimer: '',
      contentLength: ''
    }
  },
  methods: {
    getApiFunction() {
      currencyList().then((res) => {
        if (res.error) {
          this.errorNotification()
        } else {
          localStorage.setItem('token', res.data.chartName)
          
          // console.log(res)
          this.Headerdata = res.config.method
          this.chartName = res.data.chartName
          this.disclaimer = res.data.disclaimer
          this.contentLength = res.headers.expires
          this.succesNotification()
        }
      }).catch(() => {
        this.errorNotification()
      })
    }
  },
  computed: {
    logged() {
      return localStorage.getItem('token')
    }
  },
  created() {
  }
}
</script>

<style>

</style>
