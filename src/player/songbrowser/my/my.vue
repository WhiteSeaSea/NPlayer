<template>
  <div id="my">
    <div id="my-love" class="my-icon" :class="{active:myTab==1}" v-on:click="getMylove">
      <font-awesome-icon :icon="['fas','heart']" size="2x" style="color:white;margin-right:20px;border:1px solid white;padding:5px;border-radius:50%;"></font-awesome-icon>
      <span>收藏</span>
      <font-awesome-icon :icon="['fas','angle-right']" size="2x" style="color:white;position:absolute;right:25px;top:16px;"></font-awesome-icon>
    </div>
    <div id="recent" class="my-icon" :class="{active:myTab==2}" v-on:click="getRecent">
      <font-awesome-icon :icon="['fas','clock']" size="2x" style="color:white;margin-right:20px;border:1px solid white;padding:5px;border-radius:50%;"></font-awesome-icon>
      <span>最近播放</span>
      <font-awesome-icon :icon="['fas','angle-right']" size="2x" style="color:white;position:absolute;right:25px;top:16px;"></font-awesome-icon>
    </div>
    <div id="my-list" class="my-icon" :class="{active:myTab==3}" v-on:click="getUserList">
      <font-awesome-icon :icon="['fas','music']" size="2x" style="color:white;margin-right:20px;border:1px solid white;padding:5px;border-radius:50%;"></font-awesome-icon>
      <span>歌单</span>
      <font-awesome-icon :icon="['fas','angle-down']" size="2x" style="color:white;position:absolute;right:25px;top:16px;"></font-awesome-icon>
    </div>
  </div>
</template>
<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
import {userList,playList,recentList,songDetail} from '../../../api/index.js'
export default {
  computed:{
    ...mapGetters([
      'uid','myTab'
    ])
  },
  methods:{
    getMylove: function(){
      this.setMyTab(1);
      this.setCurrentIndex(-1);
      userList(this.uid).then((res)=>{

          playList(res.data.playlist["0"].id).then( (res)=>{
            let songs=new Array();
            let temp= Promise.all(res.data.privileges.map(async function(value,index){
              let song=[];
              await songDetail(value.id)
                .then( (res)=>{   song=res.data.songs["0"];});

                return song
            }))
            temp.then((res)=>{this.setCurrentList(res)})



          })
          .catch(function(error){
                console.log(error)
            })
      })
    },
    getRecent:function(){
      this.setMyTab(2);
      this.setCurrentIndex(-1);
      recentList(this.uid).then((res)=>{
        let songs=res.data.allData.map((v)=>{
          return v.song
        })
        this.setCurrentList(songs);
      })
    },
    getUserList:function(){
       userList(this.uid).then((res)=>{

      })
    },
    ...mapActions(["setCurrentList","setMyTab","setCurrentIndex"])
  }
}
</script>
<style lang="stylus" scoped>
#my{
  width 100%
  height 100%
  color white
  transition all 2s ease
  .active{
    background: rgba(217,167,199,0.6);  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, rgba(217,167,199,0.6), rgba(255,252,220,0.6),transparent);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, rgba(217,167,199,0.6), rgba(255,252,220,0.6),transparent); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      .fa-angle-right{
        opacity 1
      }
  }
  .my-icon{
    width 350px
    //height 50px
    line-height 50px
    margin-left 100px
    cursor pointer
    padding 10px 25px
    position relative
    border-radius 40px
    transition all 1s ease-in-out
    //background rgba(255,255,255,0);
    .fa-angle-right{
      transition all 1s ease-in-out
      opacity 0
    }

    &:hover{
      background: rgba(217,167,199,0.6);  /* fallback for old browsers */
      background: -webkit-linear-gradient(to left, rgba(217,167,199,0.6), rgba(255,252,220,0.6),transparent);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to left, rgba(217,167,199,0.6), rgba(255,252,220,0.6),transparent); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      .fa-angle-right{
        opacity 1
      }

    }
    span{
      font-size 25px
    }
  }
  #my-love{

  }
  #recent{

  }
  #my-list{
   .fa-angle-down{
      transition all 1s ease-in-out
      opacity 0
    }
    &:hover{
       .fa-angle-down{
        transition all 1s ease-in-out
        opacity 1
      }
    }
  }
}
</style>
