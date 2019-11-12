<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-11 09:48:29
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
    <div class="imgbox">
        <router-link class="goimgcontent" to="">
            <img src="../assets/img01.png">
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'Imgbox',
  data () {
    return {
        // src:"../assets/img01.png"
    }
  }
}
</script>

<style scoped>
    .goimgcontent{
        display: block;
        width: 95%;
        height: 1.89rem;
    }
    .imgbox{
        width: 95%;
        margin: 0 auto;
        height: 1.89rem;
        margin-top: .1rem;
    }
    img{
        width: 100%;
        height: 100%;
    }

</style>
