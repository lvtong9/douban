<template>
    <div class="login">
        <!--  登录页面头部  -->
        <div class="loginHeader">
            <router-link to="/dbindex/douban">取消</router-link>
            <span>登录豆瓣</span>
            <span></span>
        </div>
        <!--  登录页面主体  -->
        <div class="loginContent">
            <div class="mui-input-row">
                <input type="text" placeholder="邮箱" v-model="obj.sendemailL">
            </div>
            <div class="mui-input-row">
                <input type="password" class="mui-input-password" placeholder="Token"  v-model="obj.sendpwdL">
            </div>
            <SubmitBtn btnName="登录" :dataArr="senddataL"></SubmitBtn>
            <p class="other">使用其他方式登录 & 找回密码</p>  
            <p class="other">
                <router-link to="/dbregister">注册豆瓣帐号</router-link>
                <router-link to="#">下载豆瓣App</router-link>
                <span @click="cancel()">注销</span>
            </p>  
        </div>
    </div>


</template>

<script>
import SubmitBtn from '../components/SubmitBtn'
export default {
    components:{
        SubmitBtn
    },
    data(){
        return{
            obj:{
                sendemailL:"",
                sendpwdL:""
            }
        }
    },
    methods:{
        cancel(){
            localStorage.removeItem("usercard");
        }
    },
    computed: {
        senddataL(){
            return [
                {sendemailL:this.obj.sendemailL},
                {sendpwdL:this.obj.sendpwdL},
            ]
        }
    }
}
</script>

<style scoped>
/* 登录页面头部样式 */
    .loginHeader{
        width:100%;
        height: 0.54rem;
        border-bottom:1px solid #eeeeee;
        margin-bottom:.36rem;
        padding:0 .18rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .loginHeader a{
        flex:1;
        font-size: .15rem;
        color:#42bd56;
        padding-left:.04rem;
    }
    .loginHeader span{
        flex:1;
        font-size: .18rem;
        font-weight: 600;
        text-align: center;
    }
    
    

/* 登录页面主体样式*/
    .loginContent{
        padding:0 .18rem;
    }

    .mui-input-row input{
        margin: 0;
        height: .53rem;
    }
    .mui-icon-eyen{
        top:.15rem;
    }
    input::-webkit-input-placeholder {
        color: #757575;
        font-size: .14rem;
    }
    .other{
        font-size: .14rem;
        color:#aaaaaa;
        height: .65rem;
        line-height: .65rem;
        margin:0;
    }
    .other:nth-of-type(1){
        text-align: center;
    }
    .other:nth-of-type(2){
        padding:0 .55rem 0 .55rem;
        display:flex;
        justify-content: space-between;
    }
    .other>a,.other>span{
        color:#42bd56;
    }
</style>