<!--
 * @Author: your name
 * @Date: 2019-11-12 09:32:57
 * @LastEditTime: 2019-11-15 16:37:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\pages\searchPage.vue
 -->
<template>
<div class="box">  
    <!-- <router-link :to='"/serachRes/"+value'> -->
        <!-- <mt-search
            v-model="value"
            cancel-text="取消"
            placeholder="搜索">
            <input type="text"  @keyup.enter="serchRes">
        </mt-search> -->
    <!-- </router-link>  -->

        <div class="serchbox">
            <router-link :to='"/searchRes/"+value'>
                <i class="el-icon-search"></i>
            </router-link>
            <input type="text" placeholder="搜索" v-model="value">
        </div> 
    <div class="showData">
        <h4>热门搜索</h4>
        <ol>
            <li v-for="(list,index) in lists" :key="index">
                {{list.name}}
            </li>
        </ol>
    </div>
</div>
  
</template>
<script>
import { Search } from 'mint-ui';
import axios from 'axios';
export default {
    props: [],
    data() {
        return {
            value:"",
            lists:""
        }
    },
    methods:{
    },
    created(){
    
        axios.get('/menu/selectLike?name')      
        .then(res=>{
            this.lists=res.data
             console.log(this.lists)
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
h4{
    font-size: 0.14rem;
    color: #000000;
    margin-bottom: 10px;
    margin-left: 0.18rem;
} 
ol{
    display: flex;
    flex-wrap: wrap;
    margin-left: 0.34rem;
}
/* ol li(nth-child) */
ol li{
    width: 50%;
    font-size: 14px;
    height: 0.31rem;
    color: #6a6a6a;
    list-style: decimal outside;
}  
li:nth-child(1),li:nth-child(2),li:nth-child(3),li:nth-child(4) {
    color: red;
}

</style>


