import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
const routes = [
  {
    path: "/",
    component: () => import("../components/Admin/TenChucNang(QLND)/index.vue"),
  },
  {
    path: "/quan-ly-voucher",
    component: () => import("../components/Admin/TenChucNang(QLND)/quanLyVoucher.vue"),
  },
  {
    path: "/quan-ly-thanh-toan",
    component: () => import("../components/Admin/TenChucNang(QLND)/quanLyThanhToan.vue"),
  },
  {
    path: "/quan-ly-phim",
    component: () => import("../components/Admin/QuanLyPhim/index.vue"),
  },
  {
    path: "/quan-ly-lich-chieu",
    component: () => import("../components/Admin/QLLC/index.vue"),
  },
  {
    path: "/quan-ly-dich-vu",
    component: () => import("../components/Admin/QLDV/index.vue"),
  },
  {
    path: "/quan-ly-danh-gia-phan-hoi",
    component: () => import("../components/Admin/QLDG&PH/index.vue"),
  },
  {
    path: "/quan-ly-nguoi-dung",
    component: () => import("../components/Admin/QuanLyNguoiDung/index.vue"),
  },
  {
    path: "/quan-ly-phong-chieu",
    component: () => import("../components/Admin/QuanLyPhongChieu/index.vue"),
  },
  {
    path: "/quan-ly-dat-ve",
    component: () => import("../components/Admin/QLDV/index.vue"),
  },

  
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
