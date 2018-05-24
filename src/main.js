// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import $ from 'jquery'
import JqueryEasing from 'jquery.easing'
import VueResource from 'vue-resource';
import MagnificPopup from 'magnific-popup'



Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(JqueryEasing);
Vue.use(VueResource);
Vue.use(MagnificPopup);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


