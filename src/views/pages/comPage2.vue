<template>
  <div class="pa-2">
    <v-card class="d-flex justify-space-between pa-4">
      <h6 class="my-auto">build a com page 2 <span style="color:tomato">{{tittle}}</span></h6>
      <v-btn color="primary" @click="getDataFunction()">click get information</v-btn>
    </v-card>
    <v-card class="mt-2">
      <v-card-title>
        this is permission card
      </v-card-title>
      <v-card-text>
        <v-simple-table>
          <thead>
            <tr>
              <th>№</th>
              <th>Name</th>
              <th>Username</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Company</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, itemIndex) in Information" :key='itemIndex'>
              <td>{{itemIndex + 1}}</td>
              <td>{{item.name}}</td>
              <td>{{item.username}}</td>
              <th>{{item.phone}}</th>
              <td>{{item.email}}</td>
              <td>{{item.address.street}}</td>
              <td>{{item.company.name}}</td>
              <td>{{item.website}}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>
    </v-card>
    <v-card class="mt-2">
      <v-card-title>
        this is permission card
      </v-card-title>
      <v-card-text>
        <template v-slot:item>
          <v-data-table :headers="headers" :items="Information" hide-default-footer>
          <!-- <template v-slot:item.address = {item}>
            </template> -->
          </v-data-table>
        </template>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import TittleMixins from '@/mixins/TittleMixins'
import { currencyList2 } from '../../http/request/homeRequestCopy'
// import { Message } from 'element-ui'
export default {
  name: 'comPage2',
  mixins: [TittleMixins],
  data() {
    return {
      tittle: '',
      Information: [],
      headers: [
        {text: '№', value: 'id'},
        {text: 'Name', value: 'name'},
        {text: 'Username', value: 'username'},
        {text: 'Phone', value: 'phone'},
        {text: 'Email', value: 'email'},
        {text: 'Address', value: 'street'},
        {text: 'Company', value: 'company'},
        {text: 'Website', value: 'website'}
      ]
    }
  },
  methods: {
    getDataFunction() {
      currencyList2().then((res) => {
        if (!res.error && res.status === 200) {
          // console.log(res.data)
          this.Information = res.data
          this.succesNotification()
        } else {
          this.errorNotification()
        }
      })
    }
  },
  created() {
    
  }
}
</script>
