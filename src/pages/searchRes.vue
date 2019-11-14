<!--
 * @Author: your name
 * @Date: 2019-11-12 09:32:57
 * @LastEditTime: 2019-11-12 17:03:17
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
    <!-- <p>{{value}}</p> -->
    <div class="showData">
        <ul>
            <li>
                <div class="left"><img src="../assets/img/img.jpg" alt=""></div>
                <div class="right">
                    <h5>情感小说</h5>
                    <p>关于情，关于爱，关于不为人知的过去关于情，关于爱，关于不为人知的过去</p>
                    <div>
                        <span>
                            <i class="el-icon-caret-right"></i>2340
                        </span>
                            <i class="el-icon-date"></i>2019-10-10                        </span>
                    </div>
                </div>
            </li>
        </ul>
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
<style>
    .mint-searchbar-inner{
        border-radius: 0.18rem!important;
        font-size: 0.14rem;
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
        margin-bottom: 0.1rem;
    }
</style>
