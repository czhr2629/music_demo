<template>
<!-- 滚顶到一定高度 出现返回键 -->
    <div class="th-back-top" v-show="show" @click="ClickBackTop">
        <span class="bg-back2top2"></span>
        
    </div>
</template>

<script>
export default {
    name:"BackTop",
    data(){
        return{
            show:false

        }
    },
    methods:{
        ClickBackTop(){
            document.documentElement.scrollTop = 0
        }
    },
    created(){
        // 获取屏幕的高度667
        const winHeight = document.documentElement.clientHeight;
        window.addEventListener('scroll',()=>{//滚动事件监听
            // console.log("滚动了");
            // 滚动距离超过一屏的高度
            let scrollHeight = document.documentElement.scrollTop 
            console.log(winHeight);
            console.log(scrollHeight);
            if(scrollHeight>winHeight){//高度大于屏幕高度就显示返回顶部图标
                this.show=true
            }else{
                this.show=false
            }
            

        })
    }
}
</script>

<style scoped>
.th-back-top {
    position: fixed;
    right: 15px;
    bottom: 104px;
    height: 39px;
    width: 80px;
    z-index: 0;
    opacity: 0.8;
    text-align: right;
}

.bg-back2top2 {
    display: inline-block;
    background: url(//static1.qianqian.com/web/st/images/icon-back2top2.af69f845890e1a53.png)
        no-repeat 0 0;
    -webkit-background-size: 39px 39px;
    background-size: 39px 39px;
    width: 39px;
    height: 39px;
}
</style>