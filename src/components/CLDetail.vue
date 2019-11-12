<!--
 * @Author: your name
 * @Date: 2019-11-09 19:29:05
 * @LastEditTime: 2019-11-11 10:12:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\components\CLDetail.vue
 -->
<template>
    <div class="box">
        <div class="navigation">
            <span>节目</span>
            <span>推荐</span>
        </div>
        <div class="listbox">
            <ul>
                <router-link to="playPage">
                    <li>
                        <div class="left">
                            <h6>第001集&nbsp;&nbsp;人皮</h6>
                            <p>                                               
                            <span class="date" >2019-11-01</span>
                            <i class="el-icon-caret-right"></i>
                            <span >8316</span>                        
                            </p>
                        </div>
                        <div class="right">
                            <i class="el-icon-download"></i>
                        </div>
                    </li>
                </router-link>
                <li>
                    <div class="left">
                        <h6>第001集&nbsp;&nbsp;人皮</h6>
                        <p>                                               
                        <span class="date" >2019-11-01</span>
                        <i class="el-icon-caret-right"></i>
                        <span >8316</span>                        
                        </p>
                    </div>
                    <div class="right">
                        <i class="el-icon-download"></i>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <h6>第001集&nbsp;&nbsp;人皮</h6>
                        <p>                                               
                        <span class="date" >2019-11-01</span>
                        <i class="el-icon-caret-right"></i>
                        <span >8316</span>                        
                        </p>
                    </div>
                    <div class="right">
                        <i class="el-icon-download"></i>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <h6>第001集&nbsp;&nbsp;人皮</h6>
                        <p>                                               
                        <span class="date" >2019-11-01</span>
                        <i class="el-icon-caret-right"></i>
                        <span >8316</span>                        
                        </p>
                    </div>
                    <div class="right">
                        <i class="el-icon-download"></i>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <h6>第001集&nbsp;&nbsp;人皮</h6>
                        <p>                                               
                        <span class="date" >2019-11-01</span>
                        <i class="el-icon-caret-right"></i>
                        <span >8316</span>                        
                        </p>
                    </div>
                    <div class="right">
                        <i class="el-icon-download"></i>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <h6>第001集&nbsp;&nbsp;人皮</h6>
                        <p>                                               
                        <span class="date" >2019-11-01</span>
                        <i class="el-icon-caret-right"></i>
                        <span >8316</span>                        
                        </p>
                    </div>
                    <div class="right">
                        <i class="el-icon-download"></i>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <h6>第001集&nbsp;&nbsp;人皮</h6>
                        <p>                                               
                        <span class="date" >2019-11-01</span>
                        <i class="el-icon-caret-right"></i>
                        <span >8316</span>                        
                        </p>
                    </div>
                    <div class="right">
                        <i class="el-icon-download"></i>
                    </div>
                </li>
                 <li>
                    <div class="left">
                        <h6>第001集&nbsp;&nbsp;人皮</h6>
                        <p>                                               
                        <span class="date" >2019-11-01</span>
                        <i class="el-icon-caret-right"></i>
                        <span >8316</span>                        
                        </p>
                    </div>
                    <div class="right">
                        <i class="el-icon-download"></i>
                    </div>
                </li>
            </ul>
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
    height: 4.5rem;
    background: white;
    z-index: inherit;
    border-radius: 8px;
}  
.navigation{
    height: 0.45rem;
    line-height: 0.45rem;
    font-size: 0.15rem;
    display: flex;
    color:#686868;
    justify-content: space-around;
} 
ul{
    width: 100%;
    height: 4rem; 
    overflow-y: auto   
}
ul li{
    height: 0.7rem;
    font-size: 12px;
    color: #070707;
    overflow: hidden;
}
.left{
    margin-left:0.22rem;
    float: left;
}
.right{
   margin-right:0.26rem; 
   float: right;
}
.left h6{
    margin-top: 0.17rem;
    line-height: 0.14rem;
    margin-bottom:10px;
    font-size: 0.14rem;
}
.left p{
    font-size: 12px;
    color: #aeaeae;
    }
.date{
    margin-right: 0.18rem;
}
.right {
    font-size: 0.2rem;
    line-height: 0.72rem;
    color: #818181;
}
</style>
