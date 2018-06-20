import * as types from "./mutation-types";

export const setUid=function({commit},uid){
  commit(types.SET_UID,uid)
}
export const setCurrentList=function({commit},uid){
  commit(types.SET_CURRENTLIST,uid)
}