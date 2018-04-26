<template>
  <div class="main">
    <div class="post-list-container">
      <div class="post-list-container__header">
        <div class="index">No</div>
        <div class="title">title</div>
        <router-link to="/write-post" class="write-post-button">Write Post</router-link>
      </div>
      <ul class="post-list">
        <li is="PostListItem"
          v-for="post in posts"
          :key="post.index"
          :index="post.index"
          :title="post.title"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
import PostListItem from './Main/PostListItem';

export default {
  name: 'main',
  components: {
    PostListItem,
  },
  data() {
    return {
      posts: [
        { index: 1, title: 'hello' },
        { index: 2, title: 'world' },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  padding: 60px 200px;
}
.post-list-container__header{
  padding-left: 15px;
  font-size: 0;
}
.index, .title{
  display: inline-block;
  font-size: 25px;
  line-height: 40px;
  margin-bottom: 10px;
}
.index{
  width: 30px;
  height: 20px;
}
.title{
  margin-left: 50px;
}
.write-post-button {
  font-size: 20px;
  line-height: 20px;
  background-color: #272727;
  text-decoration: none;
  color: white;
  border-radius: 10px;
  float: right;
  width: 150px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
}
.write-post-button:hover {
  background-color: #464646;
}
.post-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
