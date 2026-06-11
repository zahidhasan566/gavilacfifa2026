<template>
    <div class="live-score-page">
        <div class="ls-card">

            <!-- Left: Matches -->
            <div class="ls-matches-section">
                <!-- Section Header -->
                <div class="section-header">
                    <!-- Left: Glowing football icon -->
                    <div class="sh-ball-wrap">
                        <img :src="$imgBase + '/images/ball-icon.png'" class="sh-ball-img" onerror="this.style.display='none'">
                    </div>
                    <div class="sh-text">
                        <div class="sh-title">Live Score</div>
                        <div class="sh-sub">FIFA World Cup 2026™</div>
                    </div>
                    <!-- Right: Trophy image -->
                    <div class="sh-trophy-area">
                        <img :src="$imgBase + '/images/livescoretropy.png'" class="sh-trophy-img" onerror="this.style.display='none'">
                    </div>
                </div>

                <div v-if="loading" class="state-msg">Loading matches...</div>
                <div v-else-if="displayMatches.length === 0" class="state-msg">No matches right now.</div>

                <!-- Carousel -->
                <div v-else class="mc-carousel-wrap">
                    <transition :name="slideDir" mode="out-in">
                        <div :key="carouselPage" class="match-cards-grid">
                            <div v-for="match in pagedMatches" :key="match.id" class="match-card">
                                <div class="mc-date-bold">{{ formatMatchDate(match.match_date_bd || match.match_date) }}</div>
                                <div class="mc-header">
                                    <span class="group-badge">{{ match.group_name }}, ROUND {{ match.round_number }}</span>
                                    <span class="mc-venue">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>
                                        {{ match.venue || 'TBD' }}
                                    </span>
                                </div>
                                <div class="mc-body">
                                    <div class="team-col">
                                        <img :src="teamFlagUrl(match.team1)" class="team-flag-img"
                                             onerror="this.src=window.__IMG__ + '/images/default-avatar.png'">
                                        <span class="team-name">{{ (match.team1 && match.team1.name) || 'TBD' }}</span>
                                    </div>
                                    <div class="score-col">
                                        <div class="score-row">
                                            <div class="score-circle">{{ match.team1_score != null ? match.team1_score : '—' }}</div>
                                            <span class="score-dash">—</span>
                                            <div class="score-circle">{{ match.team2_score != null ? match.team2_score : '—' }}</div>
                                        </div>
                                        <div class="mc-time">{{ match.match_time_bd || smTime(match) || match.match_time || '' }} <span v-if="match.match_time_bd || smTime(match)" class="bd-label">BD</span></div>
                                        <span v-if="match.status === 'live'" class="live-badge">LIVE</span>
                                        <span v-if="match.status === 'live' && smMinute(match)" class="live-minute">{{ smMinute(match) }}'</span>
                                        <span v-if="match.status === 'completed'" class="ft-badge">FT</span>
                                    </div>
                                    <div class="team-col right">
                                        <img :src="teamFlagUrl(match.team2)" class="team-flag-img"
                                             onerror="this.src=window.__IMG__ + '/images/default-avatar.png'">
                                        <span class="team-name">{{ (match.team2 && match.team2.name) || 'TBD' }}</span>
                                    </div>
                                </div>
                                <div v-if="match.status !== 'upcoming'" class="mc-halves">
                                    <div class="half-row">
                                        <span>1ST HALF</span>
                                        <span>{{ match.team1_half1 != null ? match.team1_half1 : 0 }} - {{ match.team2_half1 != null ? match.team2_half1 : 0 }}</span>
                                    </div>
                                    <div class="half-row alt">
                                        <span>2ND HALF</span>
                                        <span>{{ match.team1_half2 != null ? match.team1_half2 : 0 }} - {{ match.team2_half2 != null ? match.team2_half2 : 0 }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>

                    <!-- Controls -->
                    <div class="mc-controls" v-if="totalPages > 1">
                        <button class="mc-arrow" @click="prevPage">&#8249;</button>
                        <div class="mc-dots">
                            <span v-for="p in totalPages" :key="p"
                                  class="mc-dot" :class="{ active: p - 1 === carouselPage }"
                                  @click="goPage(p - 1)"></span>
                        </div>
                        <button class="mc-arrow" @click="nextPage">&#8250;</button>
                    </div>
                </div>

                <!-- Ad Banner Carousel -->
                <div class="ad-carousel">
                    <transition name="ad-fade" mode="out-in">
                        <img :key="adIndex"
                             :src="$imgBase + '/images/branding_images/' + encodeURIComponent(adImages[adIndex])"
                             alt="Advertisement" class="ad-carousel-img">
                    </transition>
                    <div class="ad-carousel-dots">
                        <span v-for="(img, i) in adImages" :key="i"
                              class="ad-dot" :class="{ active: i === adIndex }"
                              @click="goAdSlide(i)"></span>
                    </div>
                </div>
            </div>

            <!-- Right: Sidebar -->
            <div class="ls-sidebar">
                <!-- My Points -->
                <div class="my-points-card">
                    <img :src="currentUser.profile_picture_url || $imgBase + '/images/default-avatar.png'"
                         class="mp-avatar" onerror="this.src=window.__IMG__ + '/images/default-avatar.png'">
                    <div class="mp-info">
                        <div class="mp-label">My Points</div>
                        <div class="mp-name">{{ currentUser.name }}</div>
                    </div>
                    <div class="mp-badge">{{ myPoints }}</div>
                </div>

                <!-- Top 10 Match Winners -->
                <div class="top10-card">
                    <div class="top10-header">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFA500"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6m12 0h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22m4-7.34V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>
                        <div>
                            <div class="top10-title">Daily Top 10 Winners</div>
                            <div class="top10-sub">Last 24 hours · by match</div>
                        </div>
                    </div>

                    <!-- Match tabs -->
                    <div v-if="recentMatches.length > 0" class="match-tabs">
                        <button v-for="m in recentMatches" :key="m.id"
                                class="match-tab" :class="{ active: selectedMatchId === m.id }"
                                @click="selectedMatchId = m.id">
                            {{ m.team1 }} vs {{ m.team2 }}
                        </button>
                    </div>

                    <div class="top10-list">
                        <template v-if="recentMatches.length > 0 && selectedMatchWinners.length > 0">
                            <div v-for="w in selectedMatchWinners" :key="w.id" class="top10-item">
                                <span class="rank-num">{{ w.rank }}</span>
                                <img :src="w.profile_picture_url" class="w-avatar"
                                     onerror="this.src=window.__IMG__ + '/images/default-avatar.png'">
                                <div class="w-info">
                                    <div class="w-name">{{ w.name }}</div>
                                    <div class="w-code">{{ w.unique_code }}</div>
                                </div>
                                <div class="w-pts-wrap">
                                    <span class="w-points">{{ w.match_points }}</span>
                                    <span class="w-pts-label">Points</span>
                                </div>
                            </div>
                        </template>
                        <div v-else-if="recentMatches.length > 0" class="state-msg">No predictions for this match.</div>
                        <div v-else class="state-msg">Winners appear here after a match completes.</div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'LiveScore',
    data() {
        return {
            liveMatches: [], upcomingMatches: [], smMatches: [],
            recentMatches: [], selectedMatchId: null,
            myPoints: 0, loading: true,
            carouselPage: 0, slideDir: 'mc-slide-left',
            _autoTimer: null,
            windowWidth: typeof window !== 'undefined' ? window.innerWidth : 1024,
            adIndex: 0,
            _adTimer: null,
            adImages: [
                'FIFA website Work-09.png',
            ],
        };
    },
    computed: {
        ...mapGetters(['currentUser']),
        selectedMatchWinners() {
            const m = this.recentMatches.find(function(m) { return m.id === this.selectedMatchId; }, this);
            return m ? m.winners : [];
        },
        perPage() {
            return this.windowWidth <= 640 ? 1 : 2;
        },
        displayMatches() {
            const nextDate = this.upcomingMatches.length ? this.upcomingMatches[0].match_date : null;
            const upcoming = nextDate ? this.upcomingMatches.filter(m => m.match_date === nextDate) : [];
            return [...this.liveMatches, ...upcoming];
        },
        totalPages() {
            return Math.ceil(this.displayMatches.length / this.perPage);
        },
        pagedMatches() {
            return this.displayMatches.slice(this.carouselPage * this.perPage, this.carouselPage * this.perPage + this.perPage);
        },
    },
    async mounted() {
        await Promise.all([this.fetchMatches(), this.fetchWinners(), this.fetchMyPoints()]);
        this.loading = false;
        this.startAutoSlide();
        this.startAdCarousel();
        window.addEventListener('resize', this.onResize);
    },
    beforeDestroy() {
        clearInterval(this._autoTimer);
        clearInterval(this._adTimer);
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        onResize() {
            this.windowWidth = window.innerWidth;
            if (this.carouselPage >= this.totalPages) this.carouselPage = 0;
        },
        startAutoSlide() {
            clearInterval(this._autoTimer);
            this._autoTimer = setInterval(this.nextPage, 4000);
        },
        nextPage() {
            if (this.totalPages < 2) return;
            this.slideDir = 'mc-slide-left';
            this.carouselPage = (this.carouselPage + 1) % this.totalPages;
        },
        prevPage() {
            if (this.totalPages < 2) return;
            this.slideDir = 'mc-slide-right';
            this.carouselPage = (this.carouselPage - 1 + this.totalPages) % this.totalPages;
            this.startAutoSlide();
        },
        goPage(p) {
            this.slideDir = p > this.carouselPage ? 'mc-slide-left' : 'mc-slide-right';
            this.carouselPage = p;
            this.startAutoSlide();
        },
        async fetchMatches() {
            const [live, upcoming, sm] = await Promise.all([
                this.$http.get('/api/matches/live'),
                this.$http.get('/api/matches?status=upcoming'),
                this.$http.get('/api/livescores/today'),
            ]);
            this.liveMatches = live.data.data;
            this.upcomingMatches = upcoming.data.data;
            this.smMatches = sm.data.data || [];
        },
        async fetchWinners() {
            const { data } = await this.$http.get('/api/winners/recent-matches');
            this.recentMatches = data.data || [];
            if (this.recentMatches.length && !this.selectedMatchId) {
                this.selectedMatchId = this.recentMatches[0].id;
            }
        },
        async fetchMyPoints() {
            const { data } = await this.$http.get('/api/winners/my-points');
            this.myPoints = data.data.total_points;
        },
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
        formatMatchDate(dateStr) {
            if (!dateStr) return '';
            const [year, month, day] = dateStr.split('-').map(Number);
            const d = new Date(year, month - 1, day);
            if (isNaN(d)) return dateStr;
            const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
            const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
            return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`;
        },
        smKey(name) {
            const aliases = {
                'korea republic':'korea','korea rep':'korea','south korea':'korea',
                'czech republic':'czech','czechia':'czech',
                'dr congo':'congo','congo dr':'congo','democratic republic of congo':'congo',
                'ivory coast':'ivory','cote d ivoire':'ivory','cote divoire':'ivory',
                'united states':'usa','usa':'usa',
                'cape verde islands':'capeverde','cape verde':'capeverde',
                'curacao':'curacao',
                'bosnia and herzegovina':'bosnia','bosnia herzegov':'bosnia','bosnia hrz':'bosnia',
            };
            const n = name.toLowerCase()
                .replace(/[üúûùçñéèêáàâóôöïíî]/g, c => ({'ü':'u','ú':'u','û':'u','ù':'u','ç':'c','ñ':'n','é':'e','è':'e','ê':'e','á':'a','à':'a','â':'a','ó':'o','ô':'o','ö':'o','ï':'i','í':'i','î':'i'}[c]||''))
                .replace(/[^a-z\s]/g, '').replace(/\s+/g, ' ').trim();
            return aliases[n] || n.split(' ')[0];
        },
        smTime(match) {
            const t1 = this.smKey(match.team1 && match.team1.name || '');
            const t2 = this.smKey(match.team2 && match.team2.name || '');
            const found = this.smMatches.find(s => this.smKey(s.home) === t1 && this.smKey(s.away) === t2);
            return found ? found.kickoff_bd : null;
        },
        smMinute(match) {
            const t1 = this.smKey(match.team1 && match.team1.name || '');
            const t2 = this.smKey(match.team2 && match.team2.name || '');
            const found = this.smMatches.find(s => this.smKey(s.home) === t1 && this.smKey(s.away) === t2);
            return found ? found.minute : null;
        },
        teamFlagUrl(team) {
            if (!team || !team.flag_emoji) return window.__IMG__ + '/images/default-avatar.png';
            return `https://flagcdn.com/w40/${team.flag_emoji.toLowerCase()}.png`;
        },
    },
};
</script>

