<template>
  <div id="browser">
    <Tabbar></Tabbar>
    <Container></Container>
  </div>  
</template>
<script>
import Tabbar from './tabbar.vue';
import Container from './container.vue';
export default {
  components:{
    Tabbar,
    Container
  }
}
</script>
<style lang="stylus" scoped>
  #browser{
    position absolute 
    top 0
    left 0
    bottom 0
    width 50vw
    border-top-right-radius 50%
    border-bottom-right-radius 50%
    background: rgba(229,93,135,0.6);  /* fallback for old browsers */
    background: -webkit-linear-gradient(135deg, rgba(229,93,135,0.6), rgba(95,195,228,0.6),transparent);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(135deg, rgba(229,93,135,0.6), rgba(95,195,228,0.6),transparent); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    z-index 1
  }
</style>
