<template>
    <div id="wrapper">
        <form action="#" id="form-login" onsubmit="return kptk()" method="post">
            <h1 class="form-heading1">Khôi phục tài khoản</h1>
            <div class="form-group">
                <i class="fas fa-phone"></i>
                <input id="phone" type="text" class="form-input" placeholder="Nhập số điện thoại đã đăng ký">
            </div>
            <input type="submit" value="Gửi yêu cầu" class="form-submit">
            <div class="form-heading2"><a href="">
                    <router-link :to="{ name: 'admin-login' }" style="text-decoration: none;color:#ffff ">
                        <span class="ms-3 me-3">Quay về trang đăng nhập</span>
                    </router-link></a></div>
        </form>
    </div>
</template>

<script>
//  trạng thái pinia
import { useMenu } from "../../../stores/use-menu.js"
export default {
    setup() {
        useMenu().onSelectedKeys(["admin-khoiphuctk"]);
    }
}
function kptk() {
    const phone = document.getElementById("phone").value.trim();

    if (phone === "") {
        alert("Vui lòng nhập số điện thoại hoặc email đẫ đăng ký");
        return false;
    }

    alert("Đã gửi yêu cầu mã xác minh khôi phục tài khoản");
    return true;
}


</script>

<style>
#wrapper {
    position: relative;
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#form-login {
    max-width: 500px;
    /* background: rgb(127, 92, 188); */
    background-image: linear-gradient(to right top, rgb(255, 241, 241), rgb(108, 255, 248), rgb(255, 99, 242), rgb(255, 241, 241));
    flex-grow: 1;
    flex-grow: 1;
    padding: 30px 30px 40px;
    box-shadow: 0px 0px 17px 2px rgba(255, 255, 255, 0.8);
}

.form-heading1 {
    font-size: 25px;
    /* color: #000; */
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
}

.form-heading3 a {
    /* color: #000; */
    font-size: 12px;

}

.form-heading3 a:hover {
    color: rgb(255, 24, 24);
}

.form-heading2 {
    text-align: center;
    /* color: #000; */
    font-size: 15px;
}

.form-heading2 a {
    color: #000
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
    background: transparent;
    border: 1px solid #000;
    color: #000;
    width: 40%;
    font-weight: bold;
    padding: 12px 5px 12px 5px;
    transition: 0.25s ease-in-out;
    margin-left: 30%;
    margin-top: 20px;
    margin-bottom: 20px;
}

.form-submit:hover {
    border: 1px solid #555;
    color: #fff;
    cursor: pointer;
    background-image: linear-gradient(rgb(255, 7, 7), #444444);
}
</style>