<template>
  <div id="visual">
    
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import axios from 'axios'
export default {
  mounted() {
    const audioCtx=new (window.AudioContext||window.webkitAudioContext)();
    const analyser = audioCtx.createAnalyser();
       
    const source=audioCtx.createMediaElementSource(this.audio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
    
    analyser.fftSize = 2048;
    let bufferLength = analyser.frequencyBinCount;
    let dataArray = new Uint8Array(bufferLength);
    setInterval(()=>{
        analyser.getByteFrequencyData(dataArray);
        
    },1000);
    
    
   
  },
  computed:{
    ...mapGetters([
      "audio"
    ])
  }
}
</script>
<style lang="stylus" scoped>

</style>
