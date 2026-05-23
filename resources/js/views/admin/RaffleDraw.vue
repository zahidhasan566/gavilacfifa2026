<template>
    <div class="admin-raffle">
        <h1 class="page-heading">Raffle Draw</h1>

        <div class="raffle-layout">
            <!-- Eligible Users -->
            <div class="raffle-left">
                <div class="card-header">
                    <span>Eligible Participants</span>
                    <div class="filter-row-inline">
                        <label class="filter-label">Match:</label>
                        <select v-model="selectedMatchId" class="mini-select" @change="onMatchChange">
                            <option :value="null">All Matches</option>
                            <option v-for="m in matches" :key="m.id" :value="m.id">{{ m.label }}</option>
                        </select>
                    </div>
                    <div class="filter-row-inline">
                        <label class="filter-label">Min Points:</label>
                        <input v-model.number="minPoints" type="number" min="0" class="mini-input" @change="fetchEligible">
                    </div>
                    <div class="filter-row-inline">
                        <label class="filter-label">Max Winners:</label>
                        <input v-model.number="maxWinners" type="number" min="1" class="mini-input" style="width:55px;">
                    </div>
                    <div class="winner-count-badge" :class="{ full: winnerCount >= maxWinners }">
                        {{ winnerCount }} / {{ maxWinners }} winners
                    </div>
                    <button class="btn-random" :disabled="winnerCount >= maxWinners" @click="randomDraw">🎲 Random Draw</button>
                </div>

                <div class="eligible-list">
                    <div v-for="(u, i) in eligible" :key="u.id"
                         class="eligible-item" :class="{ selected: selectedUserId === u.id }"
                         @click="selectedUserId = u.id">
                        <span class="rank">{{ i+1 }}</span>
                        <img :src="u.profile_picture_url" class="e-avatar" onerror="this.src=window.__IMG__ + '/images/default-avatar.png'">
                        <div class="e-info">
                            <div class="e-name">{{ u.name }}</div>
                            <div class="e-code">{{ u.unique_code }}</div>
                        </div>
                        <span class="e-points">{{ u.total_points }}</span>
                    </div>
                    <div v-if="eligible.length === 0" class="empty-state">No eligible users.</div>
                </div>

                <div v-if="selectedUserId" class="confirm-draw">
                    <div v-if="winnerCount >= maxWinners" class="max-reached-msg">
                        Maximum winners ({{ maxWinners }}) reached for this match.
                    </div>
                    <template v-else>
                        <div class="confirm-label">Selected: {{ selectedUser && selectedUser.name }}</div>
                        <div class="form-group">
                            <label>Prize Points</label>
                            <input v-model.number="prizePoints" type="number" min="0" class="form-input">
                        </div>
                        <div class="form-group">
                            <label>Notes</label>
                            <input v-model="notes" class="form-input" placeholder="Optional note...">
                        </div>
                        <button class="btn-orange" @click="confirmDraw">Confirm Winner</button>
                    </template>
                </div>
            </div>

            <!-- History -->
            <div class="raffle-right">
                <div class="card-header">Raffle Draw History</div>
                <div v-for="d in history" :key="d.id" class="history-item">
                    <img :src="(d.user && d.user.profile_picture_url) || $imgBase + '/images/default-avatar.png'"
                         class="e-avatar" onerror="this.src=window.__IMG__ + '/images/default-avatar.png'">
                    <div class="e-info">
                        <div class="e-name">{{ d.user && d.user.name }}</div>
                        <div class="e-code">{{ d.draw_date }} · {{ d.user && d.user.unique_code }}</div>
                        <div v-if="d.notes" class="e-notes">{{ d.notes }}</div>
                    </div>
                    <span class="prize-badge">+{{ d.prize_points }} pts</span>
                </div>
                <div v-if="history.length === 0" class="empty-state">No draws yet.</div>
            </div>
        </div>

        <!-- Random winner modal -->
        <div v-if="randomWinner" class="modal-overlay" @click.self="randomWinner = null">
            <div class="modal-box winner-modal">
                <div class="winner-emoji">🎉</div>
                <div class="winner-label">Random Draw Winner</div>
                <img :src="randomWinner.profile_picture_url" class="winner-avatar" onerror="this.src=window.__IMG__ + '/images/default-avatar.png'">
                <div class="winner-name">{{ randomWinner.name }}</div>
                <div class="winner-code">{{ randomWinner.unique_code }}</div>
                <div class="winner-pts">{{ randomWinner.total_points }} Points</div>
                <div class="modal-actions">
                    <button class="btn-cancel" @click="randomWinner = null">Close</button>
                    <button class="btn-orange" @click="selectRandomWinner">Confirm as Winner</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminRaffle',
    data() {
        return {
            matches: [],
            selectedMatchId: null,
            eligible: [],
            history: [],
            selectedUserId: null,
            minPoints: 0,
            maxWinners: 10,
            winnerCount: 0,
            prizePoints: 0,
            notes: '',
            randomWinner: null,
        };
    },
    computed: {
        selectedUser() { return this.eligible.find(u => u.id === this.selectedUserId); },
    },
    mounted() {
        this.fetchMatches();
        this.fetchEligible();
        this.fetchHistory();
        this.fetchWinnerCount();
    },
    methods: {
        async fetchMatches() {
            const { data } = await this.$http.get('/api/admin/matches');
            this.matches = (data.data || data).map(m => ({
                id: m.id,
                label: `${m.team1?.name || '?'} vs ${m.team2?.name || '?'} (${m.match_date || ''})`,
            }));
        },
        onMatchChange() {
            this.selectedUserId = null;
            this.fetchEligible();
            this.fetchHistory();
            this.fetchWinnerCount();
        },
        async fetchEligible() {
            const params = { min_points: this.minPoints };
            if (this.selectedMatchId) params.match_id = this.selectedMatchId;
            const { data } = await this.$http.get('/api/admin/raffle/eligible', { params });
            this.eligible = data.data;
        },
        async fetchHistory() {
            const params = {};
            if (this.selectedMatchId) params.match_id = this.selectedMatchId;
            const { data } = await this.$http.get('/api/admin/raffle/history', { params });
            this.history = data.data;
        },
        async fetchWinnerCount() {
            const params = {};
            if (this.selectedMatchId) params.match_id = this.selectedMatchId;
            const { data } = await this.$http.get('/api/admin/raffle/winner-count', { params });
            this.winnerCount = data.data.count;
        },
        async randomDraw() {
            try {
                const payload = { min_points: this.minPoints };
                if (this.selectedMatchId) payload.match_id = this.selectedMatchId;
                const { data } = await this.$http.post('/api/admin/raffle/random', payload);
                this.randomWinner = data.data;
            } catch (e) { this.$toaster.error(e.response?.data?.message || 'No eligible users.'); }
        },
        async selectRandomWinner() {
            this.selectedUserId = this.randomWinner.id;
            this.randomWinner = null;
        },
        async confirmDraw() {
            try {
                await this.$http.post('/api/admin/raffle/draw', {
                    user_id:      this.selectedUserId,
                    match_id:     this.selectedMatchId,
                    prize_points: this.prizePoints,
                    notes:        this.notes,
                    max_winners:  this.maxWinners,
                });
                this.$toaster.success('Winner confirmed!');
                this.selectedUserId = null;
                this.prizePoints = 0;
                this.notes = '';
                this.fetchHistory();
                this.fetchWinnerCount();
            } catch (e) {
                this.$toaster.error(e.response?.data?.message || 'Failed.');
            }
        },
    },
};
</script>

