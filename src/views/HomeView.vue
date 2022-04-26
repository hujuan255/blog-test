<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <input type="text" v-model="search" />
    <p>搜索词-{{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">停止监听</button> -->
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts"></PostList>
    </div>
    <div v-else>页面正在加载中</div>
  </div>
</template>

<script>
//import { ref, computed, watch, watchEffect } from "vue";

import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts.js";
export default {
  name: "HomeView",
  components: {
    PostList,
  },
  // setup() {
  //   const search = ref("");
  //   const names = ref(["张三", "李四", "王五", "张丽", "王丽", "李红"]);
  //   const matchingNames = computed(() => {
  //     return names.value.filter((name) => name.includes(search.value));
  //   });
  //   const stopWatch = watch(search, () => {
  //     console.log("watch search changed");
  //   });
  //   const stopWatchEffect = watchEffect(() => {
  //     console.log("watchEffect search changed", search.value);
  //   });
  //   const handleClick = () => {
  //     stopWatch();
  //     stopWatchEffect();
  //   };
  //   return {
  //     search,
  //     names,
  //     matchingNames,
  //     handleClick,
  //   };
  // },
  setup() {
    const { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>
