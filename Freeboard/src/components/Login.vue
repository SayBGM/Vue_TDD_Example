<template>
  <form class="login">
    <vue-toastr ref="toastr"></vue-toastr>
    <h1 class="login__title">login</h1>
    <input class="login__input-tag" type="text" placeholder="username" v-model="username">
    <input class="login__input-tag" type="password" placeholder="password" v-model="password">
    <button class="login__button" @click="submitLogin">login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    isEmptyUsername() {
      return !this.username;
    },
    isEmptyPassword() {
      return !this.password;
    },
  },
  methods: {
    submitLogin() {
      if (this.checkValue()) {
        axios.post('/login', {
          username: this.username,
          password: this.password,
        }).then((response) => {
          if (response.status === 200) {
            localStorage.setItem('token', response.data.access_token);
            this.$router.push('/');
          }
        }).catch((error) => {
          this.$refs.toastr.e(`status code ${error.response.status} ${error.response.statusText}`);
        });
      }
    },
    checkValue() {
      if (this.isEmptyUsername) this.$refs.toastr.w('아이디 입력란이 비어있습니다');
      else if (this.isEmptyPassword) this.$refs.toastr.w('비밀번호 입력란이 비어있습니다');
      else return true;

      return false;
    },
  },
};
</script>

<style>
.login {
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
.login__button {
  font-size: 15px;
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  outline: none;
  border: 1px solid #BBB;
  background-color: #BBB;
  box-sizing: border-box;
}
.login__button:hover {
  background-color: #DDD;
}
.login__button:focus {
  border: 2px solid #666;
}
.login__button:active {
  background-color: #666;
}
</style>
