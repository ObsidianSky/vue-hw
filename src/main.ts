import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import dateFilter from './filters/date';
import ellipsisFilter from "@/filters/ellipsis";
import tmdbImageBaseFilter from "@/filters/tmdb-image";

Vue.filter('date', dateFilter);
Vue.filter('ellipsis', ellipsisFilter);
Vue.filter('tmdbImageBase', tmdbImageBaseFilter);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
