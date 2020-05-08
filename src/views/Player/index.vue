<template>
    <div class="play" v-if="songInfo.songinfo">
        <div class="header">
            <div class="title">
                <router-link to="/">
                    <i class="iconfont icon-shouye left"></i>
                </router-link>
                <div class="music-info">
                    <p>{{ songInfo.songinfo.title }}</p>
                    <p class="author">{{ songInfo.songinfo.author }}</p>
                </div>
                <router-link to="/search">
                    <i class="iconfont icon-sousuo right"></i>
                </router-link>
            </div>
        </div>
        <div class="song-info">
            <div class="song-info-img">
                <img :src="songInfo.songinfo.pic_huge" alt="">
                <LRC :songid="songid" />
            </div>

            <div class="iconbox">
                <i class="iconfont icon-shoucang2 left"></i>
                <i class="box"></i>
                <i class="iconfont icon-xiazai right"></i>
            </div>
        </div>
        <div class="song">
            <audio :src="songInfo.bitrate.show_link" controls></audio>
        </div>
    </div>
</template>
<script>
import LRC from "./LRC"

export default {
    name:"Player",
    data(){
        return{
            // 异步渲染数据 需判断
            songInfo:{}
        }
    },
    components:{
        LRC

    },
    props:{
        songid:{
            type:[String,Number],
            required:true//必选项
        }
    },
    mounted(){
        this.$api.getMusicPlay({//请求播放歌曲 method  songid
            method:"baidu.ting.song.play",
            songid:this.songid
        }).then(res =>{
            this.songInfo = res.data;
        })
    }
}
</script>
<style scoped>
.header {
    padding: 15px;
}

.music-info {
    flex: 1;
    font-size: 20px;
}

.title {
    display: flex;
    text-align: center;
}

.left {
    font-size: 30px;
}

.ca {
    color: red;
}

.right {
    font-size: 30px;
}

.song-info {
    padding: 15px;
}

.song-info-img {
    text-align: center;
}

.song-info-img img {
    width: 50%;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.31);
}

.song-lrc {
    margin-top: 10px;
    min-height: 50px;
}

.iconbox {
    display: flex;
    margin-top: 30px;
}

.iconbox .box {
    flex: 1;
}

.song {
    width: 100%;
    text-align: center;
}

.song audio {
    width: 80%;
}

.active {
    color: #222;
}

.author {
    font-size: 12px;
    color: #999;
}
</style>