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
            <!-- <div class="swiper-slide" v-for="(img,index) in lbt" :key="index"> -->
            <div class="swiper-slide">
                <img :src="lbt.url_1" alt="">
            </div>
             <div class="swiper-slide">
                <img :src="lbt.url_2" alt="">
            </div>
             <div class="swiper-slide">
                <img :src="lbt.url_3" alt="">
            </div>
        </div>      
    </div>  
</template>

<script>
import Axios from 'axios';
import Swiper from 'swiper'


export default {
  name: 'Banner',
  data () {
    return {
        lbt:{

        }
    }
  },
  created(){
    Axios.get('/menu/index')  
    .then(res=>{
        // console.log(this.lbt);
        // console.log(res.data)
        // console.log(res.data.t.url_3)

        // console.log(res.data.t);
        this.lbt=res.data.t;
        // this.lbt = data;
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
/* .swiper-slide{
    display: flex;
} */
</style>