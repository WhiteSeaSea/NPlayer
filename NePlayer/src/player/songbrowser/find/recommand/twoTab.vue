<template>
  <div id="twoTab">
    <div id="recom" @click="getRecommandSongs">
      <div class="icon" >
        {{day}}
      </div>
      <span>
        今日歌曲推荐
      </span>
    </div>
    <div id="rank">
      <div class="icon">
          <font-awesome-icon :icon="['fas','headphones']" size="2x"></font-awesome-icon> 
      </div>
      <span>
        排行榜
      </span>
    </div>
  </div>  
</template>
<script>
export default {
  data(){
    return {
      day:new Date().getDate()
    }
  },
  methods:{
    getRecommandSongs(){
      this.$emit('getRecommandSongs')
    }
  }
}
</script>
<style lang="stylus" scoped>
#twoTab{
  position relative
  height 100px
  width 100%
  color white
  //background-color black
  &>div{
    cursor pointer
    &:hover{
      box-shadow 0 0 10px 0 white inset
    }
  }
  #recom{
    position absolute
    left 0
    top 0
    bottom 0
    width 50%
    padding 4% 12%
    border-right 1px solid white
    .icon{
    display inline-block
    width 50px 
    height 50px
    border 1px solid white
    line-height 50px
    text-align center
    border-radius 50%
    
  }
  }
  #rank{
    position absolute
    right 0
    top 0
    bottom 0
    width 50%
    padding 4% 12%
    .icon{
    display inline-block
    width 50px 
    height 50px
    line-height 50px
    text-align center
    border-radius 50%
    
  }
  }
  
}
</style>
