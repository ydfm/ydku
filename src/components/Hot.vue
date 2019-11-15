<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-11 10:30:12
 * @LastEditors: Please set LastEditors
 * @lastEditTime: Do not Edit
 -->
<template>
    <div class="hotbox"> 
        <div class="Box" v-for="(lei,index) in alllist" :key="index">
            <div class="top">
                {{lei.name}} <span>></span>
            </div>   
            <div class="bottom">
                <ul>
                    <li v-for="(item,index) in lei.list" :key="index">
                        <router-link :to='"/ChapterList/"+item.aid'>
                            <div class="imgbox">
                                <img :src="item.pic" alt="">
                                <div class="amount">
                                    <i class="el-icon-caret-right"></i>
                                    <span>{{item.pageviews}}次</span>
                                </div>
                            </div>
                            <span class="name">{{item.name}}</span>
                            <span class="intro">{{item.brief}}</span>
                        </router-link>
                    </li>
                </ul>
            </div> 
        </div>
    </div> 
</template>

<script>
import axios from 'axios';


export default {
    name: 'Hot',
    props:['typename'],

    data () {
        return {
            list:[],
            alllist:[],
        }
    },
    created() {
        // Indicator.open({
        //     text: '加载中...',
        //     spinnerType: 'fading-circle'
        // });
        axios.get('/menu/index')
        // axios.get('/list')
        .then(res=>{
            // Indicator.close();
            // console.log(res.data);
            // console.log(res.data.list);
            this.alllist=res.data.list;
            // this.currname =  this.list[0].name;
            // this.list =  this.alllist[0].list;
            // this.list=this.getlistByName(this.alllist);
        })
        .catch(err=>{
            console.log(err);
        });
    },
    //  beforeUpdate(){
    //     console.log("数据更新了------------：");
    //     this.list=this.getlistByName(this.alllist);
    // },
    methods:{
        // getlistByName(data){
        //     let arr=[];
        //     for(let i in data){
        //         if(data[i].name==this.typename){
        //             arr.push(data[i]);
        //         }
        //     }
        //     return arr;
        // }
    }
}
</script>
<style scoped>
    .hotbox{
        width: 100%;
        background: #ffffff;
    }
    .top{
        width: 95%;
        height: .75rem;
        line-height: .75rem;
        font-size: .22rem;
        /* color: #333333; */
        color: #fe706c;
        margin: 0 auto;
    }
    .bottom{
        width: 100%;
    }
    .top span{
        font-size: .24rem;
        color: #999999;
    }
    ul{
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 0 auto;
    }
    li{
        width: 1rem;
        height: 1.1rem;
        margin-bottom: .7rem;
    }
    li:nth-child(3n){
     margin-right: 0;
    }
    .imgbox{
        width: 1rem;
        height: 1rem;
        position: relative;
    }
    .amount{
        position: absolute;
        left: 0;
        bottom: 0;
        /* color: #1308ac; */
        color: #ffffff;
        font-size:14px;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .name{
        display: block;
        font-size: .18rem;
        color: #525151;
        margin-top: .05rem;
        width: .9rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .intro{
        height: .39rem;
        display: block;
        font-size: .14rem;
        margin-bottom: .05rem;
        overflow: hidden;
    }
    a{
        color: #aaaaaa;
    }
</style>
