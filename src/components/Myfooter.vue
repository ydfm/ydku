<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-11 10:30:12
 * @LastEditors: Please set LastEditors
 * @lastEditTime: Do not Edit
 -->
<template>
    <footer>   
        <ul>
            <li class="index">
              <router-link to="/Index">
                <i class="el-icon-discount"></i>
                首页
              </router-link>
              <!-- <i class="el-icon-discount"></i>
              首页 -->
            </li>
            <li>
              <router-link to="/News">
                <i class="el-icon-news"></i>
                最新上架
              </router-link>
            </li>
            <!-- 中间播放 -->
            <li>
              <router-link to="">
                <div class="bf"><i class="el-icon-caret-right"></i></div>
              </router-link>
            </li>
            <li>
              <router-link to="/ListenPage">
                <i class="el-icon-video-play"></i>
                我听
              </router-link>
            </li>
            <li>
              <router-link to="/Person">
                <i class="el-icon-user"></i>
                个人中心
              </router-link>
            </li>
        </ul>
    </footer>  
</template>

<script>

export default {
  name: 'MyFooter',
  data () {
    return {
       
    }
  }
}
</script>
<style scoped>
footer{
    margin: 0 auto;
    width:100%; 
    height: .72rem;
    background-color: #ffffff;
  }
ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    color: #666666;
  }
li{ 
   font-size: .13rem;
   text-align: center;
   /* color: #666666; */
}
i{
  font-size: .3rem;
  color: #666666;
  display: block;
  margin-bottom: .09rem;
}
.el-icon-discount{
  color: #fe706c;
}
a{
  color: #666666;
}
.index a{
  color: #fe706c;
}
.bf{
  width: .45rem;
  height: .45rem;
  background: #c5c2c2;
  border-radius: 50%;
}
.el-icon-caret-right{
  line-height: .45rem;
}
</style>
