// 导出tabs组件使用的文件
import Tabs from './tabs'
import Tab from "./tab"

export default (Vue)=>{
    Vue.component(Tabs.name,Tabs)
    Vue.component(Tab.name,Tab)
}