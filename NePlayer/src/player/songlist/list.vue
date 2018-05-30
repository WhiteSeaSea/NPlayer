<template>
  <div id="list">

  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
  #list{
    position absolute 
    top 0
    right 0
    bottom 0
    width 50vw
    z-index 1
    border-top-left-radius 50%
    border-bottom-left-radius 50%
    background: rgba(217,167,199,0.6);  /* fallback for old browsers */
    background: -webkit-linear-gradient(135deg, rgba(217,167,199,0.6), rgba(255,252,220,0.6),transparent);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(225deg, rgba(217,167,199,0.6), rgba(255,252,220,0.6),transparent); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
</style>