<style scoped>
.admin-raffle { }
.page-heading { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.5rem; font-weight: 700; margin-bottom: 20px; }
.raffle-layout { display: flex; gap: 20px; }
.raffle-left { flex: 1; background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%); border-radius: 12px; overflow: hidden; }
.raffle-right { width: 300px; background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%); border-radius: 12px; overflow: hidden; }
.card-header { display: flex; align-items: center; gap: 10px; padding: 14px 16px; border-bottom: 1px solid rgba(255,255,255,0.06); color: #fff; font-weight: 700; font-size: 0.9rem; flex-wrap: wrap; }
.filter-label { color: rgba(255,255,255,0.5); font-size: 0.78rem; }
.mini-input { width: 70px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; padding: 5px 8px; color: #fff; font-size: 0.85rem; outline: none; }
.mini-select { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; padding: 5px 8px; color: #fff; font-size: 0.78rem; outline: none; max-width: 160px; }
.mini-select option { background: #1A0040; color: #fff; }
.winner-count-badge { background: rgba(34,197,94,0.15); color: #4ade80; border: 1px solid rgba(34,197,94,0.25); border-radius: 12px; padding: 3px 10px; font-size: 0.75rem; font-weight: 600; white-space: nowrap; }
.winner-count-badge.full { background: rgba(239,68,68,0.15); color: #f87171; border-color: rgba(239,68,68,0.3); }
.btn-random { background: rgba(168,85,247,0.15); color: #c084fc; border: 1px solid rgba(168,85,247,0.3); border-radius: 8px; padding: 6px 12px; font-size: 0.8rem; cursor: pointer; margin-left: auto; }
.btn-random:disabled { opacity: 0.4; cursor: not-allowed; }
.eligible-list { max-height: 400px; overflow-y: auto; }
.eligible-item { display: flex; align-items: center; gap: 10px; padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.04); cursor: pointer; transition: background 0.15s; }
.eligible-item:hover { background: rgba(255,255,255,0.04); }
.eligible-item.selected { background: rgba(255,165,0,0.1); border-left: 3px solid #FFA500; }
.rank { color: rgba(255,255,255,0.3); font-size: 0.78rem; width: 20px; }
.e-avatar { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; }
.e-info { flex: 1; }
.e-name { color: #fff; font-size: 0.85rem; font-weight: 600; }
.e-code { color: rgba(255,255,255,0.4); font-size: 0.7rem; }
.e-notes { color: rgba(255,255,255,0.3); font-size: 0.68rem; font-style: italic; }
.e-points { background: #FFA500; color: #fff; padding: 3px 10px; border-radius: 12px; font-size: 0.78rem; font-weight: 700; }
.confirm-draw { padding: 16px; border-top: 1px solid rgba(255,255,255,0.06); }
.confirm-label { color: #FFA500; font-weight: 600; font-size: 0.9rem; margin-bottom: 12px; }
.max-reached-msg { color: #f87171; font-size: 0.85rem; text-align: center; padding: 12px 0; }
.form-group { display: flex; flex-direction: column; gap: 5px; margin-bottom: 12px; }
.form-group label { color: rgba(255,255,255,0.5); font-size: 0.75rem; }
.form-input { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px 12px; color: #fff; font-size: 0.9rem; outline: none; width: 100%; box-sizing: border-box; }
.btn-orange { background: #FF8C00; color: #fff; border: none; border-radius: 8px; padding: 10px 20px; font-weight: 700; cursor: pointer; width: 100%; font-family: 'Rajdhani', sans-serif; }
.history-item { display: flex; align-items: center; gap: 10px; padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.04); }
.prize-badge { background: rgba(34,197,94,0.15); color: #4ade80; padding: 3px 10px; border-radius: 12px; font-size: 0.78rem; font-weight: 600; white-space: nowrap; }
.empty-state { color: rgba(255,255,255,0.3); text-align: center; padding: 30px; font-size: 0.85rem; }
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.65); display: flex; align-items: center; justify-content: center; z-index: 500; }
.modal-box { background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%); border-radius: 16px; padding: 32px; width: 360px; }
.winner-modal { text-align: center; }
.winner-emoji { font-size: 3rem; margin-bottom: 8px; }
.winner-label { color: #FFA500; font-family: 'Rajdhani', sans-serif; font-weight: 700; font-size: 1.1rem; margin-bottom: 16px; }
.winner-avatar { width: 100px; height: 100px; border-radius: 50%; object-fit: cover; border: 3px solid #FFA500; margin-bottom: 12px; }
.winner-name { color: #fff; font-weight: 700; font-size: 1.1rem; }
.winner-code { color: rgba(255,255,255,0.5); font-size: 0.85rem; margin-bottom: 4px; }
.winner-pts { color: #FFA500; font-size: 1.4rem; font-weight: 700; font-family: 'Rajdhani', sans-serif; margin-bottom: 20px; }
.modal-actions { display: flex; justify-content: center; gap: 10px; }
.btn-cancel { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7); border: none; border-radius: 8px; padding: 10px 20px; cursor: pointer; }
@media (max-width: 768px) { .raffle-layout { flex-direction: column; } .raffle-right { width: 100%; } }
</style>
