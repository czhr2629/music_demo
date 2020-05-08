<script>
export default {
    name:'Content',
    data(){
        return{}
    },
    props:{
        isContentShow:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    render(){
        return(
            // 遍历isContentShow
            <div>
                {this.isContentShow.map((ele,index)=>{
                    return <div>{ele.active ? ele.$slots.default : ''}</div>
                })}
            </div>
        )
    }
}
</script>