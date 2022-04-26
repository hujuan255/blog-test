<template>
  <div class="details">
    <h1>Details</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
    </div>
    <div v-else>页面正在加载中</div>
  </div>
</template>
<script>
import getPost from "../composables/getPost.js";
export default {
  props: ["id"],
  setup(props) {
    //console.log("id", props.id);
    const { post, error, load } = getPost(props.id);
    load();
    return { post, error };
  },
};
</script>
<style lang='less' scoped>
</style>