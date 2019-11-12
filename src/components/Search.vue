<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-11 09:48:29
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
    <div class="searchbox">
        <div class="box">
            <input type="text" :placeholder="tishi">
            <i class="el-icon-search"></i>
        </div>
        <p class="el-icon-time"></p>
    </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
        tishi:"                       请输入要搜索的内容"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchbox{
    width: 97%;
    height: .61rem;
    margin:0 auto;
    margin-top: -1px;
    background: #ffffff;
    position: relative;
}
.box{
    float: left;
    position: relative;
}
p{
    float: right;
    position: absolute;
    left: 60%;
    top: 10%;
    font-size: .32rem;
    color: #999999;
}
input{
    width: 3rem;
    height: .46rem;
    background: #f6f6f6;
    color: #999999;
    border: 0;
    outline: 0;
    border-radius: .25rem;
}
i{
    font-size: .21rem;
    color: #ff323b;
    position: absolute;
    left: 20%;
    top: 25%;
}
</style>
