import { createRouter, createWebHistory } from 'vue-router';
import admin from './admin.js';
import { supabase } from "../supabase.js";

let User;

const routes = [
  ...admin, // lấy tất cả các đường path trong admin thành router đem sử dụng
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

async function getUser(next){
  User = await supabase.auth.getSession();
  if(User.data.session == null){
    next("/admin/fake")
  }else{
    next();
  }
}

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
      console.log("Requires Auth");
      getUser(next);
  }else{
      next();
  }
});

export default router;