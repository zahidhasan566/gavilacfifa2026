<template>
    <div class="winners-page">

        <!-- Header -->
        <div class="section-header">
            <div class="sh-ball-circle">
                <img :src="$imgBase + '/images/ball-icon.png'" class="sh-ball-img" @error="hideImg">
            </div>
            <div class="sh-text">
                <div class="section-title">Leadership Board </div>
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

            <!-- LEFT: Carousel -->
            <div class="carousel-wrap">
                <div v-if="loading" class="carousel-loading">Loading...</div>
                <template v-else-if="carousel.length > 0">
                    <div class="carousel-stage">
                        <transition :name="slideDir" mode="out-in">
                            <div :key="activeIdx" class="carousel-slide">
                                <!-- Winner photo as actual img tag -->
                                <img :src="carousel[activeIdx].profile_picture_url"
                                     class="cs-bg-img"
                                     @error="e => e.target.src = $imgBase + '/images/default-avatar.png'">
                                <div class="cs-overlay"></div>

                                <div class="cs-rank-badge" :class="rankClass(activeIdx)">
                                    <span class="cs-rank-icon">{{ rankIcon(activeIdx) }}</span>
                                    <span class="cs-rank-num">{{ activeIdx + 1 }}</span>
                                    <span class="cs-rank-lbl">{{ rankSuffix(activeIdx) }}</span>
                                </div>

                                <div v-if="carousel[activeIdx].prize_points" class="cs-prize-badge">
                                    <span class="cs-prize-num">+{{ carousel[activeIdx].prize_points }}</span>
                                    <span class="cs-prize-lbl">pts</span>
                                </div>

                                <div class="cs-bottom">
                                    <div class="cs-info">
                                        <div class="cs-winner-label">🏆 Raffle Winner</div>
                                        <div class="cs-name">{{ carousel[activeIdx].name }}</div>
                                        <div class="cs-code">Doctor Code: {{ carousel[activeIdx].unique_code }}</div>
                                        <div class="cs-match-pill">
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/></svg>
                                            Won in: {{ carousel[activeIdx].match_label }}
                                        </div>
                                        <div class="cs-date">{{ carousel[activeIdx].draw_date }}</div>
                                    </div>
                                </div>
                            </div>
                        </transition>

                        <button v-if="carousel.length > 1" class="cs-arrow cs-prev" @click="prevSlide">&#8249;</button>
                        <button v-if="carousel.length > 1" class="cs-arrow cs-next" @click="nextSlide">&#8250;</button>
                    </div>

                    <div v-if="carousel.length > 1" class="cs-dots">
                        <span v-for="(_, i) in carousel" :key="i"
                              class="cs-dot" :class="{ active: i === activeIdx }"
                              @click="goToSlide(i)"></span>
                    </div>
                </template>
                <div v-else class="carousel-stage carousel-empty">
                    <div class="ce-icon">🏆</div>
                    <div class="ce-title">No Winners Yet</div>
                    <div class="ce-sub">Raffle draw winners will appear here</div>
                </div>
            </div>

            <!-- RIGHT: Tabs + Lists -->
            <div class="cards-panel">

                <!-- Tab toggle -->
                <div class="panel-tabs">
                    <button class="ptab" :class="{ active: panelTab === 'rank' }" @click="panelTab = 'rank'">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                        Rank List
                    </button>
                    <button class="ptab" :class="{ active: panelTab === 'match' }" @click="panelTab = 'match'">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        By Match
                    </button>
                </div>

                <!-- RANK TAB: Search + sorted list -->
                <template v-if="panelTab === 'rank'">
                    <div class="search-bar">
                        <svg class="search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                        <input v-model="search" class="search-input" placeholder="Search name or doctor code…">
                        <button class="refresh-btn" :class="{ spinning: refreshing }" @click="manualRefresh" title="Refresh">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                        </button>
                    </div>

                    <div v-if="loading" class="empty-state">Loading…</div>
                    <div v-else-if="filteredCarousel.length === 0" class="empty-state">No winners found.</div>
                    <div v-else class="winners-list">
                        <div v-for="w in filteredCarousel" :key="w.id"
                             class="wl-item" :class="{ highlighted: carousel[activeIdx] && carousel[activeIdx].id === w.id }"
                             @click="jumpToWinner(w)">
                            <span class="wl-rank" :class="rankClass(w._rank - 1)">{{ w._rank }}</span>
                            <div class="wl-info">
                                <div class="wl-name">{{ w.name }}</div>
                                <div class="wl-code">{{ w.unique_code }}</div>
                                <div class="wl-match">
                                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#FFA500" stroke-width="2.5"><circle cx="12" cy="12" r="10"/></svg>
                                    {{ w.match_label }}
                                </div>
                            </div>
                            <div class="wl-right">
                                <span v-if="w.prize_points" class="wl-pts">+{{ w.prize_points }} pts</span>
                                <span class="wl-date">{{ w.draw_date }}</span>
                            </div>
                        </div>
                    </div>
                </template>

                <!-- MATCH TAB: pill tabs per match + winner list -->
                <template v-else>
                    <div v-if="loading" class="empty-state">Loading…</div>
                    <div v-else-if="byMatch.length === 0" class="empty-state">No match draw data yet.</div>
                    <template v-else>
                        <!-- Match selector pills -->
                        <div class="match-tabs">
                            <button v-for="(group, gi) in byMatch" :key="gi"
                                    class="match-tab" :class="{ active: selectedMatchIdx === gi }"
                                    @click="selectedMatchIdx = gi">
                                {{ group.match_label }}
                            </button>
                        </div>

                        <!-- Selected match info bar -->
                        <div class="ml-info-bar" v-if="byMatch[selectedMatchIdx]">
                            <span class="ml-ball">⚽</span>
                            <span class="ml-bar-label">{{ byMatch[selectedMatchIdx].match_label }}</span>
                            <span v-if="byMatch[selectedMatchIdx].match_date" class="ml-bar-date">{{ byMatch[selectedMatchIdx].match_date }}</span>
                            <span class="ml-count">{{ byMatch[selectedMatchIdx].winners.length }} winner{{ byMatch[selectedMatchIdx].winners.length !== 1 ? 's' : '' }}</span>
                        </div>

                        <!-- Winners for selected match -->
                        <div class="winners-list" v-if="byMatch[selectedMatchIdx] && byMatch[selectedMatchIdx].winners.length">
                            <div v-for="(w, wi) in byMatch[selectedMatchIdx].winners" :key="w.id"
                                 class="mlw-item" @click="jumpToWinnerById(w.id)">
                                <span class="mlw-num">{{ wi + 1 }}</span>
                                <img :src="w.profile_picture_url" class="mlw-avatar"
                                     @error="e => e.target.src = $imgBase + '/images/default-avatar.png'">
                                <div class="mlw-info">
                                    <div class="mlw-name">{{ w.name }}</div>
                                    <div class="mlw-code">{{ w.unique_code }}</div>
                                </div>
                                <div class="mlw-right">
                                    <span v-if="w.prize_points" class="mlw-pts">+{{ w.prize_points }} pts</span>
                                    <span class="mlw-date">{{ w.draw_date }}</span>
                                </div>
                            </div>
                        </div>
                        <div v-else class="empty-state">No raffle winners for this match.</div>
                    </template>
                </template>

                <!-- Advertisement Carousel -->
                <div class="winner-ad-carousel">
                    <transition name="ad-fade" mode="out-in">
                        <img :key="adIndex"
                             :src="$imgBase + '/images/branding_images/' + encodeURIComponent(adImages[adIndex])"
                             alt="Advertisement" class="winner-ad-carousel-img">
                    </transition>
                    <div class="winner-ad-dots">
                        <span v-for="(img, i) in adImages" :key="i"
                              class="ad-dot" :class="{ active: i === adIndex }"
                              @click="goAdSlide(i)"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const POLL_INTERVAL = 60000;
