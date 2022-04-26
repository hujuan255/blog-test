import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts");
      if (!data.ok) {
        throw Error("暂无数据显示");
      }
      //将数据传给posts
      posts.value = await data.json();
    } catch (e) {
      error.value = e.message;
      console.log(error.value);
    }
  };
  return { posts, error, load };
}
export default getPosts;

