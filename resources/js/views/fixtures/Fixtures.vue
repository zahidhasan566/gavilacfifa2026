<template>
    <div class="fixtures-page">

        <!-- ── Groups Carousel ─────────────────────────────── -->
        <div class="groups-bar">
            <button class="slider-btn" @click="scrollGroups(-1)">&#8249;</button>
            <div class="groups-track" ref="groupsTrack">
                <div v-for="g in fifaGroups" :key="g.name"
                     class="group-card" :class="{ active: selectedGroup === g.name }"
                     @click="toggleGroup(g.name)">
                    <div class="group-label">
                        <span class="gl-word">GROUP</span>
                        <span class="gl-letter">{{ g.name }}</span>
                    </div>
                    <div class="group-teams-list">
                        <div v-for="t in g.teams" :key="t.code" class="group-team">
                            <img :src="flagUrl(t.code)" class="gf-img" onerror="this.style.display='none'">
                            <span class="gf-name">{{ t.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <button class="slider-btn" @click="scrollGroups(1)">&#8250;</button>
        </div>

        <!-- ── Body ───────────────────────────────────────── -->
        <div class="fixtures-body">

            <!-- Left: Team Sidebar -->
            <div class="teams-sidebar">
                <div class="search-box">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                    <input v-model="teamSearch" placeholder="Search" class="search-input">
                </div>
                <div class="sidebar-label">Team Match Fixtures</div>
                <div class="team-list">
                    <div v-for="t in filteredSidebarTeams" :key="t.code"
                         class="team-filter-item" :class="{ active: selectedTeamCode === t.code }"
                         @click="toggleTeam(t.code)">
                        <img :src="flagUrl(t.code)" class="tf-img" onerror="this.style.display='none'">
                        <span class="tf-name">{{ t.name }}</span>
                    </div>
                </div>
            </div>

            <!-- Center: Fixtures -->
            <div class="fixtures-col">
                <div class="col-header">
                    <div class="col-icon-circle">
                        <img :src="$imgBase + '/images/ball-icon.png'" class="col-ball" onerror="this.style.display='none'">
                    </div>
                    <div>
                        <div class="col-title">Match Fixtures</div>
                        <div class="col-sub">FIFA World Cup 2026™</div>
                    </div>
                    <img :src="$imgBase + '/images/fifa-logo.png'" class="col-logo" onerror="this.style.display='none'">
                </div>
                <div class="cards-grid">
                    <div v-for="m in upcomingMatches" :key="m.id" class="fixture-card">
                        <div class="fc-meta">
                            <span class="fc-group-badge">GROUP {{ m.group_name }}</span>
                            <span class="fc-round-badge">ROUND {{ m.round_number }}</span>
                            <span class="fc-venue">
                                <svg width="9" height="9" viewBox="0 0 24 24" fill="#FFA500"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>
                                {{ (m.venue || 'TBD').split(',')[0] }}
                            </span>
                        </div>
                        <div class="fc-match-row">
                            <div class="fc-team">
                                <span class="fc-code">{{ shortName(m.team1 && m.team1.name) }}</span>
                                <img :src="teamObjFlagUrl(m.team1)" class="fc-flag-img"
                                     onerror="this.src=window.__IMG__ + '/images/default-avatar.png'">
                            </div>
                            <span class="vs-text">VS</span>
                            <div class="fc-team">
                                <span class="fc-code">{{ shortName(m.team2 && m.team2.name) }}</span>
                                <img :src="teamObjFlagUrl(m.team2)" class="fc-flag-img"
                                     onerror="this.src=window.__IMG__ + '/images/default-avatar.png'">
                            </div>
                            <div class="date-box">
                                <span class="db-weekday">{{ formatWeekday(m.match_date) }}</span>
                                <span class="db-day">{{ formatDay(m.match_date) }} {{ formatMonth(m.match_date) }}</span>
                                <span class="db-time">{{ formatTime(m.match_time) }}</span>
                            </div>
                        </div>
                    </div>
                    <div v-if="upcomingMatches.length === 0" class="empty-state">No fixtures found.</div>
                </div>
            </div>

            <!-- Right: Results -->
            <div class="results-col">
                <div class="col-header">
                    <div class="col-icon-circle trophy-circle">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>
                    </div>
                    <div>
                        <div class="col-title">Results</div>
                        <div class="col-sub">FIFA World Cup 2026™</div>
                    </div>
                    <img :src="$imgBase + '/images/fifa-logo.png'" class="col-logo" onerror="this.style.display='none'">
                </div>
                <div class="cards-grid">
                    <div v-for="m in completedMatches" :key="m.id" class="result-card">
                        <div class="fc-meta">
                            <span class="fc-group-badge">GROUP {{ m.group_name }}</span>
                            <span class="fc-round-badge">ROUND {{ m.round_number }}</span>
                            <span class="fc-venue">
                                <svg width="9" height="9" viewBox="0 0 24 24" fill="#FFA500"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>
                                {{ (m.venue || 'TBD').split(',')[0] }}
                            </span>
                        </div>
                        <div class="rc-match-row">
                            <div class="rc-side">
                                <img :src="teamObjFlagUrl(m.team1)" class="rc-flag-img"
                                     onerror="this.src=window.__IMG__ + '/images/default-avatar.png'">
                                <div class="rc-score-circle">{{ m.team1_score != null ? m.team1_score : 0 }}</div>
                            </div>
                            <div class="rc-center">
                                <span class="ft-label">Full Time</span>
                            </div>
                            <div class="rc-side right">
                                <div class="rc-score-circle">{{ m.team2_score != null ? m.team2_score : 0 }}</div>
                                <img :src="teamObjFlagUrl(m.team2)" class="rc-flag-img"
                                     onerror="this.src=window.__IMG__ + '/images/default-avatar.png'">
                            </div>
                        </div>
                        <div class="rc-names">{{ shortName(m.team1 && m.team1.name) }} — {{ shortName(m.team2 && m.team2.name) }}</div>
                    </div>
                    <div v-if="completedMatches.length === 0" class="empty-state">No results yet.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const FIFA_GROUPS = [
    { name: 'A', teams: [{ name: 'MEXICO', code: 'mx' }, { name: 'SOUTH AFRICA', code: 'za' }, { name: 'KOREA REP.', code: 'kr' }, { name: 'CZECHIA', code: 'cz' }] },
    { name: 'B', teams: [{ name: 'CANADA', code: 'ca' }, { name: 'BOSNIA & HRZ', code: 'ba' }, { name: 'QATAR', code: 'qa' }, { name: 'SWITZERLAND', code: 'ch' }] },
    { name: 'C', teams: [{ name: 'BRAZIL', code: 'br' }, { name: 'MOROCCO', code: 'ma' }, { name: 'HAITI', code: 'ht' }, { name: 'SCOTLAND', code: 'gb-sct' }] },
    { name: 'D', teams: [{ name: 'USA', code: 'us' }, { name: 'PARAGUAY', code: 'py' }, { name: 'AUSTRALIA', code: 'au' }, { name: 'TÜRKIYE', code: 'tr' }] },
    { name: 'E', teams: [{ name: 'GERMANY', code: 'de' }, { name: 'CURAÇAO', code: 'cw' }, { name: 'IVORY COAST', code: 'ci' }, { name: 'ECUADOR', code: 'ec' }] },
    { name: 'F', teams: [{ name: 'NETHERLANDS', code: 'nl' }, { name: 'JAPAN', code: 'jp' }, { name: 'SWEDEN', code: 'se' }, { name: 'TUNISIA', code: 'tn' }] },
    { name: 'G', teams: [{ name: 'BELGIUM', code: 'be' }, { name: 'EGYPT', code: 'eg' }, { name: 'IRAN', code: 'ir' }, { name: 'NEW ZEALAND', code: 'nz' }] },
    { name: 'H', teams: [{ name: 'SPAIN', code: 'es' }, { name: 'CAPE VERDE', code: 'cv' }, { name: 'SAUDI ARABIA', code: 'sa' }, { name: 'URUGUAY', code: 'uy' }] },
    { name: 'I', teams: [{ name: 'FRANCE', code: 'fr' }, { name: 'SENEGAL', code: 'sn' }, { name: 'IRAQ', code: 'iq' }, { name: 'NORWAY', code: 'no' }] },
    { name: 'J', teams: [{ name: 'ARGENTINA', code: 'ar' }, { name: 'ALGERIA', code: 'dz' }, { name: 'AUSTRIA', code: 'at' }, { name: 'JORDAN', code: 'jo' }] },
    { name: 'K', teams: [{ name: 'PORTUGAL', code: 'pt' }, { name: 'DR CONGO', code: 'cd' }, { name: 'UZBEKISTAN', code: 'uz' }, { name: 'COLOMBIA', code: 'co' }] },
    { name: 'L', teams: [{ name: 'ENGLAND', code: 'gb-eng' }, { name: 'CROATIA', code: 'hr' }, { name: 'GHANA', code: 'gh' }, { name: 'PANAMA', code: 'pa' }] },
];

// map common team names → ISO flag codes
const NAME_TO_CODE = {
    mexico:'mx','south africa':'za','korea republic':'kr','south korea':'kr','korea rep.':'kr',czechia:'cz',
    canada:'ca','bosnia':'ba','bosnia and herzegovina':'ba','bosnia & hrz':'ba',qatar:'qa',switzerland:'ch',
    brazil:'br',morocco:'ma',haiti:'ht',scotland:'gb-sct',
    'usa':'us','united states':'us',paraguay:'py',australia:'au','türkiye':'tr',turkey:'tr',
    germany:'de','curaçao':'cw',curacao:'cw','ivory coast':'ci',"cote d'ivoire":'ci',ecuador:'ec',
    netherlands:'nl',japan:'jp',sweden:'se',tunisia:'tn',
    belgium:'be',egypt:'eg',iran:'ir','new zealand':'nz',
    spain:'es','cape verde':'cv','saudi arabia':'sa',uruguay:'uy',
    france:'fr',senegal:'sn',iraq:'iq',norway:'no',
    argentina:'ar',algeria:'dz',austria:'at',jordan:'jo',
    portugal:'pt','dr congo':'cd','democratic republic of congo':'cd',uzbekistan:'uz',colombia:'co',
    england:'gb-eng',croatia:'hr',ghana:'gh',panama:'pa',
    italy:'it',nigeria:'ng',cameroon:'cm',chile:'cl',peru:'pe',
    denmark:'dk',poland:'pl',serbia:'rs',ukraine:'ua',
};

export default {
    name: 'Fixtures',
    data() {
        return {
            fifaGroups: FIFA_GROUPS,
            matches: [],
            selectedGroup: null,
            selectedTeamCode: null,
            teamSearch: '',
            loading: true,
        };
    },
    computed: {
        allSidebarTeams() {
            const seen = new Set();
            const teams = [];
            FIFA_GROUPS.forEach(g => {
                g.teams.forEach(t => {
                    if (!seen.has(t.code)) { seen.add(t.code); teams.push(t); }
                });
            });
            return teams.sort((a, b) => a.name.localeCompare(b.name));
        },
        filteredSidebarTeams() {
            const s = this.teamSearch.toLowerCase();
            if (!s) return this.allSidebarTeams;
            return this.allSidebarTeams.filter(t => t.name.toLowerCase().includes(s));
        },
        upcomingMatches() {
            return this.matches.filter(m => {
                if (m.status === 'completed') return false;
                if (this.selectedGroup && m.group_name !== this.selectedGroup) return false;
                if (this.selectedTeamCode) {
                    const t1 = (m.team1 && m.team1.name || '').toLowerCase();
                    const t2 = (m.team2 && m.team2.name || '').toLowerCase();
                    const sel = this.selectedTeamCode;
                    if (NAME_TO_CODE[t1] !== sel && NAME_TO_CODE[t2] !== sel) return false;
                }
                return true;
            });
        },
        completedMatches() {
            return this.matches.filter(m => {
                if (m.status !== 'completed') return false;
                if (this.selectedGroup && m.group_name !== this.selectedGroup) return false;
                if (this.selectedTeamCode) {
                    const t1 = (m.team1 && m.team1.name || '').toLowerCase();
                    const t2 = (m.team2 && m.team2.name || '').toLowerCase();
                    const sel = this.selectedTeamCode;
                    if (NAME_TO_CODE[t1] !== sel && NAME_TO_CODE[t2] !== sel) return false;
                }
                return true;
            });
        },
    },
    async mounted() {
        const { data } = await this.$http.get('/api/matches');
        this.matches = data.data;
        this.loading = false;
    },
    methods: {
        flagUrl(code) {
            return `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
        },
        teamFlagUrl(name) {
            if (!name) return window.__IMG__ + '/images/default-avatar.png';
            const code = NAME_TO_CODE[name.toLowerCase()];
            return code ? this.flagUrl(code) : window.__IMG__ + '/images/default-avatar.png';
        },
        teamObjFlagUrl(team) {
            if (!team) return window.__IMG__ + '/images/default-avatar.png';
            if (team.flag_emoji) return this.flagUrl(team.flag_emoji);
            return this.teamFlagUrl(team.name);
        },
        shortName(name) {
            if (!name) return '???';
            const words = name.trim().split(' ');
            return words.length === 1 ? name.substring(0, 3).toUpperCase() : words.map(w => w[0]).join('').substring(0, 3).toUpperCase();
        },
        toggleGroup(g) { this.selectedGroup = this.selectedGroup === g ? null : g; },
        toggleTeam(code) { this.selectedTeamCode = this.selectedTeamCode === code ? null : code; },
        scrollGroups(dir) {
            const t = this.$refs.groupsTrack;
            if (t) t.scrollBy({ left: dir * 150, behavior: 'smooth' });
        },
        parseDate(d) {
            if (!d) return null;
            // supports dd/mm/yyyy and yyyy-mm-dd
            const p = d.includes('/') ? d.split('/') : d.split('-').reverse();
            return new Date(parseInt(p[2]), parseInt(p[1]) - 1, parseInt(p[0]));
        },
        formatDay(d) {
            const dt = this.parseDate(d);
            return dt ? dt.getDate() : '';
        },
        formatMonth(d) {
            const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
            const dt = this.parseDate(d);
            return dt ? months[dt.getMonth()] : '';
        },
        formatWeekday(d) {
            const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
            const dt = this.parseDate(d);
            return dt ? days[dt.getDay()] : '';
        },
        formatTime(t) {
            if (!t) return '';
            const parts = t.split(':');
            const h = parseInt(parts[0]);
            const ampm = h >= 12 ? 'PM' : 'AM';
            const h12 = h % 12 || 12;
            return h12 + ' ' + ampm;
        },
    },
};
</script>

<style scoped>
/* ── Page ──────────────────────────────────── */
.fixtures-page { display: flex; flex-direction: column; gap: 14px; }

/* ── Groups Carousel ───────────────────────── */
.groups-bar {
    display: flex; align-items: stretch;
    background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%);
    border-radius: 12px; overflow: hidden;
    border: 1px solid rgba(255,255,255,0.08);
}
.slider-btn {
    background: rgba(255,255,255,0.07); border: none; color: #fff;
    font-size: 1.4rem; padding: 0 14px; cursor: pointer; flex-shrink: 0;
    transition: background 0.2s;
}
.slider-btn:hover { background: rgba(255,165,0,0.2); }
.groups-track {
    display: flex; overflow-x: auto; flex: 1; scrollbar-width: none;
    gap: 8px; padding: 10px 10px;
}
.groups-track::-webkit-scrollbar { display: none; }
.group-card {
    min-width: 138px; padding: 10px 12px 12px; cursor: pointer;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 10px; flex-shrink: 0;
    transition: all 0.2s;
}
.group-card:hover { background: rgba(255,255,255,0.09); border-color: rgba(255,255,255,0.2); }
.group-card.active { background: rgba(255,165,0,0.12); border-color: rgba(255,165,0,0.5); }
.group-label {
    display: inline-flex; align-items: center; gap: 4px;
    background: #ffffff; border-radius: 4px;
    padding: 3px 8px; margin-bottom: 10px;
}
.gl-word { color: #1A0040; font-size: 0.58rem; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; }
.gl-letter { color: #000; font-size: 0.85rem; font-weight: 900; font-family: 'Rajdhani', sans-serif; line-height: 1; }
.group-teams-list { display: flex; flex-direction: column; gap: 7px; }
.group-team { display: flex; align-items: center; gap: 8px; }
.gf-img { width: 26px; height: 18px; object-fit: cover; border-radius: 2px; flex-shrink: 0; box-shadow: 0 1px 3px rgba(0,0,0,0.3); }
.gf-name { color: #fff; font-size: 0.65rem; font-weight: 600; white-space: nowrap; text-transform: uppercase; letter-spacing: 0.3px; }

/* ── Body ──────────────────────────────────── */
.fixtures-body { display: flex; gap: 14px; align-items: flex-start; }

/* ── Teams Sidebar ─────────────────────────── */
.teams-sidebar {
    width: 155px; flex-shrink: 0;
    background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%);
    border-radius: 12px; padding: 14px;
    border: 1px solid rgba(255,255,255,0.08);
}
.search-box {
    display: flex; align-items: center; gap: 8px;
    background: rgba(255,255,255,0.08); border-radius: 8px;
    padding: 8px 12px; margin-bottom: 12px;
    border: 1px solid rgba(255,255,255,0.1);
}
.search-input { background: none; border: none; color: #fff; font-size: 0.8rem; outline: none; width: 100%; }
.search-input::placeholder { color: rgba(255,255,255,0.4); }
.sidebar-label { color: rgba(255,255,255,0.4); font-size: 0.62rem; margin-bottom: 8px; font-weight: 600; letter-spacing: 0.3px; }
.team-filter-item {
    display: flex; align-items: center; gap: 8px;
    padding: 7px 10px; border-radius: 8px; cursor: pointer;
    margin-bottom: 6px; transition: all 0.15s;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.12);
}
.team-filter-item:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.25); }
.team-filter-item.active { background: rgba(255,165,0,0.15); border-color: rgba(255,165,0,0.45); }
.tf-img { width: 24px; height: 16px; object-fit: cover; border-radius: 2px; flex-shrink: 0; box-shadow: 0 1px 3px rgba(0,0,0,0.3); }
.tf-name { color: #fff; font-size: 0.72rem; font-weight: 600; }
.team-list {
    overflow-y: auto; max-height: calc(100vh - 260px);
    scrollbar-width: thin; scrollbar-color: rgba(255,165,0,0.3) transparent;
}
.team-list::-webkit-scrollbar { width: 3px; }
.team-list::-webkit-scrollbar-thumb { background: rgba(255,165,0,0.3); border-radius: 3px; }

/* ── Columns ───────────────────────────────── */
.fixtures-col, .results-col {
    flex: 1; min-width: 0;
    background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%);
    border-radius: 12px; overflow: hidden;
    border: 1px solid rgba(255,255,255,0.08);
}
.col-header {
    display: flex; align-items: center; gap: 12px;
    padding: 14px 16px;
    border-bottom: 2px solid rgba(255,165,0,0.35);
    background: rgba(255,165,0,0.07);
}
.col-icon-circle {
    width: 48px; height: 48px; border-radius: 50%;
    background: rgba(255,165,0,0.12);
    border: 2px solid rgba(255,165,0,0.4);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
}
.trophy-circle { background: rgba(255,165,0,0.12); border-color: rgba(255,165,0,0.4); }
.col-ball { width: 30px; height: 30px; object-fit: contain; }
.col-title { color: #FFA500; font-family: 'Rajdhani', sans-serif; font-weight: 800; font-size: 1.1rem; letter-spacing: 0.5px; }
.col-sub { color: rgba(255,255,255,0.7); font-size: 0.7rem; margin-top: 1px; }
.col-logo { height: 32px; object-fit: contain; margin-left: auto; }

/* ── Cards Grid ────────────────────────────── */
.cards-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 10px; padding: 12px;
    max-height: 520px; overflow-y: auto;
    scrollbar-width: thin; scrollbar-color: rgba(255,165,0,0.3) transparent;
}
.cards-grid::-webkit-scrollbar { width: 4px; }
.cards-grid::-webkit-scrollbar-thumb { background: rgba(255,165,0,0.3); border-radius: 4px; }

/* ── Fixture Card ──────────────────────────── */
.fixture-card, .result-card {
    background: rgba(255,255,255,0.06); border-radius: 8px; padding: 10px;
    border: 1px solid rgba(255,255,255,0.14);
    transition: border-color 0.2s;
}
.fixture-card:hover, .result-card:hover { border-color: rgba(255,165,0,0.3); }
.fc-meta {
    display: flex; align-items: center; gap: 5px;
    margin-bottom: 10px; flex-wrap: wrap;
}
.fc-group-badge {
    background: rgba(255,255,255,0.12); color: #fff;
    font-size: 0.55rem; font-weight: 800; padding: 3px 7px;
    border-radius: 4px; white-space: nowrap; letter-spacing: 0.3px;
}
.fc-round-badge {
    background: rgba(255,165,0,0.15); color: #FFA500;
    font-size: 0.55rem; font-weight: 800; padding: 3px 7px;
    border-radius: 4px; white-space: nowrap; letter-spacing: 0.3px;
}
.fc-venue {
    display: flex; align-items: center; gap: 3px;
    color: #fff; font-size: 0.55rem; font-weight: 600;
    white-space: nowrap; margin-left: auto;
    background: #1e1067; padding: 3px 7px; border-radius: 4px;
}

.fc-match-row {
    display: flex; align-items: center; gap: 6px; margin-top: 4px;
}
.fc-team {
    display: flex; flex-direction: column; align-items: center; gap: 5px;
    flex: 1;
}
.fc-flag-img { width: 46px; height: 32px; object-fit: cover; border-radius: 3px; box-shadow: 0 2px 6px rgba(0,0,0,0.35); }
.fc-code { color: #fff; font-size: 0.6rem; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; text-align: center; }
.vs-text { color: rgba(255,255,255,0.55); font-size: 0.68rem; font-weight: 800; flex-shrink: 0; letter-spacing: 0.5px; }
.date-box {
    background: none;
    display: flex; flex-direction: column; align-items: center; gap: 1px;
    flex-shrink: 0; min-width: 52px;
}
.db-weekday { color: #FFA500; font-size: 0.5rem; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; }
.db-day { color: #FFA500; font-size: 0.85rem; font-weight: 900; font-family: 'Roboto', sans-serif; line-height: 1.2; }
.db-time { color: #FFA500; font-size: 0.5rem; font-weight: 600; text-transform: uppercase; }

/* ── Result Card ───────────────────────────── */
.rc-match-row {
    display: flex; align-items: center; justify-content: space-between; gap: 6px;
    margin: 6px 0;
}
.rc-side { display: flex; align-items: center; gap: 6px; }
.rc-side.right { flex-direction: row-reverse; }
.rc-flag-img { width: 28px; height: 19px; object-fit: cover; border-radius: 3px; }
.rc-score-circle {
    width: 32px; height: 32px; border-radius: 50%;
    background: rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.12);
    color: #fff; font-size: 0.9rem; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Rajdhani', sans-serif;
}
.rc-center { display: flex; flex-direction: column; align-items: center; }
.ft-label { color: rgba(255,255,255,0.4); font-size: 0.58rem; font-weight: 600; white-space: nowrap; }
.rc-names { color: rgba(255,255,255,0.4); font-size: 0.58rem; text-align: center; margin-top: 4px; }

.empty-state {
    grid-column: 1 / -1; color: rgba(255,255,255,0.3);
    text-align: center; padding: 30px; font-size: 0.82rem;
}

/* ── Responsive / PWA ──────────────────────── */
@media (max-width: 1024px) {
    .fixtures-body {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        gap: 8px;
    }
    .teams-sidebar {
        grid-column: 1 / -1;
        width: auto;
        padding: 10px 12px;
    }
    .sidebar-label { margin-bottom: 6px; }
    .team-list {
        display: flex; flex-direction: row; flex-wrap: nowrap;
        overflow-x: auto; overflow-y: hidden;
        gap: 6px; max-height: none;
        padding-bottom: 4px;
        scrollbar-width: thin; scrollbar-color: rgba(255,165,0,0.3) transparent;
    }
    .team-list::-webkit-scrollbar { height: 3px; width: auto; }
    .team-list::-webkit-scrollbar-thumb { background: rgba(255,165,0,0.3); border-radius: 3px; }
    .team-filter-item {
        flex-shrink: 0; margin-bottom: 0;
        padding: 5px 10px; border-radius: 20px;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.14);
    }
    .tf-name { font-size: 0.65rem; }
    .cards-grid { grid-template-columns: 1fr; }
    /* Compact fixture card on tablet/mobile */
    .fc-flag-img { width: 36px; height: 25px; }
    .fc-code { font-size: 0.58rem; }
    .date-box { min-width: 42px; }
    .db-day { font-size: 0.72rem; }
}
@media (max-width: 640px) {
    .fixtures-body {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
    }
    .teams-sidebar { grid-column: 1 / -1; }
    .fixtures-col { grid-column: 1; }
    .results-col { grid-column: 2; }
    .col-header { padding: 8px 10px; gap: 6px; }
    .col-icon-circle { width: 34px; height: 34px; }
    .col-ball { width: 20px; height: 20px; }
    .col-title { font-size: 0.82rem; }
    .col-sub { font-size: 0.6rem; }
    .col-logo { height: 22px; }
    .cards-grid { padding: 6px; gap: 6px; max-height: 420px; }
    .groups-bar { border-radius: 8px; }
    .fc-meta { flex-wrap: wrap; gap: 3px; }
    .fc-venue { display: none; }
    .fc-flag-img { width: 30px; height: 20px; }
    .fc-code { font-size: 0.55rem; }
    .vs-text { font-size: 0.58rem; }
    .date-box { min-width: 36px; }
    .db-weekday { font-size: 0.42rem; }
    .db-day { font-size: 0.62rem; }
    .db-time { font-size: 0.42rem; }
    .fixture-card, .result-card { padding: 7px; }
    .rc-flag-img { width: 22px; height: 15px; }
    .rc-score-circle { width: 26px; height: 26px; font-size: 0.75rem; }
    .ft-label { font-size: 0.5rem; }
    .rc-names { font-size: 0.5rem; }
}
</style>
