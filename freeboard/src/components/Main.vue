<template>
  <div class="main">
    <div class="post-list-container">
      <div class="post-list-container__header">
        <div class="index">No</div>
        <div class="title">title</div>
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
.post-list-container__header{
  padding-left: 15px;
  border-bottom: #000 2px solid;
}
.index, .title{
  display: inline-block;
  font-size: 25px;
}
.index{
  width: 30px;
  height: 20px;
}
.title{
  margin-left: 50px;
}
.post-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
