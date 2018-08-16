<template>
  <div id="twoTab">
    <div id="recom">
      1
    </div>
    <div id="rank">
      2
    </div>
  </div>  
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
#twoTab{
  position relative
  height 100px
  width 100%
  background-color white
  #recom{
    position absolute
    left 0
    top 0
    bottom 0
    width 50%
  }
  #rank{
    position absolute
    right 0
    top 0
    bottom 0
    width 50%
  }
}
</style>
