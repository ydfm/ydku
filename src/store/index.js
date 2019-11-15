/*
 * @Author: your name
 * @Date: 2019-11-09 11:40:55
 * @LastEditTime: 2019-11-15 18:35:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\router\index.js
 */
import Vue from 'vue'
import VueX from 'vueX'
import axios from 'axios'
Vue.use(VueX)

export default new VueX.Store({
    state:{
        infos:{},
        menu:{},
        // comments:[]
        aid: ""
    },
    mutations:{
        getInfo(state,infos){
            state.infos=infos,
            console.log("vuex,getInfo");
            console.log(infos.menu4);
            state.menu=infos.menu4
        },
        // getComment(state,comments){
        //     state.comments=comments
        // }

        getBookaid(state,aid){
            state.aid = aid;
        }
    },
    actions:{
        getInfo(context){
            axios.get('/menu/selectC4ByC3?aid='+state.aid)
                .then(res=>{ 
                    context.commit("getInfo",res.data[0])
                })
                .catch(err=>{
                    console.log("错误"+err);
                }); 
        },
        // getComment(context){
        //     axios.get('/001')   
        //     .then(res=>{
        //         context.commit("getComment",res.data)
        //         // console.log(state.comments)
        //     })
        //     .catch(err=>{
        //         console.log("错误"+err);
        //     }); 
        // }
        
    }
})
