<!--
 * @Author: your name
 * @Date: 2019-11-09 11:40:55
 * @LastEditTime: 2019-11-15 20:27:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\components\ChapterHead.vue
 -->
<template>
   <div class="box">
         <div class="left">
            <img :src="info.pic" alt=""/>
            <div>
               <h5>{{info.name}}</h5>
               <p class="updateTime">每天11点更新2期</p>
               <p>火星有声剧场</p>
            </div>
         </div>
         <div class="right" v-on:click="addFavorite" v-bind:style="bc">
            <i class="el-icon-star-off"></i>
            <span>收藏</span>
      </div>
   </div>
</template>

<script>
import axios from 'axios';
export default {
   props:['aid'],
   name: 'chaperInfo',
   data () {
      return {
         bc:"backgroundColor:gray",
         info:"",
         // aid:""
      }
   },
   created(){
      axios.get('/menu/selectC4ByC3?aid='+this.aid)
         .then(res=>{ 
            this.info=res.data[0]
            // this.aid=this.info.aid
         })
         .catch(err=>{
               console.log("错误"+err);
         }); 
   },
   methods:{
      addFavorite:function(){
         if(this.bc=="backgroundColor:gray"){
            console.log(this.aid)
            axios.get('/collect/add?aid='+this.aid)
            .then(res=>{ 
               console.log(res.data);
               if(res.data=="1"){
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
            console.log(this.aid)
            axios.get('/collect/del?aid='+this.aid+"&sid="+"1")
            .then(res=>{ 
               console.log(res.data);
               if(res.data=="1"){
                 this.bc="backgroundColor:gray"
               //   this.bc=="backgroundColor:gray"?this.bc="backgroundColor:#fe7272":this.bc="backgroundColor:gray"
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
   }
}
   </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
   width: 100%;
   height: 1.1rem;
   background:#645651;
   display: flex;
   justify-content: space-between;
}
.left{
   margin-left: 14px;   
   display: flex;
}
.left img{
   width: 0.9rem;
   height: 0.9rem;
   margin-top: 6px; 
   display: block;
   margin-right: 12px;
}
/* .center{
   color: #ffffff; 
} */
.left h5{
   font-size: 0.16rem;
   line-height: 0.16rem;
   margin-top: 13px;
   margin-bottom: 10px;
}
.left p{
   font-size: 12px;
   line-height:12px;
}
.left .updateTime{
   line-height:12px;
   margin-bottom: 0.32rem
}
.right {
   font-size:13px;
   color: #ffffff;
   margin-right:0.1rem;
   margin-top: 0.76rem;
   width: 0.58rem;
   height: 0.25rem;
   background: gray;
   text-align: center;
   line-height: 0.25rem;
   border-radius: 12px;
}
</style>
