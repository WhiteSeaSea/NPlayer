<template>
  <div id="login">
    <div id="bg">
      <div id="Name" class="animated fadeIn">
        NePlayer
        <span>-- for NeteaseCloud</span>
      </div>
      <video class="animated zoomIn" id="bg-video"  autoplay="autoplay" loop="loop">
        <source  src="../../static/images/sona.mp4" type="video/mp4">
      </video>
    </div>
    <Box></Box>
  </div>  
</template>
<script>
import Box from './loginbox'
export default {
  components:{
    Box
  },
  mounted:function(){
    let box=document.getElementById("bg-video");
    box.play();
  }
}
</script>
<style lang="stylus" scoped>
#login,#bg{
  position absolute
  top 0
  left 0
  bottom 0
  right 0
}
#login{
  background: #141E30;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#bg{
  z-index 1
  transform: perspective(100vw) rotateY(0deg);
  transform-style:preserve-3d;
  .animated{
      animation-duration: 2.5s;    //动画持续时间
  }
  #Name{
    font-family GrutchShaded
    font-size 65px
    color #CFDEF3
    span{
      font-size 26px
    }
    transform rotateY(40deg)  translateX(23vw)
    position absolute
    top 5vh
    left 10vw
    &.fadeIn{
      animation-delay 1s
      animation-duration: 3.5s      
    }
  }
}
#bg-video{
  transform rotateY(40deg)  translateX(2vw)
  position absolute
  top 20vh
  left 10vw
  box-shadow   0 0 25px #141E30
  object-fit fill
  width 60vw
  height 60vh
  
}

</style>
