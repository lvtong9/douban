<template>
    <div class="module">
        <h3>{{moduleTitle}}</h3>
        <div v-for="(v,i) in moduleArr" :key="i">
            <div class="moduleContent">
                <div class="moduleContentLeft">
                    <img :src="v.images.small">
                    <h3>{{v.title}}</h3>
                </div>
                <span>{{v.group_member}}人</span>
            </div>
            <p>{{v.group_topic.time}}{{v.group_topic.title}}</p>
        </div>
        <router-link to="#">{{moduleBanner}}</router-link>
    </div>
</template>

<script>
export default {
    props:{
        moduleTitle:{
            type:String,
            required:true
        },
        moduleArr:{
            type:Array,
            required:true
        },
        moduleBanner:{
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
    .module{
        padding-bottom:.06rem;
    }
    .module h3{
        font-size:.17rem;
        color:#111111;
    }
    .module h3{
        margin-top:.35rem;
    }
    .module>div{
        margin-top:.2rem;
        border-bottom:1px solid #e8e8e8;
    }
    .moduleContent{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .moduleContent>span{
        color:#cccccc;
        font-size: .15rem;
    }
    .moduleContentLeft{
        display: flex;
        align-items: center;
    }
    .moduleContentLeft>img{
        width: .48rem;
        height: .48rem;
        margin-right: .12rem;
    }
    .moduleContentLeft>h3{
        margin:0;
        width:2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .module p{
        font-size:.15rem;
        color:#aaaaaa;
        width:100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: .41rem;
        line-height: .41rem
    }
    a{
        display: block;
        font-size: .16rem;
        color:#42bd56;
        text-align: center;
        height: .6rem;
        line-height:.6rem;
    }
</style>