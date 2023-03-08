<template>
  <div class="detail">
    <div class="video-content">
      <LYVideo :volume="volume" ref="video" :src="src"></LYVideo>
    </div>
    <div class="button-group">
      <vant-button class="primary" @click="playVideo">开始视频</vant-button>
      <vant-button class="primary" @click="stopVideo">暂停视频</vant-button>
      <vant-button class="primary" @click="reloadVideo">重新加载</vant-button>
      <vant-button class="primary" @click="forwardVideo">视频快进</vant-button>
      <vant-button class="primary" @click="backVideo">视频后退</vant-button>
      <vant-button class="primary" @click="volumeUpVideo">增大音量</vant-button>
      <vant-button class="primary" @click="volumeDownVideo"
        >降低音量</vant-button
      >
      <vant-button class="primary" @click="toggleToFenghuangwang"
        >凤凰卫视</vant-button
      >
      <vant-button class="primary" @click="toggleToDefault"
        >默认频道</vant-button
      >
    </div>
  </div>
</template>

<script>
import LYVideo from "@/compnents/video/LYVideo";
import { Button as VantButton } from "vant";
export default {
  components: {
    LYVideo,
    VantButton,
  },
  data() {
    return {
      volume: 0.5,
      src: "http://vjs.zencdn.net/v/oceans.mp4",
    };
  },
  computed: {
    video() {
      return this.$refs.video;
    },
  },
  methods: {
    // 父类组件调用子组件方法，触发播放器功能
    stopVideo() {
      this.video.stop();
    },
    playVideo() {
      this.video.play();
    },
    reloadVideo() {
      this.video.reload();
    },
    forwardVideo() {
      this.video.forward();
    },
    backVideo() {
      this.video.back();
    },
    fullScreenVideo() {
      this.video.fullScreen();
    },
    screenVideo() {
      this.video.exitScreen();
    },
    volumeUpVideo() {
      this.video.volumeUp();
    },
    volumeDownVideo() {
      this.video.volumeDown();
    },
    toggleToFenghuangwang() {
      this.video.toggleTv({
        src: {
          type: "application/x-mpegURL",
          src: "https://playtv-live.ifeng.com/live/06OLEGEGM4G.m3u8",
        },
        load: "https://playtv-live.ifeng.com/live/06OLEGEGM4G.m3u8",
      });
    },
    toggleToDefault() {
      this.video.toggleTv({
        src: {
          type: "video/mp4",
          src: "http://vjs.zencdn.net/v/oceans.mp4",
        },
        load: "http://vjs.zencdn.net/v/oceans.mp4",
      });
    },
  },
  beforeCreate() {
    this.volume = window.localStorage.volume;
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  .video-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
  }
  .button-group {
    margin-top: 20px;
    display: flex;
    flex: 0 0 100px;
    flex-direction: column;
    justify-content: space-between;
    // align-items: center;
  }
}
</style>
