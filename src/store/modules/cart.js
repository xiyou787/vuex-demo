import axios from 'axios'
const cart = {
  namespaced: true,
  state () {
    return {
      list: []
    }
  },
  mutations: {
    updateList (state, data) {
      state.list = data
    }
  },
  actions: {
    async getList (context) {
      const res = await axios.get('http://localhost:3000/cart')
      context.commit('updateList', res.data)
    },
    async postList (context, obj) {
      await axios.patch('http://localhost:3000/cart/' + obj.id, {
        count: obj.count
      })
      context.dispatch('getList')
    }
  },
  getters: {
    total (state) {
      return state.list.reduce((prev, item) => {
        return prev + item.count
      }, 0)
    },
    allPrice (state) {
      return state.list.reduce((prev, item) => {
        return prev + item.count * item.price
      }, 0)
    }
  }
}
export default cart
