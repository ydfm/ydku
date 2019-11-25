<template>
	<div class="Collect">
        <ul>
            <li v-for="(item,index) in collectList" :key="index">
               <div class="img"><img :src="item.url" alt=""></div>
                <div class="content">
                    <div>
                        <p>{{item.name}}</p>
                        <p>{{item.brief}}</p>
                    </div>
                    <input type="button" value="删除">
                </div>
            </li>
            
        </ul>
	</div>
</template>

<script>

import axios from 'axios';

export default {
	name: 'Collect',
	data() {
		return {
            visible: false,
			collectList:[],
        }
    },
    created(){
        axios.get('/collect/selectAll?sid='+'1')
        .then(res=>{
            console.log(res.data);
            this.collectList = res.data;
        })
        .catch(err=>{
            console.log(err);
        });
        // axios.get('/collect/selectAll?sid='+'2')
        // .then(res=>{
        //     this.historyList = res.data;
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
	width: 90%;
    padding-top: .5rem; 
    margin: 0 auto;
}
li{
	width: 100%;
	height: 1rem;
    margin: 20px 0;
    position: relative;
}
.img{
	width: 30%;
	height:100%;
	float: left;
    background: pink
}
.content{
	width: 70%;
	height:100%;
	background: #eee;
	border-radius: 4px;
	float: left;
	text-indent: 8px;
	color: #888;
    display:-webkit-flex;
    -webkit-justify-content: space-between; 
    -webkit-align-items: center;
}
.img img{
	width: 100%;
	height: 100%;
	border-radius: 4px;
}
input{
    width: .4rem;
    height:.3rem;
    text-align: center;
    line-height: .3rem;
    margin-right: 10px;
}
</style>