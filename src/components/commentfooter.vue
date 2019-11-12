<!--
 * @Author: your name
 * @Date: 2019-11-11 21:11:10
 * @LastEditTime: 2019-11-12 08:49:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\components\commentfooter.vue
 -->
<template>
    <div class="box">
        <div class="inputbox">
            <i class="el-icon-edit"></i>
            <input type="text" placeholder="我来说两句">
        </div>
        <div class="function">
            <div>
                <i class="iconfont icon-pinglun"></i>
                <p>评论</p>
            </div>
             <div>
                <i class="iconfont icon-shoucang"></i>
                <p>收藏</p>
            </div>           
            <div>
                <i class="iconfont icon-xiazai"></i>
                <p>下载</p>
            </div>             
            
        </div>
    </div>         
</template>
<script>
export default {
    data() {
        return {
        }
   },
}
</script>
<style scoped>   
.box{
    width: 100%;
    height: 0.46rem;
    display: flex;
    align-items: center;
    background:  #efefef;
}   
.inputbox{
    width: 2.2rem;
    height: 0.32rem;
    font-size: 14px;
    border: 1px solid #dedede;
    border-radius: 0.18rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    background: #efefef;
}   
input{
    width: 1.8rem;
    height: 0.28rem;
    border:none;
    outline: none;
    background: #efefef;
} 
.el-icon-edit{
    color: #fd5050;
}  
.function{
    font-size: 9px;
    width: 1.38rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
    color: #a1a1a1;
}
</style>
