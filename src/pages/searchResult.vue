<!--
 * @Author: your name
 * @Date: 2019-11-15 15:31:45
 * @LastEditTime: 2019-11-15 15:35:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\ydku\src\pages\searchResult.vue
 -->
<template>
    <div class="box" :val="this.$route.params.value">   
        <div class="serchbox">
            <router-link :to='"/searchRess/"+this.value'>
                <i class="el-icon-search"></i>
            </router-link>
            <input type="text" placeholder="搜索" v-model="value">
        </div> 
        <div class="showdata">
            <ul>
                <li>
                    <div class="left"><img src="../assets/img/img.jpg" alt=""></div>
                    <div class="right">
                        <h5>情感小说</h5>
                        <p>关于情，关于爱，关于不为人知的过去关于情，关于爱，关于不为人知的过去</p>
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
            
</style>
