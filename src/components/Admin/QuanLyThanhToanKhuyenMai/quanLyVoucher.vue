
<template>
  <div class="voucher-page">
    <h2>Quản lý voucher</h2>

    <!-- Controls -->
    <div class="controls">
      <input
        v-model.trim="keyword"
        type="text"
        placeholder="Tìm theo mã, tên voucher..."
        class="input"
      />

      <select v-model="status" class="select">
        <option value="">Tất cả trạng thái</option>
        <option value="active">Đang hoạt động</option>
        <option value="used">Đã dùng</option>
        <option value="expired">Hết hạn</option>
      </select>

      <button class="btn primary" @click="openCreate()">+ Thêm voucher</button>
      <button class="btn" @click="goPayments">Đi tới Thanh toán</button>
    </div>

    <!-- Table -->
    <div class="table-wrap">
      <table class="table">
        <thead>
          <tr>
            <th>Mã</th>
            <th>Tên</th>
            <th>Loại</th>
            <th>Giảm</th>
            <th>ĐH tối thiểu</th>
            <th>HSD</th>
            <th>Trạng thái</th>
            <th style="width: 120px">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="filteredVouchers.length === 0">
            <td colspan="8" class="empty">Không có dữ liệu</td>
          </tr>
          <tr v-for="v in filteredVouchers" :key="v.id">
            <td class="mono strong">{{ v.code }}</td>
            <td>{{ v.name }}</td>
            <td class="mono">{{ v.type.toUpperCase() }}</td>
            <td class="right">{{ discountText(v) }}</td>
            <td class="right mono">{{ formatCurrency(v.minOrder || 0) }}</td>
            <td class="mono">{{ formatDate(v.expiredAt) }}</td>
            <td><span :class="['badge', v.status]">{{ statusText(v.status) }}</span></td>
            <td>
              <div class="actions">
                <button class="btn xs" @click="openEdit(v)">Sửa</button>
                <button class="btn xs danger" @click="remove(v.id)">Xóa</button>
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
          <h3>{{ editing ? 'Cập nhật voucher' : 'Thêm voucher' }}</h3>
          <button class="icon-btn" @click="closeModal">✕</button>
        </div>
        <div class="modal-body">
          <div class="form-two">
            <div class="form-row">
              <label>Mã</label>
              <input v-model.trim="form.code" type="text" class="input" placeholder="VD: VOUCHER50" />
            </div>
            <div class="form-row">
              <label>Tên</label>
              <input v-model.trim="form.name" type="text" class="input" placeholder="Tên hiển thị" />
            </div>
          </div>

          <div class="form-two">
            <div class="form-row">
              <label>Loại</label>
              <select v-model="form.type" class="select">
                <option value="percent">Phần trăm</option>
                <option value="amount">Số tiền</option>
              </select>
            </div>
            <div class="form-row" v-if="form.type === 'percent'">
              <label>Giảm (%)</label>
              <input v-model.number="form.percent" type="number" min="1" max="100" class="input" placeholder="10" />
            </div>
            <div class="form-row" v-else>
              <label>Giảm (VND)</label>
              <input v-model.number="form.amount" type="number" min="1000" step="1000" class="input" placeholder="10000" />
            </div>
          </div>

          <div class="form-two">
            <div class="form-row">
              <label>Đơn hàng tối thiểu (VND)</label>
              <input v-model.number="form.minOrder" type="number" min="0" step="1000" class="input" placeholder="0" />
            </div>
            <div class="form-row">
              <label>Hạn sử dụng</label>
              <input v-model="form.expiredAt" type="datetime-local" class="input" />
            </div>
          </div>

          <div class="form-row">
            <label>Trạng thái</label>
            <div class="radio-group">
              <label><input type="radio" value="active" v-model="form.status" /> Đang hoạt động</label>
              <label><input type="radio" value="used" v-model="form.status" /> Đã dùng</label>
              <label><input type="radio" value="expired" v-model="form.status" /> Hết hạn</label>
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
import { computed, reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Mock data (demo cục bộ)
const vouchers = ref([
  {
    id: 1,
    code: 'VOUCHER50',
    name: 'Giảm 50%',
    type: 'percent', // percent | amount
    percent: 50,
    amount: 0,
    minOrder: 100000,
    status: 'active', // active | used | expired
    expiredAt: new Date(Date.now() + 7 * 24 * 3600 * 1000)
  },
  {
    id: 2,
    code: 'VOUCHER20K',
    name: 'Giảm 20.000đ',
    type: 'amount',
    percent: 0,
    amount: 20000,
    minOrder: 50000,
    status: 'expired',
    expiredAt: new Date(Date.now() - 24 * 3600 * 1000)
  }
])

const keyword = ref('')
const status = ref('')

const showModal = ref(false)
const editing = ref(false)
const editingId = ref(null)

const form = reactive({
  code: '',
  name: '',
  type: 'percent',
  percent: 10,
  amount: 0,
  minOrder: 0,
  status: 'active',
  expiredAt: ''
})

const resetForm = () => {
  form.code = ''
  form.name = ''
  form.type = 'percent'
  form.percent = 10
  form.amount = 0
  form.minOrder = 0
  form.status = 'active'
  form.expiredAt = ''
}

const canSave = computed(() => {
  const hasDiscount = form.type === 'percent' ? form.percent > 0 && form.percent <= 100 : form.amount > 0
  return form.code.trim() && form.name.trim() && hasDiscount
})

const filteredVouchers = computed(() => {
  const kw = keyword.value.toLowerCase()
  const st = status.value
  return vouchers.value.filter((v) => {
    const hitKw = !kw || v.code.toLowerCase().includes(kw) || v.name.toLowerCase().includes(kw)
    const hitSt = !st || v.status === st
    return hitKw && hitSt
  })
})

function discountText(v) {
  if (v.type === 'percent') return `${v.percent}%`
  return formatCurrency(v.amount)
}

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
    case 'active':
      return 'Đang hoạt động'
    case 'used':
      return 'Đã dùng'
    case 'expired':
      return 'Hết hạn'
    default:
      return st
  }
}

