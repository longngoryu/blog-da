<template>
    <div id="wrapper">
        <form id="form-login" method="post" @submit.prevent="Login">
            <h1 class="form-heading1">Đăng nhập</h1>
            <div class="form-group">
                <i class="far fa-user"></i>
                <input tabindex="1" required type="email" name="email" id="email" class="form-input"
                    placeholder="Email"
                    v-model="email"
                >
                    
            </div>
            <div class="form-group">
                <i class="fas fa-key"></i>
                <input tabindex="2" required type="password" name="password" id="password" class="form-input"
                    placeholder="Mật khẩu"
                    v-model="password"
                >
                <div id="eye">
                </div>

            </div>
            <input tabindex="3" required type="checkbox" id="checkbox" name="checkbox"><label class="checkbox-text">Nhớ
                mật khẩu</label>
            <div class="form-heading3"><a href="">
                    <router-link :to="{ name: 'admin-khoiphuctk' }" style="text-decoration: none;color:#ffff ">
                        <span class="ms-3 me-3">Khôi phục tài khoản</span>
                    </router-link></a></div>
            <div class="form-submit-wrapper">
                <button type="submit" value="Đăng nhập" class="form-submit">Đăng nhập</button>
            </div>
            <div class="form-heading2">Hoặc chưa có tài khoản vui lòng <a style="color: red;" href="">
                <router-link :to="{ name: 'admin-signin' }" style="text-decoration: none;color:#ffff ">
                    <span class="ms-3 me-3">Đăng Ký</span>
                </router-link></a></div>
        </form>
    </div>
</template>
<script setup>
    import {ref} from "vue"
    import {supabase} from "../../../supabase.js"
    import router from "../../../router/index.js";

    const email = ref("")
    const password = ref("")
    async function Login(){
        const {data, error} = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value
        })
        if(error){
            alert("Email hoặc mật khẩu không hợp lệ"); 
            console.log(error);
        }else{
            console.log(data);
            alert("Đăng nhập thành công");   
            router.push("/");
        }
    }
</script>
<script>

import { useMenu } from "../../../stores/use-menu.js"

export default {
    setup() {
        useMenu().onSelectedKeys(["admin-login"]);
    },
    data() {
        return {
            email: '',   // 2 biến hứng giá trị trả về const email=ref("")
            password: '',
        };
    },

};
</script>
<style>
#wrapper {
    min-height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

}

#form-login {
    
    max-width: 550px;
    border-radius: 20px;
    /* background-color: rgb(246, 246, 246); */
    background-image: linear-gradient(to bottom, rgb(255, 241, 241),rgba(161, 84, 255, 0.792),rgba(35, 130, 255, 0.878));
    background-size: 200% 120%;
    flex-grow: 1;
    padding: 30px 30px 40px;
    box-shadow: 8px 8px 3px 2px rgba(139, 139, 139, 0.8);
}

.form-heading1 {
    font-size: 30px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 30px;
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to left bottom, #000000, #000000, #ff3939, rgb(252, 252, 252));
    background-size: 80% 110%;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
}

.form-group {
    padding-bottom: 8px;
    border-bottom: 1px solid #000;
    margin-top: 15px;
    margin-bottom: 20px;
    display: flex;
}

.form-group i {
    /* color: #000; */
    font-size: 14px;
    padding-top: 5px;
    padding-right: 10px;
}

.form-input {
    background: transparent;
    border: 0;
    outline: 0;
    /* color: #000; */
    flex-grow: 1;
}

.form-input::placeholder {
    color: #ffffff;
}

#eye i {
    padding-right: 0;
    cursor: pointer;
}

.form-heading3 {
    text-align: right;
    font-weight: bold;

}

.form-heading3 a {


    color: #373737;
    font-size: 15px;
}

.form-heading3 a:hover {
    color: rgb(235, 4, 4);
}

.form-heading2 {
    text-align: center;
    /* color: #000; */
    font-size: 15px;
}

.form-heading2 a:hover {
    font-weight: bold;
    color: rgb(255, 24, 24);
    transform: scale(1.2);
    font-size: 17px;
}

.form-submit-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}

.form-submit {
    font-size: 17px;
    border: 0;
    background: transparent;
    border: 1px solid #000;
    border-radius: 10px;
    /* color: #000; */
    /* width: 40%; */
    font-weight: bold;
    padding: 10px 16px 10px 16px;
    transition: 0.25s ease-in-out;
    /* margin-left: 30%; */
    margin-top: 20px;
    margin-bottom: 20px;
    background-image: linear-gradient(rgb(244, 79, 126), #f3f3f3);
    font-family: sans-serif;
    box-shadow: 2px 2px 0px 2px rgba(139, 139, 139, 0.8);
}

.form-submit:hover {
    transform: scale(1.2);
    border: 0;
    color: #fff;
    cursor: pointer;
    background-image: linear-gradient(rgb(255, 7, 7), #444444);

}


a {
    color: #000;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

#checkbox {
    height: 12px;
}

.checkbox-text {
    font-size: 15px;
    margin-left: 5px;
}

#password:focus::placeholder,
#user:focus::placeholder {
    color: #979797;
}
</style>