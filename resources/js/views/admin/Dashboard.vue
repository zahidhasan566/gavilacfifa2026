<template>
    <div class="admin-dashboard">
        <h1 class="page-heading">Dashboard</h1>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div class="stat-info">
                    <div class="stat-value">{{ stats.total_users }}</div>
                    <div class="stat-label">Total Users</div>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon orange">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
                </div>
                <div class="stat-info">
                    <div class="stat-value">{{ stats.total_matches }}</div>
                    <div class="stat-label">Total Matches</div>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon red">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
                </div>
                <div class="stat-info">
                    <div class="stat-value">{{ stats.live_matches }}</div>
                    <div class="stat-label">Live Matches</div>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                </div>
                <div class="stat-info">
                    <div class="stat-value">{{ stats.total_predictions }}</div>
                    <div class="stat-label">Total Predictions</div>
                </div>
            </div>
        </div>

        <div v-if="stats.top_user" class="top-user-card">
            <div class="tu-label">🏆 Current Leader</div>
            <div class="tu-info">
                <span class="tu-name">{{ stats.top_user.name }}</span>
                <span class="tu-code">{{ stats.top_user.unique_code }}</span>
            </div>
            <span class="tu-points">{{ stats.top_user.total_points }} pts</span>
        </div>

        <div class="quick-links">
            <h2 class="section-heading">Quick Actions</h2>
            <div class="quick-grid">
                <router-link to="/admin/matches" class="quick-card">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
                    Manage Matches
                </router-link>
                <router-link to="/admin/questions" class="quick-card">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    Configure Questions
                </router-link>
                <router-link to="/admin/raffle" class="quick-card orange">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    Raffle Draw
                </router-link>
                <router-link to="/admin/reports" class="quick-card">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                    View Reports
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminDashboard',
    data() { return { stats: { total_users: 0, total_matches: 0, live_matches: 0, total_predictions: 0, top_user: null } }; },
    async mounted() {
        const { data } = await this.$http.get('/api/admin/stats');
        this.stats = data.data;
    },
};
</script>

<style scoped>
.admin-dashboard { }
.page-heading { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.6rem; font-weight: 700; margin-bottom: 24px; }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
.stat-card { background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); border-radius: 12px; padding: 20px; display: flex; align-items: center; gap: 16px; }
.stat-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.stat-icon.blue { background: rgba(59,130,246,0.2); color: #60a5fa; }
.stat-icon.orange { background: rgba(255,165,0,0.2); color: #FFA500; }
.stat-icon.red { background: rgba(239,68,68,0.2); color: #f87171; }
.stat-icon.green { background: rgba(34,197,94,0.2); color: #4ade80; }
.stat-value { color: #fff; font-size: 1.8rem; font-weight: 700; font-family: 'Rajdhani', sans-serif; }
.stat-label { color: rgba(255,255,255,0.5); font-size: 0.8rem; }
.top-user-card {
    background: linear-gradient(135deg, #1a1470 0%, #0d0a3e 100%);
    border: 1px solid rgba(255,165,0,0.3); border-radius: 12px;
    padding: 16px 20px; display: flex; align-items: center; gap: 16px; margin-bottom: 24px;
}
.tu-label { color: #FFA500; font-weight: 700; font-size: 0.95rem; }
.tu-info { flex: 1; }
.tu-name { color: #fff; font-weight: 700; margin-right: 12px; }
.tu-code { color: rgba(255,255,255,0.4); font-size: 0.8rem; }
.tu-points { background: #FFA500; color: #fff; padding: 6px 16px; border-radius: 20px; font-weight: 700; font-family: 'Rajdhani', sans-serif; }
.section-heading { color: rgba(255,255,255,0.7); font-size: 1rem; font-weight: 600; margin-bottom: 16px; }
.quick-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.quick-card {
    background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); border-radius: 12px; padding: 20px 16px;
    display: flex; flex-direction: column; align-items: center; gap: 10px;
    color: rgba(255,255,255,0.7); font-size: 0.85rem; text-decoration: none; font-weight: 600;
    border: 1px solid rgba(255,255,255,0.06); transition: all 0.2s;
}
.quick-card:hover { border-color: #FFA500; color: #FFA500; }
.quick-card.orange { background: rgba(255,165,0,0.1); border-color: rgba(255,165,0,0.3); color: #FFA500; }
@media (max-width: 900px) { .stats-grid, .quick-grid { grid-template-columns: repeat(2, 1fr); } }
</style>
