// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'mapbox-gl/dist/mapbox-gl.css'
import echarts from 'echarts'
import VueResource from 'vue-resource'
import china from 'echarts/map/json/china.json'
import axios from 'axios'
import qs from 'qs'
import App from './App'
import router from './router'

echarts.registerMap('china', china)
    //import axios from 'axios'
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.use(ElementUI)
    //const VueResource = require('vue-resource');
Vue.use(VueResource);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})