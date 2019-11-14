<!--
 * @Author: your name
 * @Date: 2019-11-12 09:32:57
 * @LastEditTime: 2019-11-12 17:04:46
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
    <div class="showData">
        <h4>热门搜索</h4>
        <ol>
            <li>小年</li>
            <li>老梁</li>
            <li>斗罗大陆</li>
            <li>环球时报</li>
            <li>有话要说</li>
            <li>百家讲坛</li>
        </ol>
    </div>
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
li:nth-child(1),li:nth-child(2),li:nth-child(3) {
    color: red;
}

</style>
<style>
    .mint-searchbar-inner{
        border-radius: 0.18rem!important;
        font-size: 0.144rem;
    }
    .mint-searchbar-core{
       font-size: 0.14rem; 
    }
    .mint-searchbar,.mint-searchbar-cancel{
        font-size:0.14rem;
    } 
    .mintui-search{
        margin-right: 10px;
        font-size: 14px!important;
    }
    .mint-search{
        height: 0.5rem;
        margin-bottom: 0.24rem;
    }
</style>
