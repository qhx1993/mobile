import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import router from './router';
import Vant from 'vant';

import 'element-ui/lib/theme-chalk/index.css';
import './assets/icons/iconfont.css';
import 'vant/lib/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vant);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
