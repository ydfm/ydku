<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-11 09:48:29
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
    <div class="topbox">
        <!-- <span>首页</span> -->
        <ul>
            <li>
                <router-link to="/Index">推荐</router-link> 
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
        console.log(this.alllist);

        // let arr=[]
        // for(let i=0;i<= this.alllist.length;i++){
        //     arr.push(this.alllist[i])
        //     console.log(arr);s
        // }

        this.currname = this.alllist[0].name;   //把拿到的类型的第一个赋给当前类型。
        console.log(this.currname)
    })
    .catch(function (error) {
        console.log(error);
        });
    },
    methods:{
        // changetype(typename){
        //     console.log(typename);    //可以打印出来意味着拿到了
        //     this.currname=typename;
        //      Axios.get('/menu/index?name='+this.currname)    //menu/index
        //         .then((response)=>{
        //         this.alllist=response.data.list;  //拿到name
        //         console.log(this.alllist);

        //         console.log(this.alllist)
        //         this.currname = this.alllist[0].name;   //把拿到的类型的第一个赋给当前类型。
        //         console.log(this.currname)
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //         });
        //     }
        // }
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