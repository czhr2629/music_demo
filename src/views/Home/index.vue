<template>
  <div class="home">
    <MusicList />
    <Swiper :imgs = "imgs" />
    <MusicTabs />
  </div>
</template>

<script>
import MusicList from './musiclist'
import Swiper from '../../components/MySwiper'
import MusicTabs from "./musicTabs"


export default {
  name: 'Home',
  data(){
    return{
      imgs:[//js中引入图片资源 需要使用require
              require("../../assets/img/b1.jpg"),
              require("../../assets/img/b2.jpg"),
              require("../../assets/img/b3.jpg")
          ],
    }
  },
  components: {
    MusicList,
    Swiper,
    MusicTabs
  }
}
</script>
