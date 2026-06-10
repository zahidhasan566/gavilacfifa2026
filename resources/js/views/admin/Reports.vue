<template>
    <div class="admin-reports">
        <div class="page-header">
            <h1 class="page-heading">Reports</h1>
        </div>

        <!-- Tabs -->
        <div class="tabs-row">
            <button v-for="t in tabs" :key="t.key"
                class="tab-btn" :class="{ active: activeTab === t.key }"
                @click="switchTab(t.key)">{{ t.label }}</button>
        </div>

        <!-- ── Tab: Points Report ─────────────────── -->
        <div v-if="activeTab === 'points'">
            <div class="toolbar">
                <input v-model="pointsSearch" @input="fetchPoints" placeholder="Search name / code..." class="search-input">
                <button class="excel-btn" @click="downloadExcel('points')">⬇ Excel</button>
            </div>
            <div class="table-card">
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead><tr><th>Rank</th><th>Name</th><th>Code</th><th>Mobile</th><th>Points</th><th>Matches</th><th>Predictions</th><th>Correct</th></tr></thead>
                        <tbody>
                            <tr v-for="u in pointsReport" :key="u.unique_code" :class="{ toprow: u.rank <= 3 }">
                                <td><span class="rank-badge" :class="rankClass(u.rank)">{{ u.rank }}</span></td>
                                <td>{{ u.name }}</td>
                                <td>{{ u.unique_code }}</td>
                                <td>{{ u.mobile }}</td>
                                <td><span class="points-pill">{{ u.total_points }}</span></td>
                                <td>{{ u.matches_participated }}</td>
                                <td>{{ u.total_predictions }}</td>
                                <td><span class="correct-pill">{{ u.correct_predictions }}</span></td>
                            </tr>
                            <tr v-if="pointsReport.length === 0"><td colspan="8" class="empty-td">No data.</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- ── Tab: Participation ─────────────────── -->
        <div v-if="activeTab === 'participation'">
            <div class="toolbar">
                <input v-model="partSearch" @input="fetchParticipation" placeholder="Search name / code / mobile..." class="search-input">
                <select v-model="partFilter" @change="fetchParticipation" class="filter-select">
                    <option value="all">All Users</option>
                    <option value="participated">Participated</option>
                    <option value="not_participated">Not Participated</option>
                </select>
                <button class="excel-btn" @click="downloadExcel('participation')">⬇ Excel</button>
            </div>

            <div v-if="partSummary" class="summary-row">
                <div class="summary-card total"><div class="s-num">{{ partSummary.total }}</div><div class="s-lbl">Total Users</div></div>
                <div class="summary-card good"><div class="s-num">{{ partSummary.participated }}</div><div class="s-lbl">Participated</div></div>
                <div class="summary-card bad"><div class="s-num">{{ partSummary.not_participated }}</div><div class="s-lbl">Not Participated</div></div>
            </div>

            <div class="table-card">
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead><tr><th>Name</th><th>Code</th><th>Mobile</th><th>Points</th><th>Predictions</th><th>Matches</th><th>Status</th><th>Participated</th></tr></thead>
                        <tbody>
                            <tr v-for="u in partReport" :key="u.unique_code">
                                <td>{{ u.name }}</td>
                                <td>{{ u.unique_code }}</td>
                                <td>{{ u.mobile }}</td>
                                <td><span class="points-pill">{{ u.total_points }}</span></td>
                                <td>{{ u.total_predictions }}</td>
                                <td>{{ u.matches_participated }}</td>
                                <td><span :class="['status-badge', u.status === 'Active' ? 'active' : 'inactive']">{{ u.status }}</span></td>
                                <td>
                                    <span :class="['part-badge', u.has_participated ? 'yes' : 'no']">
                                        {{ u.has_participated ? '✓ Yes' : '✗ No' }}
                                    </span>
                                </td>
                            </tr>
                            <tr v-if="partReport.length === 0"><td colspan="8" class="empty-td">No data.</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- ── Tab: All Predictions ──────────────── -->
        <div v-if="activeTab === 'predictions'">
            <div class="toolbar">
                <input v-model="predSearch" @input="fetchPredictions" placeholder="Search user name / code..." class="search-input">
                <select v-model="predMatchId" @change="fetchPredictions" class="filter-select">
                    <option value="">All Matches</option>
                    <option value="null">Championship Only</option>
                    <option v-for="m in matches" :key="m.id" :value="m.id">{{ m.team1 && m.team1.name }} vs {{ m.team2 && m.team2.name }}</option>
                </select>
                <button class="excel-btn" @click="downloadExcel('predictions')">⬇ Excel</button>
            </div>

            <div class="table-card">
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead><tr><th>User</th><th>Code</th><th>Match</th><th>Question</th><th>Answer</th><th>Correct</th><th>Points</th><th>Date</th></tr></thead>
                        <tbody>
                            <tr v-for="p in predList" :key="p.id">
                                <td>{{ p.user_name }}</td>
                                <td>{{ p.user_code }}</td>
                                <td class="small-td">{{ p.match }}</td>
                                <td class="q-td">{{ p.question }}</td>
                                <td>{{ p.selected_answer }}</td>
                                <td>
                                    <span v-if="p.is_correct === true" class="correct-pill">✓</span>
                                    <span v-else-if="p.is_correct === false" class="wrong-pill">✗</span>
                                    <span v-else class="pending-pill">—</span>
                                </td>
                                <td><span class="points-pill">{{ p.points_earned }}</span></td>
                                <td style="white-space:nowrap">{{ p.created_at }}</td>
                            </tr>
                            <tr v-if="predList.length === 0"><td colspan="8" class="empty-td">No predictions found.</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="pagination-row" v-if="predLastPage > 1">
                <button class="page-btn" :disabled="predPage <= 1" @click="predPage--; fetchPredictions()">‹ Prev</button>
                <span class="page-info">Page {{ predPage }} / {{ predLastPage }}</span>
                <button class="page-btn" :disabled="predPage >= predLastPage" @click="predPage++; fetchPredictions()">Next ›</button>
            </div>
        </div>
    </div>
