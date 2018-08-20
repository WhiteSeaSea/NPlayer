<template>
  <div id="tabbar">
    
    <ul>
      <li id="user" title="登录">
        <!-- <font-awesome-icon :icon="['fas','user-circle']" size="4x" style="color:white;"></font-awesome-icon>          -->
        <img :src="iconUrl" alt="" srcset="">
      </li>
      <li><a href="#/player/my" :class="{active:topTab==1}" @click="setTopTab(1)">我的</a></li>
      <li><a href="#/player/find/recommand" :class="{active:topTab==2}" @click="setTopTab(2)">发现</a></li>
      <li><a href="#/player/search" :class="{active:topTab==3}" @click="setTopTab(3)">搜索</a></li>
    </ul>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import {userInfo} from '../../api/index.js'
export default {
  data(){
    return {
      iconUrl:''
    }
  },
  mounted:function(){
    userInfo(this.uid).then((res)=>{
      if(res.data.code===200){
        this.iconUrl=res.data.profile.avatarUrl;
        console.log(this.iconUrl)
      }
    })

  },
  computed:{
    ...mapGetters([
      'uid','topTab'
    ])
  },
  methods:{
    ...mapActions(["setTopTab"])
  }
}
</script>
<style lang="stylus" scoped>
#tabbar{
  position absolute
  top 50px
  left 100px
  #user{
    cursor pointer
    width 48px
    height 48px
    margin-right 30px
    img {
      width 48px
      height 48px
    }
  }
  ul{
    li{
      list-style none
      display inline-block
      margin 0 10px
      a{
        font-family SoukouMincho
        font-size 25px
        font-weight 700
        letter-spacing 2px
        text-decoration none
        color #f5f5f5
        opacity 0.8
        padding 10px 0
        transition all 1s
        border-bottom none
        &.active{
          opacity 1
          border-bottom 3px solid white
        }

      }
    }
  }
}
</style>
