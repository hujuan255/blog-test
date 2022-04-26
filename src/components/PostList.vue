<template>
  <div class="postList">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"></SinglePost>
    </div>
  </div>
</template>
<script>
import SinglePost from "./SinglePost.vue";
export default {
  name: "PostList",
  props: ["posts"],
  components: { SinglePost },
};
</script>
<style lang='less' scoped>
</style>