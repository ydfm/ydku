<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-11 10:30:12
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
    <div class="memeberbox">   
       <img src="../assets/new01.png" alt="">
       <span class="cost">双11年卡全年最低价!</span>
       <span class="memeber">开通</span>
    </div> 
</template>

<script>

export default {
  name: 'Nav',
  data () {
    return {
      
    }
  }
}
</script>
<style scoped>

.memeberbox{
  width:95%; 
  height: .54rem;
  margin: 0 auto;
  background: #ffffff;
  line-height: .54rem;
  margin-top: -1px;
  }
img{
  width: .54rem;
  height: .54rem;
  border-radius: 50%;
  float: left;
  margin-right: .06rem;
}
span{
  display: block;
  font-size: .18rem;
  color: #666666;
}
.cost{
  float: left;
}
.memeber{
  float: right;
  width: .97rem;
  height: .45rem;
  background: #fddfab;
  border-radius: .3rem;
  color: #795217;
  line-height: .45rem;
  text-align: center;
  margin-top: .04rem;
}
</style>
