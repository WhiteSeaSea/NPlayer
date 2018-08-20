<template>
  <div id="recommandList">
    <div id="list-header">
      <div class="title">
        <font-awesome-icon :icon="['fas','list-ul']" size="1x"></font-awesome-icon> 
        推荐歌单
      </div>
      <a  href="#" class="more">
        更多>
      </a>
    </div>
    <div id="list-body">
      <div class="list-item" v-for="(item,index) in recommandList" :key="index" @click="getDetail(item.id)">
        <img :src="item.picUrl" />
        <div :title="item.name">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
import {getRecommandList,playList} from '../../../../api/index.js'
import {mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return {
      recommandList:[]
    }
  },
  mounted() {
    getRecommandList(this.uid).then((res)=>{
      console.log(res)
      this.recommandList=res.data.recommend
    })
  },
  computed:{
    ...mapGetters([
      'uid'
    ])
  },
  methods:{
    getDetail(id){
      playList(id).then(res=>{
        this.setCurrentIndex(-1);
        this.setCurrentList(res.data.playlist.tracks)
      })
    },
    ...mapActions([
      "setCurrentIndex",
      "setCurrentList"
    ])
  }
}
</script>
<style lang="stylus" scoped>
#recommandList{
  position relative
  width 100%
  height auto
  #list-header{
    width 100%
    height 40px
    line-height 40px
    border-bottom 1px solid white
    position relative
  }
  .title{
    display inline-block
    color white
  }
  .more{
    text-align right 
    display inline-block
    position  absolute
    right 0
    text-decoration none 
    color #ccc
  }
  #list-body{
    position relative
    width 100%
    height auto
    .list-item{
      position relative
      //float left
      display inline-block
      width 25%
      height 180px
      padding 10px
      overflow hidden
      cursor pointer
      &:hover{
        box-shadow 0 0 10px 0 white inset
      }
      img{
        width 100%
        height 87%
      }
      div{
        width 100%
        height 13%
        overflow hidden
        font-size 17px
        text-overflow: ellipsis;
        white-space:nowrap;
      } 
    }
  }
}
</style>
