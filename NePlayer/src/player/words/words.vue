<template>
  <div id="words">
    {{this.currentMusic.id}}
  </div>
</template>
<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
import {getLyric} from '../../api/index.js'
export default {
  computed:{
    ...mapGetters([
      'currentMusic'
    ])
  },
  mounted() {
    getLyric(this.currentMusic.id)
      .then((res)=>{
        
      })
  },
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
  
}
</style>
