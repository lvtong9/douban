<template>
    <div class="FindMovies">
        <div class="FindMovieHeader">
            <h3>{{findTitle}}</h3>
            <router-link to="#">更多</router-link>
        </div>
        <div class="FindMovieContent">
            <span class="SingleMovieContent" v-for="(v,i) in findArr" :key="i">
                <router-link to="#" :style="{color:v.color}" v-if="!v.line">{{v.title}}</router-link>
            </span>
            <br>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        findArr:{
            type:Array,
            required:true
        },
        findTitle:{
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
   .FindMovies{
       width: 100%;
       padding:0 .02rem;
       
   }
   .FindMovieHeader{
       display: flex;
       justify-content: space-between;
       align-items: center;
       height: .53rem;
   }
   .FindMovieHeader>h3{
       font-size:.16rem;
       color:#111111;
       margin:0;
   }
   .FindMovieHeader>a{
       font-size:.14rem;
       color:#42bd56;
   }
   /* 发现好电影 */
   .FindMovieContent{
       white-space: nowrap;
       overflow-x: auto;
   }
   .SingleMovieContent{
       display: inline-block;
       padding:0 .30rem;
       font-size: .14rem;
       height: .6rem;
       line-height: .6rem;
       border:1px solid #ffac2d;
       border-radius: .06rem;
       letter-spacing:.02rem;
       margin-right: .15rem;
   }
   .SingleMovieContent:empty{
       display:block;
       width: 100%;
       height: .1rem;
       margin:0;
       border:0;
   }
</style>