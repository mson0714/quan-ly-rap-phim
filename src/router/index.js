import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
const routes = [
  {
    path: "/",
    component: () => import("../components/Admin/TenChucNang(QLND)/index.vue"),
  },
  {
    path: "/quan-ly-phim",
    component: () => import("../components/Admin/QuanLyPhim/index.vue"),
  },
  {
    path: "/admin/quan-ly-phong-chieu",
    component: () => import("../components/Admin/QuanLyPhongChieu/index.vue"),
  },
  

];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
