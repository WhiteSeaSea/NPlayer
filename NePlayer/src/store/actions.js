import * as types from "./mutation-types";

export const setUid=function({commit},uid){
  commit(types.SET_UID,uid)
}
export const setCurrentList=function({commit},list){
  commit(types.SET_CURRENTLIST,list)
}
export const setCurrentMusic=function({commit},song){
  commit(types.SET_CURRENTMUSIC,song)
}
export const setAudio=function({commit},audio){
  commit(types.SET_AUDIO,audio)
}
export const setLyric=function({commit},lyric){
  commit(types.SET_LYRIC,lyric)
}