<template>
    <div class="footer">
        <div class="footerLogo">
            <img src="../../../static/img/db.png">
            <div>
                <p>豆瓣</p>
                <p>我们的精神角落</p>
            </div>
        </div>
        <router-link to="#">去 App Store 免费下载 iOS 客户端</router-link>
        
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
   .footer{
       padding:.42rem 0;
       
   }
   .footerLogo{
       display: flex;
       justify-content: center;
       align-items: center;
   }
   .footerLogo>img{
       width:.42rem;
       margin-right:.1rem;
   }
   .footerLogo p{
       margin: 0;
       font-size:.1rem;
       color:#111111;
   }
   .footerLogo p:nth-of-type(1){
       font-size:.18rem;
   }
   .footer>a{
       display: block;
       color: #42bd56;
       font-size:.12rem;
       text-align: center;
       height: .42rem;
       line-height: .42rem;
   }
</style>