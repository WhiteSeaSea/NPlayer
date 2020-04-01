<template>
  <div id="progress">
    <div id="progress-line">

    </div>
    <div id="progress-bot">
      
    </div>
  </div>  
</template>
<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  computed:{
    ...mapGetters([
      'audio','currentMusic'
    ])
  }
}
</script>
<style lang="stylus" scoped>
#progress{
  position absolute
  top 0
  left 0
  right 0
  height 5px
  background-color #555
  z-index 6
  &:hover{
    height 10px
    #progress-bot{
      display inline-block
      
    }
  } 
  #progress-line{
    float left
    
    height 100%
    background: #2980B9;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }
  #progress-bot{
    float left
    display none
    height 11px
    width 11px
    border-radius 50%
    background-color white
    cursor pointer
  }
}
</style>
