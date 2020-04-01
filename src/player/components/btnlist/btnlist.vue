<template>
    <div id="btnlist">
      <div class="expand" >
          <span class="play-icon">
            <font-awesome-icon @click="play" v-if="!expand" :icon="['fas','expand']" size="2x" style="margin:8px 0;"></font-awesome-icon>               
            <font-awesome-icon @click="play" v-else :icon="['fas','compress']" size="2x" style="margin:8px 0;"></font-awesome-icon>               
            
          </span>
      </div>
      <div class="play-mode" >
          <span class="play-icon" title="切换模式">
            <font-awesome-icon :icon="['fas','sync-alt']" size="2x" style="margin:8px 0;"></font-awesome-icon> 
          </span>
      </div>
      <div class="play-control">
          <span class="play-icon" style="top:-6px" title="上一曲" @click="toggleLastSong()">
            <font-awesome-icon :icon="['fas','step-backward']"  size="2x" ></font-awesome-icon>
          </span>
          <span class="play-icon" title="播放/暂停" @click="togglePlay">
            <font-awesome-icon :icon="icon" size="3x"></font-awesome-icon>
          </span>
          <span class="play-icon" style="top:-6px" title="下一曲" @click="toggleNextSong()">
            <font-awesome-icon :icon="['fas','step-forward']" size="2x" ></font-awesome-icon> 
          </span>
      </div>
      <div class="play-volume">
          <span class="play-icon" title="音量">
            <font-awesome-icon :icon="['fas','volume-up']" size="2x" style="margin:8px 0;"></font-awesome-icon> 
          </span>
          
      </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import {getLyric} from '../../../api/index.js'
