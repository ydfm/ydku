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
               <img :src="nav.pic_1" alt="">
              <span>{{nav.name_1}}</span> 
            </li>
            <li>
               <img :src="nav.pic_2" alt="">
              <span>{{nav.name_2}}</span> 
            </li>
            <li>
              <img :src="nav.pic_3" alt="">
              <span>{{nav.name_3}}</span> 
            </li>
            <li>
               <img :src="nav.pic_4" alt="">
              <span>{{nav.name_4}}</span> 
            </li>
        </ul>
    </div> 
</template>

<script>
import Axios from 'axios';


export default {
  name: 'Nav',
  data () {
    return {
      nav:{},
    }
  },
   created(){
    Axios.get('/menu/index')   
    .then(res=>{
        // console.log(res.data.t);
        this.nav=res.data.t;
    })
    .catch(err=>{
            console.log(err);
        })
    },
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
