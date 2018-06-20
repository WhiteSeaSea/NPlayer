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
  }
}
export default mutations