const AUTO_SLIDE_MS = 3500;

export default {
    name: 'Winners',
    data() {
        return {
            carousel: [],
            byMatch: [],
            search: '',
            loading: true,
            refreshing: false,
            activeIdx: 0,
            slideDir: 'slide-left',
            panelTab: 'rank',
            selectedMatchIdx: 0,
            _pollTimer: null,
            _slideTimer: null,
            _adTimer: null,
            adIndex: 0,
            adImages: [
                'FIFA website Work-09.png',
            ],
        };
    },
    computed: {
        filteredCarousel() {
            const s = this.search.toLowerCase().trim();
            if (!s) return this.carousel;
            return this.carousel.filter(w =>
                (w.name || '').toLowerCase().includes(s) ||
                (w.unique_code || '').toLowerCase().includes(s)
            );
        },
    },
    async mounted() {
        await this.loadData();
        this.loading = false;
        this.startAutoSlide();
        this.startAdCarousel();
        this._pollTimer = setInterval(this.loadData, POLL_INTERVAL);
    },
    beforeDestroy() {
        clearInterval(this._pollTimer);
        clearInterval(this._slideTimer);
        clearInterval(this._adTimer);
    },
    methods: {
        startAdCarousel() {
            clearInterval(this._adTimer);
            this._adTimer = setInterval(() => {
                this.adIndex = (this.adIndex + 1) % this.adImages.length;
            }, 3000);
        },
        goAdSlide(i) {
            this.adIndex = i;
            this.startAdCarousel();
        },
        async loadData() {
            try {
                const { data } = await this.$http.get('/api/winners/raffle');
                const sorted = (data.data.carousel || []).sort((a, b) => (b.prize_points || 0) - (a.prize_points || 0));
                sorted.forEach((item, i) => { item._rank = i + 1; });
                this.carousel = sorted;
                this.byMatch = data.data.by_match || [];
                this.selectedMatchIdx = 0;
                if (this.activeIdx >= this.carousel.length) this.activeIdx = 0;
            } catch (e) {}
        },
        async manualRefresh() {
            this.refreshing = true;
            try { await this.loadData(); } finally { this.refreshing = false; }
        },
        startAutoSlide() {
            if (this._slideTimer) clearInterval(this._slideTimer);
            this._slideTimer = setInterval(this.nextSlide, AUTO_SLIDE_MS);
        },
        nextSlide() {
            if (this.carousel.length < 2) return;
            this.slideDir = 'slide-left';
            this.activeIdx = (this.activeIdx + 1) % this.carousel.length;
        },
        prevSlide() {
            if (this.carousel.length < 2) return;
            this.slideDir = 'slide-right';
            this.activeIdx = (this.activeIdx - 1 + this.carousel.length) % this.carousel.length;
            this.startAutoSlide();
        },
        goToSlide(i) {
            this.slideDir = i > this.activeIdx ? 'slide-left' : 'slide-right';
            this.activeIdx = i;
            this.startAutoSlide();
        },
        jumpToWinner(w) {
            const idx = this.carousel.findIndex(c => c.id === w.id);
            if (idx !== -1) this.goToSlide(idx);
        },
        jumpToWinnerById(id) {
            const idx = this.carousel.findIndex(c => c.id === id);
            if (idx !== -1) { this.goToSlide(idx); this.panelTab = 'rank'; }
        },
        rankClass(idx) {
            if (idx === 0) return 'rank-gold';
            if (idx === 1) return 'rank-silver';
            if (idx === 2) return 'rank-bronze';
            return 'rank-normal';
        },
        rankIcon(idx) {
            return idx === 0 ? '👑' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : '#';
        },
        rankSuffix(idx) {
            const n = idx + 1;
            if (n === 1) return 'st';
            if (n === 2) return 'nd';
            if (n === 3) return 'rd';
            return 'th';
        },
        hideImg(e) { e.target.style.display = 'none'; },
    },
};
</script>

