<template>
<div id="login-box">
      <div id="discribe">

      </div>
      <div id="login-form">
        <div id="header">
          <div id="pic">
            <font-awesome-icon :icon="['fas','user-circle']" size="4x" style="color:#cfdef3;"></font-awesome-icon>
          </div>
                             
        </div>
        <div id="user" class="input-form">
            <input type="text" name="" >
            <font-awesome-icon :icon="['fas','user']" size="2x" style="color:#cfdef3;position:absolute;right:15px;top:14px;"></font-awesome-icon>            
        </div>
        <div id="password" class="input-form">
            <input type="password" name="" >
            <font-awesome-icon :icon="['fas','lock']" size="2x" style="color:#cfdef3;position:absolute;right:15px;top:14px;"></font-awesome-icon>
        </div>
        <a id="confirm" href="#/player/my">
          LOGIN
        </a>
      </div>
    </div>  
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
#login-box{
  position absolute
  top 0
  bottom 0
  right 0
  width 40vw
  z-index 2

  #login-form{
    position absolute
    top 35vh
    bottom 25vh
    right 0
    width 40vw
    padding 0 25%
    .input-form{
      border 2px solid #cfdef3
      border-radius 40px
      margin-bottom 20px
      padding 0 45px 
      position relative
      input{
        height 100%
        border none
        background transparent
        outline none
        padding 0
        font-size 30px
        color #cfdef3
        width 100%
      }
    }
    &>div{
       width 100%
       height 64px
       margin-bottom 40px
    }
    #header{
       position relative
       height auto
       width auto
       margin 0 auto
       margin-bottom 40px
      
       text-align center
    }
    #confirm{
      display block
      width 100%
      height 64px
      margin-bottom 40px
      border-radius 40px
      background-color #cfdef3
      line-height 64px
      text-align center
      letter-spacing 10px
      font-size 18px
      font-weight 100
      text-decoration none
      color #141E30
      transform scaleX(1) scaleY(1)
      transition all 1s
      box-shadow none
      &:hover{
        transform scaleX(1.1) scaleY(1.1)
        box-shadow 0 0 20px 0 #cfdef3
      }
    }
  }
}

</style>
