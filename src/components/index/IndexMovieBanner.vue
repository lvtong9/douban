<template>
    <div class="mymovie">
        <div class="movieHeader"  v-if="hasTitle=='true'?true:false">
            <h3>{{bannerTitle}}</h3>
            <router-link to="#">更多</router-link>
        </div>
        <div v-else>
            <div class="movieHeader">
                <h3>{{bannerTitle}}</h3>
                <router-link to="#">更多</router-link>
            </div>
            <router-link to="#" class="movieHeaderContent">
                <img src="../../../static/img/book.jpg" alt="">
                <div>
                    <h3>造物<span>¥ 68</span></h3>
                    <p>改变世界的万物图典，3000幅图里的发明与冒险</p>
                </div>
            </router-link>
        </div>
        <div class="movieContent">
            <img src="../../../static/img/loading.gif" v-if="bannerArr.length<=0">
            <router-link :to="{name:'IndexDetails',params:{id:v.id}}" v-else class="singleMovieContent" v-for="(v,i) in bannerArr" :key="i" :movieId="v.id">
                <img :src="v.images.large">
                <p>{{v.title}}</p>
                <RateStar :valueStar="v.rating.average"></RateStar>
            </router-link>
        </div>
    </div>
</template>

<script>
import RateStar from '../RateStar'
export default {
    components:{
        RateStar
    },
    props:{
        bannerArr:{
            type:Array,
            required:true
        },
        bannerTitle:{
            type:String,
            required:true
        },
        hasTitle:{
            type:String,
            default:"true"
        }
    }
}
</script>
<style scoped>
    .router-link-active{
        text-decoration: none;
    }
   .mymovie{
       width: 100%;
       padding:0 .02rem;
   }
   .movieHeader{
       display: flex;
       justify-content: space-between;
       align-items: center;
       height: .53rem;
   }
   .movieHeader>h3{
       font-size:.16rem;
       color:#111111;
       margin:0;
   }
   .movieHeader>a{
       font-size:.14rem;
       color:#42bd56;
   }
   .movieHeaderContent{
       color:#494949;
       display: block;
       display: flex;
       margin-bottom: .15rem;
   }
   .movieHeaderContent>img{
       width: .93rem;
       margin-right:.12rem;
       height: 1.24rem;
   }
    .movieHeaderContent h3{
        font-size: .17rem;
        margin:.15rem 0;
    }
    .movieHeaderContent h3 span{
        float: right;
        color:#e76648;
        font-size: .14rem;
        font-weight: 100;
    }
    .movieHeaderContent p{
        font-size: .14rem;
        color:#9b9b9b;
    }
   /* 轮播样式 */
   .movieContent{
       display:flex;
       overflow: auto;
   }
   .movieContent>img{
        width:.4rem;
        margin:0 auto;
    }
   .singleMovieContent{
       display: block;
       width:1rem;
       margin-right:.05rem;
   }
   .singleMovieContent>img{
       width:1rem;
       height:1.4rem;
       margin-bottom: .06rem;
   }
   .singleMovieContent>p{
       text-align: center;
       font-size: .14rem;
       color:#111111;
       height: .3rem;
       line-height: .3rem;
       margin:0;
       width:1rem;
       white-space: nowrap;
       overflow: hidden;
       text-overflow: ellipsis;
   }
</style>