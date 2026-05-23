<template>
    <div class="facts-page">

        <!-- FIFA 2026 Header Card -->
        <div class="fifa-hero">
            <div class="hero-left">
                <div class="hero-badge">Official</div>
                <div class="hero-title">FIFA WORLD CUP 2026™</div>
                <div class="hero-hosts">
                    <span class="host-flag">🇺🇸</span> USA &nbsp;·&nbsp;
                    <span class="host-flag">🇨🇦</span> Canada &nbsp;·&nbsp;
                    <span class="host-flag">🇲🇽</span> Mexico
                </div>
                <div class="hero-stats-row">
                    <div class="hero-stat"><div class="hs-val">48</div><div class="hs-lbl">Teams</div></div>
                    <div class="hero-stat"><div class="hs-val">104</div><div class="hs-lbl">Matches</div></div>
                    <div class="hero-stat"><div class="hs-val">16</div><div class="hs-lbl">Venues</div></div>
                    <div class="hero-stat"><div class="hs-val">Jun–Jul</div><div class="hs-lbl">2026</div></div>
                </div>
            </div>
            <div class="hero-right">
                <img :src="$imgBase + '/images/fifa-logo.png'" alt="FIFA 2026" class="hero-logo"
                     onerror="this.style.display='none'">
            </div>
        </div>

        <!-- FIFA Check: Quick Facts -->
        <div class="facts-section">
            <h2 class="facts-heading">⚽ FIFA Check</h2>
            <div class="check-grid">
                <div class="check-card" v-for="f in quickFacts" :key="f.label">
                    <div class="check-icon">{{ f.icon }}</div>
                    <div class="check-label">{{ f.label }}</div>
                    <div class="check-value">{{ f.value }}</div>
                </div>
            </div>
        </div>

        <!-- Best Players -->
        <div class="facts-section" v-if="players.length > 0">
            <h2 class="facts-heading">🌟 The Best FIFA Men's Player</h2>
            <div class="carousel-wrapper">
                <button class="carousel-btn" @click="scrollCarousel('players', -1)">&#8249;</button>
                <div class="carousel-track" ref="playersCarousel">
                    <div v-for="p in players" :key="p.id" class="fact-card player-card">
                        <img :src="p.image_url || $imgBase + '/images/default-player.png'"
                             class="fact-img" onerror="this.src=window.__IMG__ + '/images/default-player.png'">
                        <div class="fact-name">{{ p.title }}</div>
                        <div class="fact-desc">{{ p.description }}</div>
                    </div>
                </div>
                <button class="carousel-btn" @click="scrollCarousel('players', 1)">&#8250;</button>
            </div>
        </div>

        <!-- News -->
        <div class="facts-section" v-if="news.length > 0">
            <h2 class="facts-heading">📰 Latest News</h2>
            <div class="carousel-wrapper">
                <button class="carousel-btn" @click="scrollCarousel('news', -1)">&#8249;</button>
                <div class="carousel-track" ref="newsCarousel">
                    <div v-for="n in news" :key="n.id" class="fact-card news-card">
                        <img :src="n.image_url || $imgBase + '/images/default-news.png'"
                             class="fact-img" onerror="this.src=window.__IMG__ + '/images/default-news.png'">
                        <div class="fact-name">{{ n.title }}</div>
                        <div class="fact-desc">{{ n.description }}</div>
                    </div>
                </div>
                <button class="carousel-btn" @click="scrollCarousel('news', 1)">&#8250;</button>
            </div>
        </div>

        <!-- Historical Records -->
        <div class="facts-section">
            <h2 class="facts-heading">🏆 Historical Records</h2>
            <div class="records-grid">
                <div class="record-card" v-for="r in records" :key="r.title">
                    <div class="record-emoji">{{ r.emoji }}</div>
                    <div class="record-title">{{ r.title }}</div>
                    <div class="record-value">{{ r.value }}</div>
                    <div class="record-note">{{ r.note }}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'FifaFacts',
    data() {
        return {
            players: [],
            news: [],
            quickFacts: [
                { icon: '🗓️', label: 'Tournament Dates', value: 'Jun 11 – Jul 19, 2026' },
                { icon: '🏟️', label: 'Host Countries', value: 'USA, Canada, Mexico' },
                { icon: '⚽', label: 'Participating Teams', value: '48 (expanded from 32)' },
                { icon: '🎯', label: 'Total Matches', value: '104 matches' },
                { icon: '🥇', label: 'Defending Champion', value: 'Argentina (2022)' },
                { icon: '📍', label: 'Final Venue', value: 'MetLife Stadium, NJ' },
                { icon: '🌍', label: 'Total Groups', value: '12 groups of 4' },
                { icon: '💰', label: 'Prize Fund', value: '$1 Billion (projected)' },
            ],
            records: [
                { emoji: '⚽', title: 'Most Goals (Player)', value: 'Miroslav Klose', note: '16 goals across 4 World Cups' },
                { emoji: '🏅', title: 'Most Titles', value: 'Brazil', note: '5-time World Cup champions' },
                { emoji: '🏆', title: 'Last Champion', value: 'Argentina', note: 'Qatar 2022' },
                { emoji: '🌟', title: 'Most Appearances', value: 'Lothar Matthäus', note: '25 matches in World Cups' },
                { emoji: '🧤', title: 'Most Clean Sheets', value: 'Peter Shilton', note: 'England goalkeeper legend' },
                { emoji: '📅', title: 'First World Cup', value: 'Uruguay 1930', note: '13 teams, Uruguay won' },
            ],
        };
    },
    async mounted() {
        try {
            const [p, n] = await Promise.all([
                this.$http.get('/api/facts?type=player'),
                this.$http.get('/api/facts?type=news'),
            ]);
            this.players = p.data.data;
            this.news = n.data.data;
        } catch (e) { /* silent */ }
    },
    methods: {
        scrollCarousel(ref, dir) {
            const el = this.$refs[ref + 'Carousel'];
            if (el) el.scrollBy({ left: dir * 300, behavior: 'smooth' });
        },
    },
};
</script>

