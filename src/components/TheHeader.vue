<template>
    <div class="contaitner-fluid max-w-full" style="max-height: 30px">
      <div class="row text-white" style="background: linear-gradient(rgb(61, 94, 255), rgb(112, 212, 255))">
        <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
          <!--d-sm-none nằm sau d-flex-->
          <span @click="showDrawer()" style="width: 40px; height: 40px; cursor: pointer">
            <MenuOutlined />
          </span>
        </div>
        <div class="col-9 col-sm-6 d-flex align-items-center justify-content-center justify-content-sm-start">
          <router-link :to="{ name: 'admin-home' }" style="text-decoration: none; color: #ffff">
            <img src="../assets/logo1.png" alt="logo" class="ms-3 me-3" style="width: 40px; height: 40px" />
          </router-link>
        </div>
        <div class="col-sm-1 d-none d-sm-flex align-items-center justify-content-center justify-content-sm-end"
          style="margin-bottom: -17px; font-size: 13px">
          <ul class="hidden space-x-3 md:flex">
            <!-- line-height: -20px;" -->
            <li class="flex">
              <router-link :to="{ name: 'admin-home' }" style="text-decoration: none; color: #ffff; width:100px">
                <span class="ms-3 me-3" style="font-weight: bold"> Trang chủ </span>
              </router-link>
            </li>
  
            <li class="nav-item dropdown" style="align-content: center">
              <a class="nav-link dropdown-toggle ms-3 me-3" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false" style="font-weight: bold">
                Chuyến đi
              </a>
  
              <ul class="dropdown-menu" style="box-shadow: 1px 2px 4px 1px">
                <li style="text-align: center">
                  <router-link :to="{ name: 'admin-foods' }" style="text-decoration: none; color: red;">
                    <span class="ms-3 me-3" style="font-weight: bold">
                      Ẩm thực
                    </span>
                  </router-link>
                </li>
                <li style="text-align: center">
                  <router-link :to="{ name: 'admin-trip' }" style="text-decoration: none; color: red">
                    <span class="ms-3 me-3" style="font-weight: bold">
                      Du lịch
                    </span>
                  </router-link>
                </li>
                <li  style="text-align: center">
                  <router-link :to="{ name: 'admin-wonder' }" style="text-decoration: none; color: red">
                    <span class="ms-3 me-3" style="font-weight: bold; ">
                     Kỳ quan
                    </span>
                  </router-link>
                </li>
              </ul>
            </li>
  
            <li class="flex">
              <router-link :to="{ name: 'admin-about' }" style="text-decoration: none; color: #ffff;width:100px">
                <span class="ms-3 me-3" style="font-weight: bold">Chúng tôi</span>
              </router-link>
            </li>
            <li class="flex">
              <router-link :to="{ name: 'admin-contact' }" style="text-decoration: none; color: #ffff;width:100px">
                <span class="ms-3 me-3" style="font-weight: bold">Liên hệ</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-4 flex d-none d-sm-flex align-items-center justify-content-center justify-content-sm-end">
          <div class="items-center flex-shrink-0 hidden lg:flex">
            <router-link :to="{ name: 'admin-login' }" style="text-decoration: none">
              <button class="self-center  rounded" style="padding: 0px;"><font-awesome-icon :icon="['fas', 'circle-user']"
                  style="color: #ffff; font-size: 21px;" /></button>
            </router-link>
  
            <button class="self-center px-11 font-semibold rounded dark:text-gray-50" @click.prevent="Logout" >
              <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" style="color: #ffff;font-size: 21px;" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <a-drawer v-model:visible="visible" title="Danh mục" placement="left">
      <TheMenu />
    </a-drawer>
  </template>
  
  <script setup>
  import { ref } from "vue"
  import { supabase } from "../supabase.js"
  import { MenuOutlined } from '@ant-design/icons-vue';
  import TheMenu from '../components/TheMenu.vue';

  const visible = ref(false);
      const showDrawer = () => {
        visible.value = true;
      };
  
  async function Logout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    else {
      console.log("Đăng xuất thành công");
      alert("Đăng xuất thành công");
    }
  }
  </script>
  
  
  <style>
  /* Add this CSS to your stylesheet */
  .col-9.col-sm-6.d-flex img {
    width: 45px;
    height: 50px;
    transition: transform 0.3s ease;
    /* Smooth zoom effect over 0.3 seconds */
  }
  
  .col-9.col-sm-6.d-flex img:hover {
    transform: scale(2);
    /* Zoom in by 20% on hover */
    cursor: zoom-in;
    /* Change cursor to indicate zoom on hover */
  }
  
  /*   tiếp */
  /* Add this CSS to your stylesheet */
  .col-sm-1.d-none.d-sm-flex li span {
    font-size: 13px;
    /* Set initial font size */
    transition: font-size 0.3s ease;
    /* Smooth zoom effect over 0.3 seconds */
  }
  
  .col-sm-1.d-none.d-sm-flex li span:hover {
    font-size: 11px;
    /* Zoom in by 20% on hover (adjust as needed) */
    cursor: pointer;
    /* Change cursor to indicate interaction */
    color: rgb(153, 0, 255);
 
  }
  
  /*  tiếp */
  </style>