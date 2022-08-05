import { createStore } from 'vuex'

export default createStore({
  state: {
    //成功登录标志
    LoginFlag: false,
    //用户验证
    checkFlag:false,
    //验证成功
    userList: [],
    user: {
      username: "",
    },
    users: [],
    cart: {},
    //购物车的数组
    carts: [
  ],
    
  },
  getters: {
    //动态获取商品
    getShop: function(state){
      return state.carts;
    },
    getSelected(state) {
      let num = 0;
      for (let i = 0; i < state.carts.length; i++) {
        if (state.carts[i].selected) {
          num++;
        }
      }
      return num;
    },
    getSumPrice(state) {
      let num = 0;
      for (let i = 0; i < state.carts.length; i++) {
        if (state.carts[i].selected) {
          num += state.carts[i].price ;
        }
      }
      return num;
    },
    // 是否登陆
    isShow: function (state) {
      return state.LoginFlag;
    },
    UserList: function (state) {
      return state.userList;
    },
    token: function (state) {
      return state.checkFlag;
    },
    
  },
  mutations: {
    //添加商品的
    addShop: function(state,e){
      let shop= {
        id: state.carts.length+1,
        name: e.name,
        memory: e.memory,
        color: e.color,
        price: e.price,
        oldprice: "6499",
        num: 1,
        selected: true,
        src: e.path,
      }
      state.carts.unshift(shop);

    },
    delectShop: function(state, e){
        state.carts.splice(e,0);
    },
    setLoginFlag: function (state, a) {
      state.LoginFlag = a;
    },
     //初始化用户数组
    clearUser: function (state) {
      state.userList.length = 0;
      state.LoginFlag=false
    },
    //添加用户到用户数组
    addUser: function (state, user,word) {
      var use={
        name: user,
        password:word
      }
      state.LoginFlag=true;
      state.userList.unshift(use);
    },
    //登陆的验证
    checkUser: function(state,one,two){
        for(let i=0;i<state.userList.length;i++){
          let user =state.userList[i];
          if(user.name==one && user.password==two){
            state.checkFlag=true;
          }else{
            state.checkFlag=false;
          }
          
        }
    },
    
  },
  actions: {
  },
  modules: {
  }
})
