
<template>
  <div class="payment-page">
    <h2>Quản lý thanh toán</h2>

    <!-- Controls -->
    <div class="controls">
      <input
        v-model.trim="keyword"
        type="text"
        placeholder="Tìm theo mã GD, khách hàng, phim..."
        class="input"
      />

      <select v-model="status" class="select">
        <option value="">Tất cả trạng thái</option>
        <option value="paid">Đã thanh toán</option>
        <option value="pending">Chờ thanh toán</option>
        <option value="refunded">Hoàn tiền</option>
        <option value="failed">Thất bại</option>
      </select>

      <button class="btn primary" @click="openCreate()">+ Thêm thanh toán</button>
    </div>

    <!-- Table -->
    <div class="table-wrap">
      <table class="table">
        <thead>
          <tr>
            <th>Mã GD</th>
            <th>Khách hàng</th>
            <th>Đơn/Phim</th>
            <th>Số tiền</th>
            <th>Phương thức</th>
            <th>Trạng thái</th>
            <th>Ngày</th>
            <th style="width: 120px">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="filteredPayments.length === 0">
            <td colspan="8" class="empty">Không có dữ liệu</td>
          </tr>
          <tr v-for="p in filteredPayments" :key="p.id">
            <td class="mono">{{ p.code }}</td>
            <td>
              <div class="cell-main">{{ p.customerName }}</div>
              <div class="cell-sub mono">{{ p.customerPhone }}</div>
            </td>
            <td>
              <div class="cell-main">{{ p.orderTitle }}</div>
              <div class="cell-sub mono">#{{ p.orderId }}</div>
            </td>
            <td class="right strong">{{ formatCurrency(p.amount) }}</td>
            <td>{{ p.method.toUpperCase() }}</td>
            <td>
              <span :class="['badge', p.status]">{{ statusText(p.status) }}</span>
            </td>
            <td class="mono">{{ formatDate(p.createdAt) }}</td>
            <td>
              <div class="actions">
                <button class="btn xs" @click="openEdit(p)">Sửa</button>
                <button class="btn xs danger" @click="remove(p.id)">Xóa</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-backdrop" @click.self="closeModal">
      <div class="modal">
        <div class="modal-header">
          <h3>{{ editing ? 'Cập nhật thanh toán' : 'Thêm thanh toán' }}</h3>
          <button class="icon-btn" @click="closeModal">✕</button>
        </div>
        <div class="modal-body">
          <div class="form-row">
            <label>Mã giao dịch</label>
            <input v-model.trim="form.code" type="text" class="input" placeholder="VD: PAY-2025-0001" />
          </div>
          <div class="form-two">
            <div class="form-row">
              <label>Khách hàng</label>
              <input v-model.trim="form.customerName" type="text" class="input" placeholder="Họ tên" />
            </div>
            <div class="form-row">
              <label>Điện thoại</label>
              <input v-model.trim="form.customerPhone" type="tel" class="input" placeholder="SĐT" />
            </div>
          </div>
          <div class="form-two">
            <div class="form-row">
              <label>Đơn/Phim</label>
              <input v-model.trim="form.orderTitle" type="text" class="input" placeholder="Tên phim/đơn" />
            </div>
            <div class="form-row">
              <label>Mã đơn</label>
              <input v-model.trim="form.orderId" type="text" class="input" placeholder="VD: ORD-123" />
            </div>
          </div>
          <div class="form-two">
            <div class="form-row">
              <label>Số tiền (VND)</label>
              <input v-model.number="form.amount" type="number" min="0" step="1000" class="input" placeholder="0" />
            </div>
            <div class="form-row">
              <label>Phương thức</label>
              <select v-model="form.method" class="select">
                <option value="cash">Tiền mặt</option>
                <option value="card">Thẻ</option>
                <option value="momo">MoMo</option>
                <option value="zalopay">ZaloPay</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <label>Trạng thái</label>
            <div class="radio-group">
              <label><input type="radio" value="paid" v-model="form.status" /> Đã thanh toán</label>
              <label><input type="radio" value="pending" v-model="form.status" /> Chờ thanh toán</label>
              <label><input type="radio" value="failed" v-model="form.status" /> Thất bại</label>
              <label><input type="radio" value="refunded" v-model="form.status" /> Hoàn tiền</label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn" @click="closeModal">Hủy</button>
          <button class="btn primary" @click="save()" :disabled="!canSave">Lưu</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

// Mock data (dùng demo nội bộ, chưa kết nối API)
const payments = ref([
  {
    id: 1,
    code: 'PAY-2025-0001',
    customerName: 'Nguyễn Văn A',
    customerPhone: '0900000001',
    orderTitle: 'Vé phim: The Avengers',
    orderId: 'ORD-1001',
    amount: 180000,
    method: 'momo',
    status: 'paid',
    createdAt: new Date('2025-11-01T09:30:00')
  },
  {
    id: 2,
    code: 'PAY-2025-0002',
    customerName: 'Trần Thị B',
    customerPhone: '0900000002',
    orderTitle: 'Vé phim: Dune Part 2',
    orderId: 'ORD-1002',
    amount: 220000,
    method: 'card',
    status: 'pending',
    createdAt: new Date('2025-11-03T14:05:00')
  }
])

const keyword = ref('')
const status = ref('')

const showModal = ref(false)
const editing = ref(false)
const editingId = ref(null)

const form = reactive({
  code: '',
  customerName: '',
  customerPhone: '',
  orderTitle: '',
  orderId: '',
  amount: 0,
  method: 'cash',
  status: 'paid'
})

