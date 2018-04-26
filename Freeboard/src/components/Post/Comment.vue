<template>
  <div class="comment">
      {{comment}}
  </div>
</template>

<script>
export default {
  name: "comments",
  props: ["comment"]
};
</script>

<style>
.comment {
  size: 1.25em;
  border-bottom: 1px #000 solid;
  width: 80%;
}
</style>