</template>

<script>
import * as XLSX from 'xlsx';

export default {
    name: 'AdminReports',
    data() {
        return {
            activeTab: 'points',
            tabs: [
                { key: 'points',        label: 'Points Report' },
                { key: 'participation', label: 'Participation' },
                { key: 'predictions',   label: 'All Predictions' },
            ],
            // Points
            pointsSearch: '',
            pointsReport: [],
            // Participation
            partSearch: '',
            partFilter: 'all',
            partReport: [],
            partSummary: null,
            // Predictions
            predSearch: '',
            predMatchId: '',
            predList: [],
            predPage: 1,
            predLastPage: 1,
            matches: [],
        };
    },
    mounted() {
        this.fetchPoints();
        this.fetchMatches();
    },
    methods: {
        switchTab(key) {
            this.activeTab = key;
            if (key === 'points' && this.pointsReport.length === 0) this.fetchPoints();
            if (key === 'participation' && this.partReport.length === 0) this.fetchParticipation();
            if (key === 'predictions' && this.predList.length === 0) this.fetchPredictions();
        },
        async fetchPoints() {
            const { data } = await this.$http.get('/api/admin/reports/points', { params: { search: this.pointsSearch } });
            this.pointsReport = data.data;
        },
        async fetchParticipation() {
            const { data } = await this.$http.get('/api/admin/reports/participation', {
                params: { search: this.partSearch, filter: this.partFilter },
            });
            this.partReport = data.data;
            this.partSummary = data.summary;
        },
        async fetchPredictions() {
            const params = { search: this.predSearch, page: this.predPage, per_page: 50 };
            if (this.predMatchId === 'null') params.match_id = 'null';
            else if (this.predMatchId) params.match_id = this.predMatchId;
            const { data } = await this.$http.get('/api/admin/reports/predictions', { params });
            this.predList = data.data;
            this.predLastPage = data.last_page || 1;
        },
        async fetchMatches() {
            const { data } = await this.$http.get('/api/admin/matches');
            this.matches = data.data;
        },
        rankClass(rank) { return { gold: rank === 1, silver: rank === 2, bronze: rank === 3 }; },
        downloadExcel(tab) {
            let rows = [];
            let filename = '';
            if (tab === 'points') {
                filename = 'points-report.xlsx';
                rows = this.pointsReport.map(u => ({
                    Rank: u.rank, Name: u.name, Code: u.unique_code, Mobile: u.mobile,
                    Points: u.total_points, Matches: u.matches_participated,
                    Predictions: u.total_predictions, Correct: u.correct_predictions,
                }));
            } else if (tab === 'participation') {
                filename = 'participation-report.xlsx';
                rows = this.partReport.map(u => ({
                    Name: u.name, Code: u.unique_code, Mobile: u.mobile,
                    Points: u.total_points, Predictions: u.total_predictions,
                    Matches: u.matches_participated, Status: u.status,
                    Participated: u.has_participated ? 'Yes' : 'No',
                }));
            } else if (tab === 'predictions') {
                filename = 'predictions-report.xlsx';
                rows = this.predList.map(p => ({
                    User: p.user_name, Code: p.user_code, Match: p.match,
                    Question: p.question, Answer: p.selected_answer,
                    Correct: p.is_correct === true ? 'Yes' : p.is_correct === false ? 'No' : 'Pending',
                    Points: p.points_earned, Date: p.created_at,
                }));
            }
            const ws = XLSX.utils.json_to_sheet(rows);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Report');
            XLSX.writeFile(wb, filename);
        },
    },
};
</script>

