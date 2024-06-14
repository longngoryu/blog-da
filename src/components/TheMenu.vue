<template>
  <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline" theme="aqua">
    <a-menu-item key="admin-home" >
      <router-link :to="{ name: 'admin-home' }" style="text-decoration: none">
        <span>Trang chủ</span>
      </router-link>
    </a-menu-item>

    <div class="btn-group dropend">
      <a-menu-item key="admin-home"  data-bs-toggle="dropdown" aria-expanded="false ">
      <router-link :to="{ name: 'admin-home' }" style="text-decoration: none ;">
        <span>Chuyến đi</span>
      </router-link>
    </a-menu-item>
      <ul class="dropdown-menu" style="width:200px; background-color: floralwhite; box-shadow: 1px 2px 1px 2px ; height: 100px; justify-content: center;align-content: center;">
        <li style="padding:10px">
          <a class="dropdown-item " href="#">
            <router-link :to="{ name: 'admin-trip' }" style="text-decoration: none">
              <span>Du lịch</span>
            </router-link></a>
        </li>
        <li style="padding:10px">
          <a class="dropdown-item" href="#">
            <router-link :to="{ name: 'admin-foods' }" style="text-decoration: none">
              <span>Ẩm thực</span>
            </router-link></a>
        </li>
        <li style="padding:10px">
          <a class="dropdown-item" href="#">
            <router-link :to="{ name: 'admin-wonder' }" style="text-decoration: none">
              <span>Kỳ quan</span>
            </router-link></a>
        </li>
      </ul>
    </div>

    <a-menu-item key="admin-about">
      <router-link :to="{ name: 'admin-about' }" style="text-decoration: none">
        <span>Về chúng tôi</span>
      </router-link>
    </a-menu-item>

    <a-menu-item key="admin-contact">
      <router-link :to="{ name: 'admin-contact' }" style="text-decoration: none">
        <span>Liên hệ</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="admin-login">
      <router-link :to="{ name: 'admin-login' }" style="text-decoration: none">
        <span>Đăng nhập</span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>
<script>
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { useMenu } from "../stores/use-menu.js";
export default defineComponent({
  setup() {
    const store = useMenu();
    return {
      ...storeToRefs(store),
    };
  },
});
</script>
