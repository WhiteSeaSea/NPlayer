<template>
  <div id="search">
    <div id="bar">
      <input type="text" name="" id="" placeholder="搜索歌曲、歌单、歌手" v-model="searchWords" @keyup.enter="search(searchWords)" />
      <font-awesome-icon :icon="['fas','search']" size="2x" style="color:white;"></font-awesome-icon>
    </div>
    <div id="result" v-if="searchWords">
        
    </div>
    <div id="recommandWords" v-if="!searchWords">
      
    </div>  
  </div>  
</template>
<script>
import {search} from '../../../api/index.js'
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      searchWords:"",
      Result:[]
    }
  },
  methods:{
    ...mapActions([
      "setCurrentList"
    ])
  },
  watch:{
    searchWords(n,o){
      if(n){
        search(n,1).then(res=>{
          console.log(res)
          this.setCurrentList(res.data.result.songs)
        })
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
#search{
  width 100%
  height 100%
  #bar{
  width 100%
  height 54px
  border 1px solid white
  line-height 32px
  padding 10px
  input{
    height 32px
    background-color transparent
    border none
    outline none
    font-size 25px
    line-height 32px
    color white
    width 93%
  }
}
}
</style>
