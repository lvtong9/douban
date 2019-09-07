<template>
    <div class="radioHeader">
        <router-link to="#">打开App, 浏览更多</router-link>
        <div class="radioHeaderRight">
            <router-link to="#">极速下载</router-link>
            <router-link to="#">打开</router-link>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.radioHeader{
        width:100%;
        height: .79rem;
        background:url("../../../static/img/bg.jpg");
        background-size: 100%;
        padding:.32rem .12rem .18rem;
        display: flex;
        justify-content: space-between;
    }
    .radioHeader>a{
        width:1.81rem;
        text-align: center;
        height: .29rem;
        line-height: .29rem;
        color:#42bd56;
    }
    .radioHeaderRight{
        display: flex;
        justify-content: space-between;
    }
    .radioHeaderRight>a{
        border:1px solid #42bd56;
        font-size: .12rem;
        border-radius: .02rem;
        text-align: center;
        padding:.07rem .17rem;
        font-weight: 600;
    }
    .radioHeaderRight>a:nth-of-type(1){
        background:#42bd56;
        color:#ffffff;
        margin-right: .04rem;
    }
    .radioHeaderRight>a:nth-of-type(2){
        color:#42bd56;
    }
    .special{
        display: block;
        font-size: .16rem;
        color:#42bd56;
        text-align: center;
        height: .6rem;
        line-height:.6rem;
        margin-top:.17rem;
    }
</style>