const admin = [
    {
        path: "/admin",
        component: () => import("../layouts/admin.vue"),
        children: [
            {
                path: "/",
                name: "admin-home",
                component: () => import("../pages/admin/home/index.vue")
            },
            {
                path: "about",
                name: "admin-about",
                component: () => import("../pages/admin/about/index.vue"),
                meta: { requiresAuth: true}
            },
            {
                path: "contact",
                name: "admin-contact",
                component: () => import("../pages/admin/contact/index.vue") ,
                 meta: { requiresAuth: true}

            },
            {
                path: "login",
                name: "admin-login",
                component: () => import("../pages/admin/login/index.vue")
            },
            {
                path: "signin",
                name: "admin-signin",
                component: () => import("../pages/admin/signin/index.vue")
            },
            {
                path: "khoiphuctk",
                name: "admin-khoiphuctk",
                component: () => import("../pages/admin/khoiphuctk/index.vue")
            },
            {
                path: "trip",
                name: "admin-trip",
                component: () => import("../pages/admin/discover/trip.vue"),
                

            },
            {
                path: "foods",
                name: "admin-foods",
                component: () =>   import("../pages/admin/discover/foods.vue"),
               

            },
            {
                path: "wonder",
                name: "admin-wonder",
                component: () =>   import("../pages/admin/discover/wonder.vue"),
            

            },
            {
                path: "fake",
                name: "admin-fake",
                component: () =>   import("../pages/admin/Fake/index.vue")
            },
            {
                path: "chuyendi",
                name: "admin-chuyendi",
                component: () =>   import("../pages/admin/views/nhungchuyendiynghia.vue")
            },
            {
                path: "dulich",
                name: "admin-dulich",
                component: () =>   import("../pages/admin/views/dulich.vue")
            },
            {
                path: "amthuc",
                name: "admin-amthuc",
                component: () =>   import("../pages/admin/views/amthuc.vue")
            },
            {
                path: "kyquan",
                name: "admin-kyquan",
                component: () =>   import("../pages/admin/views/kiquan.vue")
            },
            //  dẫn link bài viết từng phần

            // {
            //     path: "views",
            //     name: "admin-views",
            //     component: () => import("../pages/admin/views/index.vue"),
            //     children: [
            //         {
            //             path: "vietnam",
            //             name: "vietnam",
            //             component: () => import("../pages/admin/views/VietNam/index.vue")
            //         },
            //     ]
            // },
            // {
            //     path: "b2",
            //     name: "bai2",
            //     component: () => import("../pages/admin/views/Amthuc.vue")
            // },
            // {
            //     path: "b3",
            //     name: "bai3",
            //     component: () => import("../pages/admin/views/baotang.vue")
            // },
            // {
            //     path: "b4",
            //     name: "bai4",
            //     component: () => import("../pages/admin/views/bianaicap.vue")
            // },
            // {
            //     path: "b5",
            //     name: "bai5",
            //     component: () => import("../pages/admin/views/cacmonanhngonnhat.vue")
            // },

            // {
            //     path: "b6",
            //     name: "bai6",
            //     component: () => import("../pages/admin/views/cacquocgiatungdiqua.vue")
            // },

            // {
            //     path: "b7",
            //     name: "bai7",
            //     component: () => import("../pages/admin/views/diadiemdulich.vue")
            // },

            // {
            //     path: "b8",
            //     name: "bai8",
            //     component: () => import("../pages/admin/views/connguoioday.vue")
            // },

            // {
            //     path: "b9",
            //     name: "bai9",
            //     component: () => import("../pages/admin/views/vanhoacacnuoc.vue")
            // },

            // {
            //     path: "b10",
            //     name: "bai10",
            //     component: () => import("../pages/admin/views/vanhoatoithich.vue")
            // },

            // {
            //     path: "b11",
            //     name: "bai11",
            //     component: () => import("../pages/admin/views/viewstokyo.vue")
            // },


            // {
            //     path: "b12",
            //     name: "bai12",
            //     component: () => import("../pages/admin/views/viewsvietnam.vue")
            // },

            // {
            //     path: "b13",
            //     name: "bai13",
            //     component: () => import("../pages/admin/views/viewshylap.vue")
            // },
            // {
            //     path: "b14",
            //     name: "bai14",
            //     component: () => import("../pages/admin/views/trangphuc.vue")
            // },



            // tạo thêm một đường link liên kết trong children nếu muốn thêm 1 liên kết
        ]


    }
]
export default admin;
//  nếu muốn tạo thêm trang liên kết thì tạo một file thư mục bên trong pages=> thêm index.vue
