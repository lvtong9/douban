<template>
    <div class="group">
        <IndexHeaderLogin></IndexHeaderLogin>
        <div class="groupContent" v-if="groupArr.length<=0">
            <img src="../../../static/img/loading.gif">
        </div>
        <div class="groupContent" v-else>
            <IndexGroupModule moduleTitle="租房找室友" :moduleArr="groupArrA" moduleBanner="更多相关小组"></IndexGroupModule>
            <IndexGroupModule moduleTitle="来聊五块钱" :moduleArr="groupArrB" moduleBanner="来聊五块钱"></IndexGroupModule>
            <IndexGroupModule moduleTitle="买买买" :moduleArr="groupArrC" moduleBanner="更多相关小组"></IndexGroupModule>
        </div>
        <IndexLogoFooter></IndexLogoFooter>
    </div>
</template>

<script>
import IndexHeaderLogin from './IndexHeaderLogin'
import IndexGroupModule from './IndexGroupModule'
import IndexLogoFooter from './IndexLogoFooter'
export default {
    components:{
        IndexHeaderLogin,
        IndexGroupModule,
        IndexLogoFooter
    },
    data(){
        return {
            groupArr:[]
        }
    },
    computed:{
        groupArrA(){
            return this.groupArr.xiaozua;
        },
        groupArrB(){
            return this.groupArr.xiaozub;
        },
        groupArrC(){
            return this.groupArr.xiaozuc;
        }
    },
    created(){
        this.axios({
            url:"/dbgroup",
            method:"get"
        }).then(
            (ok)=>{
                this.groupArr=ok.data;
                console.log(ok.data);
                console.log(typeof this.groupArrA);
            },
            (err)=>{
                console.log(err);
            }
        )
    }
}
</script>

<style scoped>
    .group{
        flex:1;
        overflow:auto;
    }
    .groupContent{
        padding:0 .2rem;
    }
    .groupContent>img{
        display: block;
        width:.5rem;
        height: .5rem;
        margin:1rem auto;
    }
</style>