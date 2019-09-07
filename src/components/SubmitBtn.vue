<template>
    <div class="submitBtn">
        <button type="button" @click="hit()">{{btnName}}</button>
        <div class="tips tipsTrue" v-if="isTrue">{{tipsTxt}}</div>
        <div class="tips tipsFalse" v-else>{{tipsTxt}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tipsTxt:"",
            isTrue:true
        }
    },
    props:{
        //按钮名
        btnName:{
            type:String,
            required:true
        },
        //axios参数
        dataArr:{
            type:Array,
            required:true
        }
    },
    methods:{
        hit(){
            this.$router.push("/dbindex/douban");
            // var params=new URLSearchParams;
            // if(this.dataArr.length==3){
            //     if(this.dataArr[0].sendemailR!="" && this.dataArr[1].sendpwdR!="" && this.dataArr[2].sendnameR!=""){
            //         params.append("uemail",this.dataArr[0].sendemailR);
            //         params.append("upwd",this.dataArr[1].sendpwdR);
            //         params.append("uname",this.dataArr[2].sendnameR);
            //         var urladd="/apis/register"
            //     }else{
            //         alert("请输入用户信息");
            //         return;
            //     }
            // }else{
            //     if(this.dataArr[0].sendemailL!="" && this.dataArr[1].sendpwdL!=""){
            //         params.append("uemail",this.dataArr[0].sendemailL);
            //         params.append("upwd",this.dataArr[1].sendpwdL);
            //         var urladd="/apis/login"
            //     }else{
            //         alert("请输入用户信息");
            //         return;
            //     }
            // }
            
            // this.axios({
            //     url:urladd,
            //     method:"post",
            //     data:params
            // }).then(
            //     (ok)=>{
            //         console.log(ok);
            //         var i=4;
            //         if(ok.data.linkId==1){
            //             var time=setInterval(()=>{
            //                 i--;
            //                 if(i==0){
            //                     this.$router.push("/dblogin");
            //                     clearInterval(time);
            //                 }
            //                 this.tipsTxt="恭喜您注册成功，"+i+"秒后跳转至登录页面";
            //                 this.isTrue=true;
            //             },1000);
            //         }else if(ok.data.linkId==5){
            //             localStorage.setItem("usercard",ok.data.token);
            //             var time=setInterval(()=>{
            //                 i--;
            //                 if(i==0){
            //                     this.$router.push("/dbindex/douban");
            //                     clearInterval(time);
            //                 }
            //                 this.tipsTxt="恭喜您登录成功，"+i+"秒后跳转至首页";
            //                 this.isTrue=true;
            //             },1000);
            //         }else if(ok.data.linkId==2){
            //             this.tipsTxt="邮箱已存在，请重新注册";
            //             this.isTrue=false;
            //         }else if(ok.data.linkId==6){
            //             this.tipsTxt="您的信息输入有误，请重新登录";
            //             this.isTrue=false;
            //         }else{
            //             this.tipsTxt="网络超时，请尝试刷新页面重新登录";
            //             this.isTrue=false;
            //         }
            //     },
            //     (err)=>{
            //         console.log(err);
            //     }
            // )

        }
    }
}
</script>

<style scoped>
    .submitBtn{
        margin-top:.12rem;
    }
    button{
        width:100%;
        height:.5rem;
        font-size: .16rem;
        color:white;
        background: #17aa52;
    }
    .tips{
        width:100%;
        height: .2rem;
    }
    .tipsTrue{
        color:green;
    }
    .tipsFalse{
        color:red;
    }
</style>