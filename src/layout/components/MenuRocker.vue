<template>
	<div class="nav-container primary-menu">
		<div class="mobile-topbar-header">
			<div>
				<img src="../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
			</div>
			<div>
				<h4 class="logo-text">Rukada</h4>
			</div>
			<div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
			</div>
		</div>
		<nav class="navbar navbar-expand-xl w-100 overflow-auto">
			<ul class="navbar-nav justify-content-start flex-grow-1 gap-1 flex-nowrap">
				<router-link to="/">
					<li class="nav-item">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="bx bx-gift"></i>
							</div>
							<div class="menu-title text-nowrap">Quản Lý Voucher</div>
						</a>
					</li>
				</router-link>
				<router-link to="/quan-ly-thanh-toan">
					<li class="nav-item">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="bx bx-credit-card"></i>
							</div>
							<div class="menu-title text-nowrap">Quản Lý Thanh Toán</div>
						</a>
					</li>
				</router-link>
				<router-link to="/quan-ly-phim">
					<li class="nav-item">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="bx bx-movie-play"></i>
							</div>
							<div class="menu-title text-nowrap">Quản Lý Phim</div>
						</a>
					</li>
				</router-link>
				<router-link to="/quan-ly-lich-chieu">
					<li class="nav-item">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="bx bx-calendar"></i>
							</div>
							<div class="menu-title text-nowrap">Quản Lý Lịch Chiếu</div>
						</a>
					</li>
				</router-link>
				<router-link to="/quan-ly-dich-vu">
					<li class="nav-item">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="bx bx-cog"></i>
							</div>
							<div class="menu-title text-nowrap">Quản Lý Dịch Vụ</div>
						</a>
					</li>
				</router-link>
				<router-link to="/quan-ly-danh-gia-phan-hoi">
					<li class="nav-item">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="bx bx-star"></i>
							</div>
							<div class="menu-title text-nowrap">Quản Lý Đánh Giá & Phản Hồi</div>
						</a>
					</li>
				</router-link>
				<router-link to="/quan-ly-nguoi-dung">
					<li class="nav-item">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="bx bx-user"></i>
							</div>
							<div class="menu-title text-nowrap">Quản Lý Người Dùng</div>
						</a>
					</li>
				</router-link>
				<router-link to="/quan-ly-phong-chieu">
					<li class="nav-item">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="bx bx-building"></i>
							</div>
							<div class="menu-title text-nowrap">Quản Lý Phòng Chiếu</div>
						</a>
					</li>
				</router-link>
			</ul>
		</nav>
	</div>
</template>
<script>
export default {

}
</script>
<style scoped>
.navbar {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.navbar-nav {
  flex-wrap: nowrap !important;
  min-width: max-content;
}

.nav-item {
  flex-shrink: 0;
  min-width: max-content;
}

.navbar::-webkit-scrollbar {
  height: 6px;
}

.navbar::-webkit-scrollbar-track {
  background: rgba(0,0,0,0.1);
  border-radius: 10px;
}

.navbar::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.3);
  border-radius: 10px;
}

.navbar::-webkit-scrollbar-thumb:hover {
  background: rgba(0,0,0,0.5);
}
</style>