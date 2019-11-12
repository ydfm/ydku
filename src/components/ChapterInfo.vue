<!--
 * @Author: your name
 * @Date: 2019-11-09 11:40:55
 * @LastEditTime: 2019-11-11 09:48:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\components\ChapterHead.vue
 -->
<template>
  <div class="box">
    <div class="left">
       <img src="../assets/img/bookname.jpg" alt=""/>
    </div>
    <div class="center">
       <h5>麻衣神探</h5>
       <p class="updateTime">每天11点更新2期</p>
       <p>火星有声剧场</p>
    </div>
    <div class="right" v-on:click="addFavorite" v-bind:style="bc">
      <i class="el-icon-star-off"></i>
      <span>收藏</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chaperInfo',
  data () {
    return {
       bc:"backgroundColor:gray"
    }
  },
  methods:{
     addFavorite:function(){
        this.bc=this.bc=="backgroundColor:gray"?this.bc="backgroundColor:#fe7272":this.bc="backgroundColor:gray"
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
}
.left{
   margin-left: 14px;   
   margin-right: 12px;
}
.left img{
   width: 0.91rem;
   height: 0.9rem;
   margin-top: 6px; 
   display: block;
}
.center{
   color: #ffffff; 
}
.center h5{
   font-size: 0.16rem;
   line-height: 0.16rem;
   margin-top: 13px;
   margin-bottom: 10px;
}
.center p{
   font-size: 12px;
   line-height:12px;
}
.center .updateTime{
   line-height:12px;
   margin-bottom: 0.32rem
}
.right {
   font-size:13px;
   color: #ffffff;
   margin-left:0.9rem;
   margin-top: 0.76rem;
   width: 0.58rem;
   height: 0.25rem;
   background: gray;
   text-align: center;
   line-height: 0.25rem;
   border-radius: 12px;
}
</style>
