<template>
    <router-link :to="{name:'IndexDetails',params:{id:sketchId}}" class="sketch" :myId="sketchId">
        <div class="sketchTop">
            <div class="sketchLeft">
                <h1>{{sketchTitle}}</h1>
                <p>{{sketchCon}}</p>
            </div>
            <img :src="sketchImg" class="sketchRight">
        </div>
        <div class="sketchBottom">
            <router-link to="#">{{sketchTypeLeft}}</router-link>
            <router-link to="#" v-if="isTrue">本活动来自栏目&nbsp;{{sketchTypeRight}}</router-link>
            <router-link to="#" v-else>{{sketchTypeRight}}</router-link>
        </div>
    </router-link>

    

</template>

<script>
export default {
    props:{
        sketchTitle:{
            type:String,
            required:true
        },
        sketchCon:{
            type:String,
            required:true
        },
        sketchImg:{
            type:String,
            required:true
        },
        sketchTypeLeft:{
            type:String,
            default:""
        },
        sketchTypeRight:{
            type:String,
            default:""
        },
        sketchId:{
            type:String,
            required:true
        }
    },
    computed:{
        isTrue(){
            return this.sketchTypeRight!=""
        }
    },
    data(){
        return {
            myId:""
        }
    }
}
</script>

<style scoped>
    .router-link-active{
    text-decoration: none;
    }
    .sketch{
        display: block;
        height: 2.24rem;
        padding-top: .29rem;
        padding-bottom:.30rem;
        border-bottom:1px solid #e3e3e3;
    }
    .sketchTop{
        width:100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: .14rem;
    }
    .sketchLeft{
        width:2.15rem;
    }
    .sketchLeft h1{
        line-height: .23rem;
        font-size: .17rem;
        font-weight: 100;
        margin:0 0 .12rem;
        color:#494949;
    }
    .sketchLeft p{
        line-height: .19rem;
        font-size:.12rem;;
        color:#aaaaaa;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display:-webkit-box;
        -webkit-line-clamp:2;
        line-clamp:2;
        -webkit-box-orient: vertical;
        word-break: break-all;
    }
    img{
        width:.85rem;
        height: 1.04rem;
    }
    a{
        color:#cccccc;
        font-size: .12rem;
    }
    .sketchBottom{
        display: flex;
        justify-content: space-between;
    }
</style>