<style scoped>
.page-header { margin-bottom: 16px; }
.page-heading { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.5rem; font-weight: 700; }

.tabs-row { display: flex; gap: 6px; margin-bottom: 18px; flex-wrap: wrap; }
.tab-btn { padding: 8px 18px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.65); font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
.tab-btn.active { background: #FFA500; border-color: #FFA500; color: #fff; }

.toolbar { display: flex; gap: 10px; margin-bottom: 14px; flex-wrap: wrap; }
.search-input { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px 14px; color: #fff; font-size: 0.85rem; outline: none; width: 280px; }
.filter-select { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px 14px; color: #fff; font-size: 0.85rem; outline: none; }
.filter-select option { background: linear-gradient(180deg, #150a4e 0%, #1A0040 100%); }

.summary-row { display: flex; gap: 12px; margin-bottom: 16px; flex-wrap: wrap; }
.summary-card { flex: 1; min-width: 120px; background: linear-gradient(180deg, #150a4e 0%, #1A0040 100%); border-radius: 10px; padding: 16px; text-align: center; }
.summary-card.good { border-top: 3px solid #4ade80; }
.summary-card.bad { border-top: 3px solid #f87171; }
.summary-card.total { border-top: 3px solid #FFA500; }
.s-num { font-size: 1.8rem; font-weight: 700; font-family: 'Rajdhani', sans-serif; color: #fff; }
.s-lbl { font-size: 0.72rem; color: rgba(255,255,255,0.5); margin-top: 2px; }

.table-card { background: linear-gradient(180deg, #150a4e 0%, #1A0040 100%); border-radius: 12px; overflow: hidden; }
.table-wrapper { overflow-x: auto; }
.data-table { width: 100%; border-collapse: collapse; white-space: nowrap; }
.data-table th { background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.5); font-size: 0.72rem; font-weight: 600; padding: 12px 14px; text-align: left; text-transform: uppercase; }
.data-table td { color: rgba(255,255,255,0.8); font-size: 0.82rem; padding: 11px 14px; border-bottom: 1px solid rgba(255,255,255,0.04); }
.toprow td { background: rgba(255,165,0,0.04); }
.small-td { max-width: 130px; overflow: hidden; text-overflow: ellipsis; }
.q-td { max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.rank-badge { width: 28px; height: 28px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.78rem; font-weight: 700; background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.6); }
.rank-badge.gold { background: rgba(255,215,0,0.25); color: #FFD700; }
.rank-badge.silver { background: rgba(192,192,192,0.25); color: #C0C0C0; }
.rank-badge.bronze { background: rgba(205,127,50,0.25); color: #CD7F32; }
.points-pill { background: rgba(255,165,0,0.15); color: #FFA500; padding: 3px 10px; border-radius: 12px; font-size: 0.78rem; font-weight: 600; }
.correct-pill { background: rgba(34,197,94,0.15); color: #4ade80; padding: 3px 10px; border-radius: 12px; font-size: 0.78rem; font-weight: 600; }
.wrong-pill { background: rgba(239,68,68,0.15); color: #f87171; padding: 3px 10px; border-radius: 12px; font-size: 0.78rem; font-weight: 600; }
.pending-pill { color: rgba(255,255,255,0.3); font-size: 0.8rem; }
.status-badge { padding: 3px 10px; border-radius: 12px; font-size: 0.72rem; font-weight: 600; }
.status-badge.active { background: rgba(34,197,94,0.15); color: #4ade80; }
.status-badge.inactive { background: rgba(239,68,68,0.15); color: #f87171; }
.part-badge { padding: 3px 10px; border-radius: 12px; font-size: 0.72rem; font-weight: 700; }
.part-badge.yes { background: rgba(34,197,94,0.15); color: #4ade80; }
.part-badge.no { background: rgba(239,68,68,0.1); color: #f87171; }
.empty-td { text-align: center; color: rgba(255,255,255,0.3); padding: 30px; }

.pagination-row { display: flex; align-items: center; gap: 12px; padding: 14px; justify-content: center; }
.page-btn { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; color: rgba(255,255,255,0.7); padding: 6px 14px; cursor: pointer; }
.page-btn:disabled { opacity: 0.4; cursor: default; }
.page-info { color: rgba(255,255,255,0.5); font-size: 0.82rem; }

.excel-btn { background: #1d6f42; border: none; border-radius: 8px; color: #fff; font-size: 0.85rem; font-weight: 600; padding: 10px 16px; cursor: pointer; white-space: nowrap; }
.excel-btn:hover { background: #18593a; }
</style>
