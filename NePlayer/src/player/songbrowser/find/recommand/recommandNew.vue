<template>
  <div id="recommandNew">
    <div id="new-header">
      <div class="title">
        <font-awesome-icon :icon="['fas','music']" size="1x"></font-awesome-icon> 
        最新音乐
      </div>
      <a  href="#" class="more">
        更多>
      </a>
    </div>
    <div id="new-body">
      <div 
      class="new-item" 
      v-for="(item,index) in newSong" 
      :key="index"
      @click="play(item)"
      >
        <div class="item-index">
          {{index<9? ('0'+(index+1)):(index+1)}}
        </div>
        <img :src="item.song.album.picUrl">
        <div class="item-info">
          <div class="item-name">
            {{item.name}}
          </div>
          <div class="item-ar">
            {{item.song.artists | formatAr}}
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
import {getRecommandNew} from '../../../../api/index.js'
export default {
  data(){
    return {
      newSong:[]
    }
  },
  mounted() {
    getRecommandNew().then(res=>{
      this.newSong=res.data.result
    })
  },
  filters:{
    formatAr(value){
      let temp=value.map(function(value){
        return value.name
      });
      
      return temp.join('/')
    }
  },
  methods:{
    play(item){
      this.$emit('play',item.song)
    }
  }
}
</script>
<style lang="stylus" scoped>
#recommandNew{
  width 100%
  height auto
  #new-header{
    width 100%
    height 40px
    line-height 40px
    border-bottom 1px solid white
    position relative
  }
  .title{
    display inline-block
    color white
  }
  .more{
    text-align right 
    display inline-block
    position  absolute
    right 0
    text-decoration none 
    color #ccc
  }
  #new-body{
    position relative
    width 100%
    height auto
    padding-top 10px
    .new-item{
      position relative
      display inline-block
      padding 5px 0
      height 60px
      width 50%
      cursor pointer
      &:hover{
        box-shadow 0 0 10px 0 white inset
      }
      .item-index{
        position absolute
        left 0
        height 50px
        top 5px
        width 20px
        line-height 50px
      }
      img{
        position absolute
        top 5px
        left 30px
        width 50px
        height 50px
      }
      .item-info{
        position absolute
        top 5px
        left 100px
        height 50px
        .item-ar{
          font-size 12px
          letter-spacing 0
        }
      }
    }
  }
}
</style>
