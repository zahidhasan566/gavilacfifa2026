<template>
    <div class="winners-page">
        <div class="section-header">
            <div class="sh-ball-circle">
                <img :src="$imgBase + '/images/ball-icon.png'" class="sh-ball-img" onerror="this.style.display='none'">
            </div>
            <div class="sh-text">
                <div class="section-title">Winners History</div>
                <div class="section-sub">FIFA World Cup 2026™</div>
            </div>
            <div class="auto-refresh-badge" :class="{ active: autoRefresh }">
                <span class="refresh-dot"></span>
                Live
            </div>
            <div class="sh-trophy-area">
                <img :src="$imgBase + '/images/livescoretropy.png'" class="sh-trophy-img" onerror="this.style.display='none'">
            </div>
        </div>

        <div class="winners-body">
            <!-- Left: Today's Winner -->
            <div class="today-winner-card">
                <div class="tw-points-badge">
                    {{ todayWinner ? todayWinner.total_points : '—' }}
                    <div class="tw-pts-label">Points</div>
                </div>
                <div class="tw-avatar-wrapper">
                    <img :src="todayWinner ? todayWinner.profile_picture_url : window.__IMG__ + '/images/default-avatar.png'"
                         class="tw-avatar" onerror="this.src=window.__IMG__ + '/images/default-avatar.png'">
                </div>
                <div class="tw-label">Today's Winner</div>
                <div class="tw-name">{{ todayWinner ? todayWinner.name : 'No winner yet' }}</div>
                <div class="tw-code">{{ todayWinner ? 'Doctor Code: ' + todayWinner.unique_code : '' }}</div>
                <div class="tw-date">{{ todayDate }}</div>

                <div class="last-updated">Updated {{ lastUpdated }}</div>
            </div>

            <!-- Right: Leaderboard -->
            <div class="leaderboard-card">
                <div class="lb-header">
                    <div class="search-box">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                        <input v-model="search" placeholder="Search name or doctor code" class="search-input">
                    </div>
                    <button class="refresh-btn" @click="manualRefresh" :class="{ spinning: refreshing }" title="Refresh">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                    </button>
                </div>
                <div class="lb-grid">
                    <div v-for="w in filteredWinners" :key="w.id" class="lb-item">
                        <span class="lb-rank">{{ w.rank }}</span>
                        <img :src="w.profile_picture_url" class="lb-avatar"
                             onerror="this.src=window.__IMG__ + '/images/default-avatar.png'">
                        <div class="lb-info">
                            <div class="lb-name">{{ w.name }}</div>
                            <div class="lb-code">Doctor Code: {{ w.unique_code }}</div>
                            <div class="lb-date">{{ todayDate }}</div>
                        </div>
                        <span class="lb-points" :style="pointsColor(w.rank)">{{ w.total_points }}</span>
                    </div>
                </div>
                <div v-if="filteredWinners.length === 0" class="empty-state">No winners found.</div>
            </div>
        </div>
    </div>
</template>

<script>
const POLL_INTERVAL = 60000; // auto-refresh every 60 seconds

export default {
    name: 'Winners',
    data() {
        return {
            topWinners: [],
            todayWinner: null,
            search: '',
            loading: true,
            refreshing: false,
            autoRefresh: true,
            lastUpdated: 'just now',
            _pollTimer: null,
        };
    },
    computed: {
        todayDate() {
            return new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
        },
        filteredWinners() {
            const s = this.search.toLowerCase();
            if (!s) return this.topWinners;
            return this.topWinners.filter(w =>
                w.name.toLowerCase().includes(s) || w.unique_code.toLowerCase().includes(s)
            );
        },
    },
    async mounted() {
        await this.loadData();
        this.loading = false;
        this._pollTimer = setInterval(this.autoFetch, POLL_INTERVAL);
    },
    beforeDestroy() {
        if (this._pollTimer) clearInterval(this._pollTimer);
    },
    methods: {
        async loadData() {
            await Promise.all([this.fetchWinners(), this.fetchToday()]);
            this.updateTimestamp();
        },
        async fetchWinners() {
            const { data } = await this.$http.get('/api/winners');
            this.topWinners = data.data;
        },
        async fetchToday() {
            const { data } = await this.$http.get('/api/winners/today');
            this.todayWinner = data.data;
        },
        async autoFetch() {
            try {
                await this.loadData();
            } catch (e) { /* silent background refresh */ }
        },
        async manualRefresh() {
            this.refreshing = true;
            try { await this.loadData(); } finally { this.refreshing = false; }
        },
        updateTimestamp() {
            const now = new Date();
            this.lastUpdated = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
        },
        pointsColor(rank) {
            const colors = { 1: '#FFA500', 2: '#22c55e', 3: '#3b82f6', 4: '#8b5cf6', 5: '#ec4899' };
            return 'background:' + (colors[rank] || '#6b7280');
        },
    },
};
</script>

