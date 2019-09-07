<template>
    <div class="index">
        <!-- 首页索引 -->
        <div class="indexSkip">
            <IndexSkip v-for="(v,i) in skipArr" :skipLink="v.indexlinkid" :skipName="v.indexlinkname" :key="i"></IndexSkip>
        </div>
        <!-- 首页主体 -->
        <div class="indexContent">
            <img src="../../../static/img/loading.gif" v-if="sendSketch.length<=0">
            <IndexSketch v-else v-for="(v,i) in sendSketch" :sketchCon="v.content" :sketchTitle="v.title" :sketchImg="v.image" :sketchTypeLeft="v.category_name" :sketchTypeRight="v.subcategory_name" :sketchId="v.id" :key="i"></IndexSketch>
        </div>
    </div>
</template>

<script>
import IndexSkip from './IndexSkip'
import IndexSketch from './IndexSketch'
import IndexBook from './IndexBook'
export default {
    components:{
        IndexSkip,
        IndexSketch,
        IndexBook
    },
    data(){
        return {
            skipArr:[
                {indexlinkid:"/dbindex/movie",indexlinkname:"影院热映"},
                {indexlinkid:"/dbindex/radio",indexlinkname:"欧美新碟榜"},
                {indexlinkid:"/dbregister",indexlinkname:"注册账号"},
                {indexlinkid:"/dblogin",indexlinkname:"登录豆瓣"}
            ],
            sendSketch:[]
        }
    },
    created(){
        this.axios({
            methods:"get",
            url:"/dbbooks"
        }).then(
            (ok)=>{
                console.log(ok);
                this.sendSketch=ok.data.shouye;
            },
            (err)=>{
                console.log(err);
            }
        )
    }
}
</script>

<style scoped>
    /* 首页样式 */
    .index{
        width:100%;
        flex:1;
        overflow:auto;
    }
    /* 首页索引样式 */
    .indexSkip{
        width:100%;
        padding:.2rem .25rem 0;  
        height: 1.42rem;
    }
    /* 首页主体样式 */
    .indexContent>img{
        display:block;
        padding:.3rem 0;
        width:.7rem;
        margin: 0 auto;
    }
    .indexContent{
        width: 100%;
        padding:0 .25rem;  
    }
</style>