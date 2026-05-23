<template>
    <div class="admin-layout">

        <!-- Mobile overlay -->
        <div v-if="sidebarOpen" class="sidebar-overlay" @click="sidebarOpen = false"></div>

        <!-- Sidebar -->
        <aside class="admin-sidebar" :class="{ open: sidebarOpen }">
            <div class="sidebar-brand">
                <img :src="$imgBase + '/images/fifa-logo.png'" alt="FIFA" class="sidebar-logo" onerror="this.style.display='none'">
                <img :src="$imgBase + '/images/abecab-abetis-logo.png'" alt="Abecab Abetis" class="sidebar-partner-logo" onerror="this.style.display='none'">
                <span class="sidebar-title">FIFA 2026<br><small>Admin Panel</small></span>
                <button class="sidebar-close" @click="sidebarOpen = false">&#10005;</button>
            </div>
            <nav class="sidebar-nav">
                <router-link to="/admin/dashboard"      class="sidebar-link" active-class="active" @click.native="sidebarOpen = false">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                    Dashboard
                </router-link>
                <router-link to="/admin/matches"    class="sidebar-link" active-class="active" @click.native="sidebarOpen = false">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
                    Matches
                </router-link>
                <router-link to="/admin/teams"      class="sidebar-link" active-class="active" @click.native="sidebarOpen = false">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    Teams
                </router-link>
                <router-link to="/admin/questions"  class="sidebar-link" active-class="active" @click.native="sidebarOpen = false">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    Questions
                </router-link>
                <router-link to="/admin/users"      class="sidebar-link" active-class="active" @click.native="sidebarOpen = false">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    Users
                </router-link>
                <router-link to="/admin/raffle"     class="sidebar-link" active-class="active" @click.native="sidebarOpen = false">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    Raffle Draw
                </router-link>
                <router-link to="/admin/reports"    class="sidebar-link" active-class="active" @click.native="sidebarOpen = false">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                    Reports
                </router-link>
                <router-link to="/admin/facts"      class="sidebar-link" active-class="active" @click.native="sidebarOpen = false">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    FIFA Facts
                </router-link>
                <router-link to="/admin/notifications" class="sidebar-link" active-class="active" @click.native="sidebarOpen = false">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                    Notifications
                </router-link>
            </nav>
            <div class="sidebar-footer">
                <button @click="handleLogout" class="logout-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    Logout
                </button>
            </div>
        </aside>

        <!-- Main Area -->
        <div class="admin-main">
            <header class="admin-header">
                <button class="mobile-menu-btn" @click="sidebarOpen = !sidebarOpen">&#9776;</button>
                <div class="header-title">FIFA World Cup 2026 — Admin</div>
                <div class="header-user">
                    <span class="admin-badge">ADMIN</span>
                    <span class="admin-name">{{ currentUser ? currentUser.name : '' }}</span>
                </div>
            </header>
            <div class="admin-content">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'AdminLayout',
    data() { return { sidebarOpen: false }; },
    computed: { ...mapGetters(['currentUser']) },
    methods: {
        async handleLogout() {
            await this.$store.dispatch('logout');
            this.$router.push({ name: 'Login' });
        },
    },
};
</script>

<style scoped>
.admin-layout { display: flex; min-height: 100vh; background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%); }
.admin-sidebar {
    width: 220px; flex-shrink: 0; background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%);
    display: flex; flex-direction: column;
    border-right: 1px solid rgba(255,165,0,0.2);
    position: sticky; top: 0; height: 100vh;
}
.sidebar-brand { display: flex; align-items: center; gap: 10px; padding: 20px 16px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.sidebar-logo { height: 32px; }
.sidebar-partner-logo { height: 28px; object-fit: contain; }
.sidebar-title { color: #fff; font-family: 'Rajdhani', sans-serif; font-weight: 700; font-size: 0.9rem; line-height: 1.2; }
.sidebar-title small { color: #FFA500; font-size: 0.7rem; font-weight: 400; }
.sidebar-nav { flex: 1; padding: 12px 0; overflow-y: auto; }
.sidebar-link {
    display: flex; align-items: center; gap: 10px;
    padding: 11px 18px; color: rgba(255,255,255,0.65);
    font-family: 'Roboto', sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 0.85rem;
    line-height: 1.4;
    letter-spacing: 0;
    text-decoration: none;
    transition: all 0.2s; border-left: 3px solid transparent;
}
.sidebar-link:hover { color: #fff; background: rgba(255,255,255,0.04); }
.sidebar-link.active { color: #FFA500; border-left-color: #FFA500; background: rgba(255,165,0,0.08); }
.sidebar-footer { padding: 16px; border-top: 1px solid rgba(255,255,255,0.06); }
.logout-link {
    display: flex; align-items: center; gap: 8px;
    color: rgba(255,255,255,0.5); background: none; border: none;
    font-size: 0.85rem; cursor: pointer; padding: 8px 0;
}
.logout-link:hover { color: #ff6b6b; }
.admin-main { flex: 1; display: flex; flex-direction: column; min-width: 0; }
.admin-header {
    background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%); padding: 0 24px;
    height: 56px; display: flex; align-items: center; gap: 16px;
    border-bottom: 2px solid #FFA500; position: sticky; top: 0; z-index: 50;
}
.mobile-menu-btn { display: none; background: none; border: none; color: #fff; font-size: 1.2rem; cursor: pointer; }
.header-title { color: rgba(255,255,255,0.6); font-size: 0.85rem; flex: 1; }
.header-user { display: flex; align-items: center; gap: 10px; }
.admin-badge { background: #FFA500; color: #fff; font-size: 0.65rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; letter-spacing: 1px; }
.admin-name { color: #fff; font-size: 0.85rem; font-weight: 600; }
.admin-content { flex: 1; padding: 24px; overflow-y: auto; }
/* ── Mobile sidebar drawer ──────────────────── */
.sidebar-overlay {
    display: none;
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.55);
    z-index: 200;
}
.sidebar-close {
    display: none;
    margin-left: auto; background: none; border: none;
    color: rgba(255,255,255,0.6); font-size: 1rem; cursor: pointer; padding: 4px;
}
@media (max-width: 768px) {
    .admin-sidebar {
        position: fixed; left: 0; top: 0; bottom: 0;
        z-index: 300; width: 240px;
        transform: translateX(-100%);
        transition: transform 0.25s ease;
    }
    .admin-sidebar.open { transform: translateX(0); }
    .sidebar-overlay { display: block; }
    .sidebar-close { display: block; }
    .mobile-menu-btn { display: block; }
    .admin-content { padding: 16px; }
}
</style>
