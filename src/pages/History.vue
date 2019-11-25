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
        <Nav></Nav>
        <!-- {{name}} -->
        <Hot1 :name="name"></Hot1>
     </div>
     <Myfooter class="bottom"></Myfooter>
  </div>
</template>

<script>
import Mytop from '../components/Mytop';
import Search from '../components/Search';
import Banner from '../components/Banner';
import Hot1 from '../components/Hot1';
import Myfooter from '../components/Myfooter';
import Nav from '../components/Nav';


export default {
  name: 'HelloWorld',
  props:["name"],
  data () {
    return {
      
    }
  },
  components:{
      Mytop,Search,Banner,Hot1,Myfooter,Nav
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
