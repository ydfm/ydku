<!--
 * @Author: your name
 * @Date: 2019-11-11 09:50:50
 * @LastEditTime: 2019-11-15 20:43:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\pages\playPage.vue
 -->
<template>
    <div class="box">
        <ChapterHead class="head"></ChapterHead> 
        <playDetail :id="id" class="playDetail"></playDetail> 
        <playControl :id="id"></playControl> 
        <comment :id="id" class="comment"></comment> 
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
    props:['id'],
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
  margin-bottom: 0.5rem;  
}
</style>
