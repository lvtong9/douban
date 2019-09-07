<template>
    <router-link to="#" class="moudel">
        <h1 :class="searchColor">{{searchTitle}}</h1>
        <p>{{searchContent}}</p>
    </router-link>
</template>

<script>

    
export default {
    props:{
        searchTitle:{
            type:String,
            required:true
        },
        searchContent:{
            type:String,
            required:true
        },
        searchColor:{
            type:String,
            required:true
        }
    }
}

</script>

<style scoped>
    .moudel{
        display: block;
        width:33.3%;
        text-align: center;
        margin:.20rem 0;
    }
    .router-link-active {
        text-decoration: none;
    }
    h1{
        font-size: .22rem;
        margin:0;
    }
    .sendColorA{
        color:#2384e8;
    }
    .sendColorB{
        color:#7a6adb;
    }
    .sendColorC{
        color:#9f7860;
    }
    .sendColorD{
        color:#e6467e;
    }
    .sendColorE{
        color:#51c5d5;
    }
    .sendColorF{
        color:#f48f2e;
    }
    .sendColorG{
        color:#9f7860;
    }
    .sendColorH{
        color:#5774c5;
    }
    .sendColorI{
        color:#596cdd;
    }
    .sendColorJ{
        color:#e1644d;
    }
    .sendColorK{
        color:#40cfa9;
    }
    .sendColorL{
        color:#42bd56;
    }
    p{
        font-size: .12rem;
        height:.21rem;
        line-height:.21rem;
        margin:0;
    }
</style>