<style scoped>
/* ── Ad Banner Carousel ─── */
.ad-carousel {
    width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    border-top: 1px solid rgba(255,255,255,0.07);
    position: relative;
}
.ad-carousel-img {
    width: 100%;
    height: auto;
    display: block;
}
.ad-carousel-dots {
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

/* ── Outer Card ─────────────────────────────── */
.ls-card {
    display: flex;
    gap: 0;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.10);
    border-radius: 16px;
    overflow: hidden;
    min-height: 600px;
}

/* ── Left: Matches ──────────────────────────── */
.ls-matches-section { flex: 1; min-width: 0; display: flex; flex-direction: column; }

.section-header {
    display: flex; align-items: center; gap: 14px;
    padding: 0 20px;
    background: linear-gradient(180deg, #150a4e 0%, #1A0040 100%);
    border-bottom: 1px solid rgba(255,255,255,0.08);
    height: 70px;
    flex-shrink: 0;
}

/* Left football icon — same as nav-ball */
.sh-ball-wrap { flex-shrink: 0; display: flex; align-items: center; }
.sh-ball-img {
    height: 44px; width: 44px; object-fit: contain;
}

.sh-text { display: flex; flex-direction: column; justify-content: center; gap: 1px; flex: 1; }
.sh-title {
    color: #fff; font-family: 'Roboto', sans-serif;
    font-weight: 800; font-size: 1.1rem; line-height: 1.2;
}
.sh-sub { color: #fff; font-size: 0.72rem; }

/* Right trophy image — same as nav-logo */
.sh-trophy-area {
    margin-left: auto; flex-shrink: 0;
    display: flex; align-items: center;
}
.sh-trophy-img {
    height: 50px; width: auto; object-fit: contain;
}

.state-msg { color: rgba(255,255,255,0.4); text-align: center; padding: 48px 20px; }

/* Carousel wrapper */
.mc-carousel-wrap { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.mc-controls {
    display: flex; align-items: center; justify-content: center; gap: 12px;
    padding: 10px 0; border-top: 1px solid rgba(255,255,255,0.06); flex-shrink: 0;
}
.mc-arrow {
    background: rgba(255,255,255,0.08); border: none; color: #fff;
    font-size: 1.4rem; width: 32px; height: 32px; border-radius: 50%;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: background .2s;
}
.mc-arrow:hover { background: rgba(255,165,0,.3); color: #FFA500; }
.mc-dots { display: flex; gap: 6px; }
.mc-dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,.25); cursor: pointer; transition: background .2s; }
.mc-dot.active { background: #FFA500; }

/* Slide transitions */
.mc-slide-left-enter-active, .mc-slide-left-leave-active,
.mc-slide-right-enter-active, .mc-slide-right-leave-active { transition: all .4s ease; }
.mc-slide-left-enter { transform: translateX(100%); opacity: 0; }
.mc-slide-left-leave-to { transform: translateX(-100%); opacity: 0; }
.mc-slide-right-enter { transform: translateX(-100%); opacity: 0; }
.mc-slide-right-leave-to { transform: translateX(100%); opacity: 0; }

/* Match Grid */
.match-cards-grid { display: grid; grid-template-columns: 1fr 1fr; flex: 1; }
.match-card {
    padding: 18px 20px;
    border: 1px solid rgba(255,255,255,0.22);
    border-radius: 10px;
    margin: 10px;
    background: rgba(255,255,255,0.03);
}

/* Bold date header */
.mc-date-bold {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 800;
    font-size: 1.05rem;
    color: #fff;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
}

/* Card Header */
.mc-header { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; flex-wrap: wrap; }
.group-badge {
    background: rgba(0,0,0,0.35); color: #fff;
    font-size: 0.62rem; font-weight: 700; padding: 4px 10px;
    border-radius: 6px; letter-spacing: 0.3px; white-space: nowrap;
}
.mc-date { color: rgba(255,255,255,0.6); font-size: 0.7rem; font-weight: 500; }
.mc-venue {
    display: flex; align-items: center; gap: 3px;
    color: #fff; font-size: 0.65rem; margin-left: auto; white-space: nowrap;
    background: #1e1067; padding: 3px 8px; border-radius: 4px;
}

/* Teams & Score */
.mc-body { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; gap: 8px; }
.team-col { display: flex; flex-direction: column; align-items: center; gap: 6px; width: 72px; flex-shrink: 0; }
.team-flag-img { width: 52px; height: 36px; object-fit: cover; border-radius: 4px; box-shadow: 0 2px 6px rgba(0,0,0,0.35); }
.team-name { color: #fff; font-size: 0.62rem; font-weight: 700; text-align: center; text-transform: uppercase; letter-spacing: 0.3px; }

.score-col { display: flex; flex-direction: column; align-items: center; gap: 5px; flex: 1; }
.score-row { display: flex; align-items: center; gap: 8px; }
.score-circle {
    width: 44px; height: 44px; border-radius: 50%;
    background: rgba(0,0,0,0.4);
    color: #fff; font-size: 1.3rem; font-weight: 700;
    font-family: 'Rajdhani', sans-serif;
    display: flex; align-items: center; justify-content: center;
    border: 1px solid rgba(255,255,255,0.12);
}
.score-dash { color: rgba(255,255,255,0.5); font-size: 1rem; font-weight: 700; }
.mc-time { color: #fff; font-size: 0.68rem; font-weight: 600; }
.bd-label { background: rgba(255,165,0,0.2); color: #FFA500; font-size: 0.55rem; font-weight: 700; padding: 1px 5px; border-radius: 4px; margin-left: 3px; vertical-align: middle; }
.live-badge {
    background: #dc2626; color: #fff;
    font-size: 0.6rem; font-weight: 700; padding: 3px 10px;
    border-radius: 4px; letter-spacing: 1px;
    animation: pulse-live 1.5s infinite;
}
@keyframes pulse-live { 0%,100%{opacity:1} 50%{opacity:0.7} }
.ft-badge {
    background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.6);
    font-size: 0.6rem; font-weight: 700; padding: 3px 10px; border-radius: 4px;
}
.live-minute { color: #4ade80; font-size: 0.75rem; font-weight: 800; }

/* Halves */
.mc-halves { border-top: 1px solid rgba(255,255,255,0.07); padding-top: 10px; }
.half-row {
    display: flex; justify-content: space-between;
    color: rgba(255,255,255,0.55); font-size: 0.68rem; font-weight: 600;
    padding: 5px 6px; border-radius: 4px;
}
.half-row.alt { background: rgba(255,255,255,0.04); }

/* ── Right: Sidebar ─────────────────────────── */
.ls-sidebar {
    width: 320px; flex-shrink: 0;
    display: flex; flex-direction: column;
    border-left: 1px solid rgba(255,255,255,0.08);
}

/* My Points */
.my-points-card {
    display: flex; align-items: center; gap: 12px;
    padding: 20px 20px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    background: rgba(0,0,0,0.15);
}
.mp-avatar {
    width: 52px; height: 52px; border-radius: 50%;
    object-fit: cover; border: 2px solid rgba(255,255,255,0.2);
    flex-shrink: 0;
}
.mp-label { color: #fff; font-family: 'Roboto', sans-serif; font-weight: 800; font-size: 1rem; }
.mp-name { color: rgba(255,255,255,0.5); font-size: 0.72rem; margin-top: 2px; }
.mp-badge {
    margin-left: auto; background: #FFA500;
    color: #fff; font-weight: 700; font-size: 1rem;
    padding: 6px 16px; border-radius: 20px;
    font-family: 'Rajdhani', sans-serif; flex-shrink: 0;
}

/* Match tabs */
.match-tabs {
    display: flex; flex-wrap: wrap; gap: 6px;
    padding: 10px 16px; border-bottom: 1px solid rgba(255,255,255,0.06);
    background: rgba(0,0,0,0.1);
}
.match-tab {
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px; color: rgba(255,255,255,0.6);
    font-size: 0.68rem; font-weight: 600; padding: 4px 10px;
    cursor: pointer; transition: all 0.15s; white-space: nowrap;
}
.match-tab:hover { border-color: rgba(255,165,0,0.4); color: #FFA500; }
.match-tab.active { background: rgba(255,165,0,0.15); border-color: #FFA500; color: #FFA500; }

/* Top 10 */
.top10-card { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.top10-header {
    display: flex; align-items: center; gap: 10px;
    padding: 16px 20px; border-bottom: 1px solid rgba(255,255,255,0.08);
    background: rgba(0,0,0,0.15);
    flex-shrink: 0;
}
.top10-title { color: #fff; font-family: 'Roboto', sans-serif; font-weight: 800; font-size: 0.95rem; }
.top10-sub { color: rgba(255,255,255,0.4); font-size: 0.65rem; margin-top: 2px; }
.top10-list { flex: 1; overflow-y: auto; scrollbar-width: thin; scrollbar-color: rgba(255,165,0,0.4) transparent; }
.top10-list::-webkit-scrollbar { width: 4px; }
.top10-list::-webkit-scrollbar-thumb { background: rgba(255,165,0,0.4); border-radius: 4px; }

.top10-item {
    display: flex; align-items: center; gap: 10px;
    padding: 12px 20px; border-bottom: 1px solid rgba(255,255,255,0.05);
    transition: background 0.15s;
}
.top10-item:hover { background: rgba(255,255,255,0.03); }
.rank-num { color: rgba(255,255,255,0.45); font-size: 0.8rem; font-weight: 700; width: 18px; text-align: center; flex-shrink: 0; }
.w-avatar { width: 38px; height: 38px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
.w-info { flex: 1; min-width: 0; }
.w-name { color: #fff; font-size: 0.78rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.w-code { color: rgba(255,255,255,0.4); font-size: 0.62rem; margin-top: 2px; }
.w-pts-wrap { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
.w-points {
    background: #FFA500; color: #fff;
    font-weight: 700; font-size: 0.85rem;
    padding: 3px 12px; border-radius: 12px;
    font-family: 'Rajdhani', sans-serif;
}
.w-pts-label { color: rgba(255,255,255,0.4); font-size: 0.58rem; margin-top: 2px; }

/* ── Responsive / PWA ───────────────────────── */
@media (max-width: 1024px) {
    .ls-card { flex-direction: column; }
    .ls-sidebar { width: 100%; border-left: none; border-top: 1px solid rgba(255,255,255,0.08); }
    .top10-list { max-height: 360px; }
}
@media (max-width: 640px) {
    .match-cards-grid { grid-template-columns: 1fr; }
    .score-circle { width: 36px; height: 36px; font-size: 1.1rem; }
    .team-flag-img { width: 42px; height: 28px; }
}
</style>
