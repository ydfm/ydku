<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-12 16:57:37
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
    <div class="topbox">
        <ul>
            <li v-for="(item,index) in types1" :key="index">
               {{item}}
            </li>
        </ul>
    </div>
</template>

<script>


export default {
  name: 'NewsTop',
  data () {
    return {
        types1:[
            "双11大促",
            "推荐",
            "老司机安利",
            "文史千年",
            "小说"
        ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topbox{
    width: 100%;
    background: #ffffff;;
}
ul{
    width: 97%;
    height: .73rem;
    margin: 0 auto;
    display: -webkit-flex;
    align-items: center;
    overflow-x: auto;
}
li{
    font-size: .2rem;
    margin-left: .15rem;
    flex-shrink: 0;
    color: #999999;
}
li:first-child{
    margin-left: .2rem;
}
li:last-child{
    padding-right: .2rem;    
}

</style>