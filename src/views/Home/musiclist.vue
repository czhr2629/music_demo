<template>
    <div>
        <MusicListView title="热歌榜" :musiclist = 'hotMusic' />
        <MusicListView title="新歌榜" :musiclist = 'newMusic' />
        <MusicListView title="摇滚榜" :musiclist = 'rackMusic' />
    </div>
</template>
<script>
import MusicListView from './musiclistView'

export default {
    name:'musiclist',
    data(){
        return{
            hotMusic:[],
            newMusic:[],
            rackMusic:[]

        }
    },
    components:{
        MusicListView

    },
    mounted(){
        this.$api.getMusicList({
            method:"baidu.ting.billboard.billList",
            type:1,
            size:6,
            offset:0
        }).then(res=>{
            console.log(res.data)
            this.hotMusic = res.data.song_list
        }).catch(error=>{
            console.log(error);
        })

        this.$api.getMusicList({
            method:"baidu.ting.billboard.billList",
            type:2,
            size:6,
            offset:0
        }).then(res=>{
            console.log(res.data)
            this.newMusic = res.data.song_list
        }).catch(error=>{
            console.log(error);
        })

        this.$api.getMusicList({
            method:"baidu.ting.billboard.billList",
            type:11,
            size:3,
            offset:0
        }).then(res=>{
            console.log(res.data)
            this.rackMusic = res.data.song_list
        }).catch(error=>{
            console.log(error);
        })
    }
}
</script>