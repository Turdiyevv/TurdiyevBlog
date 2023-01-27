<template>
  <div class="d-flex justify-space-between pa-2">
    <h6 class="my-auto" style="color:aliceblue">this is com page <span style="color:red">{{tittle}}</span></h6>
    <ComDialog/>
  </div>
</template>
<script>
import  TittleMixins  from '@/mixins/TittleMixins'
import  ComDialog  from '@/components/ComDialog'
export default {
  name: 'comPage',
  mixins: [TittleMixins],
  components: {
    ComDialog
  },
  data () {
    return {
      tittle: ''
    }
  },
  methods: {
    
  },
  created() {
    // this.tittle = 'this is NOT home wiev page'
  }
}
</script>
