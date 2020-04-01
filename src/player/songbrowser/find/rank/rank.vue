<template>
  <div id="rank-list">
    <div class="rank-item" v-for="(item,index) in list" :key="index" @click="getRankList(item.key)">
      <div class="item-index">
        {{'0'+(index+1)}}
      </div>
      <img :src="item.picUrl" >
      <div class="item-name">
        {{item.name}}
      </div>
    </div>
  </div>  
</template>
<script>
import {getRank} from "../../../../api/index.js"
import {mapGetters,mapActions,mapMutations} from 'vuex' 
export default {
  data(){
    return {
      list:[
        {
          key:0,
          name:"云音乐新歌榜",
          picUrl:"http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40"
        },
        {
          key:1,
          name:"云音乐热歌榜",
          picUrl:"http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40"

        },
        {
          key:3,
          name:"云音乐飙升榜",
          picUrl:"http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40"
        },
        {
          key:6,
          name:"美国Billboard周榜",
          picUrl:"http://p1.music.126.net/EBRqPmY8k8qyVHyF8AyjdQ==/18641120139148117.jpg?param=40y40"
        },
        {
          key:9,
          name:"Hit FM Top榜",
          picUrl:"http://p1.music.126.net/54vZEZ-fCudWZm6GH7I55w==/19187577416338508.jpg?param=40y40"
        },
        {
          key:14,
          name:"中国TOP排行榜(港台榜)",
          picUrl:"http://p1.music.126.net/JPh-zekmt0sW2Z3TZMsGzA==/18967675090783713.jpg?param=40y40"          
        },
        {
          key:15,
          name:"中国TOP排行榜(内地榜)",
          picUrl:"http://p1.music.126.net/2klOtThpDQ0CMhOy5AOzSg==/18878614648932971.jpg?param=40y40"
        },
        {
          key:16,
          name:"香港电台中文歌曲龙虎榜",
          picUrl:"http://p1.music.126.net/YQsr07nkdkOyZrlAkf0SHA==/18976471183805915.jpg?param=40y40"
        }

      ]
        
      
    }
  },
  methods:{
    getRankList(key){
      getRank(key).then(res=>{
        let list=res.data.playlist.tracks;
        this.setCurrentIndex(-1);
        this.setCurrentList(list);
      })
    },
    ...mapActions([
      "setCurrentList",
      "setCurrentIndex"
    ])
  }
}
</script>
<style lang="stylus" scoped>
#rank-list{
  //border 1px solid white
  width 100%
  height auto
  padding 20px 10px
  .rank-item{
    position relative
    height 70px
    width 50%
    float left
    padding 10px 0px
    cursor pointer
    &:hover{
      box-shadow: 0 0 10px 0 white inset
    }
    .item-index{
      position absolute
      left 10px
      top 10px
      height 50px
      line-height 50px
    }
    img{
      position absolute
      left 45px
      top 10px
      height 50px
      width 50px
    }
    .item-name{
      position absolute
      top 10px
      left 110px
      height 50px
      line-height 50px
    }
  }
}
</style>
