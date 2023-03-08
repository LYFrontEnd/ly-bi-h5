<template>
  <div>
    <div class="main">
      <!-- 二级路由-挂载点 -->
      <router-view></router-view>
    </div>
    <van-tabbar
      active-color="#CE3F36"
      inactive-color="#61666D"
      route
      safe-area-inset-bottom
    >
      <van-tabbar-item replace to="/layout/home" icon="fire"
        >热门</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/radio" icon="audio"
        >电台</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/music" icon="music"
        >音乐</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/mine" icon="manager"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
  padding-bottom: 50px;
}
</style>
