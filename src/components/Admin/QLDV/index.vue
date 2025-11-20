<template>
  <div class="container mt-3">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="d-flex align-items-center">
        <button class="btn btn-link p-0 me-2">&larr;</button>
        <h5 class="mb-0">QUẢN LÝ VÉ VÀ ĐẶT VÉ</h5>
      </div>
      <div style="width: 250px;">
        <input type="text" class="form-control" placeholder="Tìm kiếm">
      </div>
    </div>

    <div class="row g-3">
      <div class="col-md-4">
        <label class="form-label">Vé đã bán</label>
        <select class="form-select">
          <option>Đã hủy</option>
          <option>Đã thanh toán</option>
          <option>Chưa thanh toán</option>
        </select>
      </div>
      <div class="col-md-4">
        <label class="form-label">Phim</label>
        <select class="form-select">
          <option>Value</option>
        </select>
      </div>
      <div class="col-md-3">
        <label class="form-label">Phòng</label>
        <select class="form-select">
          <option>Value</option>
        </select>
      </div>
      <div class="col-md-1 d-flex align-items-end">
        <button class="btn btn-dark w-100">Lọc</button>
      </div>

      <div class="col-md-3">
        <label class="form-label">Từ ngày:</label>
        <input type="date" class="form-control">
      </div>
      <div class="col-md-3">
        <label class="form-label">Đến:</label>
        <input type="date" class="form-control">
      </div>
      <div class="col-md-3">
        <label class="form-label">Khách hàng</label>
        <input type="text" class="form-control" placeholder="Nhập tên khách hàng">
      </div>
      <div class="col-md-3 d-flex align-items-end">
        <button class="btn btn-secondary me-2">Xuất</button>
        <button class="btn btn-secondary">Xuất file</button>
      </div>
    </div>

    <table class="table table-bordered mt-4 text-center">
      <thead>
        <tr>
          <th>#</th>
          <th>Mã vé</th>
          <th>Khách hàng</th>
          <th>Tên phim</th>
          <th>Suất chiếu</th>
          <th>Ghế</th>
          <th>Giá vé</th>
          <th>Ngày đặt</th>
          <th>Trạng thái</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>V001</td>
          <td>Nguyễn Văn A</td>
          <td>Avengers</td>
          <td>19:00 - 21:30</td>
          <td>A5</td>
          <td>120.000</td>
          <td>20/11/2025</td>
          <td>Đã thanh toán</td>
          <td>
            <button class="btn btn-sm btn-outline-primary me-1">Sửa</button>
            <button class="btn btn-sm btn-outline-danger">Hủy</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>V002</td>
          <td>Trần Thị B</td>
          <td>Inception</td>
          <td>20:00 - 22:30</td>
          <td>B7</td>
          <td>130.000</td>
          <td>21/11/2025</td><td>Đã hủy</td>
          <td>
            <button class="btn btn-sm btn-outline-primary me-1">Xem</button>
            <button class="btn btn-sm btn-outline-danger">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
    
}
</script>
<style>
</style>