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
        <div class="top">
            {{type}} <span>></span>
        </div>   
        <div class="bottom">
            <ul>
                <!-- <li v-for="(name,index) in menu1" :key="index">
                    <img :src="book.img" alt="">
                    <span>{{book.name}}</span>
                </li> -->
                <li>
                    <div class="imgbox">
                        <img src="../assets/book.jpg" alt="">
                        <div class="amount">
                            <i class="el-icon-caret-right"></i>
                            <span>{{amount}}万</span>
                        </div>
                    </div>
                    <span class="name">{{name}}</span>
                    <span class="intro">{{intro}}</span>
                </li>
                 <li>
                    <div class="imgbox">
                        <img src="../assets/book.jpg" alt="">
                        <div class="amount">
                            <i class="el-icon-caret-right"></i>
                            <span>{{amount}}万</span>
                        </div>
                    </div>
                    <span class="name">{{name}}</span>
                    <span class="intro">{{intro}}</span>
                </li>
                 <li>
                    <div class="imgbox">
                        <img src="../assets/book.jpg" alt="">
                        <div class="amount">
                            <i class="el-icon-caret-right"></i>
                            <span>{{amount}}万</span>
                        </div>
                    </div>
                    <span class="name">{{name}}</span>
                    <span class="intro">{{intro}}</span>
                </li>
                <li>
                    <div class="imgbox">
                        <img src="../assets/book.jpg" alt="">
                        <div class="amount">
                            <i class="el-icon-caret-right"></i>
                            <span>{{amount}}万</span>
                        </div>
                    </div>
                    <span class="name">{{name}}</span>
                    <span class="intro">{{intro}}</span>
                </li>
                 <li>
                    <div class="imgbox">
                        <img src="../assets/book.jpg" alt="">
                        <div class="amount">
                            <i class="el-icon-caret-right"></i>
                            <span>{{amount}}万</span>
                        </div>
                    </div>
                    <span class="name">{{name}}</span>
                    <span class="intro">{{intro}}</span>
                </li>
                 <li>
                    <div class="imgbox">
                        <img src="../assets/book.jpg" alt="">
                        <div class="amount">
                            <i class="el-icon-caret-right"></i>
                            <span>{{amount}}万</span>
                        </div>
                    </div>
                    <span class="name">{{name}}</span>
                    <span class="intro">{{intro}}</span>
                </li>
            </ul>
        </div> 
    </div> 
</template>

<script>

export default {
  name: 'Hot',
  data () {
    return {
       type:"小说",
       name:"盗墓笔记",
       intro:"盗墓笔记盗墓笔记盗墓笔记盗墓笔记盗墓笔记",  //intro   简介
       amount:"12.23"
    }
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
        font-size: .24rem;
        color: #333333;
        margin: 0 auto;
    }
    .bottom{
        width: 100%;
    }
    .top span{
        font-size: .28rem;
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
        height: 1rem;
        /* background: blue; */
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
        color: #ffffff
    }
    img{
        width: 100%;
        height: 100%;
    }
    .name{
        display: block;
        font-size: .18rem;
        color: #333333;
        margin-top: .05rem;
    }
    .intro{
        height: .4rem;
        display: block;
        font-size: .14rem;
        margin-bottom: .05rem;
        overflow: hidden;
    }
</style>
