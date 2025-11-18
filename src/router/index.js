import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
const routes = [
  {
    path: "/admin/quan-ly-nguoi-dung",
    component: () => import("../components/Admin/QuanLyNguoiDung/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
