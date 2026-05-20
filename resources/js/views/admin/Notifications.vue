<template>
    <div class="admin-notifs">
        <h1 class="page-heading">Notifications</h1>
        <div class="broadcast-card">
            <h3 class="card-title">Broadcast Notification</h3>
            <div class="form-group"><label>Title</label><input v-model="bForm.title" class="form-input" placeholder="Notification title..."></div>
            <div class="form-group"><label>Message</label><textarea v-model="bForm.message" class="form-input" rows="3" placeholder="Message..."></textarea></div>
            <button class="btn-orange" @click="broadcast" :disabled="sending">{{ sending ? 'Sending...' : 'Send to All Users' }}</button>
        </div>
        <div class="notif-list">
            <div v-for="n in notifications" :key="n.id" class="notif-row">
                <div class="notif-icon" :class="{ broadcast: n.is_broadcast }">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/></svg>
                </div>
                <div class="notif-body">
                    <div class="notif-title">{{ n.title }}</div>
                    <div class="notif-msg">{{ n.message }}</div>
                    <div class="notif-meta">
                        <span v-if="n.is_broadcast" class="broadcast-badge">Broadcast</span>
                        <span v-else class="user-badge">To: {{ n.user && n.user.name }}</span>
                        <span class="notif-date">{{ n.created_at }}</span>
                    </div>
                </div>
                <button class="btn-sm btn-danger" @click="deleteNotif(n.id)">Del</button>
            </div>
            <div v-if="notifications.length === 0" class="empty-state">No notifications yet.</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AdminNotifications',
    data() { return { notifications: [], bForm: { title: '', message: '' }, sending: false }; },
    mounted() { this.fetchNotifications(); },
    methods: {
        async fetchNotifications() { const { data } = await this.$http.get('/api/admin/notifications'); this.notifications = data.data.data || data.data; },
        async broadcast() {
            if (!this.bForm.title || !this.bForm.message) return this.$toaster.error('Fill all fields.');
            this.sending = true;
            try { await this.$http.post('/api/admin/notifications/broadcast', this.bForm); this.$toaster.success('Notification sent.'); this.bForm = { title:'', message:'' }; this.fetchNotifications(); }
            catch (e) { this.$toaster.error('Failed.'); } finally { this.sending = false; }
        },
        async deleteNotif(id) { if (!confirm('Delete?')) return; await this.$http.delete(`/api/admin/notifications/${id}`); this.fetchNotifications(); },
    },
};
</script>
<style scoped>
.admin-notifs { }
.page-heading { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.5rem; font-weight: 700; margin-bottom: 20px; }
.broadcast-card { background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); border-radius: 12px; padding: 20px; margin-bottom: 20px; }
.card-title { color: #fff; font-weight: 700; font-size: 1rem; margin-bottom: 16px; }
.form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
.form-group label { color: rgba(255,255,255,0.6); font-size: 0.78rem; }
.form-input { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px 12px; color: #fff; font-size: 0.9rem; outline: none; width: 100%; box-sizing: border-box; }
.btn-orange { background: #FF8C00; color: #fff; border: none; border-radius: 8px; padding: 10px 24px; font-weight: 700; cursor: pointer; font-family: 'Rajdhani', sans-serif; }
.btn-orange:disabled { opacity: 0.7; cursor: not-allowed; }
.notif-list { background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); border-radius: 12px; overflow: hidden; }
.notif-row { display: flex; align-items: flex-start; gap: 12px; padding: 14px 16px; border-bottom: 1px solid rgba(255,255,255,0.04); }
.notif-icon { width: 32px; height: 32px; border-radius: 8px; background: rgba(59,130,246,0.15); display: flex; align-items: center; justify-content: center; color: #60a5fa; flex-shrink: 0; margin-top: 2px; }
.notif-icon.broadcast { background: rgba(255,165,0,0.15); color: #FFA500; }
.notif-body { flex: 1; }
.notif-title { color: #fff; font-weight: 600; font-size: 0.88rem; }
.notif-msg { color: rgba(255,255,255,0.5); font-size: 0.8rem; margin: 2px 0 6px; }
.notif-meta { display: flex; gap: 8px; align-items: center; }
.broadcast-badge { background: rgba(255,165,0,0.15); color: #FFA500; padding: 2px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 600; }
.user-badge { background: rgba(59,130,246,0.15); color: #60a5fa; padding: 2px 8px; border-radius: 8px; font-size: 0.68rem; }
.notif-date { color: rgba(255,255,255,0.3); font-size: 0.7rem; }
.btn-sm { padding: 4px 10px; border: none; border-radius: 5px; font-size: 0.72rem; font-weight: 600; cursor: pointer; flex-shrink: 0; }
.btn-danger { background: rgba(239,68,68,0.15); color: #f87171; }
.empty-state { color: rgba(255,255,255,0.3); text-align: center; padding: 40px; }
</style>
