<template>
    <div class="details">
        <IndexRadioHeader></IndexRadioHeader>
        <img src="../../../static/img/loading.gif" v-if="showArr.length<=0">
        <div v-else>
            <div class="detailsContents">
            <div class="detailsContentsLeft">
                <h1>{{showArr.title}}</h1>
                <p><RateStar :valueStar="showArr.rating.average"></RateStar><span>{{showArr.collect_count}}评价</span></p>
                <p v-if="showArr.year">{{showArr.year}}
                    <span v-for="(v,i) in showArr.casts" :key="i">/ {{v.name}} </span>
                </p>
                <p v-else>{{showArr.pubdate}}
                    <span v-for="(v,i) in showArr.author" :key="i">/ {{v}} </span>
                </p>
                <p>用App查看影人资料</p>
            </div>
            <img :src="showArr.images.large">
        </div>
        <div class="detailsButton">
            <div>想看</div>
            <div>看过</div>
        </div>
        <div class="intro">
            <p>{{showArr.title}}的简介</p>
            <p>{{showArr.catalog}}</p>
            <p>查看更多相关分类</p>
            <div class="classifyss" v-if="showArr.genres">
                <span v-for="(v,i) in showArr.genres" :key="i" >{{v}}</span>
            </div>
            <div class="classifyss" v-else>
                <span v-for="(v,i) in showArr.tags" :key="i" >{{v.name}}</span>
            </div>
        </div>
        <IndexDetailPic :mydata="showArr.casts" :tit="showArr.title"></IndexDetailPic>
        <div class="detailsTalk">
            <IndexDetailsTalk></IndexDetailsTalk>
            <IndexDetailsTalk></IndexDetailsTalk>
            <More moreText="显示更多评论" hrefText="#"></More>
            <IndexFind :findArr="searchArr" findTitle="推荐的豆列"></IndexFind>
            <IndexLogoFooter></IndexLogoFooter>
        </div>
        </div>
    </div>


</template>

<script>
import IndexRadioHeader from './IndexRadioHeader'
import IndexDetailsTalk from './IndexDetailsTalk'
import More from './More'
import IndexFind from './IndexFind'
import IndexLogoFooter from './IndexLogoFooter'
import RateStar from '../RateStar'
import IndexDetailPic from './IndexDetailPic'

export default {
    components:{
        IndexRadioHeader,
        IndexDetailsTalk,
        More,
        IndexFind,
        IndexLogoFooter,
        RateStar,
        IndexDetailPic
    },
    created(){
        this.axios({
            url:"/all",
            method:"get"
        }).then(
            (ok)=>{
                ok.data.movie.filter((v,i)=>{
                    if(this.$route.params.id==v.id){
                        this.showArr=v;
                        console.log(this.showArr)
                        return;
                    }
                })
                ok.data.books.filter((v,i)=>{
                    if(this.$route.params.id==v.id){
                        this.showArr=v;
                        console.log(this.showArr)
                        return;
                    }
                })
                ok.data.shouye.filter((v,i)=>{
                    if(this.$route.params.id==v.id){
                        this.showArr=v;
                        console.log(this.showArr)
                        return;
                    }
                })
            },
            (err)=>{
                console.log(err);
            }
        )
    },
   data(){
       return {
           searchArr:[
               {
          "title": "同时入选IMDB250和豆瓣电影250的电影",
          "href": "https://m.douban.com/doulist/968362/",
          "color": "#FFAC2D"
        },
        {
          "title": "带你进入不正常的世界",
          "href": "https://m.douban.com/doulist/16002",
          "color": "#FF4055"
        },
        {
          "title": "用电【影】来祭奠逝去的岁月",
          "href": "https://m.douban.com/doulist/190343",
          "color": "#4F9DED"
        },
        {
          "title": "女孩们的故事【电影】",
          "href": "https://m.douban.com/doulist/1125971",
          "color": "#FFC46C"
        },
        {
          "line": true
        },
        {
          "title": "科幻是未来的钥匙——科幻启示录【科幻题材】",
          "href": "https://m.douban.com/doulist/4253902",
          "color": "#2384E8"
        },
        {
          "title": "美国生活面面观",
          "href": "https://m.douban.com/doulist/121326",
          "color": "#3BA94D"
        },
        {
          "title": "2015终极期待",
          "href": "https://m.douban.com/doulist/37479562",
          "color": "#42BD56"
        },
        {
          "title": "经典韩国电影——收集100部",
          "href": "https://m.douban.com/doulist/458087",
          "color": "#CC3344"
        }
           ],
           showArr:[]
       }
       
   }
}
</script>

<style scoped>
.details{
    flex:1;
    overflow: auto;
}
.detailsContents{
    width: 100%;
    padding:0 .2rem;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.detailsContentsLeft{
    width:2rem;
    height:100%;
}
.detailsContentsLeft>h1{
    color:#000000;
    font-size: .20rem;
    font-weight: 600;
    margin:.1rem 0 .05rem;
}
.detailsContentsLeft>p:nth-of-type(1){
    color:#aaaaaa;
    font-size: .13rem;
    display: flex;
}
.detailsContentsLeft>p:nth-of-type(1)>span{
    margin-left: .02rem;
}
.detailsContentsLeft>p:nth-of-type(2){
    color:#494949;
    font-size: .13rem;
}
.detailsContentsLeft>p:nth-of-type(3){
    font-size: .13rem;
    color:#42bd56;
}
.detailsContents>img{
    width: 1.2rem;
    height: 1.6rem;
}
/* 详情页按钮样式 */
.detailsButton{
    display: flex;
    justify-content: space-between;
    padding:0 .2rem;
    margin-bottom:.2rem;
}
.detailsButton>div{
    border:1px solid #ffb712;
    border-radius: .01rem;
    height: .36rem;
    line-height: .36rem;
    text-align: center;
    color:#ffb712;
    width:1.6rem;
}
.intro{
    padding:0 .2rem;
}
.intro p:nth-of-type(2){
    font-size:.14rem;
    color:#494949;
}
.classifyss{
    overflow: auto;
    white-space: nowrap;
}
.classifyss>span{
    display: inline-block;
    text-align: center;
    color:#494949;
    background: #f5f5f5;
    font-size: .14rem;
    height: .3rem;
    line-height: .3rem;
    border-radius: .15rem;
    padding:0 .15rem;
    margin-right: .05rem;
}
.detailsTalk{
    padding:0 .2rem;
}
</style>