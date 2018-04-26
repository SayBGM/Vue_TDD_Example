<template>
  <div id="write-post">
    <vue-toastr ref="toastr"></vue-toastr>
    <form class="write-post__form">
      <input type="text" placeholder="write title.." class="input-title" v-model="postTitle">
      <textarea class="input-contents" v-model="postContents"></textarea>
      <input type="submit" @click="submitWritePost" class="write-post__button">
    </form>
  </div>
</template>

<script>

export default {
  name: 'write-post',
  data() {
    return {
      postTitle: '',
      postContents: '',
    };
  },
  computed: {
    isEmpty() {
      return !(this.postTitle && this.postContents);
    },
  },
  methods: {
    submitWritePost() {
      if (this.checkValue()) {
        // d
      }
    },
    checkValue() {
      if (this.isEmpty) this.$refs.toastr.w('제목과 내용을 모두 입력해주세요');
      else return true;

      return false;
    },
  },
};
</script>

<style>
.write-post__form {
  padding: 50px 200px;
}
.input-title {
  border: 1px solid #BBB;
  font-size: 30px;
  line-height: 50px;
  padding: 20px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  outline: none;
}
.input-contents {
  border: 1px solid #BBB;
  border-top: none;
  font-size: 16px;
  line-height: 20px;
  padding: 20px;
  display: block;
  box-sizing: border-box;
  width: 100%;
  resize: none;
  height: 500px;
  outline: none;
}
.write-post__button {
  display: block;
  width: 100%;
  font-size: 20px;
  border: 1px solid #BBB;
  margin: 10px 0;
  padding: 10px;
  outline: none;
  box-sizing: border-box;
}
.write-post__button:focus {
  border-bottom: 2px solid #666;
}

</style>
