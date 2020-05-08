<template>
    <div class="collection-block">
        <div class="block-padding">
            <div class="title">
                <h3>{{title}}</h3>
                <a href="#">更多...</a>
            </div>
            <div class="list clearfix">
                    <!-- 只有中间的2和5图片需要左右间距  下表就是1 4 -->
                <router-link
                    :to="{name:'Player',params:{songid:item.song_id}}"
                    :class="{'clear-padding' : index%3 !==1}"
                    class="item"
                    v-for="(item,index) in musiclist" 
                    v-bind:key="index"
                >
                <div class="img-warpper">
                    <img :src="item.pic_big" alt="">
                </div>
                <div class="mian">{{cutString(item.title)}}</div>
                <div class="gray">{{cutString(item.author)}}</div>
                    
                </router-link>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'MusiclistView',
    data(){
        return{
            // title:'热歌榜'
        }
    },
    props:{
        musiclist:{
            type:Array,
            default:function(){
                return []
            }
        },
        title:{
            type:String,
            default:'歌曲类型'
        }
    },
     methods:{
        cutString(str){
            if(str.length > 8){
                return str.substring(0,8)+"..."
            }
            return str;
        }
    }
}
</script>

<style lang="less" scoped>
.collection-block {
    background-color: #f8f8f8;
    padding: 5px 0;
}

.block-padding {
    padding: 10px 17px;
    background-color: #fff;
}

.title {
    display: flex;
    margin: 14px 0 18px;
}

.title h3 {
    flex: 1 1 0%;
    display: block;
    font-weight: 700;
    font-size: 20px;
}

.list {
    width: 100%;
    // overflow: hidden;
}

.list .item {
    float: left;
    width: 31.33%;
    padding: 0 10px;
    margin-bottom: 10px;
}

.clear-padding {
    padding: 0 !important;
}

.main {
    margin-top: 4px;
    font-size: 12px;
}

.gray {
    font-size: 12px;
    color: #999;
}

.btn-more {
    font-size: 12px;
    text-align: right;
    color: #333;
}
</style>