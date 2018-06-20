import axios from 'axios'
import {URL} from '../assets/scripts/config'

//登录
export const login=(id,pw) => {
  const url=`${URL}/login/cellphone`;
  return axios.get(url,{
    params:{
      phone:id,
      password:pw
    }
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
      type:1
    }
  })
}