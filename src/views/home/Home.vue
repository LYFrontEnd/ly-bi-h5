<template>
  <div class="home">
    <van-nav-bar :title="activeTitle" fixed safe-area-inset-top>
      <template #left>
        <div class="nav-login-btn" @click="login">登录</div>
      </template>
      <template #right>
        <van-image class="nav-game-icon" :src="navGameIcon" />
        <div class="nav-icon-space"></div>
        <van-image class="nav-msg-icon" :src="navMessageIcon" />
      </template>
    </van-nav-bar>
    <van-tabs
      v-model="tabSctive"
      animated
      swipeable
      lazy-render
      color="#ff6b9c"
      title-active-color="#ff6b9c"
      title-inactive-color="#585E66"
    >
      <van-tab title="直播">
        <div style="height: 300px; background-color: red"></div>
        <div style="height: 400px; background-color: blue"></div>
      </van-tab>
      <van-tab title="推荐">
        <HomeRecommendList></HomeRecommendList>
      </van-tab>
      <van-tab title="热门">热门</van-tab>
      <van-tab title="追番">追番</van-tab>
      <van-tab title="影视">影视</van-tab>
      <van-tab title="共同抗疫">共同抗疫</van-tab>
      <van-tab title="新征程">新征程</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Image as VanImage, Tab as VanTab, Tabs as VanTabs } from "vant";
import HomeRecommendList from "./HomeRecommendList.vue";

export default {
  name: "Home",
  components: {
    VanImage,
    VanTab,
    VanTabs,
    HomeRecommendList,
  },
  data() {
    return {
      activeTitle: "热门推荐",
      navGameIcon: require("@/assets/icons/home-nav-game.png"),
      navMessageIcon: require("@/assets/icons/home-nav-message.png"),
      tabSctive: 0,
    };
  },
  methods: {
    gotoVideoPlay: function () {
      this.$router.push({
        path: "/playvideo",
      });
    },
    login: function () {
      console.log("点击了登录按钮");
    },
  },
};
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.home {
  padding-top: 46px;
}
.nav-icon-space {
  display: inline-block;
  width: 10px;
}
.nav-login-btn {
  width: 38px;
  height: 38px;
  line-height: 38px;
  border-radius: 19px;
  background-color: #f4f2f2;
  color: #ff6b9c;
  font-size: 14px;
  text-align: center;
}

.nav-game-icon {
  width: 26px;
  height: 26px;
}
.nav-msg-icon {
  width: 22px;
  height: 22px;
}
</style>
