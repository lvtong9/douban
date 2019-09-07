<template>
    <div class="books">
        <IndexMovieBanner :bannerArr="bookA" bannerTitle="最受关注图书｜虚构类"></IndexMovieBanner>
        <IndexMovieBanner :bannerArr="bookB" bannerTitle="最受关注图书｜非虚构类"></IndexMovieBanner>
        <IndexMovieBanner :bannerArr="bookC" hasTitle="false" bannerTitle="豆瓣纸书"></IndexMovieBanner>
        <IndexFind :findArr="findBookArr" findTitle="发现好书"></IndexFind>
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
        bookArr:[],
           findBookArr:[],
           searchArr:[
               "经典","冷门佳片","豆瓣高分","动作","喜剧","爱情","悬疑","恐怖","科幻","治愈","文艺","成长","动画","华语","欧美","韩国","日本"
           ]
       }
   },
   computed:{
       bookA(){
           var arrA=this.bookArr.filter((v,i)=>{
               if(i<14){
                   return v;
               }
           })
           return arrA;
       },
       bookB(){
           var arrB=this.bookArr.filter((v,i)=>{
               if(i>=14 && i<28){
                   return v;
               }
           })
           return arrB;
       },
       bookC(){
           var arrC=this.bookArr.filter((v,i)=>{
               if(i>=28){
                   return v;
               }
           })
           return arrC;
       }
   },
   created(){
       this.axios({
           url:"/dbbook",
           method:"get"
       }).then(
           (ok)=>{
               this.bookArr=ok.data.books;
            },
           (err)=>{
               console.log(err);
            }
       ), 
     this.axios({
           url:"/dbgoodbook",
           method:"get"
       }).then(
           (ok)=>{
               this.findBookArr=ok.data.goodBook;
               console.log(ok.data.goodBook);
           },
           (err)=>{
               console.log(err);
           }
       )
   }
}
</script>

<style scoped>
   .books{
       width: 100%;
       padding:0 .2rem .25rem;
       flex: 1;
       overflow: auto;
   }
</style>