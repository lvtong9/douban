<template>
        <router-link class="skip" :to="skipLink">{{skipName}}</router-link>
</template>

<script>
export default {
    props:{
        skipLink:{
            type:String,
            required:true
        },
        skipName:{
            type:String,
            required:true
        }
    }
}
</script>

<style scoped>
    .router-link-active{
        text-decoration: none;
    }
    .skip{
        display: inline-block;
        width:1.53rem;
        height:.53rem;
        background:#f6f6f6;
        border-radius:.04rem;
        text-align: center;
        line-height: .53rem;
        margin:.04rem 0;
        color:#494949;
        font-size: .14rem;
    }
    .skip:nth-child(odd){
        margin-right:.06rem;
    }
</style>