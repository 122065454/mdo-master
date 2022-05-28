// 准备一个对象
// 里面有判断登录的方法
let myPlugin = {
  checkLogin() {
    //判断有没有token
    //有token代表登录了
    if (localStorage.getItem('token')) {
      return true
    } else {
      //弹出提示
      window.open.herf('http://tc.simeta.io/shop/login')
      //跳回登录页
      // router.push("/checklogin");
      return false
    }
  },

  // 一般插件内的对象要提供一个install方法
  install(Vue) {
    // 判断登录的方法给vue的原型
    Vue.prototype.checkLogin = myPlugin.checkLogin
  },
}

export default myPlugin
