<!--
 * @Author: your name
 * @Date: 2019-11-09 11:40:55
 * @LastEditTime: 2019-11-12 17:07:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\components\ChapterHead.vue
 -->
<template>
  <div class="boxhead">
    <div class="left">
      <i class="el-icon-arrow-left" @click="back"></i>
    </div>
    <div class="right">
      <i class="el-icon-share"></i>
      <i class="el-icon-service" id="service"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chaperHead',
  data () {
    return {

    }
  },
  methods:{
    back:function(){
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.boxhead{
  width: 100%;
  height: 0.36rem;
  background:#645651;
  color: #ffffff;
  font-size: 0.19rem;
}
.left{
  float: left;  
}
.right{
  float: right;  
}
.left i{
  margin-left: 13px;
  line-height:0.38rem; 
}
.right i{
   line-height:0.38rem;  
}
#service{
  margin-right: 0.22rem;
  margin-left: 0.17rem;
}
</style>
