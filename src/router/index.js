import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
const routes = [
  {
    path: "/",
    component: () => import("../components/Admin/TenChucNang(QLND)/quanLyVoucher.vue"),
  },
  {
    path: "/thanh-toan",
    component: () => import("../components/Admin/TenChucNang(QLND)/quanLyThanhToan.vue"),
  },
  {
    path: "/quan-ly-phim",
    component: () => import("../components/Admin/QuanLyPhim/index.vue"),
  },
  {
    path: "/",
    component: () => import("../components/Admin/QLLC/index.vue"),
  },
  {
    path: "/qldv",
    component: () => import("../components/Admin/QLDV/index.vue"),
  },
  {
    path: "/QLND",
    component: () => import("../components/Admin/QuanLyNguoiDung/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
