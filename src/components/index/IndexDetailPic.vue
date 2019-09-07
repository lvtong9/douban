<template>
    <div class="pic">
        <p>{{tit}}的图片</p>
        <div class="mypicBanners">
            <div v-for="(v,i) in mydata" :key="i">
                <img :src="v.avatars.large">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        mydata:{
            type:Array,
            require:true
        },
        tit:{
            type:String,
            require:true
        }
    }
}
</script>


<style scoped>
    .pic{
        width:100%;
        padding:0 .2rem;
    }
    .pic>p{
        font-size:.14rem;
        color:#8f8f94;
        margin:.2rem 0;
    }
    .mypicBanners{
        width:100%;
        display: flex;
        overflow-x: auto;
    }
    .mypicBanners div{
        font-size: 0;
        margin-right: .1rem;
    }
    .mypicBanners img{
        height: 1.6rem;
    }
</style>