function goPayments() {
  router.push('/thanh-toan')
}

function openCreate() {
  editing.value = false
  editingId.value = null
  resetForm()
  showModal.value = true
}

function openEdit(v) {
  editing.value = true
  editingId.value = v.id
  form.code = v.code
  form.name = v.name
  form.type = v.type
  form.percent = v.percent
  form.amount = v.amount
  form.minOrder = v.minOrder
  form.status = v.status
  // chuyển Date -> datetime-local string
  const dt = v.expiredAt instanceof Date ? v.expiredAt : new Date(v.expiredAt)
  form.expiredAt = toLocalInput(dt)
  showModal.value = true
}

function toLocalInput(date) {
  if (!(date instanceof Date) || isNaN(date.getTime())) return ''
  const pad = (n) => `${n}`.padStart(2, '0')
  const yyyy = date.getFullYear()
  const mm = pad(date.getMonth() + 1)
  const dd = pad(date.getDate())
  const hh = pad(date.getHours())
  const mi = pad(date.getMinutes())
  return `${yyyy}-${mm}-${dd}T${hh}:${mi}`
}

function closeModal() {
  showModal.value = false
}

function save() {
  if (!canSave.value) return
  const payload = {
    code: form.code.trim(),
    name: form.name.trim(),
    type: form.type,
    percent: form.type === 'percent' ? Number(form.percent) || 0 : 0,
    amount: form.type === 'amount' ? Number(form.amount) || 0 : 0,
    minOrder: Number(form.minOrder) || 0,
    status: form.status,
    expiredAt: form.expiredAt ? new Date(form.expiredAt) : null
  }

  if (editing.value && editingId.value != null) {
    const idx = vouchers.value.findIndex((x) => x.id === editingId.value)
    if (idx !== -1) vouchers.value[idx] = { ...vouchers.value[idx], ...payload }
  } else {
    const nextId = vouchers.value.length ? Math.max(...vouchers.value.map((x) => x.id)) + 1 : 1
    vouchers.value.unshift({ id: nextId, ...payload })
  }
  closeModal()
}

function remove(id) {
  if (!confirm('Xác nhận xóa voucher này?')) return
  vouchers.value = vouchers.value.filter((x) => x.id !== id)
}
</script>

<style scoped>
.voucher-page { display: grid; gap: 16px; }

.controls {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.input, .select {
  height: 36px;
  padding: 6px 10px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  outline: none;
}
.input:focus, .select:focus {
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
.btn.primary { background: #2563eb; color: #fff; border-color: #2563eb; }
.btn.danger { color: #dc2626; border-color: #fecaca; background: #fff5f5; }
.btn.xs { height: 28px; padding: 0 8px; font-size: 12px; }

.table-wrap { overflow: auto; border: 1px solid #e2e8f0; border-radius: 12px; }
.table { width: 100%; border-collapse: collapse; min-width: 920px; }
.table th, .table td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; background: #fff; }
.table thead th { background: #f8fafc; text-align: left; font-weight: 600; color: #334155; }
.table tbody tr:hover td { background: #fcfcff; }

.right { text-align: right; }
.strong { font-weight: 600; }
.mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; }
.empty { text-align: center; color: #64748b; background: #fafafa; }

.badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 12px;
  border: 1px solid transparent;
}
.badge.active { background: #ecfdf5; color: #065f46; border-color: #a7f3d0; }
.badge.used { background: #eff6ff; color: #1e3a8a; border-color: #bfdbfe; }
.badge.expired { background: #fef2f2; color: #991b1b; border-color: #fecaca; }

.actions { display: flex; gap: 6px; }

.modal-backdrop { position: fixed; inset: 0; background: rgba(2, 6, 23, 0.5); display: grid; place-items: center; padding: 16px; z-index: 50; }
.modal { width: 100%; max-width: 760px; background: #fff; border-radius: 14px; overflow: hidden; box-shadow: 0 20px 60px rgba(2, 6, 23, 0.35); }
.modal-header { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid #f1f5f9; }
.modal-body { padding: 16px; display: grid; gap: 12px; }
.modal-footer { padding: 12px 16px; display: flex; justify-content: flex-end; gap: 8px; border-top: 1px solid #f1f5f9; }

.icon-btn { width: 28px; height: 28px; display: grid; place-items: center; border-radius: 8px; border: 1px solid #e2e8f0; background: #fff; cursor: pointer; }

.form-row { display: grid; gap: 6px; }
.form-two { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.form-row label { font-size: 12px; color: #475569; }

.radio-group { display: flex; gap: 16px; flex-wrap: wrap; }

@media (max-width: 640px) {
  .form-two { grid-template-columns: 1fr; }
}
</style>