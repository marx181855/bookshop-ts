const mutations = {
  setIsLogin(state, payload) {
    state.user.isLogin = payload
  },
  addCart(state, payload) {
    state.shopCartCount = payload.count
  }
}

export default mutations
