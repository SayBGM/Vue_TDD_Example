<template>
  <form id="signup">
    <vue-toastr ref="toastr"></vue-toastr>
    <h1 class="signup__title">회원가입</h1>
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
    isMetterId() {
      return !this.id;
    },
    isMetterPw() {
      return !this.pw || !this.checkPw;
    },
    isNotSamePw() {
      return this.pw !== this.checkPw;
    },
  },
  methods: {
    submitSignup() {
      if (this.isMetterId) this.$refs.toastr.w('입력란이 비어있거나 잘못된 문자가 포함되어 있습니다', '잘못된 아이디');
      else if (this.isMetterPw) this.$refs.toastr.w('입력란이 비어있거나 잘못된 문자가 포함되어 있습니다', '잘못된 비밀번호');
      else if (this.isNotSamePw) this.$refs.toastr.w('비밀번호가 다릅니다');
    },
  },
};
</script>

<style>
#signup {
  width: 500px;
  margin: 0 auto;
  text-align: center;
}
.signup__title {
  padding-top: 100px;
}
.signup__input-tag {
  display: block;
  width: 100%;
  font-size: 20px;
  border: 1px solid #BBB;
  margin: 10px 0;
  padding: 10px;
  outline: none;
  box-sizing: border-box;
}
.signup__input-tag:focus {
  border-bottom: 2px solid #666;
}
.signup__btn {
  font-size: 15px;
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  outline: none;
  border: 1px solid #BBB;
  background-color: #BBB;
  box-sizing: border-box;
}
.signup__btn:hover {
  background-color: #DDD;
}
.signup__btn:focus {
  border: 2px solid #666;
}
.signup__btn:active {
  background-color: #666;
}
</style>
