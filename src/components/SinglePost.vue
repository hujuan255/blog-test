<template>
  <div class="singlePost">
    <router-link :to="{ name: 'details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
  </div>
</template>
<script>
import { computed } from "vue";
export default {
  name: "SinglePost",
  props: ["post"],
  setup(props) {
    //通过计算属性将body的内容格式化
    const snippet = computed(() => {
      return props.post.body.substring(0, 50) + "...";
    });
    return { snippet };
  },
};
</script>
<style lang='less' scoped>
</style>