<!--
 * @Author: your name
 * @Date: 2019-11-11 10:18:54
 * @LastEditTime: 2019-11-15 20:39:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\components\playDetail.vue
 -->
<template>
    <div class="box">
        <h1>{{infos.name}}&nbsp;&nbsp;{{play.name}}</h1> 
        <div class="view">
            <p>
                <el-row class="block-col-2">
                <el-col :span="12">
                    <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        倍速<i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-check">1倍速</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-check">1.2倍速</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-check">1.5倍速</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
                </el-row>
            </p>
            <p><i class="el-icon-caret-right"></i>{{infos.pageviews}}</p>  
        </div>  
        <div class="img">
            <img :src="infos.pic" alt="">
        </div>        
    </div>     
</template>
<script>
import axios from 'axios';
export default {
    props:['id'],
    data() {
        return {
            infos:"",
            menu:[],
            play:{}    
        }
    },
    created(){
        
       axios.get('/menu/selectC4ByC3?aid='+this.id)
         .then(res=>{ 
            // debugger
            // console.log(this.id);
            this.infos=res.data[0]
            this.menu=res.data[0].menu4
            // console.log(this.menu)
            for(let i=0;i<this.menu.length;i++){
                if(this.menu[i].bid==this.id){
                    this.play=this.menu[i]
                    // return this.play
                }
            }
         })
         .catch(err=>{
               console.log("错误"+err);
         }); 
    }
}
</script>
<style scoped>
    .box{
        width: 100%;
        text-align: center;
    }   
    h1{
        height: 0.5rem; 
        color: #333333;
        font-size: 0.18rem;
        line-height:0.6rem;
        /* margin-left: 0.26rem; */
    }
    /* view */
    .view{
        display: flex;
        justify-content: center;
    }
    p{
        height: 0.19rem;
        font-size: 11px;
        color:#9b9b9b;
        width: 0.6rem;
        text-align: center;
    }
        .el-dropdown-link {
        cursor: pointer;
        color: #9a9a9a;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .el-dropdown-menu__item{
        width: 0.7rem;
        padding: 5px;
        font-size: 11px;
        line-height: 15px;
    }
    .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        margin-bottom: 20px;
    }  
    .el-col-12{
        width: 0.6rem;
    }
    /* img */
    .img{
        display: flex;
        justify-content: center;
        margin-top: 7px;
        margin-bottom: 0.35rem;
    }
    img{
        width: 2.8rem;
        height: 2.8rem;   
        border-radius: 12px;
    }

</style>
