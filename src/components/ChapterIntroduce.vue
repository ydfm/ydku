<template>
    <div class="box">
        <div class="content">
        <!-- <p>
            兵王之王受伤退伍回归都市,与冰山总裁未婚妻同住一个屋檐下,拉手,不准,接吻,不许,那就一起来吧.本想过平凡日子的叶轩很无奈,为亲人,为爱人,为兄弟,狂战天下,无所畏惧！
        </p>
        <span>展开简介</span> -->
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="作品简介" name="1">
                    <div>兵王之王受伤退伍回归都市，与冰山总裁未婚妻同住一个屋檐下，拉手，不准，接吻，不许，那就一起来吧。本想过平凡日子的叶轩很无奈，为亲人，为爱人，为兄弟，狂战天下，无所畏惧！</div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="detailContent">

        </div>
    </div>       
</template>
<script>
export default {
    name:"ChapterIntroduce",
    data() {
        return {
            activeNames: ['0'],
        }
   },
   methods: {
      handleChange(val) {
        console.log(val);

      }
    }

}
</script>
<style scoped>
.box{
    width: 100%;
    /* height: 5.5rem; */
}
.content{ 
    width: 3.47rem;
    height: 0.95rem;
    margin-left:0.14rem;
    font-size: 11px;
    position: relative;
    z-index: 1;
}

</style>
<style>
.el-collapse-item__header{
    background:#423531;
    color: white;
    border: none !important;
    padding: 0 10px;
    font-size: 12px;
    border-radius: 5px 5px 0px 0px;
}
.el-collapse{
  border: none !important;  
}
.el-collapse-item__wrap{
    background:#423531;
    border: none !important;
    padding: 0 10px;
    border-radius: 0px 0px 5px 5px;
}
.el-collapse-item__content{
    color: white !important;
    font-size: 11px;
}
.el-collapse-item{
    z-index: 10!important;
}
</style>

