<template>
  <div class="big-video-back">
    <div class="top">
        <van-image :src="videoObj.coverImageUrl" class="cover-img"></van-image>
        <div class="number-back">
            <van-image :src="playIconImage" class="play-icon"></van-image>
            <span>{{ videoObj.playCount }}</span>
            <van-image :src="barrageIconImage" class="play-icon"></van-image>
            <span>{{ videoObj.barrageCount }}</span>
        </div>
    </div>
    <div class="bottom">
        <span>{{ videoObj.videoTitle }}</span>
        <div class="like-back">
            <van-image :src="likeIconImage" class="like-icon"></van-image>
            <span>{{ videoObj.likeCount }}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { Image as VanImage } from 'vant'
export default {
    components: {
        VanImage
    },
    props: [
        'videoInfo'
    ],
    data() {
        return {
            playIconImage: require('@/assets/icons/home-recommend-play.png'),
            barrageIconImage: require('@/assets/icons/home-recommend-barrage.png'),
            likeIconImage: require('@/assets/icons/home-recommend-like.png'),
            videoObj: this.videoInfo
        }
    }
}
</script>

<style scoped>
.big-video-back {
    background-color: white;
    border-radius: 4px;
    height: 242px;

}
.big-video-back .top {
    height: 202px;
    position: relative;
}
.big-video-back .bottom { 
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.big-video-back .top .cover-img {
    position: absolute;
    left: 0;
    top: 0;
    /* right: 0; */
    bottom: 0;
    width: 100%;
}
.big-video-back .top .number-back {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 30px;
    display: flex;
    align-items: center;
    padding: 0 5px;
}
.big-video-back .top .number-back .play-icon {
    width: 18px;
    height: 18px;
}

.big-video-back .top .number-back span {
    margin-left: 5px;
    font-size: 12px;
    margin-right: 10px;
    color: white;
}

.big-video-back .bottom span {
    margin-left: 5px;
    color: #333333;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    flex: 1;
}
.big-video-back .bottom .like-back {
    margin-right: 5px;
    height: 20px;
    position: relative;
}

.big-video-back .bottom .like-back .like-icon {
    width: 20px;
    height: 20px;
    position: relative;
    top: -8px;
    right: -5px;
}
.big-video-back .bottom .like-back span {
    font-size: 10px;
    vertical-align: top;
}
</style>