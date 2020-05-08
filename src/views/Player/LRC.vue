<template>
    <div class="lrcContainer">
        <div class="lrc">
            <p class="lrc-p" v-for="(item,index) in lrcs" :key="index">{{ item }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'LRC',
    data(){
        return{
            lrcs:[]
        }
    },
    props:{
        songid:{
            type:[String,Number],
            required:true
        }
    },
   mounted(){
        this.$api.getMusicLrc({
            method:"baidu.ting.song.lry",
            songid:this.songid
        }).then(res =>{
            // this.lrc = res.data.lrcContent
            this.filterLrcs(res.data)
        })
    },
    methods:{
        filterLrcs(values){
            var lrc = {};
            var lyrics = values.lrcContent.split("\n");
            var reg = /\[\d*:\d*(\.|:)\d*]/g;
            for(var i = 0;i<lyrics.length;i++){
                var timeRegArr = lyrics[i].match(reg);
                if(!timeRegArr) continue; // 为空 就跳过
                // 获取歌词内容
                var content = lyrics[i].replace(timeRegArr,"");
                this.lrcs.push(content)
                // console.log(content)
            }
            console.log(this.lrcs);
        }
    }
}
</script>

<style scoped>
.active {
    color: red;
}

.lrcContainer {
    width: 100%;
    height: 150px;
    overflow: scroll;
    position: relative;
}

.lrc {
    width: 100%;
    position: absolute;
    top: 0;
}

.lrc-p {
    height: 30px;
    line-height: 30px;
}

.up30 {
    margin-top: -30px;
}
</style>