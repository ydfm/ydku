<!--
 * @Author: your name
 * @Date: 2019-11-11 10:18:54
 * @LastEditTime: 2019-11-12 00:21:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\components\playDetail.vue
 -->
<template>
    <div class="box">
        <h1>少帅你老婆又跑了第01集</h1> 
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
            <p><i class="el-icon-caret-right"></i>12345</p>  
        </div>  
        <div class="img">
            <img src="../assets/img/img.jpg" alt="">
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
        text-align: center;
    }   
    h1{
        height: 0.5rem; 
        color: #333333;
        font-size: 0.18rem;
        line-height:0.6rem;
        margin-left: 0.26rem;
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
