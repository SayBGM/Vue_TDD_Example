<template>
  <div class="comment">
    <div class="comment-input">
      <input class="comment-input_comment" type="text" v-model="comment"/>
      <div class="comment-input_btn">작성</div>
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      comment: ''
    }
  }
}
</script>

<style scoped>
  .comment-input_comment{
    font-size: 20px;
    width: 88%;
  }
  .comment-input_btn{
    display: inline-block;
    width: 10%;
    height: 24px;
    border: 2px #272727 solid;
    text-align: center;
    line-height: 28px;
    border-radius: 5px;
    cursor: pointer;
  }
  .comment-input_btn:hover{
    color: #FFF;
    background: #272727
  }
  .comment-input{
    margin-bottom: 15px;
  }
</style>
