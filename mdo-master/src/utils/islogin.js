import store from '@/store/'
import router from '@/router/'


// 准备一个对象
// 里面有判断登录的方法
let myPlugin = {
    // 用来判断是否登录的函数
    // 既然是用来判断是否登录的函数，那我调用你的时候
    // 你是不是应该给我一个结果，告诉我是否登录
    // 所以这个函数应该有一个bool类型的返回值
    // 如果返回true代表登录了，返回false代表没登录
    checkLogin() {
        //判断有没有token
        //有token代表登录了
        if (localStorage.getItem('token')) {

            return true;

        } else {
            //弹出提示

            //跳回登录页
            router.push("/checklogin");

            return false;
        }
    },

    // 一般插件内的对象要提供一个install方法
    install(Vue) {
        // 判断登录的方法给vue的原型
        Vue.prototype.checkLogin = myPlugin.checkLogin;
    }
}


export default myPlugin;