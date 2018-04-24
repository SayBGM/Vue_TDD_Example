<template>
  <div class="post">
    게시물 번호 : {{ post_id }}
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      post_id: this.$route.params.id,
    };
  },
};
</script>

<style>

</style>
