<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-11 09:48:29
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img,index) in imgs" :key="index">
                <a v-bind:href="img.href"><img :src="img.src" ></a>
            </div>
        </div>      
    </div>  
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'Banner',
  data () {
    return {
       imgs:[]
    }
  },
  created(){
     fetch('http://localhost:3000/bannerimgs')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.imgs = data;
         this.$nextTick(function () {
              let mySwiper = new Swiper('.swiper-container',{
                   autoplay:true,
                    speed:300,
                    grabCursor:true
              });
         });
     })
        .catch(err=>{
            console.log(err);
        })
    },
    mounted:function(){
    }
}
</script>

<style scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);

.swiper-container {
    width: 95%;
    height: 1.92rem;
    margin: 0 auto;
    border-radius: 5px;
}  
img{
    width: 100%;
    height: 100%;
}
</style>