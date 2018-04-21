import Vue from 'vue';
import Router from 'vue-router';
import Signup from '@/components/Signup';
import Login from '@/components/Login';
import Main from '@/components/Main';
import Toastr from 'vue-toastr';

require('vue-toastr/src/vue-toastr.scss');

Vue.component('vue-toastr', Toastr);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
