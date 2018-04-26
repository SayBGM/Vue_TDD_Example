<template>
  <div class="post">
    <div is="post_title" :id="post_id" :title="Post_title"/>
    <div is="post_content" :content="Post_content"/>
    <hr>
    <div class="comment_box">
      <h3>댓글</h3>
      <div is="comment_input"/>
      <div is="comments" v-for="comment in comment_list" :key="comment.comment" :comment="comment.comment"/>
    </div>
    
  </div>
</template>

<script>
import post_title from "./Post/Title";
import post_content from "./Post/Content";
import comments from "./Post/Comment";
import comment_input from './Post/CommentInput'

export default {
  name: "post",
  data() {
    return {
      post_id: this.$route.params.id,
      Post_title: "성현아 회원가입 짜",
      Post_content: "정신좀 차리자 성현쿤",
      comment_list: [
        { comment: "김성현 회원가입 안만들었데요." },
        { comment: "대체 왜 안만들었을까 나는 아직 모르겠다." }
      ]
    };
  },
  components: {
    post_title,post_content,comments,comment_input
  }
};
</script>

<style>
  .post{
    text-align: center;
  }
  .comment_box{
    text-align: left;
    margin-left: 20%;
  }
</style>
