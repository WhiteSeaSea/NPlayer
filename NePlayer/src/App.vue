<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  
  background url('../static/images/bg.jpg')
  position absolute
  top 0px
  left 0px
  right 0px
  bottom 0px
  background-size 100% 100%

  font-family SoukouMincho
}
</style>
