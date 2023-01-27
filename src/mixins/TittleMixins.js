import { Message } from 'element-ui'

export default {
  methods: {
    succesNotification() {
      Message({
        showClose: 'true',
        message: 'Muvaffaqiyatli amaliyot',
        type: 'success',
        duration: 3000
      })
    },
    errorNotification() {
      Message({
        showClose: 'true',
        message: 'Xatolik yuz berdi',
        type: 'error',
        duration: 3000
      })
    }
  },
  created() {
    this.tittle = 'this is NOT home wiev page' 
  }
}
