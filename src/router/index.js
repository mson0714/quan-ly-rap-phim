import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
const routes = [
  {
    path: "/",
    component: () => import("../components/Admin/QuanLyThanhToanKhuyenMai/quanLyVoucher.vue"),
  },
  {
    path: "/thanh-toan",
    component: () => import("../components/Admin/QuanLyThanhToanKhuyenMai/quanLyThanhToan.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
