<template >
    <span class="d-flex justify-content-between align-items-center">
        <h5>Quản Lý Phim</h5>
    <button class="btn btn-success">Thêm Phim</button>
    </span>
    <span class="d-flex mt-3">
        <input class="form-control" type="text" placeholder="Nhập tìm kiếm">
    <button class="btn btn-primary ">Tìm Kiếm</button>

    </span>

    <table class="table table-bordered mt-3">
        <thead>
            <tr>
                <th>Mã Phim</th>
                <th>Tên Phim</th>
                <th>Hình Ảnh</th>
                <th>Mô Tả</th>
                <th>Hành Động</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Avengers</td>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4bvW0Y0PMbNXEwqvle1aBmuviXukhlXPINQ&s" alt="Hình Ảnh Phim"></td>
                <td>Phim siêu anh hùng</td>
                <td>
                    <button class="btn btn-warning btn-sm">Sửa</button>
                    <button class="btn btn-danger btn-sm">Xóa</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Inception</td>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4bvW0Y0PMbNXEwqvle1aBmuviXukhlXPINQ&s" alt="Hình Ảnh Phim"></td>
                <td>Phim khoa học viễn tưởng</td>
                <td>
                    <button class="btn btn-warning btn-sm">Sửa</button>
                    <button class="btn btn-danger btn-sm">Xóa</button>
                </td>
            </tr>
        </tbody>
    </table>
    
</template>
<script>
export default {
    
}
</script>
<style >
    
</style>