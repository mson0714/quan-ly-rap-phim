<template>
  <div>
    <span class="d-flex justify-content-between align-items-center">
      <h5>Danh Sách Lịch Chiếu</h5>
      <button class="btn btn-success">Thêm Lịch Chiếu</button>
    </span>

    <span class="d-flex mt-3">
      <input
        class="form-control me-2"
        type="text"
        placeholder="Nhập tìm kiếm lịch chiếu"
      >
      <button class="btn btn-primary">Tìm Kiếm</button>
    </span>

    <table class="table table-bordered mt-3 text-center">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên phim</th>
          <th>Phòng chiếu</th>
          <th>Ngày chiếu</th>
          <th>Giờ bắt đầu</th>
          <th>Giờ kết thúc</th>
          <th>Tình trạng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Avengers</td>
          <td>Phòng 1</td>
          <td>20/11/2025</td>
          <td>18:00</td>
          <td>20:30</td>
          <td>Đang chiếu</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Inception</td>
          <td>Phòng 2</td>
          <td>21/11/2025</td>
          <td>19:00</td>
          <td>21:30</td>
          <td>Sắp chiếu</td>
        </tr>
      </tbody>
    </table>

    <div class="d-flex justify-content-end mt-2">
      <button class="btn btn-warning">Tạo vé</button>
      <button class="btn btn-info text-white ms-2">Cập nhật</button>
      <button class="btn btn-danger ms-2">Xóa</button>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>

<style>
</style>