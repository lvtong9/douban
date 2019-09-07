<template>
    <div class="radios">
        <!-- 广播登录状态 -->
       <router-link to="/dblogin" class="radioState" v-if="!radioTrue">
           <div  class="radioStateLeft">
               <img src="static/img/user.jpg">
               <span>请先登录</span>
           </div>
           <div  class="radioStateRight">
               <span class="iconfont icon-Writetext"></span>
               <span class="iconfont icon-LC_icon_camera_line_2"></span>
           </div>
       </router-link>
       <router-link to="/dblogin" class="radioState" v-else>
           <div  class="radioStateLeft">
               <img src="static/img/user.jpg">
               <span>欢迎您,{{username}}</span>
           </div>
           <div  class="radioStateRight">
               <span class="iconfont icon-Writetext"></span>
               <span class="iconfont icon-LC_icon_camera_line_2"></span>
           </div>
       </router-link>
    </div>
</template>

<script>
export default {
    
    data(){
        return {
            radioTrue:false,
            username:""
        }
    }
    // ,created(){
    //     var usercard=localStorage.getItem("usercard");
    //     console.log(usercard);
    //     this.axios({
    //         url:"http://localhost:3000/radio",
    //         method:"get",
    //         params:{usercard}
    //     }).then(
    //         (ok)=>{
    //             console.log(ok);
    //             if(ok.data.status){
    //                 this.radioTrue=true;
    //                 this.username=ok.data.uname;
    //                 return
    //             }
    //             this.radioTrue=false;
    //         },
    //         (err)=>{
    //             console.log(err);
    //         }
    //     )
    // }
}
</script>

<style scoped>
    /* 广播登录状态样式 */
    .radioState{
        display: block;
        width:100%;
        height:.82rem;
        border-bottom:2px solid #e8e8e8;
        padding:.1rem .31rem .1rem .22rem;
        display: flex;
        justify-content: space-between;
    }
    .radioStateLeft{
        display: flex;
        align-items: center;

    }
    .radioStateLeft>img{
        border-radius: 50%;
        margin-right:.11rem;
    }
    .radioStateLeft>span{
        font-size:.15rem;
        color:#aaaaaa;
    }
    .radioStateRight span{
        font-size: .29rem;
        color:#cfcfcf;
    }
    .radioStateRight{
        display: flex;
        align-items: center;
    }
    .radioStateRight span:nth-of-type(1){
        margin-right: .29rem;
    }
</style>