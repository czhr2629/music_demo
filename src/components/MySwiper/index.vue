<template>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for='(item,index) in imgs ' v-bind:key="index">
            <img :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'carrousel',
    data() {
      return {
          
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    props:{
        // 谁调用轮播图谁传递图片
        imgs:Array,
        default:function(){
            return []
        }
    }
    /* components:{
        Swiper,
        SwiperSlide
    } */
    /*computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
     mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    } */
  }
</script>