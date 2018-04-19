import Vue from 'vue';
import Main from '@/components/Main.vue';


describe('Main.vue 테스트', () => {
  it('"No"가 정상적으로 들어갔나요?', () => {
    const Constructor = Vue.extend(Main);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.Main .post-list .post-header .post-header__index').textContent)
      .toEqual('No');
  });
});

describe('Main.vue 테스트', () => {
  it('"제목"이 정상적으로 들어갔나요?', () => {
    const Constructor = Vue.extend(Main);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.Main .post-list .post-header .post-header__title').textContent)
      .toEqual('title');
  });
});


describe('contents.vue 테스트', () => {
  it('Main.vue가 보내준 값을 잘 받을 수 있나요?', () => {
    const Constructor = Vue.extend(Main);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.post__index').textContent)
      .toEqual('1');
  });
});
