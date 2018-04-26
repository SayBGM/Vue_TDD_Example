<template>
  <router-link :to="{name: 'post', params:{id : index}}">
    <div class="post-list-item">
      <div class="content-index" >{{ index }}</div>
      <div class="content-title">{{ title }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'post-list-item',
  data() {
    return {
    };
  },
  props: ['index', 'title'],
};
</script>

<style scoped>
.post-list-item {
  border-bottom: #000 1px solid;
  padding-left: 15px;
  text-decoration: none;
  color: black;
}
.content-index, .content-title{
  display: inline-block;
  font-size: 20px;
}
.content-index{
  width: 30px;
}
.content-title{
}
</style>
