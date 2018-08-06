<template>
  <div id="app">
    <router-view />
    <audio ref="NebulasPlayer"></audio>
  </div>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  name: 'App',
  created(){
    this.$nextTick(() => {
               
              this.setAudio(this.$refs.NebulasPlayer)
          });
  },
  computed:{
    ...mapGetters([
      'audio'
    ])
  },
  methods:{
    ...mapActions(["setAudio"])
  }
}
</script>

<style lang="stylus" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  
  
  position absolute
  top 0px
  left 0px
  right 0px
  bottom 0px
  
  font-family SoukouMincho
}
</style>
