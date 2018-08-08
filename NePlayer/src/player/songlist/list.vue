<template>
  <div id="list">
    <div id="song-header">
        <div class="song-name">
          歌曲
        </div>
        <div class="singer">
          歌手
        </div>
        <div class="song-time">
          时长
        </div>
      </div>
    <div id="inner-list">
      
      <div class="song-item" v-for="(song,index) in currentList" :key="song.id"  @dblclick="getPlay(song,index,$event)">
        <div class="song-index">
          {{index+1}}.
        </div>
        <div class="song-name">
          {{song.name}}
        </div>
        <div class="singer" :title="song.ar | formatAr">
          {{song.ar | formatAr}}
        </div>
        <div class="song-time">
          {{song.dt | formatTime}}
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
import {songDetail,songUrl,getLyric} from '../../api/index.js'
export default {
  mounted() {
   

  },
  data(){
    return {
      songList:[]
    }
  },
  computed:{
    ...mapGetters([
      'currentList','currentMusic','audio','lyric','index'
    ])
    

  },
  methods:{
    getPlay(item,index,e){
      if(item.id==this.currentMusic.id){
        return 
      }else{
        this.setCurrentMusic(item);
        this.setCurrentIndex(index);
      }
      getLyric(item.id)
      .then((res)=>{
        
        let lyricArr=res.data.lrc.lyric.split("\n");
        let lyricObj=[];
        let timeRegExpArr =[];
        let lyricStr=[];
        for(let i=0;i<lyricArr.length;i++){
          let lyric = decodeURIComponent(lyricArr[i]);
          
          if(lyric==""){
            continue
          }else{
            let timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
            if(lyric.match(timeReg)==undefined){
              continue
            }else{
              timeRegExpArr.push(lyric.match(timeReg));
              lyricStr.push(lyric.replace(lyric.match(timeReg).join(""),''));
            }
            
          }
          
        }
        for(let i=0;i<lyricStr.length;i++){
          let t,min,sec,time;
          if(timeRegExpArr[i].length<=1){
            t=timeRegExpArr[i].join("");
            min=Number(String(t.match(/\[\d*/i)).slice(1));
            sec=Number(String(t.match(/\:\d*((\.|\:)\d*)*/i)[0]).slice(1));
            

            time=min*60+sec;
            lyricObj.push({time:time,lyric:lyricStr[i]}); 
          }else{
            for(let j=0;j<timeRegExpArr[i].length;j++){
              t=timeRegExpArr[i][j];
              min=Number(String(t.match(/\[\d*/i)).slice(1));
              sec=Number(String(t.match(/\:\d*((\.|\:)\d*)*/i)[0]).slice(1));
              
              time=min*60+sec;
              lyricObj.push({time:time,lyric:lyricStr[i]}); 
            }
          }
        }
        lyricObj.sort((a,b)=>{
          return a.time-b.time
        })
        this.setLyric(lyricObj.filter((v)=>{
           return v.lyric!=""
        }));
        
      });
      this.audio.src="http://music.163.com/song/media/outer/url?id="+item.id+".mp3";
      this.audio.play();
      this.setPlaying(true);
      
    },
    ...mapActions(["setCurrentMusic","setLyric","setPlaying","setCurrentIndex"])
  
  },
  filters:{
    formatTime(value){
      let temp=Math.ceil(value/1000);
      let min=Math.floor(temp/60).toString();
      let sec=Math.floor(temp%60).toString();
      if(Number(min)<10)
      {
        min='0'+min;
      }
      if(Number(sec)<10)
      {
        sec='0'+sec;
      }
      return min+":"+sec
      
    },
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
  #list{
    position absolute 
    top 0
    right 0
    bottom 0
    width 50vw
    z-index 2
    border-top-left-radius 50%
    border-bottom-left-radius 50%
    background: rgba(217,167,199,0.6);  /* fallback for old browsers */
    background: -webkit-linear-gradient(135deg, rgba(217,167,199,0.6), rgba(255,252,220,0.6),transparent);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(225deg, rgba(217,167,199,0.6), rgba(255,252,220,0.6),transparent); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding 5% 0 5% 10%
    font-size 20px
    font-family youyuan
    font-weight 300
    
    #inner-list{
      height calc(100% - 50px)
      width 100%
      overflow hidden
      &:hover{
        overflow auto
      }
      
    }
    #song-header{
      font-family SoukouMincho
      color #f5f5f5
      height 50px 
      width 100%
      //border-bottom 1px solid #f5f5f5
      position relative
      line-height  50px
      
      font-size: 25px;
      font-weight: 700;
      letter-spacing: 2px;
      //box-shadow 0px 0px 20px 0px #f5f5f5 inset

      .song-name{
      position absolute
      top 0
      bottom 0
      left 5%
      width 70%
      height 100%
      }
      .singer{
        position absolute
        top 0
        bottom 0
        left 70%
        width 15%
        height 100%
        }
      .song-time{
        position absolute
        top 0
        bottom 0
        left 85%
        width 15%
        height 100%
      }
    }
    
    .song-item{
      font-size 18px
      //color rgba(95,195,228,0.8)
      height 50px 
      width 100%
      //border-bottom 1px solid #f5f5f5
      line-height  50px
      position relative
      transition all 1s
      &:hover{
        box-shadow 0px 0px 50px 0px rgba(255,255,255,0.6) inset
        color white
        //background: rgba(95,195,228,0.8);  /* fallback for old browsers */
        //background: -webkit-linear-gradient(135deg, rgba(95,195,228,0.8), rgba(95,195,228,0.6),transparent);  /* Chrome 10-25, Safari 5.1-6 */
        //background: linear-gradient(135deg, rgba(95,195,228,0.8), rgba(95,195,228,0.6),transparent); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
      .song-index{
        position absolute
        top 0
        bottom 0
        left 0
        width 5%
        height 100%
      }
      .song-name{
        position absolute
        top 0
        bottom 0
        left 5%
        width 70%
        height 100%
        cursor pointer
      }
      .singer{
        position absolute
        top 0
        bottom 0
        left 70%
        width 15%
        height 100%
        overflow : hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
        cursor pointer
        
        
      }
      .song-time{
        position absolute
        top 0
        bottom 0
        left 85%
        width 15%
        height 100%
      }
    }
  }
 
</style>