<style scoped>
.winners-page { display: flex; flex-direction: column; gap: 16px; }
.section-header {
    display: flex; align-items: center; gap: 14px;
    padding: 0 16px;
    background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%);
    border-radius: 12px;
    height: 70px; overflow: hidden;
}
.sh-ball-circle {
    width: 46px; height: 46px; border-radius: 50%;
    background: #1C1153; border: 2px solid rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.sh-ball-img { width: 28px; height: 28px; object-fit: contain; }
.sh-text { display: flex; flex-direction: column; gap: 2px; flex: 1; }
.section-title { color: #FFA500; font-family: 'Rajdhani', sans-serif; font-weight: 800; font-size: 1.2rem; }
.section-sub { color: #fff; font-size: 0.72rem; }
.sh-trophy-area { display: flex; align-items: center; padding: 0 4px; }
.sh-trophy-img { height: 50px; width: auto; object-fit: contain; }

.auto-refresh-badge { display: flex; align-items: center; gap: 5px; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.25); border-radius: 20px; padding: 3px 10px; font-size: 0.7rem; color: #4ade80; font-weight: 600; }
.refresh-dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; animation: pulse-dot 1.5s infinite; }
@keyframes pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

.winners-body { display: flex; gap: 20px; align-items: flex-start; }

.today-winner-card {
    width: 220px; flex-shrink: 0; background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%);
    border-radius: 12px; padding: 20px 16px; text-align: center; position: relative;
}
.tw-points-badge {
    position: absolute; top: 12px; right: 12px;
    background: #3b82f6; color: #fff; border-radius: 20px;
    padding: 5px 12px; font-weight: 700; font-size: 1rem;
    font-family: 'Rajdhani', sans-serif;
}
.tw-pts-label { font-size: 0.58rem; font-weight: 400; opacity: 0.8; }
.tw-avatar-wrapper { margin: 8px auto; width: 110px; height: 110px; border-radius: 50%; overflow: hidden; border: 3px solid rgba(255,255,255,0.15); }
.tw-avatar { width: 100%; height: 100%; object-fit: cover; }
.tw-label { color: #FFA500; font-weight: 700; font-size: 0.9rem; margin-bottom: 4px; }
.tw-name { color: #fff; font-weight: 700; font-size: 0.85rem; margin-bottom: 3px; }
.tw-code { color: #fff; font-size: 0.7rem; }
.tw-date { color: #fff; font-size: 0.65rem; margin-top: 3px; }
.last-updated { margin-top: 8px; color: #fff; font-size: 0.6rem; }

.leaderboard-card { flex: 1; background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); border-radius: 12px; padding: 16px; }
.lb-header { display: flex; gap: 10px; margin-bottom: 16px; }
.search-box { flex: 1; display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.06); border-radius: 8px; padding: 10px 14px; }
.search-input { background: none; border: none; color: #fff; font-size: 0.85rem; outline: none; flex: 1; }
.search-input::placeholder { color: #fff; opacity: 0.7; }
.refresh-btn { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; color: #fff; padding: 8px 12px; cursor: pointer; transition: transform 0.3s; }
.refresh-btn.spinning svg { animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

.lb-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.lb-item { display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.04); border-radius: 8px; padding: 12px; }
.lb-rank { color: #fff; font-size: 0.8rem; font-weight: 700; width: 18px; text-align: center; }
.lb-avatar { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; }
.lb-info { flex: 1; min-width: 0; }
.lb-name { color: #fff; font-size: 0.8rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.lb-date, .lb-code { color: #fff; font-size: 0.65rem; }
.lb-points { color: #fff; font-weight: 700; padding: 4px 10px; border-radius: 12px; font-size: 0.8rem; white-space: nowrap; }
.empty-state { color: #fff; text-align: center; padding: 30px; }

@media (max-width: 900px) {
    .winners-body { flex-direction: column; }
    .today-winner-card { width: 100%; }
    .lb-grid { grid-template-columns: 1fr; }
}
</style>