<style scoped>
.winners-page { display: flex; flex-direction: column; gap: 16px; }

/* ── Header ── */
.section-header {
    display: flex; align-items: center; gap: 14px;
    padding: 0 16px;
    background: linear-gradient(180deg, #150a4e 0%, #1A0040 100%);
    border-radius: 12px; height: 70px; overflow: hidden;
}
.sh-ball-circle {
    width: 46px; height: 46px; border-radius: 50%;
    background: #1A0040; border: 2px solid rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.sh-ball-img { width: 28px; height: 28px; object-fit: contain; }
.sh-text { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.section-title { color: #FFA500; font-family: 'Rajdhani', sans-serif; font-weight: 800; font-size: 1.2rem; white-space: nowrap; }
.section-sub { color: #fff; font-size: 0.72rem; white-space: nowrap; }
.sh-trophy-area { display: flex; align-items: center; }
.sh-trophy-img { height: 50px; object-fit: contain; }
.auto-refresh-badge {
    display: flex; align-items: center; gap: 5px;
    background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.25);
    border-radius: 20px; padding: 3px 10px;
    font-size: 0.7rem; color: #4ade80; font-weight: 600;
}
.refresh-dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; animation: pulse-dot 1.5s infinite; }
@keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:.3} }

/* ── Body ── */
.winners-body { display: flex; gap: 20px; align-items: flex-start; }
.carousel-empty {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    height: 480px; background: linear-gradient(180deg, #150a4e 0%, #1A0040 100%);
    border-radius: 12px;
}
.ce-icon { font-size: 3.5rem; margin-bottom: 12px; opacity: .5; }
.ce-title { color: rgba(255,255,255,.5); font-family: 'Rajdhani', sans-serif; font-size: 1.2rem; font-weight: 700; }
.ce-sub { color: rgba(255,255,255,.3); font-size: .78rem; margin-top: 6px; }

/* ── Carousel ── */
.carousel-wrap { flex: 3; display: flex; flex-direction: column; gap: 10px; }
.carousel-loading { color: rgba(255,255,255,0.4); text-align: center; padding: 40px; }
.carousel-stage { position: relative; border-radius: 12px; overflow: hidden; height: 480px; }
.carousel-slide {
    width: 100%; height: 100%;
    background-color: #1A0040;
    display: flex; flex-direction: column; align-items: center; justify-content: flex-end;
    padding-bottom: 18px; position: relative; overflow: hidden;
}
.cs-bg-img {
    position: absolute; inset: 0; width: 100%; height: 100%;
    object-fit: cover; object-position: center center;
    z-index: 0;
}
.cs-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, rgba(28,17,83,.15) 0%, rgba(28,17,83,.55) 55%, rgba(28,17,83,.92) 100%);
    z-index: 1;
}
/* Rank badge – top left of carousel */
.cs-rank-badge {
    position: absolute; top: 14px; left: 14px; z-index: 4;
    width: 64px; height: 64px; border-radius: 50%;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    box-shadow: 0 4px 18px rgba(0,0,0,.55);
    border: 3px solid rgba(255,255,255,.25);
    line-height: 1;
}
.cs-rank-badge.rank-gold   { background: radial-gradient(circle at 35% 35%, #FFE566, #D4A000); border-color: #FFD700; }
.cs-rank-badge.rank-silver { background: radial-gradient(circle at 35% 35%, #E8E8E8, #8A8A8A); border-color: #C0C0C0; }
.cs-rank-badge.rank-bronze { background: radial-gradient(circle at 35% 35%, #E8A060, #8B4513); border-color: #CD7F32; }
.cs-rank-badge.rank-normal { background: radial-gradient(circle at 35% 35%, #6B4FA0, #2A0066); border-color: rgba(255,255,255,.2); }
.cs-rank-icon { font-size: .9rem; line-height: 1; }
.cs-rank-num  { color: #fff; font-weight: 900; font-size: 1.45rem; font-family: 'Rajdhani', sans-serif; line-height: 1; text-shadow: 0 2px 4px rgba(0,0,0,.4); }
.cs-rank-lbl  { color: rgba(255,255,255,.85); font-size: .55rem; font-weight: 700; text-transform: uppercase; letter-spacing: .04em; }

.cs-prize-badge {
    position: absolute; top: 14px; right: 14px; z-index: 3;
    background: #06B6D4; border-radius: 20px; padding: 6px 16px;
    text-align: center; line-height: 1.2; display: flex; flex-direction: column; align-items: center;
}
.cs-prize-num { color: #fff; font-weight: 800; font-size: 1.15rem; font-family: 'Rajdhani', sans-serif; }
.cs-prize-lbl { color: #FFA500; font-size: 0.6rem; font-weight: 600; }
.cs-bottom {
    position: relative; z-index: 3; width: 100%;
    display: flex; align-items: center; justify-content: center; gap: 6px; padding: 0 6px;
}
.cs-deco { width: 72px; height: auto; object-fit: contain; flex-shrink: 0; }
.cs-info { flex: 1; text-align: center; min-width: 0; }
.cs-winner-label { color: #FFA500; font-weight: 700; font-size: 1rem; margin-bottom: 3px; }
.cs-name { color: #fff; font-weight: 700; font-size: .95rem; margin-bottom: 2px; }
.cs-code { color: rgba(255,255,255,.7); font-size: .72rem; margin-bottom: 2px; }
.cs-date { color: rgba(255,255,255,.45); font-size: .65rem; }
.cs-arrow {
    position: absolute; top: 50%; transform: translateY(-50%); z-index: 5;
    background: rgba(0,0,0,.4); border: none; color: #fff; font-size: 2rem; cursor: pointer;
    width: 40px; height: 60px; display: flex; align-items: center; justify-content: center;
    transition: background .2s;
}
.cs-arrow:hover { background: rgba(255,165,0,.4); }
.cs-prev { left: 0; border-radius: 0 8px 8px 0; }
.cs-next { right: 0; border-radius: 8px 0 0 8px; }
.cs-dots { display: flex; justify-content: center; gap: 7px; }
.cs-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,.25); cursor: pointer; transition: background .2s; }
.cs-dot.active { background: #FFA500; }

.slide-left-enter-active,.slide-left-leave-active,
.slide-right-enter-active,.slide-right-leave-active { transition: all .45s ease; }
.slide-left-enter { transform: translateX(100%); opacity: 0; }
.slide-left-leave-to { transform: translateX(-100%); opacity: 0; }
.slide-right-enter { transform: translateX(-100%); opacity: 0; }
.slide-right-leave-to { transform: translateX(100%); opacity: 0; }

/* ── Right panel ── */
.cards-panel {
    flex: 2; background: linear-gradient(180deg, #150a4e 0%, #1A0040 100%);
    border-radius: 12px; padding: 14px; display: flex; flex-direction: column; gap: 12px;
}

/* Search bar */
.search-bar {
    display: flex; align-items: center; gap: 8px;
    background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);
    border-radius: 8px; padding: 10px 12px;
}
.search-icon { flex-shrink: 0; display: block; }
.search-input { flex: 1; background: none; border: none; color: #fff; font-size: .85rem; outline: none; min-width: 0; }
.search-input::placeholder { color: rgba(255,255,255,.4); }
.refresh-btn {
    flex-shrink: 0; background: none; border: none; color: rgba(255,255,255,.5);
    cursor: pointer; padding: 2px; display: flex; align-items: center;
}
.refresh-btn:hover svg { stroke: #FFA500; }
.refresh-btn.spinning svg { animation: spin .8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

/* Winners list */
.winners-list { display: flex; flex-direction: column; overflow-y: auto; max-height: 420px; }
.wl-item {
    display: flex; align-items: center; gap: 10px;
    padding: 10px 12px; border-bottom: 1px solid rgba(255,255,255,.04);
    cursor: pointer; transition: background .15s;
    border-left: 3px solid transparent;
}
.wl-item:hover { background: rgba(255,255,255,.04); }
.wl-item.highlighted { background: rgba(255,165,0,.07); border-left-color: #FFA500; }
.wl-rank {
    font-size: .72rem; font-weight: 800; width: 22px; height: 22px;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; color: rgba(255,255,255,.4); background: rgba(255,255,255,.07);
}
.wl-rank.rank-gold   { background: #D4A000; color: #fff; }
.wl-rank.rank-silver { background: #8A8A8A; color: #fff; }
.wl-rank.rank-bronze { background: #8B4513; color: #fff; }
.wl-info { flex: 1; min-width: 0; }
.wl-name { color: #fff; font-size: .85rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.wl-code { color: rgba(255,255,255,.4); font-size: .68rem; margin-bottom: 2px; }
.wl-match { display: flex; align-items: center; gap: 4px; color: #FFA500; font-size: .68rem; font-weight: 600; }
.wl-right { display: flex; flex-direction: column; align-items: flex-end; gap: 3px; flex-shrink: 0; }
.wl-pts { background: rgba(34,197,94,.15); color: #4ade80; border-radius: 8px; padding: 2px 8px; font-size: .7rem; font-weight: 700; white-space: nowrap; }
.wl-date { color: rgba(255,255,255,.3); font-size: .62rem; white-space: nowrap; }

/* Carousel match pill */
.cs-match-pill {
    display: inline-flex; align-items: center; gap: 4px;
    background: rgba(255,165,0,.15); color: #FFA500;
    border: 1px solid rgba(255,165,0,.3); border-radius: 20px;
    padding: 3px 10px; font-size: .7rem; font-weight: 600; margin: 4px 0;
}

/* ── Panel tabs (block toggle) ── */
.panel-tabs {
    display: flex; gap: 6px;
    background: rgba(0,0,0,.2); border-radius: 8px; padding: 4px;
}
.ptab {
    flex: 1; display: flex; align-items: center; justify-content: center; gap: 5px;
    background: none; border: none; color: rgba(255,255,255,.45);
    font-size: .75rem; font-weight: 600; padding: 7px 0; border-radius: 6px;
    cursor: pointer; transition: background .18s, color .18s;
}
.ptab:hover { color: rgba(255,255,255,.75); background: rgba(255,255,255,.05); }
.ptab.active { background: rgba(255,165,0,.18); color: #FFA500; }
.ptab svg { flex-shrink: 0; stroke: currentColor; }

/* ── By-match: pill tabs (same style as LiveScore match-tabs) ── */
.match-tabs {
    display: flex; flex-wrap: wrap; gap: 6px;
    padding: 2px 0 4px; border-bottom: 1px solid rgba(255,255,255,.06);
    padding-bottom: 10px;
}
.match-tab {
    background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);
    border-radius: 20px; color: rgba(255,255,255,.6);
    font-size: .68rem; font-weight: 600; padding: 4px 12px;
    cursor: pointer; transition: all .15s; white-space: nowrap;
}
.match-tab:hover { border-color: rgba(255,165,0,.4); color: #FFA500; }
.match-tab.active { background: rgba(255,165,0,.15); border-color: #FFA500; color: #FFA500; }

/* Selected match info bar */
.ml-info-bar {
    display: flex; align-items: center; gap: 7px;
    padding: 7px 10px; border-radius: 7px;
    background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.07);
}
.ml-ball { font-size: .82rem; flex-shrink: 0; }
.ml-bar-label { color: #fff; font-size: .8rem; font-weight: 700; flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.ml-bar-date { color: rgba(255,255,255,.35); font-size: .65rem; white-space: nowrap; }
.ml-count { background: rgba(255,165,0,.15); color: #FFA500; border-radius: 20px; padding: 2px 8px; font-size: .65rem; font-weight: 700; white-space: nowrap; flex-shrink: 0; }

/* Winner rows inside By Match */
.mlw-item {
    display: flex; align-items: center; gap: 8px;
    padding: 9px 12px; border-bottom: 1px solid rgba(255,255,255,.04);
    cursor: pointer; transition: background .15s;
}
.mlw-item:hover { background: rgba(255,255,255,.04); }
.mlw-num { color: rgba(255,255,255,.3); font-size: .68rem; font-weight: 700; width: 16px; text-align: center; flex-shrink: 0; }
.mlw-avatar { width: 30px; height: 30px; border-radius: 50%; object-fit: cover; flex-shrink: 0; border: 1px solid rgba(255,255,255,.15); }
.mlw-info { flex: 1; min-width: 0; }
.mlw-name { color: #fff; font-size: .8rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mlw-code { color: rgba(255,255,255,.35); font-size: .65rem; }
.mlw-right { display: flex; flex-direction: column; align-items: flex-end; gap: 2px; flex-shrink: 0; }
.mlw-pts { background: rgba(34,197,94,.15); color: #4ade80; border-radius: 8px; padding: 2px 7px; font-size: .68rem; font-weight: 700; white-space: nowrap; }
.mlw-date { color: rgba(255,255,255,.3); font-size: .6rem; white-space: nowrap; }

.empty-state { color: rgba(255,255,255,.35); text-align: center; padding: 30px; font-size: .85rem; }

@media (max-width: 900px) {
    .winners-body { flex-direction: column; }
    .carousel-wrap, .cards-panel { width: 100%; }
    .cards-grid { max-height: 360px; }
}
@media (max-width: 600px) {
    .sh-trophy-area { display: none; }
    .section-header { gap: 10px; padding: 0 12px; }
    .cs-deco { width: 48px; }
    .cards-grid { grid-template-columns: 1fr 1fr; }
}

/* ── Winner Ad Carousel ── */
.winner-ad-carousel {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    flex-shrink: 0;
}
.winner-ad-carousel-img { width: 100%; height: auto; display: block; border-radius: 10px; }
.winner-ad-dots {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 6px;
    z-index: 10;
}
.ad-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: rgba(255,255,255,0.45);
    cursor: pointer;
    transition: background 0.2s;
}
.ad-dot.active { background: #FFA500; }
.ad-fade-enter-active, .ad-fade-leave-active { transition: opacity 0.5s ease; }
.ad-fade-enter, .ad-fade-leave-to { opacity: 0; }
</style>
