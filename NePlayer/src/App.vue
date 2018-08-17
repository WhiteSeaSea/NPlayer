<template>
  <div id="app" onselectstart="return false" ondragstart="return false;">
    <router-view />
    <audio ref="NebulasPlayer" @ended="ended" @timeupdate="onplaying"></audio>
  </div>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
import {getLyric} from './api/index.js'
export default {
  name: 'App',
  created(){
    this.$nextTick(() => {
        this.setAudio(this.$refs.NebulasPlayer)
    });
  },
  data(){
    return {
     
    }
  },
  computed:{
    
    ...mapGetters([
      'audio',
      'currentIndex',
      'currentList',
      'currentMusic',
      'lyric',
      'currentLyricIndex'
    ])
  },
  methods:{
    ended(){
      this.setCurrentLyricIndex(0);
      if(this.currentIndex+1>this.currentList.length-1){
        this.setCurrentIndex(0);
      }else{
        this.setCurrentIndex(this.currentIndex+1);
      }
      this.setCurrentMusic(this.currentList[this.currentIndex]);
      getLyric(this.currentMusic.id)
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
      this.audio.src="http://music.163.com/song/media/outer/url?id="+this.currentMusic.id+".mp3";
      this.audio.play();
    },
    onplaying(){
      this.lyric.map((v,index)=>{
       
        if(Math.floor(this.audio.currentTime)==Math.floor(v.time)){
          if(this.currentLyricIndex!=index){
            this.setCurrentLyricIndex(index);
            
           }
        }
        return v
      });
      let width=100*this.audio.currentTime/((this.currentMusic.hasOwnProperty('dt')?this.currentMusic.dt:this.currentMusic.duration
)/1000)+'%';
      document.getElementById("progress-line").style.width=width;
    },
    ...mapActions(["setLyric","setAudio","setCurrentIndex","setCurrentMusic","setCurrentLyricIndex"])
  }
  
}
</script>

<style lang="stylus" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  
  
  position absolute
  top 0px
  left 0px
  right 0px
  bottom 0px
  
  font-family SoukouMincho

   
      
}

</style>
