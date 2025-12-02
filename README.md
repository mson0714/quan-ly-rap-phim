# 🎬 Cinema Management System - Frontend

## 📋 Tổng Quan

Hệ thống quản lý rạp chiếu phim **Group 5 Cinema** được phát triển bằng Vue.js 3, cung cấp giao diện quản lý toàn diện cho việc vận hành rạp chiếu phim. Dự án sử dụng kiến trúc component-based với Vite làm build tool.

## ✨ Tính Năng Chính

### 🎭 Quản Lý Phim
- Xem danh sách phim
- Thêm, sửa, xóa phim
- Upload và quản lý hình ảnh phim
- Mô tả chi tiết phim

### 👥 Quản Lý Người Dùng
- Quản lý nhân viên
- Thông tin cá nhân (họ tên, email, số điện thoại, địa chỉ)
- Phân quyền chức vụ
- Quản lý tình trạng hoạt động

### 🏢 Quản Lý Phòng Chiếu
- Thiết lập thông tin phòng chiếu
- Quản lý số lượng ghế
- Cấu hình layout phòng chiếu

### 📅 Quản Lý Lịch Chiếu
- Tạo và chỉnh sửa lịch chiếu
- Phân bổ phòng chiếu cho từng suất chiếu
- Quản lý thời gian chiếu

### 💰 Quản Lý Thanh Toán & Voucher
- Xử lý thanh toán đặt vé
- Tạo và quản lý mã giảm giá
- Theo dõi doanh thu

### ⭐ Quản Lý Đánh Giá & Phản Hồi
- Thu thập phản hồi khách hàng
- Quản lý đánh giá phim
- Thống kê mức độ hài lòng

### 🛍️ Quản Lý Dịch Vụ
- Quản lý dịch vụ bán kèm (bắp rang, nước ngọt...)
- Thiết lập giá dịch vụ
- Theo dõi tồn kho

## 🛠️ Công Nghệ Sử Dụng

### Frontend Framework
- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router 4** - Official router for Vue.js
- **Vite** - Next generation frontend tooling

### UI Framework & Libraries
- **Bootstrap 5** - CSS framework
- **Boxicons** - Icon library
- **Font Awesome 6** - Additional icons
- **Chart.js** + **Vue-ChartJS** - Data visualization
- **V-Calendar** - Date picker component

### Development Tools
- **Axios** - HTTP client
- **Vue Toaster** - Toast notifications
- **Popper.js** - Tooltip positioning
- **Perfect Scrollbar** - Custom scrollbars
- **MetisMenu** - Menu plugin

## 📁 Cấu Trúc Thư Mục

```
src/
├── components/
│   └── Admin/                    # Các component quản lý admin
│       ├── QuanLyPhim/          # Quản lý phim
│       ├── QuanLyNguoiDung/     # Quản lý người dùng  
│       ├── QuanLyPhongChieu/    # Quản lý phòng chiếu
│       ├── QLLC/                # Quản lý lịch chiếu
│       ├── QLDV/                # Quản lý dịch vụ
│       ├── QLDG&PH/             # Quản lý đánh giá & phản hồi
│       └── TenChucNang(QLND)/   # Voucher & thanh toán
├── layout/
│   ├── components/              # Layout components
│   │   ├── TopRocker.vue       # Header navigation
│   │   ├── MenuRocker.vue      # Main navigation menu
│   │   └── BotRocker.vue       # Footer
│   └── wrapper/
│       └── index.vue           # Main layout wrapper
├── router/
│   └── index.js                # Vue Router configuration
├── assets/                     # Static assets
│   ├── css/                    # Stylesheets
│   ├── js/                     # JavaScript libraries
│   ├── images/                 # Images
│   └── plugins/                # Third-party plugins
├── App.vue                     # Root component
└── main.js                     # Application entry point
```

## 🚀 Cài Đặt & Chạy Dự Án

### Yêu Cầu Hệ Thống
- Node.js >= 16.0.0
- npm >= 8.0.0

### 1. Clone Repository
```bash
git clone https://github.com/mson0714/quan-ly-rap-phim.git
cd quan-ly-rap-phim
```

### 2. Cài Đặt Dependencies
```bash
npm install
```

### 3. Chạy Development Server
```bash
npm run dev
```
Ứng dụng sẽ chạy tại `http://localhost:5173`

### 4. Build cho Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## 🗺️ Routing

| Route | Component | Mô Tả |
|-------|-----------|--------|
| `/` | TenChucNang(QLND)/index.vue | Trang chủ quản lý voucher |
| `/quan-ly-voucher` | TenChucNang(QLND)/quanLyVoucher.vue | Quản lý voucher |
| `/quan-ly-thanh-toan` | TenChucNang(QLND)/quanLyThanhToan.vue | Quản lý thanh toán |
| `/quan-ly-phim` | QuanLyPhim/index.vue | Quản lý phim |
| `/quan-ly-lich-chieu` | QLLC/index.vue | Quản lý lịch chiếu |
| `/quan-ly-dich-vu` | QLDV/index.vue | Quản lý dịch vụ |
| `/quan-ly-danh-gia-phan-hoi` | QLDG&PH/index.vue | Quản lý đánh giá & phản hồi |
| `/quan-ly-nguoi-dung` | QuanLyNguoiDung/index.vue | Quản lý người dùng |
| `/quan-ly-phong-chieu` | QuanLyPhongChieu/index.vue | Quản lý phòng chiếu |

## 🎨 Giao Diện

### Layout Structure
- **TopRocker**: Header với logo, search bar và user menu
- **MenuRocker**: Navigation menu ngang với scroll tự động
- **Main Content**: Area hiển thị nội dung chính
- **BotRocker**: Footer

### Responsive Design
- Hỗ trợ đầy đủ trên desktop, tablet và mobile
- Menu navigation có thể scroll ngang khi có nhiều items
- Table responsive cho danh sách dữ liệu

## 🔧 Cấu Hình

### Vite Configuration
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
```

### Vue Router Configuration
Sử dụng `createWebHistory()` mode cho clean URLs.

## 📦 Dependencies

### Production Dependencies
```json
{
  "@meforma/vue-toaster": "^1.3.0",
  "@popperjs/core": "^2.11.8", 
  "axios": "^1.11.0",
  "chart.js": "^4.5.0",
  "v-calendar": "^3.1.2",
  "vue": "^3.3.4",
  "vue-chartjs": "^5.3.2",
  "vue-router": "^4.0.13"
}
```

### Development Dependencies
```json
{
  "@vitejs/plugin-vue": "^4.2.3",
  "vite": "^4.4.5"
}
```

## 🤝 Đóng Góp

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 👥 Team

**Group 5 Cinema Development Team**
- Repository: [mson0714/quan-ly-rap-phim](https://github.com/mson0714/quan-ly-rap-phim)

## 📄 License

Dự án này được phát triển cho mục đích học tập và nghiên cứu.

---

*🎬 Phát triển với ❤️ bởi Group 5 Cinema Team*
