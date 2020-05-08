<script>
import Content from './content'
// 使用另一种方式渲染
export default{
    name:"Tabs",
    data(){
        return{
            isContentShow:[]//子级传递多来的数据存储到这里面
        }
    },
    components:{
        Content
    },
    props:{
        currentIndex:{
            type:[String,Number],
            default:1
        }
    },
    methods:{
        updateCurrenctIndex(index){
            // 把值传递给app中的tabs组件
            this.$emit("changeCurrentIndex",index)
        }
    },
    render(){ 
        return(
            // 读取到插槽中的内容tab
            <div>
                <ul class="tabs-header">{ this.$slots.default }</ul>
                <Content isContentShow={this.isContentShow}/>
            </div>
        )
    },
}
</script>
<style scoped>
.tabs-header {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 2px solid #ededed;
}
</style>