<template>
  <div id="top-bar">
    <router-link to="/" class="top-bar__logo">Free Board</router-link>
    <div v-if="token" class="top-bar__btn">logout</div>
    <template v-else>
      <router-link to="login" class="top-bar__btn">login</router-link>
      <router-link to="signup" class="top-bar__btn">signup</router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'top-bar',
  data() {
    return {
      token: '',
    };
  },
};
</script>

<style>
  #top-bar {
    background-color: #272727;
    color: #ffffff;
    font-size: 30px;
    line-height: 40px;
    padding: 20px;
    text-align: left;
  }

  .top-bar__logo {
    text-decoration: none;
    color: white;
  }

  .top-bar__btn {
    float: right;
    text-align: center;
    outline: none;
    border: 1px solid white;
    border-radius: 10px;
    height: 40px;
    width: 100px;
    background-color: #272727;
    color: white;
    cursor: pointer;
    font-size: 20px;
    margin: 0 20px;
    text-decoration: none;
  }

  .top-bar__btn:hover {
    color: #272727;
    background-color: white;
  }
</style>