<style scoped>
.facts-page { display: flex; flex-direction: column; gap: 20px; }

/* Hero */
.fifa-hero {
    background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%);
    border-radius: 14px; padding: 24px; display: flex;
    align-items: center; justify-content: space-between;
    border: 1px solid rgba(255,165,0,0.3);
    overflow: hidden;
}
.hero-badge { display: inline-block; background: #FFA500; color: #06042a; padding: 2px 10px; border-radius: 20px; font-size: 0.65rem; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px; }
.hero-title { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.6rem; font-weight: 900; letter-spacing: 2px; margin-bottom: 8px; }
.hero-hosts { color: rgba(255,255,255,0.7); font-size: 0.85rem; margin-bottom: 18px; }
.host-flag { font-size: 1.1rem; }
.hero-stats-row { display: flex; gap: 20px; }
.hero-stat { text-align: center; }
.hs-val { color: #FFA500; font-family: 'Rajdhani', sans-serif; font-size: 1.3rem; font-weight: 900; }
.hs-lbl { color: rgba(255,255,255,0.5); font-size: 0.65rem; text-transform: uppercase; }
.hero-logo { height: 80px; opacity: 0.9; }

/* Facts sections */
.facts-section { background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%); border-radius: 12px; padding: 20px; }
.facts-heading { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.1rem; font-weight: 700; margin-bottom: 16px; }

/* FIFA Check grid */
.check-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 10px; }
.check-card { background: rgba(255,255,255,0.04); border-radius: 10px; padding: 14px 12px; text-align: center; border: 1px solid rgba(255,255,255,0.07); transition: border-color 0.2s; }
.check-card:hover { border-color: rgba(255,165,0,0.3); }
.check-icon { font-size: 1.5rem; margin-bottom: 6px; }
.check-label { color: rgba(255,255,255,0.45); font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
.check-value { color: #fff; font-size: 0.82rem; font-weight: 600; }

/* Carousels */
.carousel-wrapper { display: flex; align-items: center; gap: 8px; }
.carousel-btn { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); color: #fff; font-size: 1.5rem; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
.carousel-track { display: flex; gap: 16px; overflow-x: auto; flex: 1; scrollbar-width: none; padding: 4px 0 8px; }
.carousel-track::-webkit-scrollbar { display: none; }
.fact-card { min-width: 220px; max-width: 220px; background: rgba(255,255,255,0.04); border-radius: 10px; overflow: hidden; }
.fact-img { width: 100%; height: 180px; object-fit: cover; }
.fact-name { color: #fff; font-weight: 700; font-size: 0.9rem; padding: 10px 12px 4px; }
.fact-desc { color: rgba(255,255,255,0.5); font-size: 0.75rem; padding: 0 12px 12px; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

/* Records */
.records-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; }
.record-card { background: rgba(255,255,255,0.04); border-radius: 10px; padding: 16px; }
.record-emoji { font-size: 1.6rem; margin-bottom: 8px; }
.record-title { color: rgba(255,255,255,0.5); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
.record-value { color: #FFA500; font-weight: 700; font-size: 0.95rem; margin-bottom: 3px; }
.record-note { color: rgba(255,255,255,0.45); font-size: 0.75rem; }

@media (max-width: 600px) {
    .fifa-hero { flex-direction: column; gap: 16px; }
    .hero-right { display: none; }
    .hero-stats-row { gap: 12px; }
}
</style>
