<template>
    <div class="indexradios">
        <!-- 广播头部 -->
       <IndexRadioHeader></IndexRadioHeader>
       <!-- 广播登录状态 -->
       <IndexHeaderLogin></IndexHeaderLogin>
       <!-- 广播论坛 -->
        <IndexRadioTalk v-for="(v,i) in arr" :key="i"></IndexRadioTalk>
        <!-- 广播底部 -->
        <More moreText="显示更多广播" hrefText="/dbindex/radio"></More>
        <IndexLogoFooter></IndexLogoFooter>
    </div>
</template>

<script>
import IndexRadioHeader from './IndexRadioHeader'
import IndexRadioTalk from './IndexRadioTalk'
import IndexHeaderLogin from './IndexHeaderLogin'
import More from './More'
import IndexLogoFooter from './IndexLogoFooter'
export default {
    components:{
        IndexRadioHeader,
        IndexRadioTalk,
        IndexHeaderLogin,
        More,
        IndexLogoFooter
    },
    data(){
        return {
            arr:["1","2","3","1","2","3"]
        }
    }
}
</script>

<style scoped>
    /* 广播样式 */
    .indexradios{
        margin:0;
        flex:1;
        overflow:auto;
    }
</style>