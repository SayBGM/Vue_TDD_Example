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
  border: 1px solid #aaaaaa;
  margin-top: 5px;
  padding: 5px 20px;
  text-decoration: none;
  color: black;
  font-size: 0;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.151);
}
.post-list-item:hover {
  background-color: #cfcfcf;
}
.content-index, .content-title{
  display: inline-block;
  font-size: 20px;
}
.content-index{
  width: 30px;
}
.content-title{
  margin-left: 50px;
}
</style>
