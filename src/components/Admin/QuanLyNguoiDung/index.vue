<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card radius-10 border-top border-0 border-3 border-info">
        <div class="card-header d-flex justify-content-between">
          <h4 class="mt-2"><b>DANH SÁCH NHÂN VIÊN</b></h4>
          <button
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addModal"
          >
            Thêm nhân viên
          </button>
        </div>
        <div class="card-body table-responsive">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search...." />
            <button
              class="btn btn-success input-group-text"
              style="width: 140px"
            >
              Tìm kiếm
            </button>
          </div>

          <table class="table table-bordered table-hover">
            <thead>
              <tr class="bg-primary text-light text-nowrap">
                <th class="text-center">#</th>
                <th class="text-center">Họ Và Tên</th>
                <th class="text-center">Email</th>
                <th class="text-center">Số Điện Thoại</th>
                <th class="text-center">Địa Chỉ</th>
                <th class="text-center">Ngày Sinh</th>
                <th class="text-center">Chức Vụ</th>
                <th class="text-center">Tình Trạng</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              <template v-for="(item, index) in sample_nhan_vien" :key="index">
                <tr class="text-nowrap">
                  <th class="align-middle text-center">{{ index + 1 }}</th>
                  <td class="align-middle">{{ item.ho_va_ten }}</td>
                  <td class="align-middle">{{ item.email }}</td>
                  <td class="align-middle text-center">
                    {{ item.so_dien_thoai }}
                  </td>
                  <td class="align-middle">{{ item.dia_chi }}</td>
                  <td class="align-middle text-center">{{ item.ngay_sinh }}</td>
                  <td class="align-middle">{{ item.ten_chuc_vu }}</td>
                  <td class="align-middle text-center">
                    <button
                      v-if="item.tinh_trang == 1"
                      class="btn btn-info w-100"
                      style="color: white"
                    >
                      Hoạt động
                    </button>
                    <button
                      v-else
                      class="btn btn-warning w-100"
                      style="color: white"
                    >
                      Tạm tắt
                    </button>
                  </td>
                  <td class="align-middle text-center">
                    <button
                      class="btn btn-success me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#updateModal"
                    >
                      Cập nhật
                    </button>
                    <button
                      class="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal giao diện giữ nguyên (không có logic) -->
  <div class="modal fade" id="addModal" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Thêm Nhân Viên Mới</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">
          <p>Dữ liệu mẫu - không có chức năng.</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">
            Đóng
          </button>
          <button class="btn btn-primary" data-bs-dismiss="modal">
            Thêm mới
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="updateModal" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Cập Nhật Thông Tin </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">
          <p>Dữ liệu mẫu - không có chức năng.</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">
            Đóng
          </button>
          <button class="btn btn-success" data-bs-dismiss="modal">
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="deleteModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Xóa Nhân Viên</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">
          <p>Bạn có chắc chắn muốn xóa nhân viên này?</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">
            Đóng
          </button>
          <button class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sample_nhan_vien: [
        {
          ho_va_ten: "Nguyễn Văn A",
          email: "vana@example.com",
          so_dien_thoai: "0905123456",
          dia_chi: "Đà Nẵng",
          ngay_sinh: "1998-05-12",
          ten_chuc_vu: "Quản Lý",
          tinh_trang: 1,
        },
        {
          ho_va_ten: "Trần Thị B",
          email: "thib@example.com",
          so_dien_thoai: "0905111222",
          dia_chi: "Hồ Chí Minh",
          ngay_sinh: "1995-09-20",
          ten_chuc_vu: "Nhân Viên",
          tinh_trang: 0,
        },
        {
          ho_va_ten: "Lê Văn C",
          email: "vanc@example.com",
          so_dien_thoai: "0933445566",
          dia_chi: "Hà Nội",
          ngay_sinh: "2000-01-15",
          ten_chuc_vu: "Kế Toán",
          tinh_trang: 1,
        },
      ],
    };
  },
};
</script>

<style></style>
