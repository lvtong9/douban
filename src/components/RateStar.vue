<template>
    <el-rate  v-model="value" disabled show-score text-color="#ff9900" :score-template="score"></el-rate>
</template>

<script>
export default {
    props:["valueStar"],
    computed:{
        value(){
            return this.valueStar/2;
        },
        score(){
            return this.valueStar.toString();
        }
    },
}
</script>


<style>
    .el-rate__item .el-rate__icon{
        margin-right: 0.01rem;
        font-size: .14rem;
    }
</style>