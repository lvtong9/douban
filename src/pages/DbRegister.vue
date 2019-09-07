<template>
    <div class="register">
        <!-- 注册页面头部  -->
        <h3>欢迎加入豆瓣</h3>
        <!-- 注册页面主体  -->
        <div class="loginContent">
            <div class="mui-input-row">
                <input type="text" placeholder="邮箱" v-model="obj.sendemailR">
            </div>
            <div class="mui-input-row">
                <input type="password" class="mui-input-password" placeholder="密码" v-model="obj.sendpwdR">
            </div>
            <div class="mui-input-row">
                <input type="text" placeholder="用户名" v-model="obj.sendnameR">
            </div>
            <SubmitBtn btnName="立即注册" :dataArr="senddataR"></SubmitBtn>
            <p class="other">点击「注册」代表你已阅读并同意用户使用协议</p>  
            <div class="downloadDiv">
                <router-link to="#">下载豆瓣App</router-link>
            </div>
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
                sendemailR:"",
                sendpwdR:"",
                sendnameR:""
            }
        }
    },
    computed: {
        senddataR(){
            return [
                {sendemailR:this.obj.sendemailR},
                {sendpwdR:this.obj.sendpwdR},
                {sendnameR:this.obj.sendnameR},
            ]
        }
    }
}
</script>

<style scoped>
    /* 注册页面头部样式 */
    h3{
        font-size: .38rem;
        color:#42bd56;
        text-align: center;
        height:1.26rem;
        line-height: 1.26rem;
        font-weight: 100;
        margin-bottom: .15rem;
    }

    /* 注册页面主体样式*/
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
        color: #cccccc;
        font-size: .14rem;
    }
    .other{
        font-size: .14rem;
        color:#aaaaaa;
        height: .65rem;
        line-height: .65rem;
        margin:0;
        text-align: center;
    }
    .downloadDiv{
        text-align: center;
        line-height: .65rem;
        height:.65rem;
    }
    a{
        color:#42bd56;
    }
</style>