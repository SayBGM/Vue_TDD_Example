<template>
  <form id="signup">
    <vue-toastr ref="toastr"></vue-toastr>
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
  computed: {
    isNoMetterId() {
      return !this.id;
    },
    isNoMetterPw() {
      return !this.pw || !this.checkPw;
    },
    isSamePw() {
      return this.pw !== this.checkPw;
    },
  },
  methods: {
    submitSignup() {
      if (this.isNoMetterId) this.$refs.toastr.w('입력란이 비어있거나 잘못된 문자가 포함되어 있습니다', '잘못된 아이디');
      else if (this.isNoMetterPw) this.$refs.toastr.w('입력란이 비어있거나 잘못된 문자가 포함되어 있습니다', '잘못된 비밀번호');
      else if (this.isSamePw) this.$refs.toastr.w('비밀번호가 다릅니다');
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
