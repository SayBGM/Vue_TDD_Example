<template>
  <form id="signup">
    <h1>회원가입</h1>
    <input class="signup__input-tag" type="text" placeholder="아이디" v-model="id">
    <input class="signup__input-tag" type="password" placeholder="비밀번호" v-model="pw">
    <input class="signup__input-tag" type="password" placeholder="비밀번호 재확인" v-model="checkPw">
    <button class="signup__btn" @click="submitSignup">가입</button>
  </form>
</template>

<script>
export default {
  name: 'signup',
  data() {
    return {
      id: '',
      pw: '',
      checkPw: '',
    };
  },
  methods: {
    submitSignup() {},
  },
  computed: {
    compoundProperty() {
      return [this.id, this.pw];
    },
  },
};
</script>

<style>
#signup {
  width: 700px;
  margin: 0 auto;
  text-align: center;
}
.signup__input-tag {
  display: block;
  width: 100%;
}
</style>
