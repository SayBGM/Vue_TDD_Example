<template>
  <div class="Main">
    <div class="post-list">
      <div class="post-header">
        <div class="post-header__index">No</div>
        <div class="post-header__title">title</div>
      </div>
        <Contents v-for="post in posts" :key="post.index" :post="post"/>
    </div>
  </div>
</template>

<script>
import Contents from './Main/contents';

export default {
  name: 'Main',
  components: {
    Contents,
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
.post-header{
  padding-left: 15px;
  border-bottom: #000 2px solid;
}
.post-header__index, .post-header__title{
  display: inline-block;
  font-size: 25px;
}
.post-header__index{
  width: 30px;
  height: 20px;
}
.post-header__title{
  margin-left: 50px;
}
</style>
