<template>
    <router-link :to="hrefText" class="special">{{moreText}}</router-link>
</template>

<script>
export default {
    props:{
        moreText:{
            type:String,
            required:true
        },
        hrefText:{
            type:String,
            required:true
        }
    }
}
</script>

<style scoped>
    /* 广播样式 */
    .special{
        display: block;
        color: #42bd56;
        font-size: .14rem;
        text-align: center;
        margin-top:.3rem;
    }
</style>