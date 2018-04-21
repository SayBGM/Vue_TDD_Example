import Vue from 'vue';
import Signup from '@/components/Signup';


describe('Signup.vue', () => {
  it('로그인', () => {
    const Constructor = Vue.extend(Signup);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.Signup .post-list .post-header .post-header__index').textContent)
      .toEqual('No');
  });
});
