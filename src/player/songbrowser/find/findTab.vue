<template>
  <div id="find-tab">
    <ul>
      <li><a href="#/player/find/recommand" :class="{active:findTab==1}" @click="setFindTab(1)">个性推荐</a></li>
      <li><a href="#" :class="{active:findTab==2}" @click="setFindTab(2)">歌单</a></li>
      
      <li><a href="#" :class="{active:findTab==4}" @click="setFindTab(4)">歌手</a></li>
      <li><a href="#/player/find/rank" :class="{active:findTab==5}" @click="setFindTab(5)">排行榜</a></li>
    </ul>
  </div>  
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters([
      'findTab'
    ])
  },
  methods:{
    ...mapActions([
      'setFindTab'
    ])
  }
}
</script>
<style lang="stylus" scoped>
#find-tab{
  ul{
    li{
      list-style none
      margin 0 10px
      display inline-block
      
      a{
        font-family SoukouMincho
        font-size 18px
        font-weight 700
        letter-spacing 2px
        text-decoration none
        color #f5f5f5
        opacity 0.8
        padding 10px 0
        transition all 1s
        border-bottom none
        &.active{
          opacity 1
          border-bottom 3px solid white
        }

      }
    }
  }
}
</style>
