<template>
  <div id="player">
    <Browser></Browser>
    <List></List>
    <Btnlist></Btnlist>
  </div>
</template>
<script>
import Btnlist from "./components/btnlist/btnlist"
import Browser from "./songbrowser/browser"
import List from "./songlist/list.vue"
export default {
  components:{
    Btnlist,
    List,
    Browser
  }
}
</script>
<style lang="stylus" scoped>
  #player{
    position absolute 
    top 0
    bottom 0
    left 0
    right 0
  }
</style>
