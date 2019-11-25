<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-11 10:04:32
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
  <div class="box">
    <div class="fixtop">     
      <NewsTop></NewsTop>
      <Member></Member>
    </div>
     <div class="center">
        <Banner></Banner>
        <!-- <Nav></Nav> -->
        <Newscontent></Newscontent>
     </div>
     <Myfooter class="bottom"></Myfooter>
  </div>
</template>

<script>
import NewsTop from '../components/NewsTop';
import Member from '../components/Member';
import Banner from '../components/Banner';
// import Nav from '../components/Nav';
import Newscontent from '../components/Newscontent';
// import Imgbox from '../components/Imgbox';
import Myfooter from '../components/Myfooter';

export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  components:{
      NewsTop,Member,Banner,Newscontent,Myfooter
      // ,Nav
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0
}
.box{
  display: flex;
  flex-direction: column;
  height: 100%;  
}
.fixtop{
  position: fixed;
  background: #ffffff;
  z-index: 5;
}
.center{
  flex: 1;
  overflow-y: auto;
  margin-top: 1.34rem;
  margin-bottom: .7rem;
}
.bottom{
  position: fixed;
  z-index: 10;
  bottom: 0;
}
</style>
