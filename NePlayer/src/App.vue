<template>
  <div id="app" onselectstart="return false" ondragstart="return false;">
    <router-view />
    <audio ref="NebulasPlayer" @ended="ended"></audio>
  </div>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  name: 'App',
  created(){
    this.$nextTick(() => {
        this.setAudio(this.$refs.NebulasPlayer)
    });
  },
  computed:{
    playTime:()=>{
      console.log(this.audio.currentTime)
      return this.audio.currentTime
    },
    ...mapGetters([
      'audio',
      'currentIndex',
      'currentList',
      'currentMusic'
    ])
  },
  methods:{
    ended(){
      this.setCurrentIndex(this.currentIndex+1);
      this.setCurrentMusic(this.currentList[this.currentIndex+1]);
      this.audio.src="http://music.163.com/song/media/outer/url?id="+this.currentMusic.id+".mp3";
      this.audio.play();
    },
    ...mapActions(["setAudio","setCurrentIndex","setCurrentMusic"])
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
