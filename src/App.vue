<template>
    <router-view></router-view>
</template>

<script>


export default {
  name: 'app',
  components: {
  }
//  , mounted() {
    
// this.$router.beforeEach((to, from, next) => {
//     if(to.path=="/dblogin" || to.path=="/dbregister"){
//         next();
//     }else{
//         var usercard=localStorage.getItem("usercard");
//         this.axios({
//           url:"http://localhost:3000/radio",
//           method:"get",
//           params:{usercard}
//         }).then(
//           (ok)=>{
//             if(ok.data.uname){
//                 next();
//             }else{
//               alert("不好意思，登录后才能访问");
//               // next("/dblogin");
//             }
//           },
//           (err)=>{
//             console.log(err);
//           }
//         )
//     }
// })
//   }
}
</script>


<style>
html{
  font-size: 26.67vw;
}
html,body{
  height: 100%;
}
</style>
