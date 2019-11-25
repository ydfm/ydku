<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-11 10:30:12
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
    <div class="hotbox"> 
        <div class="top" v-for="(xiaolei,index) in alllist" :key="index">
            <!-- {{xiaolei.name}}<span>></span> -->
            <div class="bottom">
                <ul>
                    <li v-for="(item,index) in xiaolei.list1" :key="index" >
                        <router-link  :to='"/xiangqiangPage/"+item.id'>
                            <div class="imgbox">
                                <img :src="item.pic" alt="">
                            </div>
                            <div class="content">
                                <span class="name">{{item.name}}</span>
                                <span class="intro">{{item.brief}}</span>
                                <div class="amount">
                                    <i class="el-icon-caret-right"></i>
                                    <span>{{item.pageviews}}次</span>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div> 
         </div>  
    </div> 
</template>

<script>
import Axios from 'axios';


export default {
    name: 'Hot1',
    props:['name'],
    data () {
        return {
            alllist:[],    
            // history:[]
        }
    },
    created() {
        console.log(this.name)
        // axios.get('/list')
        Axios.get('/menu/selectC2_C3?name='+this.name)    //menu/index
        .then((res)=>{
        console.log(res.data);
        this.alllist=res.data.list1;

    })
    .catch(function (error) {
        console.log(error);
        });
    },
  methods:{

  }
}
</script>
<style scoped>
    .hotbox{
        width: 100%;
        background: #ffffff;
    }
    .top{
        width: 97%;
        /* height: .75rem;
        line-height: .75rem; */
        font-size: .24rem;
        color: #333333;
        margin: 0 auto;
    }
    .bottom{
        width: 95%;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }
    ul{
        width: 97%;
    }
    li{
        height: 1.1rem;
        margin-bottom: .15rem;
    }
    .imgbox{
        width: 1.1rem;
        height: 1.1rem;
        position: relative;
        float: left;
        margin-right: 3%;
    }
    img{
        width: 100%;
        height: 100%;
    }
    a{
        color: #333333;
    }
    .content{
        width: 100%;
    }
    .name{
        display: block;
        font-size: .21rem;
        color: #333333;
    }
    .intro{
        height: .2rem;
        display: block;
        font-size: .16rem;
        overflow: hidden;
        margin-top: .1rem;
        margin-bottom: .3rem;
    }
    .amount{
        font-size: .14rem;
        color: #979797;
    }
</style>
