import base from './base'
import axios from "../utils/request"


const api = {

    getMusicList(params){
        return axios.get(base.baseUrl + base.musiclist,{
            params:params
        })
    },
    // 播放歌曲
    getMusicPlay(params){
        return axios.get(base.baseUrl + base.musiclist,{
            params:params
        })
    },
    // 获取歌词
    getMusicLrc(params){
        return axios.get(base.baseUrl + base.musiclist,{
            params:params
        })
    }
}
export default api