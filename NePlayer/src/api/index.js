import axios from 'axios'
import {URL} from '../assets/scripts/config'

//登录
export const login=(id,pw) => {
  const url=`${URL}/login/cellphone`;
  return axios.get(url,{
    params:{
      phone:id,
      password:pw
    },
    withCredentials: true
    
  })
}

//获取个人信息
export const userInfo=(id) => {
  const url=`${URL}/user/detail`;
  return axios.get(url,{
    params:{
      uid:id
      
    }
  })
}

//获取个人歌单
export const userList=(id) => {
  const url=`${URL}/user/playlist`;
  return axios.get(url,{
    params:{
      uid:id
      
    }
  })
}
//获取歌单详情
export const playList=(id) => {
  const url=`${URL}/playlist/detail`;
  return axios.get(url,{
    params:{
      id:id
      
    }
  })
}
//获取用户最近播放
export const recentList=(id) => {
  const url=`${URL}/user/record`;
  return axios.get(url,{
    params:{
      uid:id,
      type:0
    }
  })
}
//获取歌曲详情
export const songDetail=(id)=>{
  const url=`${URL}/song/detail`;
  return axios.get(url,{
    params:{
      ids:id
    }
  })
}
//获取歌曲url
export const songUrl=(id)=>{
  const url=`${URL}/music/url`;
  return axios.get(url,{
    params:{
      id:id
    }
  })
}
//获取歌词
export const getLyric=(id)=>{
  const url=`${URL}/lyric`;
  return axios.get(url,{
    params:{
      id:id
    }
  })
}
//获取推荐歌单
export const getRecommandList=()=>{
  const url=`${URL}/recommend/resource`;
  return axios.get(
    url,{withCredentials: true})
}
//获取推荐最新音乐
export const getRecommandNew=()=>{
  const url=`${URL}/personalized/newsong`;
  return axios.get(
    url,
    { withCredentials: true }
  )
}
//获取每日推荐
export const getRecommandSongs=()=>{
  const url=`${URL}/recommend/songs`;
  return axios.get(
    url,
    { withCredentials: true }
  )
}
//获取排行榜详情
export const getRank=key=>{
  const url=`${URL}/top/list`;
  return axios.get(url,{
    params:{
      idx:key
    }
  })
}
//搜索
export const search=(keywords,type)=>{
  const url=`${URL}/search`;
  return axios.get(url,{
    params:{
      keywords:keywords,
      type:type
    }
  })
};