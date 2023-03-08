<template>
  <div class="recommend-content">
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
      class="content-h"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        :immediate-check="false"
        :offset="100"
        finished-text="已经到底啦~"
        @load="onLoad"
        class="content-list"
      >
        <div
          style="height: 200px"
          v-for="(item, index) in videoList"
          :key="index"
        >
          {{ index }}
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { List as VanList, PullRefresh as VanPullRefresh } from "vant";
import { getHomeRecommendList } from "@/request/api/home";
export default {
  name: "HomeRecommendList",
  components: {
    VanList,
    VanPullRefresh,
  },
  data() {
    return {
      videoList: [], //列表
      loading: false, //加载
      finished: false, //加载结束
      refreshing: false, //下拉刷新
    };
  },
  created() {
    console.log("dddddddd");
    this.getList(0);
  },
  methods: {
    //上拉加载事件
    onLoad: function () {
      this.getList(this.videoList.length); //调用请求接口数据的方法
    },
    // 下拉刷新
    onRefresh: function () {
      this.finished = false; // 不写这句会导致你上拉到底过后在下拉刷新将不能触发下拉加载事件
      this.getList(0); // 加载数据
    },
    getList: function (index) {
      getHomeRecommendList({
        index: index.toString(),
      })
        .then((res) => {
          console.log("推荐接口成功了");
          console.log(res);
          if (index == 0) {
            this.videoList = res.recommendList;
          } else {
            this.videoList = this.videoList.concat(res.recommendList);
          }
          this.refreshing = false;
          this.loading = false;
          if (res.recommendList && res.recommendList.length > 0) {
            this.finished = false;
          } else {
            this.finished = true;
          }
        })
        .catch((err) => {
          console.log("推荐接口出错了");
          console.log(err);
          this.refreshing = false;
          this.loading = false;
        });
    },
  },
};
</script>
<style scoped>
.recommend-content {
  background-color: #f1f2f3;
  height: calc(100vh - 46px - 50px - 44px);
}
.content-h {
  height: 100%;
  overflow: auto !important;
}
/* 解决下拉刷新与滚动冲突的问题 */
.content-list {
  height: auto !important;
}
</style>
