<template>
    <div id="wrapper">
        <form class="form1" action="#" id="form-login" method="post" @submit.prevent="createAccount">
            <h1 class="form-heading1">Đăng Ký</h1>
            <div class="form-group">
                <i class="far fa-user" style="color: #000000;"></i>
                <input type="email" id="email" class="form-input" placeholder="Email" v-model="email">
            </div>
            <div class="form-group">
                <i class="far fa-user" style="color: #000000;"></i>
                <input required type="text" id="name" class="form-input" placeholder="Name" v-model="name">
            </div>
            <div class="form-group">
                <label>
                    Sex:
                </label>
                <input type="radio" class="form-input-gt" name="Gender">

                Nam
                <input type="radio" class="form-input-gt" name="Gender">

                Nữ
            </div>
            <div class="form-group">
                <i class="fas fa-key"></i>
                <input required type="password" id="password" class="form-input" placeholder="Mật khẩu"
                    v-model="password">
                <div id="eye">
                </div>
            </div>
            <div class="form-group">
                <i class="fas fa-key"></i>
                <input required type="password" id="repassword" class="form-input" placeholder="Nhập lại mật khẩu "
                    v-model="repassword">
                <div id="eye">
                </div>
            </div>
            <div class="form-submit-wrapper">
                <button type="submit" class="form-submit">Đăng ký</button>
            </div>
            <div class="form-heading2">Quay về trang <a style="color: #fa0a0a; padding: 10px; " href="">
                    <router-link :to="{ name: 'admin-login' }" style="text-decoration: none;color:#ffff ">
                        <span class="ms-3 me-3">Đăng nhập</span>
                    </router-link></a></div>
        </form>
    </div>

</template>

<script>
import { useMenu } from "../../../stores/use-menu.js"
export default {
    setup() {
        useMenu().onSelectedKeys(["admin-signin"]);
    }
}

</script>
<script setup>
import { ref } from "vue"
import { supabase } from "../../../supabase.js"
import router from "../../../router/index.js";

const email = ref("");
const password = ref("");
const repassword = ref("");
const name = ref("");

async function createAccount() {
    if (password.value != repassword.value) {
        alert("Mật khẩu không trùng khớp, vui lòng nhập lại.");
        return;
    }

    const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
        options: {
            data: {
                name: name.value
            }
        }
    })
    if (error) {
        console.log(error);
    } else {
        console.log(data);
        alert("Đăng ký thành công");
        router.push("/admin/login");
    }
}
</script>
<style>
#wrapper {
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

#form-login {

    max-width: 550px;
    border-radius: 20px;
    /* background-color: rgb(246, 246, 246); */
    background-image: linear-gradient(to bottom, rgb(255, 241, 241), rgba(161, 84, 255, 0.792), rgba(35, 130, 255, 0.878));
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
    border-bottom: 1px solid #000000;
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

/*  ô placeholder  */
.form-input::placeholder {
    color: #000000;
}

#eye i {
    padding-right: 0;
    cursor: pointer;
}

.form-heading3 {
    text-align: right;
}

.form-heading3 a {
    /* color: #000; */
    font-size: 12px;
}


.form-heading2 {
    text-align: center;
    color: #ffffff;
    font-size: 17px;
}


.form-heading2 a:hover {
    font-weight: bold;
    color: rgb(255, 24, 24);
    transform: scale(1.2);
    font-size: 17px;
}

.form-input-gt {
    width: 50px;
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
</style>