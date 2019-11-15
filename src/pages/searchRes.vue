<!--
 * @Author: your name
 * @Date: 2019-11-12 09:32:57
 * @LastEditTime: 2019-11-15 16:57:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\pages\searchPage.vue
 -->
<template>
<div class="box" >   
    <div class="serchbox">
        <router-link :to='"/searchRes/"+this.value'>
            <i class="el-icon-search"></i>
        </router-link>
        <input type="text" placeholder="搜索" v-model="value">
    </div>
    <div class="showData">
        <ul>
            <li v-for="(resList,index) in resLists" :key="index">
                <div class="left"><img :src="resList.pic" alt=""></div>
                <div class="right">
                    <h5>{{resList.name}}</h5>
                    <p>{{resList.brief}}</p>
                    <div>
                        <span>
                            <i class="el-icon-caret-right"></i>{{resList.pageviews}}
                        </span>
                            <i class="el-icon-date"></i>2019-10-11
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
  
</template>
<script>
// import { Search } from 'mint-ui';
import axios from 'axios';
export default {
    props:['value'],
    data() {
        return {
            resLists:[]

        }
    },
    created(){  
        console.log(this.value)       
        axios.get('menu/selectLike?name='+this.value)
         .then(res=>{
            console.log(res.data)     
            this.resLists=res.data
         })
         .catch(err=>{
               console.log("错误"+err);
         }); 
    }
    
}
</script>
<style scoped>
.serchbox{
    width: 90%;
    font-size: 0.14rem;
    border: 1px solid #6a6a6a; 
    margin:0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 0.3rem;    
    border-radius: 5px;
    display: flex;
    align-items: center;
}
.el-icon-search{
    margin-left: 5px;
    margin-right: 8px;
}
.serchbox input{
    outline: none;
    border:none;
    font-size: 0.15rem;
}
.showData{
    width: 100%;    
}
li{
    width:100%;
    height: 0.79rem;
    border-bottom:1px solid #e0e0e0;
    display: flex;
    align-items: center;
}
.left{
    margin-left: 0.15rem;
    margin-right: 0.11rem;
}
.left img{
    width: 0.57rem;
    height: 0.57rem;
}
.right h5{
    font-size: 14px;
    line-height: 14px;
    font-weight: normal;
    /* margin-top: 14px; */
}
.right p{
    width: 2.67rem;
    font-size: 11px;
    line-height: 11px;
    color: #9e9e9e;
    white-space:nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    margin-top: 8px;
    margin-bottom: 13px;
}
.right div{
    font-size: 8px;
    color: #9e9e9e;
    
}
.right div span{
    margin-right: 12px;
}

</style>
