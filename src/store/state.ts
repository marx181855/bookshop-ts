const state = {
  user: {
    isLogin: !!window.localStorage.getItem('bookshopToken')
  },
  shopCartCount: 0
}

export default state
