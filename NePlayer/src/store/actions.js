import * as types from "./mutation-types";
import { findTap } from "./getters";

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
export const setPlaying=function({commit},playing){
  commit(types.SET_PLAYING,playing)
}
export const setCurrentIndex=function({commit},currentIndex){
  commit(types.SET_CURRENTINDEX,currentIndex)
}
export const setCurrentLyricIndex=function({commit},currentLyricIndex){
  commit(types.SET_CURRENTLYRICINDEX,currentLyricIndex)
}
export const setMyTab=function({commit},myTab){
  commit(types.SET_MYTAB,myTab)
}
export const setTopTab=function({commit},topTab){
  commit(types.SET_TOPTAB,topTab)
}
export const setFindTab=function({commit},findTab){
  commit(types.SET_FINDTAB,findTab)
}