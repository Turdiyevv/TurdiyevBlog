<template>
  <div>
    <v-card light height="170" class="ma-4 pa-2">
      <h5>User information</h5>
      <v-card width="100%" max-height="80px" class="d-flex" color="orange">
        <v-icon class="mr-2">mdi-account</v-icon>
        <v-list-item-subtitle>{{  }} {{  }}</v-list-item-subtitle>
      </v-card>
    </v-card>
    <v-list dark class="table-hover">
      <v-list-item type="button" :to="{path: '/'}">
        <v-list-item-icon>
          <v-icon>mdi-account-star</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>com home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item type="button" :to="{path: '/com-page'}">
        <v-list-item-icon>
          <v-icon>mdi-account</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>com page</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item type="button" :to="{path: '/com-page-2'}">
        <v-list-item-icon>
          <v-icon>mdi-star</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>com page[2]</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item type="button" :to="{path: '/com-page-3'}">
        <v-list-item-icon>
          <v-icon>mdi-card</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>com page[3]</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'LeftMenu',
  data () {
    return {
    }
  },
  props: {
    Fio: {},
  },
  methods: {
  },
  created() {
    console.log(this.Fio)
  },
}
</script>
<style scoped>
.table-hover:hover {
  color: yellow;
  text-shadow: 120px solid yellow;
}

</style>
