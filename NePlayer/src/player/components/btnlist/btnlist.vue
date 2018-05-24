<template>
    <div id="btnlist">
      <div class="play-mode">
         
      </div>
      <div class="play-control">
         <font-awesome-icon :icon="['fas','fa-play-circle']"></font-awesome-icon>
      </div>
      <div class="play-volume">
          
      </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
    #btnlist{
        position absolute
        bottom 150px
        height 100px
        width 400px
    }
    .btn-icon{
        display block
        cursor pointer   
    }
    .music-prev{
        width 19px
        height 20px   
    }
</style>
