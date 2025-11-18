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
		<nav class="navbar navbar-expand-xl w-100">
			<ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
				<router-link to="/admin/quan-ly-phong-chieu">
					<li class="nav-item">
						<a class="nav-link" href="//admin/quan-ly-phong-chieu/">
							<div class="parent-icon">
								<i class="bx bx-home-circle"></i>

							</div>
							<div class="menu-title">Quản Lý Phòng Chiếu</div>
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
<style></style>