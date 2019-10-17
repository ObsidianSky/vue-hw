import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import dateFilter from './filters/date';
import ellipsisFilter from '@/filters/ellipsis';
import tmdbImageBaseFilter from '@/filters/tmdb-image';

import store from './store'

import HomePage from '@/components/HomePage.vue';
import MoviePage from '@/components/MoviePage.vue';

Vue.filter('date', dateFilter);
Vue.filter('ellipsis', ellipsisFilter);
Vue.filter('tmdbImageBase', tmdbImageBaseFilter);

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'home',
    component: HomePage
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: MoviePage
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app');