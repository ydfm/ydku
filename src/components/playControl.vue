<!--
 * @Author: your name
 * @Date: 2019-11-11 14:16:46
 * @LastEditTime: 2019-11-11 17:39:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\components\playControl.vue
 -->
<template>
<div class="box">
    <div class="playbox">
        <audio controls>
            <source src="../assets/aiai.mp3"  type="audio/mp3">
        </audio>
    </div>
    <div class="addFavorite">
        <div class="left"><img src="../assets/img/img.jpg" alt=""></div>
        <p class="center">少帅你老婆又跑了</p>
        <div class="right" v-on:click="addFavorite" v-bind:style="bc">
            <i class="el-icon-star-off"></i>
            <span>收藏</span>
        </div>
    </div>
    <!-- <div id="playbox" v-on:click="play" v-bind:class="playbc">
        <audio id="mp3Btn">
            <source src="../assets/aiai.mp3"  type="audio/mp3">
        </audio>
    </div> -->
</div>        
</template>

<script>
export default {
    data() {
        return {  
            bc:"backgroundColor:gray"         
            // playbc:"playbc2"
        }
    },
    methods:{
        addFavorite:function(){
            this.bc=this.bc=="backgroundColor:gray"?this.bc="backgroundColor:#fe7272":this.bc="backgroundColor:gray"
        }
        // play:function(){
        //     var playbox=document.getElementById('playbox');
        //     var audio = document.getElementById('mp3Btn');
        //     // audio.volume = .3;
        //     event.stopPropagation();//防止冒泡
        //     if(audio.paused){ //如果当前是暂停状态
        //         this.playbc="playbc"
        //         audio.play(); //播放
        //         return;
        //     }else{//当前是播放状态
        //         this.playbc="playbc2"
        //         audio.pause(); //暂停
        //     } 
        // }
    }
}
</script>
<style scoped>
    .box{
        width: 100%;
    }
    .playbox{
        display: flex;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        margin-bottom: 0.21rem;
        /* background: #ff464f; */
        /* color:#ff464f; */
    }
    .addFavorite{
        display: flex;
        align-items: center;
        margin-bottom: 0.4rem;
    }
    img{
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 3px;
        margin-left: 14px;
        margin-right: 11px;
    }
    p{
        font-size: 12px;
        line-height:  0.4rem;
    }
    .right {
        font-size:13px;
        color: #ffffff;
        margin-left:1.23rem;
        width: 0.58rem;
        height: 0.25rem;
        background: gray;
        text-align: center;
        line-height: 0.25rem;
        border-radius: 12px;
        }
    /* // .playbc{    
    //     background:url(../assets/img/paused.jpg) no-repeat left top;
    //     background-size: 0.49rem; 
    // }
    // .playbc2{
    //     background:url(../assets/img/play.jpg) no-repeat left top;
    //     background-size: 0.49rem;
    // } */

</style>
