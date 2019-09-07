// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.prototype.mui = mui
//引用axios
import axios from 'axios'
Vue.prototype.axios = axios
//引用jquery
import $ from 'jquery'
//引用mui
import mui from '../static/mui/js/mui.js'
import '../static/mui/css/mui.css'
//引用icon
import '../static/font/iconfont.css'
//引用bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import './plugins/element.js'
//引用mock
require("./mock");
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
