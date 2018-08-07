<template>
  <div id="words" v-if="playing">
    <div id="info">
      <div id="pic">
        <img v-if="currentMusic.al.picUrl" :src="currentMusic.al.picUrl" >
      </div>
      <div id="intro">
        <p>
          {{currentMusic.name}}
        </p>
        <p>
          <span>歌手：</span>
          <span>{{currentMusic.ar| formatAr}}</span>
        </p>
        <p>
          <span>专辑：</span>
          <span>{{currentMusic.al.name}}</span>
        </p>
      </div>
    </div>
    <div id="lyric">
      <p v-for="(ly,index) in lyric" :key="index">
        {{ly.lyric}} 
      </p>
    </div>
    
  </div>
</template>
<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
import {getLyric} from '../../api/index.js'
export default {
  computed:{
    ...mapGetters([
      'currentMusic','lyric','expand','playing'
    ])
  },
  mounted() {
    
  },
  filters:{
    formatAr(value){
      let temp=value.map(function(value){
        return value.name
      });
      
      return temp.join('/')
    }
  }
}
</script>
<style lang="stylus" scoped>
#words{
  z-index 1
  position absolute
  top 0px
  bottom 0px
  left 30vw
  right 30vw
  background rgba(53,92,125,0.6);
  background -webkit-linear-gradient(135deg, rgba(192,108,132,0.6), rgba(108,91,123,0.6),rgba(53,92,125,0.6),transparent);
  background linear-gradient(0deg, rgba(192,108,132,0.6), rgba(108,91,123,0.6),rgba(53,92,125,0.6),transparent); 
  font-family youyuan
  font-size 18px 
  color #f5f5f5
  text-align center
  letter-spacing 1px
  
  #info{
    position relative
    height 30%
    #pic{
      position absolute
      top 5%
      left 35%
      width 30%
      height 55%
      img{
        width 160px
        height 160px
      }
    }
    #intro{
      
      height 30%
      position absolute
      top 65%
      left 40%
      width auto
      font-weight 700
      font-family sans-serif
      p{
        text-align left 
        height 33.33%
        line-height 30px
      } 
    }
  }
  #lyric{
    box-shadow 0 0 50px 0 white inset
    height 70%
    p{
      height 40px
      line-height 40px
    }
  }
  
}
</style>
