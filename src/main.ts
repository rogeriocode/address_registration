/* eslint-disable import/no-extraneous-dependencies */
import { VueMaskDirective } from 'v-mask';
import Vue from 'vue';
import Notifications from 'vue-notification';
import App from './App.vue';
import { i18n } from './plugins/i18n';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';

Vue.directive('mask', VueMaskDirective);
Vue.use(Notifications);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
