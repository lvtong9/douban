<template>
    <div class="views">
        <div class="viewsHeader">
            <h3>分类浏览</h3>
        </div>
        <div class="viewsContent">
            <div class="viewsNav" v-for="(v,i) in searchData" :key="i">
                <router-link to="#">{{v}}</router-link>
                <router-link to="#">
                    <img src="../../../static/img/jt.png">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        searchData:{
            type:Array,
            required:true
        }
    }
}
</script>

<style scoped>
    .router-link-active{
        text-decoration: none;
    }
   .views{
       width: 100%;
       padding:0 .02rem;
   }
   .viewsHeader{
       height: .53rem;
   }
   .viewsHeader>h3{
       font-size:.16rem;
       color:#111111;
       margin:0;
       height: .53rem;
       line-height: .53rem;
   }
   /* 导航样式 */
   .viewsContent{
       display: flex;
       flex-wrap: wrap;
   }
   .viewsNav{
       width:50%;
       border: 1px solid #f2f2f2;
       height: .50rem;
       box-sizing: border-box;
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding:0 .16rem;
   }
   .viewsNav:nth-child(even){
       border-left: none;
   }
    .viewsNav>a{
        font-size:.14rem;
        color: #42bd56;
    }
    .viewsNav>a>img{
        width:.08rem;
        height: .12rem;
    }
</style>