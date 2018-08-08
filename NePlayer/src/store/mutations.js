import * as types from './mutation-types'
const mutations={
  [types.SET_EXPAND](state,expand){
    state.expand=expand;
  },
  [types.SET_UID](state,uid){
    state.uid=uid
  },
  [types.SET_CURRENTLIST](state,currentList){
    state.currentList=currentList
  },
  [types.SET_CURRENTMUSIC](state,currentMusic){
    state.currentMusic=currentMusic
  },
  [types.SET_AUDIO](state,audio){
    state.audio=audio
  },
  [types.SET_LYRIC](state,lyric){
    state.lyric=lyric
  },
  [types.SET_PLAYING](state,playing){
    state.playing=playing
  },
  [types.SET_CURRENTINDEX](state,index){
    state.index=index
  }
}
export default mutations