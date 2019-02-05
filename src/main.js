import Vue from 'vue'
import Calculator from './calculator.vue'
import '@/assets/css/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(Calculator),
}).$mount('#calculator')
