<template>
  <div id="find">
    <findTab />
    <router-view />
  </div>  
</template>
<script>
import findTab from './findTab.vue'
export default {
  components:{
    findTab
  }
}
</script>
<style lang="stylus" scoped>
#find{
  width 100%
  height 100%
}
</style>
