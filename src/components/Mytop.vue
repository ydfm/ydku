<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-11 09:48:29
 * @LastEditors: Please set LastEditors
 * @lastEditTime: Do not Edit
 -->
<template>
    <div class="topbox">
        <!-- <span>首页</span> -->
        <ul>
            <li>
                <router-link to="/Index" class="tuijian">推荐</router-link> 
            </li>
            <li v-for="(lei,index) in alllist" :key="index" @click="changetype(lei.name)">
                {{lei.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'Mytop',
  
    data () {
        return {
            alllist:[],
            currname:""
        }
    },
    created() {
        // axios.get('/list')
        Axios.get('/menu/index')    //menu/index
        .then((response)=>{
        // console.log(response.data);
        this.alllist=response.data.list;  //拿到name
        this.currname = this.list[0].name;   //把拿到的类型的第一个赋给当前类型。
    })
    .catch(function (error) {
        console.log(error);
        });
    },
    methods:{
        changetype(typename){
            this.currname=typename;
            console.log(typename);    //可以打印出来意味着拿到了
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topbox{
    /* width: 100%; */
    /* height: .73rem; */
    background: #ffffff;;
}
.tuijian{
    font-size: 0.26rem;
    color: #fe706c;
}
ul{
    width: 97%;
    height: .73rem;
    margin: 0 auto;
    display: -webkit-flex;
    align-items: center;
    overflow-x: auto;
    /* position: relative; */
    /* flex-shrink: 1; */
}
li{
    font-size: .2rem;
    margin-right: .15rem;
    flex-shrink: 0;
    color: #999999;
}
li:first-child{
    margin-left: .15rem;
}
li:last-child{
    padding-right: .2rem;    
}
a{
    color: #999999;
}
</style>