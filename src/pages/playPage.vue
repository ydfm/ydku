<!--
 * @Author: your name
 * @Date: 2019-11-11 09:50:50
 * @LastEditTime: 2019-11-12 09:26:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\pages\playPage.vue
 -->
<template>
    <div class="box">
        <ChapterHead class="head"></ChapterHead> 
        <playDetail class="playDetail"></playDetail> 
        <playControl></playControl> 
        <comment class="comment"></comment> 
        <commentfooter class="cfooter"></commentfooter> 
    </div>      
</template>
<script>
import ChapterHead from "../components/ChapterHead"
import playDetail from "../components/playDetail"
import playControl from "../components/playControl"
import comment from "../components/comment"
import commentfooter from "../components/commentfooter"
export default {
    data() {
        return {
        }
    },
    components:{
        ChapterHead,playDetail,playControl,comment,commentfooter
    }
}
</script>
<style scoped>
.head{
    background: #f5f5f9!important;
    color: #666666!important;
    position: fixed;
    left: 0;
    top: 0;    
} 
.playDetail{
    margin-top: 0.36rem;
}
.cfooter{
    position: fixed;
    left: 0;
    bottom: 0;
} 

.comment{
  margin-bottom: 0.46rem;  
}
</style>
