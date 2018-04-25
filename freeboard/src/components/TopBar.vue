<template>
  <div id="top-bar">
    Free Board
    <router-link to="login" class="top-bar__btn">login</router-link>
    <router-link to="signup" class="top-bar__btn">signup</router-link>
  </div>
</template>

<script>
export default {
  name: 'top-bar',
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
