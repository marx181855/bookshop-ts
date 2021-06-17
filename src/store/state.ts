const state = {
  user: {
    isLogin: !!window.localStorage.getItem('token')
  },
  shopCartCount: 0
}

export default state
