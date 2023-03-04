<template>
  <div class="home">
    <Button @click="gotoVideoPlay">1111111</Button>
  </div>
</template>

<script>
import { Button } from "vant";
import { getHomeRecommendList } from "@/request/api/home";

export default {
  name: "HomeView",
  components: {
    Button,
  },
  mounted: () => {
    getHomeRecommendList({
      index: "0",
    })
      .then((res) => {
        console.log("首页接口成功了");
        console.log(res);
      })
      .catch((err) => {
        console.log("首页接口出错了");
        console.log(err);
      });
  },
  methods: {
    gotoVideoPlay: function () {
      this.$router.push({
        path: "/playvideo",
      });
    },
  },
};
</script>
