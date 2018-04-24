<template>
  <form id="login">
    <vue-toastr ref="toastr"></vue-toastr>
    <h1 class="login__title">로그인</h1>
    <input class="login__input-tag" type="text" placeholder="아이디" v-model="id">
    <input class="login__input-tag" type="password" placeholder="비밀번호" v-model="pw">
    <button class="login__btn" @click="submitLogin">로그인</button>
  </form>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      id: '',
      pw: '',
    };
  },
  computed: {
    isEmptyId() {
      return !this.id;
    },
    isEmptyPw() {
      return !this.pw || !this.checkPw;
    },
  },
  methods: {
    submitLogin() {
      this.checkValue();
    },
    checkValue() {
      if (this.isEmptyId) this.$refs.toastr.w('아이디 입력란이 비어있습니다');
      else if (this.isEmptyPw) this.$refs.toastr.w('비밀번호 입력란이 비어있습니다');
    },
  },
};
</script>

<style>
#login {
  width: 500px;
  margin: 0 auto;
  text-align: center;
}
.login__title {
  padding-top: 100px;
}
.login__input-tag {
  display: block;
  width: 100%;
  font-size: 20px;
  border: 1px solid #BBB;
  margin: 10px 0;
  padding: 10px;
  outline: none;
  box-sizing: border-box;
}
.login__input-tag:focus {
  border-bottom: 2px solid #666;
}
.login__btn {
  font-size: 15px;
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  outline: none;
  border: 1px solid #BBB;
  background-color: #BBB;
  box-sizing: border-box;
}
.login__btn:hover {
  background-color: #DDD;
}
.login__btn:focus {
  border: 2px solid #666;
}
.login__btn:active {
  background-color: #666;
}
</style>
