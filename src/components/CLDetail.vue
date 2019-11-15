<!--
 * @Author: your name
 * @Date: 2019-11-09 19:29:05
 * @LastEditTime: 2019-11-15 21:08:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\components\CLDetail.vue
 -->
<template>
    <div class="box">
        <div class="navigation">
            <span>节目</span>
            <span>推荐</span>
        </div>
        <div class="listbox">
            <ul>          
                <li v-for="(menu,index) in menus" :key="index" >
                    <router-link :to='"/playPage/"+menu.bid'>
                        <div class="left">
                            <h6>{{menu.name}}</h6>
                            <p>                                               
                            <span class="date" >2019-11-01</span>
                            <i class="el-icon-caret-right"></i>
                            <span >{{menu.pageviews}}</span>
                            <!-- <span>{{menu.bid}}</span>                        -->
                            </p>
                        </div>
                        <div class="right">
                            <i class="el-icon-download"></i>
                        </div>
                    </router-link>
                </li>               
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    props: ['aid'],
    data() {
        return {
            infos:{},
            menus:[]
        }
        },
    created(){
        axios.get('/menu/selectC4ByC3?aid='+this.aid)
         .then(res=>{ 
            this.infos=res.data[0]
            this.menus=res.data[0].menu4
            console.log(this.menus)
            // this.aid=this.info.aid
         })
         .catch(err=>{
               console.log("错误"+err);
         }); 

        // console.log(this.$store);
        // this.$store.dispatch("getInfo")
    }
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 4.5rem;
    background: white;
    z-index: inherit;
    border-radius: 8px;
}  
.navigation{
    height: 0.45rem;
    line-height: 0.45rem;
    font-size: 0.15rem;
    display: flex;
    color:#686868;
    justify-content: space-around;
} 
/* .navigation {
    border-bottom: 1px solid #686868;
} */
ul{
    width: 100%;
    height: 4rem; 
    overflow-y: auto   
}
ul li{
    height: 0.7rem;
    font-size: 12px;
    color: #070707;
    overflow: hidden;
}
.left{
    margin-left:0.22rem;
    float: left;
}
.right{
   margin-right:0.26rem; 
   float: right;
}
.left h6{
    margin-top: 0.17rem;
    line-height: 0.14rem;
    margin-bottom:10px;
    font-size: 0.14rem;
    color: #070707;
}
.left p{
    font-size: 12px;
    color: #aeaeae;
    }
.date{
    margin-right: 0.18rem;
}
.right {
    font-size: 0.2rem;
    line-height: 0.72rem;
    color: #818181;
}
</style>
