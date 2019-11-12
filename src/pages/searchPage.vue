<!--
 * @Author: your name
 * @Date: 2019-11-12 09:32:57
 * @LastEditTime: 2019-11-12 11:16:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\pages\searchPage.vue
 -->
<template>
<div class="box">   
    <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="搜索">
    </mt-search>
    <!-- <mt-search v-model="value" :result.sync="result"></mt-search> -->
    <p>{{value}}</p>
</div>
  
</template>
<script>
import { Search } from 'mint-ui';
export default {
    data() {
        return {
            value:""
        }
    },
    methods:{
    }
}
</script>
<style scoped>

      
</style>
<style>
    .mint-searchbar-inner{
        border-radius: 0.18rem!important;
        font-size: 0.16rem;
    }
    .mint-searchbar-core{
       font-size: 0.16rem; 
    }
    .mint-searchbar,.mint-searchbar-cancel{
        font-size:0.16rem;
    } 
    .mintui-search{
        margin-right: 10px;
        font-size: 16px!important;
    }
</style>
