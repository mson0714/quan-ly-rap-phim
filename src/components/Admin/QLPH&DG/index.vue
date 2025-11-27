<template>
  <div class="container mt-3">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="d-flex align-items-center">
        <button class="btn btn-link p-0 me-2">&larr;</button>
        <h5 class="mb-0">QUẢN LÝ PHẢN HỒI & ĐÁNH GIÁ</h5>
      </div>
      <div style="width: 250px;">
        <input v-model="q" type="text" class="form-control" placeholder="Tìm kiếm nội dung hoặc khách hàng">
      </div>
    </div>

    <div class="row g-3">
      <div class="col-md-3">
        <label class="form-label">Trạng thái</label>
        <select v-model="filters.status" class="form-select">
          <option value="all">Tất cả</option>
          <option value="new">Mới</option>
          <option value="answered">Đã trả lời</option>
          <option value="hidden">Đã ẩn</option>
        </select>
      </div>
      <div class="col-md-3">
        <label class="form-label">Phim</label>
        <select v-model="filters.movie" class="form-select">
          <option value="all">Tất cả</option>
          <option>Avengers</option>
          <option>Inception</option>
        </select>
      </div>
      <div class="col-md-2">
        <label class="form-label">Đánh giá</label>
        <select v-model="filters.rating" class="form-select">
          <option value="all">Tất cả</option>
          <option value="5">5 sao</option>
          <option value="4">4 sao</option>
          <option value="3">3 sao</option>
          <option value="2">2 sao</option>
          <option value="1">1 sao</option>
        </select>
      </div>
      <div class="col-md-2 d-flex align-items-end">
        <button class="btn btn-dark w-100" @click="applyFilters">Lọc</button>
      </div>

      <div class="col-md-3">
        <label class="form-label">Từ ngày:</label>
        <input v-model="filters.from" type="date" class="form-control">
      </div>
      <div class="col-md-3">
        <label class="form-label">Đến:</label>
        <input v-model="filters.to" type="date" class="form-control">
      </div>
      <div class="col-md-3">
        <label class="form-label">Khách hàng</label>
        <input v-model="filters.customer" type="text" class="form-control" placeholder="Nhập tên khách hàng">
      </div>
      <div class="col-md-3 d-flex align-items-end">
        <button class="btn btn-secondary me-2" @click="exportCsv">Xuất</button>
        <button class="btn btn-secondary" @click="exportFile">Xuất file</button>
      </div>
    </div>

    <table class="table table-bordered mt-4 text-center">
      <thead>
        <tr>
          <th>#</th>
          <th>Mã phản hồi</th>
          <th>Khách hàng</th>
          <th>Tên phim</th>
          <th>Đánh giá</th>
          <th>Nội dung</th>
          <th>Ngày gửi</th>
          <th>Trạng thái</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in filtered" :key="item.id">
          <td>{{ idx + 1 }}</td>
          <td>{{ item.code }}</td>
          <td class="text-start">{{ item.customer }}</td>
          <td>{{ item.movie }}</td>
          <td>
            <span class="text-warning">{{ stars(item.rating) }}</span>
          </td>
          <td class="text-start">{{ item.content }}</td>
          <td>{{ item.date }}</td>
          <td>{{ statusLabel(item.status) }}</td>
          <td>
            <button class="btn btn-sm btn-outline-primary me-1" @click="reply(item)">Trả lời</button>
            <button class="btn btn-sm btn-outline-secondary me-1" @click="hide(item)">Ẩn</button>
            <button class="btn btn-sm btn-outline-danger" @click="remove(item)">Xóa</button>
          </td>
        </tr>
        <tr v-if="filtered.length === 0">
          <td colspan="9">Không có phản hồi nào.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'QLPhanHoiDanhGia',
  data() {
    return {
      q: '',
      filters: {
        status: 'all',
        movie: 'all',
        rating: 'all',
        from: '',
        to: '',
        customer: ''
      },
      items: [
        { id: 1, code: 'PH001', customer: 'Nguyễn Văn A', movie: 'Avengers', rating: 5, content: 'Phim rất hay, phục vụ tốt.', date: '20/11/2025', status: 'answered' },
        { id: 2, code: 'PH002', customer: 'Trần Thị B', movie: 'Inception', rating: 4, content: 'Cốt truyện phức tạp nhưng hấp dẫn.', date: '19/11/2025', status: 'new' }
      ]
    }
  },
  computed: {
    filtered() {
      const q = this.q.trim().toLowerCase()
      return this.items.filter(i => {
        if (this.filters.status !== 'all' && i.status !== this.filters.status) return false
        if (this.filters.movie !== 'all' && i.movie !== this.filters.movie) return false
        if (this.filters.rating !== 'all' && String(i.rating) !== String(this.filters.rating)) return false
        if (this.filters.customer && !i.customer.toLowerCase().includes(this.filters.customer.toLowerCase())) return false
        if (q && !(i.content.toLowerCase().includes(q) || i.customer.toLowerCase().includes(q))) return false
        // date filters are simple string compares here; adapt when using real dates
        if (this.filters.from && i.date < this.filters.from) return false
        if (this.filters.to && i.date > this.filters.to) return false
        return true
      })
    }
  },
  methods: {
    applyFilters() {
      // placeholder for future API/filter actions
    },
    stars(n) {
      return '★'.repeat(n) + '☆'.repeat(5 - n)
    },
    statusLabel(s) {
      if (s === 'new') return 'Mới'
      if (s === 'answered') return 'Đã trả lời'
      if (s === 'hidden') return 'Đã ẩn'
      return s
    },
    reply(item) {
      alert(`Trả lời phản hồi: ${item.code}`)
    },
    hide(item) {
      item.status = 'hidden'
    },
    remove(item) {
      this.items = this.items.filter(i => i.id !== item.id)
    },
    exportCsv() {
      alert('Xuất CSV - tính năng mẫu')
    },
    exportFile() {
      alert('Xuất file - tính năng mẫu')
    }
  }
}
</script>

<style scoped>
/* small adjustments to keep layout consistent with existing styles */
.table td { vertical-align: middle; }
</style>
