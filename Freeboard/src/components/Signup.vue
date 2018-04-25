<template>
  <form id="signup">
    <vue-toastr ref="toastr"></vue-toastr>
    <h1 class="signup__title">signup</h1>
    <input class="signup__input-tag" type="text" placeholder="username" v-model="username">
    <input class="signup__input-tag" type="password" placeholder="password" v-model="password">
    <input class="signup__input-tag" type="password" placeholder="re-enter password"
      v-model="checkPassword">
    <button class="signup__button" @click="submitSignup">signup</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'signup',
  data() {
    return {
      username: '',
      password: '',
      checkPassword: '',
    };
  },
  computed: {
    isMetterUsername() {
      return !this.username;
    },
    isMetterPassword() {
      return !(this.password || !this.checkPassword);
    },
    isNotSamePassword() {
      return this.password !== this.checkPassword;
    },
  },
  methods: {
    submitSignup() {
      if (this.checkValue()) {
        axios.post('/signup', {
          username: this.username,
          password: this.password,
        }).then((response) => {
          if (response.status === 200) {
            this.$router.push('/login');
          }
        }).catch((error) => {
          this.$refs.toastr.e(`status code ${error.response.status} ${error.response.statusText}`);
        });
      }
    },
    checkValue() {
      if (this.isMetterUsername) this.$refs.toastr.w('입력란이 비어있거나 잘못된 문자가 포함되어 있습니다', '잘못된 아이디');
      else if (this.isMetterPassword) this.$refs.toastr.w('입력란이 비어있거나 잘못된 문자가 포함되어 있습니다', '잘못된 비밀번호');
      else if (this.isNotSamePassword) this.$refs.toastr.w('비밀번호가 다릅니다');
      else return true;
      return false;
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
.signup__button {
  font-size: 15px;
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  outline: none;
  border: 1px solid #BBB;
  background-color: #BBB;
  box-sizing: border-box;
}
.signup__button:hover {
  background-color: #DDD;
}
.signup__button:focus {
  border: 2px solid #666;
}
.signup__button:active {
  background-color: #666;
}
</style>
