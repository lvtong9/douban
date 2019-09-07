<template>
    <div class="index">
        <!-- 首页导航 -->
        <div class="indexNav">
            <router-link to="/dbindex/douban">
                <img src="../../static/img/logo.png">
            </router-link>
            <div class="navRight">
                <router-link to="/dbindex/movie">电影</router-link>
                <router-link to="/dbindex/book">图书</router-link>
                <router-link to="/dbindex/radio">广播</router-link>
                <router-link to="/dbindex/group">小组</router-link>
                <router-link to="/dbsearch">
                    <img src="../../static/img/search.png">
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import IndexSketch from '../components/index/IndexSketch'
import IndexDouBan from '../components/index/IndexDouBan'
import IndexMovie from '../components/index/IndexMovie'
export default {
    components:{
        IndexSketch,
        IndexDouBan,
        IndexMovie
    }
}


</script>

<style scoped>
    .router-link-active{
        text-decoration: none;
    }
    /* 首页样式 */
    .index{
        width:100%;
        height: 100%;
        display:flex;
        flex-direction: column;
    }
    /* 首页导航样式 */
    .indexNav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .58rem;
        border-bottom: 1px solid #f3f3f3;
        padding:0 .25rem;   
    }
    .indexNav>a>img{
        width:.55rem;
        height:.26rem;
    }
    .navRight{
        width:2.13rem;
        display: flex;
        justify-content: space-between;
    }
    .navRight>a{
        font-size: .16rem;
    }
    .navRight>a:nth-of-type(1){
        color:#2384e8;
    }
    .navRight>a:nth-of-type(2){
        color:#9f7860;
    }
    .navRight>a:nth-of-type(3){
        color:#e4a813;
    }
    .navRight>a:nth-of-type(4){
        color:#3cbed0;
    }
    .navRight>a>img{
        width:.28rem;
        height: .22rem;
    }
</style>