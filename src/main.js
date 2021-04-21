import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    posts: [
      {
        id: 1,
        title: "はじめに",
        url: "new-post",
        body: "内容",
        date: new Date(),
        thumb: "http://createyourfuture.com.au/wp-content/uploads/2015/12/FishEye22_0002_5-750x300-1.jpg"
      },
      {
        id: 2,
        title: "Vue入門",
        url: "vue-tutorial",
        body: "内容",
        date: new Date(),
        thumb: "https://www.nexty-ele.com/nat/wp-content/uploads/sites/3/2017/10/Header-Cipos-Familypage-750x300.jpg"
      },
      {
        id: 3,
        title: "React入門",
        url: "react-tutorial",
        body: "内容",
        date: new Date()
      },
      {
        id: 4,
        title: "Angular入門",
        url: "angular-tutorial",
        body: "内容",
        date: new Date()
      },
    ]
  },
  getters: {
    count: state => {
      return state.count + "回クリックしたよ"
    },
    getPost: (state) => (url) => {
      return state.posts.find(post => post.url === url)
    }
  },
  // step 3
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },
  // step 2
  actions: {
    increment({ commit }) {
      commit('increment')
    },
    decrement({ commit }) {
      commit('decrement')
    }
  }
})

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
