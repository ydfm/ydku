<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-11 10:30:12
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
    <div class="navbox">   
        <ul>
            <li>
              <img src="../assets/xiaoshuo.png" alt="">
              <span>小说</span> 
            </li>
            <li>
              <img src="../assets/zhibo.png" alt="">
              <span>直播</span> 
            </li>
            <li>
              <img src="../assets/guangbo.png" alt="">
              <span>广播</span> 
            </li>
            <li>
              <img src="../assets/biting.png" alt="">
              <span>必听榜单</span> 
            </li>
            <li>
              <img src="../assets/listen.png" alt="">
              <span>倾听西安</span> 
            </li>
        </ul>
    </div> 
</template>

<script>

export default {
  name: 'Nav',
  data () {
    return {
       
    }
  }
}
</script>
<style scoped>

.navbox{
    width:95%; 
    height: 1.41rem;
    margin: 0 auto;
    background: #ffffff;
  }
ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    color: #666666;
  }
li{ 
   font-size: .16rem;
   text-align: center;
}
img{
    width: .54rem;
    height: .54rem;
    background: orange;
    border-radius: 50%;
}
span{
    display: block;
   margin: .11rem 0;
}
</style>
