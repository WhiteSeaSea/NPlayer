<template>
  <div id="recommand">
    <two-tab
      @getRecommandSongs="_getRecommandSongs"
      @setActive="_setActive"
    />
    <recommand-list />
    <recommand-new @play="play" />
  </div>
</template>
<script>
import twoTab from './twoTab'
import recommandList from './recommandList'
import recommandNew from './recommandNew'
import {mapGetters,mapActions,mapMutations} from 'vuex'
import {songDetail,songUrl,getLyric,getRecommandSongs} from '../../../../api/index.js'
export default {
  components:{
    twoTab,
    recommandList,
    recommandNew
  },
  methods:{
    play(msg){
      if(msg==this.currentMusic){
        return
      }else{
        this.setCurrentMusic(msg);
        this.setCurrentIndex(-1);
        getLyric(msg.id)
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
        this.audio.src="http://music.163.com/song/media/outer/url?id=1436709403.mp3";
        this.audio.play();
        this.setPlaying(true);
      }
    },
    _getRecommandSongs(){
      this.setCurrentIndex(-1);
      getRecommandSongs().then(res=>{
        this.setCurrentList(res.data.recommend)
      })
    },
    _setActive(){
      this.setFindTab(5)
    },
    ...mapActions([
      "setCurrentList",
      "setCurrentMusic",
      "setLyric",
      "setPlaying",
      "setCurrentIndex",
      "setFindTab"
      ])
  },
  computed:{
    ...mapGetters([
      'currentList','currentMusic','audio','lyric','currentIndex'
    ])


  },
}
</script>
<style lang="stylus" scoped>
#recommand{
  width 100%
  height calc(100% - 45px)
  margin-top 20px
  padding 10px
  font-family youyuan
  font-weight 700
  letter-spacing 1px
}
</style>
