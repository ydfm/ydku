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
      <Mytop></Mytop>
      <Search></Search>
    </div>
     <div class="center">
        <Banner></Banner>
        <Hot></Hot>
        <Hot></Hot>
        <Hot></Hot>
        <Hot></Hot>
        <Hot></Hot>
        <Hot></Hot>
     </div>
     <Myfooter class="bottom"></Myfooter>
  </div>
</template>

<script>
import Mytop from '../components/Mytop';
import Search from '../components/Search';
import Banner from '../components/Banner';
import Hot from '../components/Hot';
import Myfooter from '../components/Myfooter';


export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  components:{
      Mytop,Search,Banner,Hot,Myfooter
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
  height: 100%;
  position: fixed;
  z-index: 10;
}
.center{
  flex: 1;
  overflow-y: auto;
  margin-top: 1.34rem;
}
.bottom{
  position: fixed;
  z-index: 10;
  bottom: 0;
}
</style>
