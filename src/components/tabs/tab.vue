<script>
// 使用另一种方式渲染
export default{
    name:"Tab",
    data(){
        return{
        }
    },
    props:{
        label:{
            type:String,
            default:"tab"
        },
        index:{
            type:[String,Number],
            default:1
        }
    },
    mounted(){
        // console.log(this.$parent.currentIndex)
        // 读取到插槽内容 传递给父级组件
        // console.log(this.$parent.isContentShow);
        // console.log(this.$slots.default)//插槽
        // 高亮
        // this.$parent.isContentShow.push(this.$slots.default)
        // 内容和高亮一致  this把所有的传递过去
        this.$parent.isContentShow.push(this)


        
    },
    computed:{
         // 子元素读取父元素中的属性  currentIndex  实现高亮
        active(){
            return this.$parent.currentIndex == this.index
         }
    },
    methods:{
        clickTab(){
            // 把index的值传递给父级updateCurrenctIndex这个函数使用
            this.$parent.updateCurrenctIndex(this.index)
        }

    },
    render(){
        const classStyle ={//样式判断新语法
            tab:true,
            active:this.active //active函数返回的true则显示样式
        }
        return(
            <li onClick={ this.clickTab } class={classStyle}>{this.label}</li>
        )
    }
}
</script>
<style scoped>

.tab {
    flex: 1;
    list-style: none;
    line-height: 40px;
    margin-right: 30px;
    position: relative;
    text-align: center;
}

.tab.active {
    border-bottom: 2px solid blue;
}

</style>