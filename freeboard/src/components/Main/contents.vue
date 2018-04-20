<template>
  <div class="post">
    <div class="post__index" >{{ post.index }}</div>
    <div class="post__title">{{ post.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'Contents',
  data() {
    return {
    };
  },
  props: ['post'],
};
</script>

<style scoped>
.post{
    border-bottom: #000 1px solid;
    padding-left: 15px;

}
.post__index, .post__title{
  display: inline-block;
  font-size: 20px;
}
.post__index{
  position: relative;
  width: 30px;

}
.post__title{
  margin-left: 50px;
}
</style>
