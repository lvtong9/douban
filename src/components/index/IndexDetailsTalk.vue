<template>
    <router-link to="#" class="singleRadioTalk">
        <img src="../../../static/img/db.png">
        <div class="RadioTalkRight">
            <span>豆瓣</span>
            <p>2017-03-01 19:30:41</p>
            <div  class="RadioTalkContent">
                <p>- 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...</p>
            </div>
            <div class="score">
                <div class="scoreLeft">
                    <span class="iconfont icon-zan"></span><span>4</span>
                </div>
                <span class="iconfont icon-gengduo"></span>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .singleRadioTalk{
        display: block;
        display: flex;
        justify-content: space-between;
        width:100%;
        padding-top:.22rem;
        border-bottom:1px solid #e8e8e8;
    }
    .singleRadioTalk>img{
        width:.48rem;
        height:.48rem;
        border-radius: 50%;
    }
    .RadioTalkRight>span{
        font-size: .16rem;
        line-height: .18rem;
        height: .18rem;
        margin:.12rem 0 0;
        color:#494949;
        font-weight:600;
    }
    .RadioTalkRight>p{
        font-size: .14rem;
        color:#aaaaaa;
        height: .27rem;
        line-height: .27rem;
        margin-bottom: .06rem;
    }
    .RadioTalkContent{
        width:2.71rem;
        border-radius: .04rem;
    }
    .RadioTalkContent>h4{
        margin:0;
        color:#494949;
        font-size: .17rem;
        height: .32rem;
        line-height: .32rem;
    }
    .RadioTalkContent>p{
        margin:0;
        color:#aaaaaa;
        font-size:.12rem;
        line-height: .19rem;
    }
    .score{
        display: flex;
        justify-content: space-between;
    }
    .score span{
        font-size: .18rem;
        color:#cfcfcc;
        height: .74rem;
        line-height: .74rem;
    }
    .score span:nth-of-type(odd){
        margin-right: .08rem;
    }
    .score span:nth-of-type(even){
        margin-right: .28rem;
    }
</style>