const resetForm = () => {
  form.code = ''
  form.customerName = ''
  form.customerPhone = ''
  form.orderTitle = ''
  form.orderId = ''
  form.amount = 0
  form.method = 'cash'
  form.status = 'paid'
}

const canSave = computed(() => {
  return (
    form.code.trim() &&
    form.customerName.trim() &&
    form.orderTitle.trim() &&
    Number.isFinite(form.amount) &&
    form.amount > 0
  )
})

const filteredPayments = computed(() => {
  const kw = keyword.value.toLowerCase()
  const st = status.value
  return payments.value.filter((p) => {
    const hitKw =
      !kw ||
      p.code.toLowerCase().includes(kw) ||
      p.customerName.toLowerCase().includes(kw) ||
      p.customerPhone.toLowerCase().includes(kw) ||
      p.orderTitle.toLowerCase().includes(kw) ||
      p.orderId.toLowerCase().includes(kw)
    const hitSt = !st || p.status === st
    return hitKw && hitSt
  })
})

function formatCurrency(v) {
  try {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v || 0)
  } catch {
    return `${v} đ`
  }
}

function formatDate(d) {
  const dt = d instanceof Date ? d : new Date(d)
  return dt.toLocaleString('vi-VN')
}

function statusText(st) {
  switch (st) {
    case 'paid':
      return 'Đã thanh toán'
    case 'pending':
      return 'Chờ thanh toán'
    case 'refunded':
      return 'Hoàn tiền'
    case 'failed':
      return 'Thất bại'
    default:
      return st
  }
}

function openCreate() {
  editing.value = false
  editingId.value = null
  resetForm()
  showModal.value = true
}

function openEdit(p) {
  editing.value = true
  editingId.value = p.id
  form.code = p.code
  form.customerName = p.customerName
  form.customerPhone = p.customerPhone
  form.orderTitle = p.orderTitle
  form.orderId = p.orderId
  form.amount = p.amount
  form.method = p.method
  form.status = p.status
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

function save() {
  if (!canSave.value) return
  if (editing.value && editingId.value != null) {
    const idx = payments.value.findIndex((x) => x.id === editingId.value)
    if (idx !== -1) {
      payments.value[idx] = {
        ...payments.value[idx],
        code: form.code.trim(),
        customerName: form.customerName.trim(),
        customerPhone: form.customerPhone.trim(),
        orderTitle: form.orderTitle.trim(),
        orderId: form.orderId.trim(),
        amount: Number(form.amount) || 0,
        method: form.method,
        status: form.status
      }
    }
  } else {
    const nextId = payments.value.length ? Math.max(...payments.value.map((x) => x.id)) + 1 : 1
    payments.value.unshift({
      id: nextId,
      code: form.code.trim(),
      customerName: form.customerName.trim(),
      customerPhone: form.customerPhone.trim(),
      orderTitle: form.orderTitle.trim(),
      orderId: form.orderId.trim(),
      amount: Number(form.amount) || 0,
      method: form.method,
      status: form.status,
      createdAt: new Date()
    })
  }
  closeModal()
}

function remove(id) {
  if (!confirm('Xác nhận xóa thanh toán này?')) return
  payments.value = payments.value.filter((x) => x.id !== id)
}
</script>

<style scoped>
.payment-page {
  display: grid;
  gap: 16px;
}

h2 {
  margin: 0;
}

.controls {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.input,
.select {
  height: 36px;
  padding: 6px 10px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  outline: none;
}

.input:focus,
.select:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.btn {
  height: 36px;
  padding: 0 12px;
  border: 1px solid #e2e8f0;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
}
.btn.primary {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
}
.btn.danger {
  color: #dc2626;
  border-color: #fecaca;
  background: #fff5f5;
}
.btn.xs {
  height: 28px;
  padding: 0 8px;
  font-size: 12px;
}

.table-wrap {
  overflow: auto;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}
.table {
  width: 100%;
  border-collapse: collapse;
  min-width: 920px;
}
.table th,
.table td {
  padding: 10px 12px;
  border-bottom: 1px solid #f1f5f9;
  background: #fff;
}
.table thead th {
  background: #f8fafc;
  text-align: left;
  font-weight: 600;
  color: #334155;
}
.table tbody tr:hover td {
  background: #fcfcff;
}

.right { text-align: right; }
.strong { font-weight: 600; }
.mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
.empty { text-align: center; color: #64748b; background: #fafafa; }

.cell-main { font-weight: 600; }
.cell-sub { font-size: 12px; color: #64748b; }

.badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 12px;
  border: 1px solid transparent;
}
.badge.paid { background: #ecfdf5; color: #065f46; border-color: #a7f3d0; }
.badge.pending { background: #fffbeb; color: #7c2d12; border-color: #fed7aa; }
.badge.refunded { background: #eff6ff; color: #1e3a8a; border-color: #bfdbfe; }
.badge.failed { background: #fef2f2; color: #991b1b; border-color: #fecaca; }

.actions { display: flex; gap: 6px; }

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.5);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 50;
}
.modal {
  width: 100%;
  max-width: 760px;
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(2, 6, 23, 0.35);
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #f1f5f9;
}
.modal-body { padding: 16px; display: grid; gap: 12px; }
.modal-footer {
  padding: 12px 16px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  border-top: 1px solid #f1f5f9;
}

.icon-btn {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: #fff;
  cursor: pointer;
}

.form-row { display: grid; gap: 6px; }
.form-two { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.form-row label { font-size: 12px; color: #475569; }

.radio-group { display: flex; gap: 16px; flex-wrap: wrap; }

@media (max-width: 640px) {
  .form-two { grid-template-columns: 1fr; }
}
</style>