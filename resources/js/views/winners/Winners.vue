<template>
    <div class="winners-page">
        <div class="section-header">
            <div class="sh-ball-circle">
                <img :src="$imgBase + '/images/ball-icon.png'" class="sh-ball-img" @error="hideImg">
            </div>
            <div class="sh-text">
                <div class="section-title">Winners History</div>
                <div class="section-sub">FIFA World Cup 2026™</div>
            </div>
            <div class="auto-refresh-badge">
                <span class="refresh-dot"></span>
                Live
            </div>
            <div class="sh-trophy-area">
                <img :src="$imgBase + '/images/livescoretropy.png'" class="sh-trophy-img" @error="hideImg">
            </div>
        </div>

        <div class="winners-body">
            <!-- Left: Today's Winner -->
            <div class="today-winner-card"
                 :style="todayWinner && todayWinner.profile_picture_url ? { backgroundImage: 'url(' + todayWinner.profile_picture_url + ')' } : {}">

                <!-- dark gradient overlay for readability -->
                <div class="tw-overlay"></div>

                <!-- Points badge top-right -->
                <div class="tw-points-badge">
                    <span class="tw-pts-num">{{ todayWinner ? todayWinner.total_points : '—' }}</span>
                    <div class="tw-pts-label">Points</div>
                </div>

                <!-- branding image + text row -->
                <div class="tw-bottom">
                    <img :src="$imgBase + '/images/winnerhistory.png'" class="tw-deco-img" @error="hideImg">
                    <div class="tw-info">
                        <div class="tw-label">Today's Winner</div>
                        <div class="tw-name">{{ todayWinner ? todayWinner.name : 'No winner yet' }}</div>
                        <div class="tw-code">Doctor Code: {{ todayWinner && todayWinner.unique_code ? todayWinner.unique_code : '—' }}</div>
                        <div class="tw-date">{{ todayDate }}</div>
                    </div>
                    <img :src="$imgBase + '/images/winnerhistory.png'" class="tw-deco-img" @error="hideImg">
                </div>
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
                <div v-if="loading" class="empty-state">Loading...</div>
                <div v-else-if="filteredWinners.length === 0" class="empty-state">No winners found.</div>
                <div v-else class="lb-grid">
                    <div v-for="w in filteredWinners" :key="w.id" class="lb-item">
                        <span class="lb-rank">{{ w.rank }}</span>
                        <img :src="lbAvatar(w)" class="lb-avatar" @error="onLbAvatarError">
                        <div class="lb-info">
                            <div class="lb-name">{{ w.name }}</div>
                            <div class="lb-code">Doctor Code: {{ w.unique_code }}</div>
                            <div class="lb-date">{{ w.date || todayDate }}</div>
                        </div>
                        <span class="lb-points" :style="pointsBg(w.rank)">
                            {{ w.total_points }}<br><small>Points</small>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const POLL_INTERVAL = 60000;

