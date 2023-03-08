import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import 'normalize.css/normalize.css'
import FastClick from 'fastclick'
import { Tabbar, TabbarItem, NavBar } from 'vant';

import videojs from "video.js";
import "video.js/dist/video-js.css";
Vue.prototype.$video = videojs;

// import Vconsole from 'vconsole'
// const vConsole = new Vconsole()
const VConsole = require('vconsole')
new VConsole()

Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);

FastClick.attach(document.body);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
