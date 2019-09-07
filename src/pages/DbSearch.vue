<template>
    <div class="search">
        <!-- 搜索头部 -->
        <div class="searchHeader">
            <router-link to="/dbindex/douban">关闭</router-link>
            <input type="text">
        </div>
        <!-- 搜索选择 -->
        <div class="searchSelects">
            <SearchMoudel v-for="(v,i) in searchObj" :key="i" :search-title="v.sendTitle" :search-content="v.sendContent" :search-color="v.sendColor"></SearchMoudel>
        </div>
        <!-- 搜索跳转 -->
        <div class="searchLink">
            <div class="searchLinkTop">
                <router-link to="/dbregister">注册账号</router-link>
                <router-link to="/dblogin">登录豆瓣</router-link>
            </div>
            <div class="searchLinkBottom">
                <router-link to="#">使用桌面版</router-link>
                <router-link to="#">使用豆瓣App</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import SearchMoudel from '../components/search/SearchMoudel'
export default {
    components:{
        SearchMoudel
    },
    data(){
        return{
            searchObj:[
                {sendTitle:"电影",sendContent:"影院热映",sendColor:"sendColorA"},
                {sendTitle:"电视",sendContent:"正在热播",sendColor:"sendColorB"},
                {sendTitle:"图书",sendContent:"畅销排行",sendColor:"sendColorC"},
                {sendTitle:"同城",sendContent:"周末活动",sendColor:"sendColorD"},
                {sendTitle:"小组",sendContent:"志趣相投",sendColor:"sendColorE"},
                {sendTitle:"音乐",sendContent:"新碟榜",sendColor:"sendColorF"},
                {sendTitle:"阅读",sendContent:"电子书",sendColor:"sendColorG"},
                {sendTitle:"游戏",sendContent:"虚拟世界",sendColor:"sendColorH"},
                {sendTitle:"应用",sendContent:"玩手机",sendColor:"sendColorI"},
                {sendTitle:"东西",sendContent:"心爱之物",sendColor:"sendColorJ"},
                {sendTitle:"FM",sendContent:"红心歌单",sendColor:"sendColorK"},
                {sendTitle:"市集",sendContent:"购买原创",sendColor:"sendColorL"}
            ]
        }
    }
}
</script>

<style scoped>
    /* 搜索头部样式 */
    .searchHeader{
        width:100%;
        height: .58rem;
        border-bottom:1px solid #f3f3f3;
        display: flex;
        padding:0 .22rem;
        justify-content: space-between;
        align-items: center;
    }
    .searchHeader>a{
        font-size: .16rem;
        color:#42bd56;
    }
    .searchHeader>input{
        width:2.87rem;
        margin:0;
    }
    /* 搜索选择样式 */
    .searchSelects{
        width:100%;
        display:flex;
        flex-wrap: wrap;
        border-bottom: 1px solid #f3f3f3;
        padding:.15rem 0 .2rem 0;
    }
    /* 搜索跳转样式 */
    .searchLinkTop,.searchLinkBottom{
        display: flex;
        padding:.16rem 0;
        border-bottom:1px solid #f3f3f3;
    }
    .searchLink a{
        text-align: center;
        flex:1;
        color:#42bd56;
        font-size: .14rem;
        width:50%;
    }
    .searchLink a:nth-of-type(odd){
        border-right: 1px solid #e5e5e5;
    }
</style>