export default {
    name: 'Winners',
    data() {
        return {
            topWinners: [],
            todayWinner: null,
            search: '',
            loading: true,
            refreshing: false,
            _pollTimer: null,
        };
    },
    computed: {
        todayDate() {
            return new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
        },
        winnerAvatar() {
            return (this.todayWinner && this.todayWinner.profile_picture_url)
                ? this.todayWinner.profile_picture_url
                : this.$imgBase + '/images/default-avatar.png';
        },
        filteredWinners() {
            const s = this.search.toLowerCase();
            if (!s) return this.topWinners;
            return this.topWinners.filter(w =>
                (w.name || '').toLowerCase().includes(s) ||
                (w.unique_code || '').toLowerCase().includes(s)
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
        },
        async fetchWinners() {
            try {
                const { data } = await this.$http.get('/api/winners');
                const list = data.data || data || [];
                this.topWinners = list.map((w, i) => ({ rank: i + 1, ...w }));
            } catch (e) { this.topWinners = []; }
        },
        async fetchToday() {
            try {
                const { data } = await this.$http.get('/api/winners/today');
                this.todayWinner = data.data || data || null;
            } catch (e) { this.todayWinner = null; }
        },
        async autoFetch() {
            try { await this.loadData(); } catch (e) {}
        },
        async manualRefresh() {
            this.refreshing = true;
            try { await this.loadData(); } finally { this.refreshing = false; }
        },
        hideImg(e) { e.target.style.display = 'none'; },
        onAvatarError(e) { e.target.src = this.$imgBase + '/images/default-avatar.png'; },
        onLbAvatarError(e) { e.target.src = this.$imgBase + '/images/default-avatar.png'; },
        lbAvatar(w) {
            return w.profile_picture_url || (this.$imgBase + '/images/default-avatar.png');
        },
        pointsBg(rank) {
            const colors = ['#FFA500', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899'];
            return 'background:' + (colors[(rank - 1) % colors.length] || '#6b7280');
        },
    },
};
</script>

<style scoped>
.winners-page { display: flex; flex-direction: column; gap: 16px; }

/* Header */
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
.sh-text { flex: 1; display: flex; flex-direction: column; gap: 2px; }
.section-title { color: #FFA500; font-family: 'Rajdhani', sans-serif; font-weight: 800; font-size: 1.2rem; }
.section-sub { color: #fff; font-size: 0.72rem; }
.sh-trophy-area { display: flex; align-items: center; }
.sh-trophy-img { height: 50px; width: auto; object-fit: contain; }
.auto-refresh-badge {
    display: flex; align-items: center; gap: 5px;
    background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.25);
    border-radius: 20px; padding: 3px 10px;
    font-size: 0.7rem; color: #4ade80; font-weight: 600;
}
.refresh-dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; animation: pulse-dot 1.5s infinite; }
@keyframes pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

/* Body */
.winners-body { display: flex; gap: 20px; align-items: stretch; }

/* Today's Winner card */
.today-winner-card {
    width: 260px; flex-shrink: 0;
    border-radius: 12px; overflow: hidden;
    position: relative;
    display: flex; flex-direction: column;
    align-items: center; justify-content: flex-end;
    padding-bottom: 18px;
    min-height: 380px;
    background-color: #1C1153;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
/* dark gradient so text is readable over photo */
.tw-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, rgba(28,17,83,0.15) 0%, rgba(28,17,83,0.55) 55%, rgba(28,17,83,0.92) 100%);
    z-index: 1;
}
/* bottom row: [brand img] [text] [brand img] */
.tw-bottom {
    position: relative; z-index: 3;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 0 6px;
}
.tw-deco-img {
    width: 72px;
    height: auto;
    object-fit: contain;
    flex-shrink: 0;
}
.tw-points-badge {
    position: absolute; top: 14px; right: 14px; z-index: 3;
    background: #06B6D4; border-radius: 20px;
    padding: 6px 16px; text-align: center; line-height: 1.2;
}
.tw-pts-num { color: #fff; font-weight: 800; font-size: 1.15rem; font-family: 'Rajdhani', sans-serif; display: block; }
.tw-pts-label { color: #FFA500; font-size: 0.6rem; font-weight: 600; }
.tw-info { flex: 1; text-align: center; min-width: 0; }
.tw-label { color: #FFA500; font-weight: 700; font-size: 1rem; margin-bottom: 4px; }
.tw-name { color: #fff; font-weight: 700; font-size: 0.9rem; margin-bottom: 3px; }
.tw-code { color: rgba(255,255,255,0.7); font-size: 0.72rem; margin-bottom: 2px; }
.tw-date { color: rgba(255,255,255,0.55); font-size: 0.68rem; }

/* Leaderboard */
.leaderboard-card {
    flex: 1;
    background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%);
    border-radius: 12px; padding: 16px;
    min-height: 380px;
}
.lb-header { display: flex; gap: 10px; margin-bottom: 14px; }
.search-box {
    flex: 1; display: flex; align-items: center; gap: 8px;
    background: rgba(255,255,255,0.06); border-radius: 8px; padding: 10px 14px;
}
.search-input { background: none; border: none; color: #fff; font-size: 0.85rem; outline: none; flex: 1; }
.search-input::placeholder { color: rgba(255,255,255,0.45); }
.refresh-btn {
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
    border-radius: 8px; color: #fff; padding: 8px 12px; cursor: pointer;
}
.refresh-btn.spinning svg { animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

.lb-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.lb-item {
    display: flex; align-items: center; gap: 8px;
    background: rgba(255,255,255,0.05); border-radius: 8px; padding: 10px;
}
.lb-rank { color: #fff; font-size: 0.82rem; font-weight: 700; width: 16px; text-align: center; flex-shrink: 0; }
.lb-avatar { width: 38px; height: 38px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
.lb-info { flex: 1; min-width: 0; }
.lb-name { color: #fff; font-size: 0.78rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.lb-code { color: rgba(255,255,255,0.55); font-size: 0.62rem; }
.lb-date { color: rgba(255,255,255,0.4); font-size: 0.6rem; }
.lb-points {
    color: #fff; font-weight: 700; padding: 5px 10px;
    border-radius: 12px; font-size: 0.82rem;
    text-align: center; line-height: 1.2; white-space: nowrap; flex-shrink: 0;
}
.lb-points small { font-size: 0.58rem; font-weight: 400; display: block; opacity: 0.85; }

.empty-state { color: rgba(255,255,255,0.4); text-align: center; padding: 30px; font-size: 0.85rem; }

@media (max-width: 900px) {
    .winners-body { flex-direction: column; }
    .today-winner-card { width: 100%; min-height: 340px; }
    .lb-grid { grid-template-columns: 1fr; }
}
</style>