export default {
  data() {
    return {
      canExpand: true
    };
  },
  methods: {
    ...mapMutations({
      setExpand: "SET_EXPAND"
    }),
    ...mapActions([
      "setLyric",
      "setAudio",
      "setCurrentIndex",
      "setCurrentMusic",
      "setCurrentLyricIndex",
      "setPlaying"
    ]),
    play() {
      if (this.canExpand) {
        this.canExpand = false;
        setTimeout(() => {
          this.setExpand(!this.expand);
          this.canExpand = true;
        }, 0);
      }
    },
    togglePlay() {
      this.setPlaying(!this.playing);
      if (this.playing == true) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    },
    toggleLastSong(type) {
      this.setCurrentLyricIndex(0);

      //上一首歌
      if (this.currentIndex - 1 < 0) {
        this.setCurrentIndex(this.currentList.length - 1);
      } else {
        this.setCurrentIndex(this.currentIndex - 1);
      }

      this.setCurrentMusic(this.currentList[this.currentIndex]);
      getLyric(this.currentMusic.id).then(res => {
        let lyricArr = res.data.lrc.lyric.split("\n");
        let lyricObj = [];
        let timeRegExpArr = [];
        let lyricStr = [];
        for (let i = 0; i < lyricArr.length; i++) {
          let lyric = decodeURIComponent(lyricArr[i]);

          if (lyric == "") {
            continue;
          } else {
            let timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
            if (lyric.match(timeReg) == undefined) {
              continue;
            } else {
              timeRegExpArr.push(lyric.match(timeReg));
              lyricStr.push(lyric.replace(lyric.match(timeReg).join(""), ""));
            }
          }
        }
        for (let i = 0; i < lyricStr.length; i++) {
          let t, min, sec, time;
          if (timeRegExpArr[i].length <= 1) {
            t = timeRegExpArr[i].join("");
            min = Number(String(t.match(/\[\d*/i)).slice(1));
            sec = Number(String(t.match(/\:\d*((\.|\:)\d*)*/i)[0]).slice(1));

            time = min * 60 + sec;
            lyricObj.push({ time: time, lyric: lyricStr[i] });
          } else {
            for (let j = 0; j < timeRegExpArr[i].length; j++) {
              t = timeRegExpArr[i][j];
              min = Number(String(t.match(/\[\d*/i)).slice(1));
              sec = Number(String(t.match(/\:\d*((\.|\:)\d*)*/i)[0]).slice(1));

              time = min * 60 + sec;
              lyricObj.push({ time: time, lyric: lyricStr[i] });
            }
          }
        }
        lyricObj.sort((a, b) => {
          return a.time - b.time;
        });
        this.setLyric(
          lyricObj.filter(v => {
            return v.lyric != "";
          })
        );
      });
      this.audio.src =
        "http://music.163.com/song/media/outer/url?id=" +
        this.currentMusic.id +
        ".mp3";
      this.audio.play();
    },
    toggleNextSong() {
      this.setCurrentLyricIndex(0);
      if (this.currentIndex + 1 > this.currentList.length - 1) {
        this.setCurrentIndex(0);
      } else {
        this.setCurrentIndex(this.currentIndex + 1);
      }

      this.setCurrentMusic(this.currentList[this.currentIndex]);
      getLyric(this.currentMusic.id).then(res => {
        let lyricArr = res.data.lrc.lyric.split("\n");
        let lyricObj = [];
        let timeRegExpArr = [];
        let lyricStr = [];
        for (let i = 0; i < lyricArr.length; i++) {
          let lyric = decodeURIComponent(lyricArr[i]);

          if (lyric == "") {
            continue;
          } else {
            let timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
            if (lyric.match(timeReg) == undefined) {
              continue;
            } else {
              timeRegExpArr.push(lyric.match(timeReg));
              lyricStr.push(lyric.replace(lyric.match(timeReg).join(""), ""));
            }
          }
        }
        for (let i = 0; i < lyricStr.length; i++) {
          let t, min, sec, time;
          if (timeRegExpArr[i].length <= 1) {
            t = timeRegExpArr[i].join("");
            min = Number(String(t.match(/\[\d*/i)).slice(1));
            sec = Number(String(t.match(/\:\d*((\.|\:)\d*)*/i)[0]).slice(1));

            time = min * 60 + sec;
            lyricObj.push({ time: time, lyric: lyricStr[i] });
          } else {
            for (let j = 0; j < timeRegExpArr[i].length; j++) {
              t = timeRegExpArr[i][j];
              min = Number(String(t.match(/\[\d*/i)).slice(1));
              sec = Number(String(t.match(/\:\d*((\.|\:)\d*)*/i)[0]).slice(1));

              time = min * 60 + sec;
              lyricObj.push({ time: time, lyric: lyricStr[i] });
            }
          }
        }
        lyricObj.sort((a, b) => {
          return a.time - b.time;
        });
        this.setLyric(
          lyricObj.filter(v => {
            return v.lyric != "";
          })
        );
      });
      this.audio.src =
        "http://music.163.com/song/media/outer/url?id=" +
        this.currentMusic.id +
        ".mp3";
      this.audio.play();
    }
  },
  computed: {
    ...mapGetters(["expand", "playing", "audio","currentMusic","currentList","currentIndex"]),
    icon: {
      get: function() {
        return this.playing == false
          ? ["fas", "play-circle"]
          : ["fas", "stop-circle"];
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
#btnlist {
    position: absolute;
    bottom: 20px;
    height: auto;
    width: auto;
    padding: 10px 100px;
    left: calc(50vw - 275px);
    border-radius: 40px;
    background: transparent;
    transition: all 1s ease;
    opacity: 0.5;

    &:hover {
        opacity: 1;
        background: rgba(64, 58, 62, 0.4); /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, rgba(253, 116, 108, 0.4), rgba(64, 58, 62, 0.4)); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, rgba(253, 116, 108, 0.4), rgba(64, 58, 62, 0.4)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    z-index: 3;
}

#btnlist>div {
    float: left;
    vertical-align: middle;
    margin: 0 15px;
}

.btn-icon {
    display: block;
    cursor: pointer;
}

.music-prev {
    width: 19px;
    height: 20px;
}

.fas {
    cursor: pointer;
}

.play-icon {
    display: inline-block;
    position: relative;
    color: #f1f1f1;
    cursor: pointer;
    transform: scaleX(1) scaleY(1);
    transition: all 1s;

    &:hover {
        transform: scaleX(1.5) scaleY(1.5);
    }
}

.play-control .play-icon {
    margin: 0 8px;
}
</style>
