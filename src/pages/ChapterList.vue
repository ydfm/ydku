<!--
 * @Author: your name
 * @Date: 2019-11-09 10:53:30
 * @LastEditTime: 2019-11-15 18:47:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day07d:\workspace\ydfm\src\pages\Chapter list.vue
 -->
<template>
<div class="box">
   <div class="top">
      <ChapterHead></ChapterHead>  
      <ChapterInfo :aid="aid"></ChapterInfo>
      <ChapterIntroduce :aid="aid"></ChapterIntroduce>
   </div>
   <CLDetail class="CLDetail" :aid="aid"></CLDetail>  
</div>
</template>
<script>
import ChapterHead from "../components/ChapterHead"
import ChapterInfo from "../components/ChapterInfo"
import ChapterIntroduce from "../components/ChapterIntroduce"
import CLDetail from "../components/CLDetail"
export default {
   name:"ChapterList",
   props:['aid'],
   data() {
      return {
      }
   },
   created(){
      // console.log(this.$store);
      // console.log(this.aid)
      this.$store.commit('getBookaid',this.aid)
   },
   // methods:{
   //    changeAid(){
   //       this.$store.dispatch("getInfo")
   //       console.log(this.aid)
   //       this.$store.commit('getBookaid',this.aid)
   //    }
   // },
   components:{
      ChapterHead,ChapterInfo,ChapterIntroduce,CLDetail
   }
}
</script>
<style scoped>
.box{
   width: 100%;
   background:#645651;
   position: relative
}
.CLDetail{
   position: absolute;
   left: 0;
   top: 2.06rem;
   z-index: -3;
}
.top{
   position: relative;
}
</style>
