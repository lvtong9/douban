<template>
    <div class="movies">
        <IndexMovieBanner :bannerArr="movieA" bannerTitle="影院热搜"></IndexMovieBanner>
        <IndexMovieBanner :bannerArr="movieB" bannerTitle="免费在线观影"></IndexMovieBanner>
        <IndexMovieBanner :bannerArr="movieC" bannerTitle="新片速递"></IndexMovieBanner>
        <IndexFind :findArr="findMovieArr" findTitle="发现好电影"></IndexFind>
        <IndexView :searchData="searchArr"></IndexView>
        <IndexLogoFooter></IndexLogoFooter>
    </div>
</template>

<script>
import IndexMovieBanner from './IndexMovieBanner'
import IndexFind from './IndexFind'
import IndexView from './IndexView'
import IndexLogoFooter from './IndexLogoFooter'
export default {
   components:{
       IndexMovieBanner,
       IndexFind,
       IndexView,
       IndexLogoFooter
   },
   data(){
       return {
           movieArr:[],
           findMovieArr:[],
           searchArr:[
               "经典","冷门佳片","豆瓣高分","动作","喜剧","爱情","悬疑","恐怖","科幻","治愈","文艺","成长","动画","华语","欧美","韩国","日本"
           ]
       }
   },
   computed:{
       movieA(){
           var arrA=this.movieArr.filter((v,i)=>{
               if(i<=29){
                   return v;
               }
           })
           return arrA;
       },
       movieB(){
           var arrB=this.movieArr.filter((v,i)=>{
               if(i>=30 && i<=58){
                   return v;
               }
           })
           return arrB;
       },
       movieC(){
           var arrC=this.movieArr.filter((v,i)=>{
               if(i>=59 && i<=87){
                   return v;
               }
           })
           return arrC;
       }
   },
   created(){
       this.axios({
           url:"/dbmovie",
           method:"get"
       }).then(
           (ok)=>{
               this.movieArr=ok.data.movie;
               console.log(ok.data.movie)
            },
           (err)=>{
               console.log(err);
            }
       ),
       this.axios({
           url:"/dbfind",
           method:"get"
       }).then(
           (ok)=>{
               this.findMovieArr=ok.data.faxianhaodianying;
               console.log(ok.data.faxianhaodianying);
           },
           (err)=>{
               console.log(err);
           }
       )
   }
}
</script>

<style scoped>
   .movies{
       width: 100%;
       height: .53rem;
       padding:0 .2rem .25rem;
       flex: 1;
       overflow: auto;
   }
</style>