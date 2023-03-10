<template>
  <div class="small-video-back">
    <div class="top">
        <van-image :src="videoObj.coverImageUrl" class="cover-img"></van-image>
        <div class="number-back">
            <div class="left-back">
                <van-image :src="playIconImage" class="play-icon"></van-image>
                <span>{{ videoObj.playCount }}</span>
                <van-image :src="barrageIconImage" class="play-icon"></van-image>
                <span>{{ videoObj.barrageCount }}</span>
            </div>
            <span class="duration">{{ videoObj.videoDuration }}</span>
        </div>
    </div>
    <div class="bottom">
        <div class="video-title">{{ videoObj.videoTitle }}</div>
        <div class="user-back">
            <span class="user-icon">UP</span>
            <span class="user-name">{{ videoObj.upUserName }}</span>
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
            videoObj: this.videoInfo,
            playIconImage: require('@/assets/icons/home-recommend-play.png'),
            barrageIconImage: require('@/assets/icons/home-recommend-barrage.png'),
        }
    }
}
</script>

<style lang="scss">
.small-video-back {
    background-color: white;
    border-radius: 4px;
    height: 183px;
    .top {
        height: 110px;
        position: relative;
        .cover-img {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 100%;
        }
        .number-back {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 5px;
            font-size: 10px;
            color: white;
            .left-back {
                flex: 1;
                display: flex;
                align-items: center;
                .play-icon {
                    width: 15px;
                    height: 15px;
                }
                span {
                    margin-left: 5px;
                    margin-right: 10px;
                }
            }
        }
    }
    .bottom { 
        height: 73px;
        padding: 0 5px;
        .video-title {
            text-align: left;
            height: 30px;
            font-size: 13px;
            margin-top: 9px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; //多行在这里修改数字即可
            overflow: hidden;
            -webkit-box-orient: vertical;
        }
        .user-back {
            height: 34px;
            display: flex;
            align-items: center;
            .user-icon {
                color: #9499A0;
                border: 1px solid #999999;
                border-radius: 2px;
                font-size: 10px;
                height: 12px;
                line-height: 12px;
                padding: 0 2px;
            }
            .user-name {
                font-size: 12px;
                margin-top: 2px;
                margin-left: 5px;
            }
        }
    }
}

</style>