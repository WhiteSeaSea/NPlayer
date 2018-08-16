<template>
  <div id="recommand">
    <two-tab />
  </div>  
</template>
<script>
import twoTab from './twoTab'
export default {
  components:{
    twoTab
  }
}
</script>
<style lang="stylus" scoped>
#recommand{
  width 100%
  height calc(100% - 45px)
  margin-top 20px
  padding 10px
}
</style>
