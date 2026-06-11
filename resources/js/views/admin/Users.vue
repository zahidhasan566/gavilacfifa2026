<template>
    <div class="admin-users">
        <div class="page-header">
            <h1 class="page-heading">Users (Doctors)</h1>
            <button class="btn-orange" @click="openAdd">+ Add User</button>
        </div>

        <div class="table-card">
            <div class="table-toolbar">
                <input v-model="search" @input="onSearch" placeholder="Search by name / code / email..." class="search-input">
                <span class="total-count">Total: {{ total }}</span>
            </div>
            <div class="table-wrapper">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>#</th><th>Name</th><th>Code</th><th>Mobile</th>
                            <th>Email</th><th>Points</th><th>Status</th><th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(u, i) in users" :key="u.id">
                            <td>{{ i + 1 }}</td>
                            <td>
                                <div class="user-cell">
                                    <img :src="u.profile_picture_url" class="mini-avatar" onerror="this.src=window.__IMG__ + '/images/default-avatar.png'">
                                    {{ u.name }}
                                </div>
                            </td>
                            <td>{{ u.unique_code }}</td>
                            <td>{{ u.mobile }}</td>
                            <td>{{ u.email }}</td>
                            <td><span class="points-pill">{{ u.total_points }}</span></td>
                            <td><span :class="['status-badge', u.status ? 'active' : 'inactive']">{{ u.status ? 'Active' : 'Inactive' }}</span></td>
                            <td>
                                <button class="btn-sm btn-edit" @click="openEdit(u)">Edit</button>
                                <button class="btn-sm btn-danger" @click="deleteUser(u.id)">Delete</button>
                            </td>
                        </tr>
                        <tr v-if="users.length === 0"><td colspan="8" class="empty-td">No users found.</td></tr>
                    </tbody>
                </table>
            </div>
            <div v-if="lastPage > 1" class="pagination-row">
                <button class="pg-btn" :disabled="currentPage === 1" @click="goPage(currentPage - 1)">&#8249; Prev</button>
                <span class="pg-info">Page {{ currentPage }} of {{ lastPage }}</span>
                <button class="pg-btn" :disabled="currentPage === lastPage" @click="goPage(currentPage + 1)">Next &#8250;</button>
            </div>
        </div>

        <!-- Modal -->
        <div v-if="modal" class="modal-overlay" @click.self="closeModal">
            <div class="modal-box">
                <h3 class="modal-title">{{ editId ? 'Edit User' : 'Add User' }}</h3>
                <div class="form-grid">
                    <div class="form-group"><label>Name</label><input v-model="form.name" class="form-input" placeholder="Doctor Name"></div>
                    <div class="form-group"><label>Unique Code</label><input v-model="form.unique_code" class="form-input" placeholder="Unique Code"></div>
                    <div class="form-group"><label>Mobile</label><input v-model="form.mobile" class="form-input" placeholder="Mobile"></div>
                    <div class="form-group"><label>Email</label><input v-model="form.email" class="form-input" type="email" placeholder="Email"></div>
                    <div class="form-group full"><label>Chamber Address</label><input v-model="form.chamber_address" class="form-input" placeholder="Chamber Address"></div>
                    <div class="form-group"><label>Password {{ editId ? '(leave blank)' : '' }}</label><input v-model="form.password" class="form-input" type="password" placeholder="Password"></div>
                    <div class="form-group">
                        <label>Status</label>
                        <select v-model="form.status" class="form-input">
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>
                </div>
                <div v-if="errors" class="errors-box">
                    <div v-for="(msgs, f) in errors" :key="f" class="error-item">{{ msgs[0] }}</div>
                </div>
                <div class="modal-actions">
                    <button class="btn-cancel" @click="closeModal">Cancel</button>
                    <button class="btn-orange" @click="saveUser" :disabled="saving">{{ saving ? 'Saving...' : 'Save' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminUsers',
    data() {
        return {
            users: [], search: '', modal: false, editId: null, saving: false, errors: null,
            currentPage: 1, lastPage: 1, total: 0,
            form: { name:'', unique_code:'', mobile:'', email:'', chamber_address:'', password:'', status: 1 },
        };
    },
    mounted() { this.fetchUsers(); },
    methods: {
        async fetchUsers() {
            const { data } = await this.$http.get('/api/admin/users', { params: { search: this.search, page: this.currentPage } });
            const pg = data.data;
            this.users = pg.data || pg;
            this.currentPage = pg.current_page || 1;
            this.lastPage = pg.last_page || 1;
            this.total = pg.total || this.users.length;
        },
        onSearch() { this.currentPage = 1; this.fetchUsers(); },
        goPage(p) { this.currentPage = p; this.fetchUsers(); },
        openAdd() { this.editId = null; this.form = { name:'',unique_code:'',mobile:'',email:'',chamber_address:'',password:'',status:1 }; this.errors = null; this.modal = true; },
        openEdit(u) { this.editId = u.id; this.form = { name:u.name,unique_code:u.unique_code,mobile:u.mobile,email:u.email,chamber_address:u.chamber_address,password:'',status:u.status }; this.errors = null; this.modal = true; },
        closeModal() { this.modal = false; },
        async saveUser() {
            this.saving = true; this.errors = null;
            try {
                if (this.editId) {
                    await this.$http.put(`/api/admin/users/${this.editId}`, this.form);
                } else {
                    await this.$http.post('/api/admin/users', this.form);
                }
                this.closeModal(); this.fetchUsers();
                this.$toaster.success('User saved successfully.');
            } catch (e) {
                if (e.response?.data?.errors) this.errors = e.response.data.errors;
                else this.$toaster.error(e.response?.data?.message || 'Failed to save.');
            } finally { this.saving = false; }
        },
        async deleteUser(id) {
            if (!confirm('Delete this user?')) return;
            await this.$http.delete(`/api/admin/users/${id}`);
            this.fetchUsers();
            this.$toaster.success('User deleted.');
        },
    },
};
</script>

<style scoped>
.admin-users { }
.page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.page-heading { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.5rem; font-weight: 700; }
.btn-orange { background: #FF8C00; color: #fff; border: none; border-radius: 8px; padding: 10px 20px; font-weight: 700; cursor: pointer; font-family: 'Rajdhani', sans-serif; }
.table-card { background: linear-gradient(180deg, #150a4e 0%, #1A0040 100%); border-radius: 12px; overflow: hidden; }
.table-toolbar { padding: 16px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.search-input { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px 14px; color: #fff; font-size: 0.85rem; outline: none; width: 300px; }
.table-wrapper { overflow-x: auto; }
.data-table { width: 100%; border-collapse: collapse; }
.data-table th { background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.5); font-size: 0.75rem; font-weight: 600; padding: 12px 16px; text-align: left; text-transform: uppercase; letter-spacing: 0.5px; }
.data-table td { color: rgba(255,255,255,0.8); font-size: 0.85rem; padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.04); }
.user-cell { display: flex; align-items: center; gap: 10px; }
.mini-avatar { width: 28px; height: 28px; border-radius: 50%; object-fit: cover; }
.points-pill { background: rgba(255,165,0,0.15); color: #FFA500; padding: 3px 10px; border-radius: 12px; font-size: 0.78rem; font-weight: 600; }
.status-badge { padding: 3px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; }
.status-badge.active { background: rgba(34,197,94,0.15); color: #4ade80; }
.status-badge.inactive { background: rgba(239,68,68,0.15); color: #f87171; }
.btn-sm { padding: 5px 12px; border: none; border-radius: 6px; font-size: 0.75rem; font-weight: 600; cursor: pointer; margin-right: 4px; }
.btn-edit { background: rgba(59,130,246,0.15); color: #60a5fa; }
.btn-danger { background: rgba(239,68,68,0.15); color: #f87171; }
.empty-td { text-align: center; color: rgba(255,255,255,0.3); padding: 30px; }
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; z-index: 500; }
.modal-box { background: linear-gradient(180deg, #150a4e 0%, #1A0040 100%); border-radius: 12px; padding: 28px; width: 560px; max-height: 85vh; overflow-y: auto; }
.modal-title { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.2rem; font-weight: 700; margin-bottom: 20px; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group.full { grid-column: 1 / -1; }
.form-group label { color: rgba(255,255,255,0.6); font-size: 0.78rem; }
.form-input { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px 12px; color: #fff; font-size: 0.9rem; outline: none; }
.form-input option { background: #ffffff; color: #1A0040; }
.errors-box { margin-top: 12px; }
.error-item { color: #f87171; font-size: 0.8rem; margin-bottom: 4px; }
.modal-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; }
.btn-cancel { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7); border: none; border-radius: 8px; padding: 10px 20px; cursor: pointer; }
.total-count { color: rgba(255,255,255,0.45); font-size: 0.8rem; margin-left: 12px; }
.pagination-row { display: flex; align-items: center; justify-content: center; gap: 16px; padding: 14px; border-top: 1px solid rgba(255,255,255,0.06); }
.pg-btn { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); color: #fff; border-radius: 6px; padding: 6px 16px; font-size: 0.82rem; font-weight: 600; cursor: pointer; }
.pg-btn:disabled { opacity: 0.35; cursor: default; }
.pg-btn:not(:disabled):hover { background: rgba(255,165,0,0.15); border-color: #FFA500; color: #FFA500; }
.pg-info { color: rgba(255,255,255,0.55); font-size: 0.82rem; }
</style>
