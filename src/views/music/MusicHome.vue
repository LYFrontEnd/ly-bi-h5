<template>
  <div class="music">
    <van-nav-bar :title="activeTitle" fixed />
    <h1>This is an music page</h1>
  </div>
</template>

<script>
export default {
  name: "MusicHome",
  components: {},
  data() {
    return {
      activeTitle: "乐库",
    };
  },
  // 路由切换 - 侦听$route对象改变
  watch: {
    // $route() {
    //   this.activeTitle = this.$route.meta.title; // 提取切换后路由信息对象里的title显示
    // },
  },
};
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.music {
  padding-top: 46px;
}
</style>
