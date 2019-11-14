<!--
 * @Author: your name
 * @Date: 2019-11-11 14:16:46
 * @LastEditTime: 2019-11-14 16:07:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\components\playControl.vue
 -->
<template>
<div class="box">
    <div class="playbox">
        <audio controls :src="play.url">
            <!-- <source src="../assets/aiai.mp3"  type="audio/mp3"> -->
        </audio>
    </div>
    <div class="addFavorite">
        <div class="left">
            <img :src="infos.pic" alt="">
            <p class="center">{{infos.name}}</p>
        </div>
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
import axios from 'axios';
export default {
    props:['id'],
    data() {
        return {  
            bc:"backgroundColor:gray",
            infos:{},           
            menu:[],
            play:{},
            aid:""
            // playbc:"playbc2"
        }
    },
    created(){
        axios.get('/list')
        .then(res=>{ 
            this.infos=res.data[0]
            this.aid=this.info.aid
            this.menu=res.data[0].menu4
               this.$nextTick(function(){
                for(let i=0;i<this.menu.length;i++){
                    if(this.menu[i].bid==this.id){
                        this.play=this.menu[i];
                        // console.log("menu[i]"+this.menu[i]);
                        console.log(this.play.url)
                    }
                }
                })
            // console.log(this.id);
            // this.infos=res.data[0]
            // this.menu=res.data[0].menu4
            // console.log(this.menu)
            // for(let i=0;i<this.menu.length;i++){
            //     if(this.menu[i].bid==this.id){
            //         this.play=this.menu[i];
            //         console.log("menu[i]"+this.menu[i]);
            //         console.log(this.play.url)
            //         // return this.play
            //     }
            // }
         })
         .catch(err=>{
               console.log("错误"+err);
         }); 
    },
    methods:{
        addFavorite:function(){
         if(this.bc=="backgroundColor:gray"){
            // 传入aid
            axios.get('api/favorite')
            .then(res=>{ 
               console.log(res.data);
               if(res.data[0].resu=="1"){
                  this.bc=this.bc="backgroundColor:#fe7272"
                  this.value=true;
                  console.log(this.bc)
               }else{
                  alert("添加收藏失败")
               }        
            })
            .catch(err=>{
                  console.log("错误"+err);
            }); 
         }else{
             // 传入aid
            axios.get('api/del')
            .then(res=>{ 
               console.log(res.data);
               if(res.data[0].resu=="1"){
                  this.bc="backgroundColor:gray"
                  this.value=true;
                  console.log(this.bc)
               }else{
                  alert("取消收藏失败")
               }        
            })
            .catch(err=>{
                  console.log("错误"+err);
            }); 
         }     
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
    },
    mounted(){
        console.log("hahaha"+this.play.url);
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
        width: 96%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.4rem;
    }
    .left{
        display: flex;
    }
    img{
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 3px;
        margin-left: 14px;
        margin-right: 11px;
    }
    p{
        /* width: 50%; */
        font-size: 12px;
        line-height:  0.4rem;
    }
    .right {
        font-size:13px;
        color: #ffffff;
        /* margin-right:0.3rem; */
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
