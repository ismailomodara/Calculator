import Vue from 'vue';
import VueRouter from 'vue-router';
import Calculator from './calculator.vue';
import Standard from './components/calculators/standard.vue';
import Scientific from './components/calculators/scientific.vue';
import Programmer from './components/calculators/programmer.vue';
import Volume from './components/calculators/volume.vue';
import Length from './components/calculators/length.vue';
import Mass from './components/calculators/mass.vue';
import Temperature from './components/calculators/temperature.vue';
import Currency from './components/calculators/currency.vue';
import '@/assets/css/style.css'
import '@/assets/css/media.css'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes =
  [
    {
      path: '/',
      component: Standard
    },
    {
      path: '/standard',
      component: Standard
    },
    {
      path: '/scientific',
      component: Scientific
    },
    {
      path: '/programmer',
      component: Programmer
    },
    {
      path: '/volume',
      component: Volume
    },
    {
      path: '/length',
      component: Length
    },
    {
      path: '/mass',
      component: Mass
    },
    {
      path: '/temperature',
      component: Temperature
    },
    {
      path: '/currency',
      component: Currency
    },

];

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
  render: h => h(Calculator),
  router,
}).$mount('#calculator')
