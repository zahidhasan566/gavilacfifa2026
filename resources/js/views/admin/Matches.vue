<template>
    <div class="admin-matches">
        <div class="page-header">
            <h1 class="page-heading">Match Management</h1>
            <button class="btn-orange" @click="openAdd">+ Add Match</button>
        </div>

        <div class="table-card">
            <div class="table-wrapper">
                <table class="data-table">
                    <thead>
                        <tr><th>Group</th><th>Round</th><th>Team 1</th><th>vs</th><th>Team 2</th><th>Date</th><th>Venue</th><th>Status</th><th>Score</th><th>Actions</th></tr>
                    </thead>
                    <tbody>
                        <tr v-for="m in matches" :key="m.id">
                            <td>{{ m.group_name }}</td>
                            <td>{{ m.round_number }}</td>
                            <td>{{ m.team1 && m.team1.flag_emoji }} {{ m.team1 && m.team1.name }}</td>
                            <td class="vs-td">VS</td>
                            <td>{{ m.team2 && m.team2.flag_emoji }} {{ m.team2 && m.team2.name }}</td>
                            <td>{{ m.match_date }}</td>
                            <td>{{ m.venue }}</td>
                            <td><span :class="['status-badge', m.status]">{{ m.status }}</span></td>
                            <td>{{ m.team1_score != null ? m.team1_score : '—' }} : {{ m.team2_score != null ? m.team2_score : '—' }}</td>
                            <td>
                                <button class="btn-sm btn-edit" @click="openScore(m)">Score</button>
                                <button class="btn-sm btn-edit" @click="openEdit(m)">Edit</button>
                                <button class="btn-sm btn-calc" @click="calculateResults(m.id)" v-if="m.status === 'completed'">Calc</button>
                                <button class="btn-sm btn-danger" @click="deleteMatch(m.id)">Del</button>
                            </td>
                        </tr>
                        <tr v-if="matches.length === 0"><td colspan="10" class="empty-td">No matches found.</td></tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Add/Edit Modal -->
        <div v-if="modal" class="modal-overlay" @click.self="closeModal">
            <div class="modal-box">
                <h3 class="modal-title">{{ editId ? 'Edit Match' : 'Add Match' }}</h3>
                <div class="form-grid">
                    <div class="form-group">
                        <label>Group</label>
                        <select v-model="form.group_name" class="form-input">
                            <option v-for="g in 'ABCDEFGH'.split('')" :key="g" :value="g">Group {{ g }}</option>
                        </select>
                    </div>
                    <div class="form-group"><label>Round</label><input v-model.number="form.round_number" class="form-input" type="number" min="1"></div>
                    <div class="form-group">
                        <label>Team 1</label>
                        <select v-model.number="form.team1_id" class="form-input">
                            <option v-for="t in teams" :key="t.id" :value="t.id">{{ t.flag_emoji }} {{ t.name }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Team 2</label>
                        <select v-model.number="form.team2_id" class="form-input">
                            <option v-for="t in teams" :key="t.id" :value="t.id">{{ t.flag_emoji }} {{ t.name }}</option>
                        </select>
                    </div>
                    <div class="form-group"><label>Match Date</label><input v-model="form.match_date" class="form-input" type="date"></div>
                    <div class="form-group"><label>Match Time</label><input v-model="form.match_time" class="form-input" type="time"></div>
                    <div class="form-group full"><label>Venue</label><input v-model="form.venue" class="form-input" placeholder="e.g. Mexico City"></div>
                    <div class="form-group">
                        <label>Status</label>
                        <select v-model="form.status" class="form-input">
                            <option value="upcoming">Upcoming</option>
                            <option value="live">Live</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn-cancel" @click="closeModal">Cancel</button>
                    <button class="btn-orange" @click="saveMatch" :disabled="saving">{{ saving ? 'Saving...' : 'Save' }}</button>
                </div>
            </div>
        </div>

        <!-- Score Modal -->
        <div v-if="scoreModal" class="modal-overlay" @click.self="scoreModal = false">
            <div class="modal-box">
                <h3 class="modal-title">Update Score — {{ scoreMatch && scoreMatch.team1 && scoreMatch.team1.name }} vs {{ scoreMatch && scoreMatch.team2 && scoreMatch.team2.name }}</h3>
                <div class="form-grid">
                    <div class="form-group">
                        <label>Status</label>
                        <select v-model="scoreForm.status" class="form-input">
                            <option value="upcoming">Upcoming</option><option value="live">Live</option><option value="completed">Completed</option>
                        </select>
                    </div>
                    <div></div>
                    <div class="form-group"><label>{{ scoreMatch && scoreMatch.team1 && scoreMatch.team1.name }} Score</label><input v-model.number="scoreForm.team1_score" class="form-input" type="number" min="0"></div>
                    <div class="form-group"><label>{{ scoreMatch && scoreMatch.team2 && scoreMatch.team2.name }} Score</label><input v-model.number="scoreForm.team2_score" class="form-input" type="number" min="0"></div>
                    <div class="form-group"><label>1st Half - {{ scoreMatch && scoreMatch.team1 && scoreMatch.team1.name }}</label><input v-model.number="scoreForm.team1_half1" class="form-input" type="number" min="0"></div>
                    <div class="form-group"><label>1st Half - {{ scoreMatch && scoreMatch.team2 && scoreMatch.team2.name }}</label><input v-model.number="scoreForm.team2_half1" class="form-input" type="number" min="0"></div>
                    <div class="form-group"><label>2nd Half - {{ scoreMatch && scoreMatch.team1 && scoreMatch.team1.name }}</label><input v-model.number="scoreForm.team1_half2" class="form-input" type="number" min="0"></div>
                    <div class="form-group"><label>2nd Half - {{ scoreMatch && scoreMatch.team2 && scoreMatch.team2.name }}</label><input v-model.number="scoreForm.team2_half2" class="form-input" type="number" min="0"></div>
                </div>
                <div class="modal-actions">
                    <button class="btn-cancel" @click="scoreModal = false">Cancel</button>
                    <button class="btn-orange" @click="saveScore">Save Score</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminMatches',
    data() {
        return {
            matches: [], teams: [], modal: false, scoreModal: false,
            editId: null, saving: false, scoreMatch: null,
            form: { group_name: 'A', round_number: 1, team1_id: null, team2_id: null, venue: '', match_date: '', match_time: '', status: 'upcoming' },
            scoreForm: { status: 'live', team1_score: 0, team2_score: 0, team1_half1: 0, team2_half1: 0, team1_half2: 0, team2_half2: 0 },
        };
    },
    mounted() { this.fetchMatches(); this.fetchTeams(); },
    methods: {
        async fetchMatches() {
            const { data } = await this.$http.get('/api/admin/matches');
            this.matches = data.data;
        },
        async fetchTeams() {
            const { data } = await this.$http.get('/api/admin/teams');
            this.teams = data.data;
        },
        openAdd() { this.editId = null; this.form = { group_name:'A', round_number:1, team1_id:null, team2_id:null, venue:'', match_date:'', match_time:'', status:'upcoming' }; this.modal = true; },
        openEdit(m) { this.editId = m.id; this.form = { group_name:m.group_name, round_number:m.round_number, team1_id:m.team1?.id, team2_id:m.team2?.id, venue:m.venue, match_date:m.match_date, match_time:m.match_time, status:m.status }; this.modal = true; },
        openScore(m) { this.scoreMatch = m; this.scoreForm = { status:m.status, team1_score:m.team1_score||0, team2_score:m.team2_score||0, team1_half1:m.team1_half1||0, team2_half1:m.team2_half1||0, team1_half2:m.team1_half2||0, team2_half2:m.team2_half2||0 }; this.scoreModal = true; },
        closeModal() { this.modal = false; },
        async saveMatch() {
            this.saving = true;
            try {
                if (this.editId) await this.$http.put(`/api/admin/matches/${this.editId}`, this.form);
                else await this.$http.post('/api/admin/matches', this.form);
                this.closeModal(); this.fetchMatches(); this.$toaster.success('Match saved.');
            } catch (e) { this.$toaster.error(e.response?.data?.message || 'Failed.'); }
            finally { this.saving = false; }
        },
        async saveScore() {
            await this.$http.post(`/api/admin/matches/${this.scoreMatch.id}/score`, this.scoreForm);
            this.scoreModal = false; this.fetchMatches(); this.$toaster.success('Score updated.');
        },
        async calculateResults(id) {
            try {
                const { data } = await this.$http.post(`/api/admin/matches/${id}/calculate-results`);
                this.$toaster.success(data.message);
            } catch (e) { this.$toaster.error(e.response?.data?.message || 'Failed.'); }
        },
        async deleteMatch(id) {
            if (!confirm('Delete this match?')) return;
            await this.$http.delete(`/api/admin/matches/${id}`);
            this.fetchMatches(); this.$toaster.success('Match deleted.');
        },
    },
};
</script>

<style scoped>
.admin-matches { }
.page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.page-heading { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.5rem; font-weight: 700; }
.btn-orange { background: #FF8C00; color: #fff; border: none; border-radius: 8px; padding: 10px 20px; font-weight: 700; cursor: pointer; font-family: 'Rajdhani', sans-serif; }
.table-card { background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%); border-radius: 12px; overflow: hidden; }
.table-wrapper { overflow-x: auto; }
.data-table { width: 100%; border-collapse: collapse; white-space: nowrap; }
.data-table th { background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.5); font-size: 0.72rem; font-weight: 600; padding: 12px 14px; text-align: left; text-transform: uppercase; }
.data-table td { color: rgba(255,255,255,0.8); font-size: 0.82rem; padding: 11px 14px; border-bottom: 1px solid rgba(255,255,255,0.04); }
.vs-td { color: rgba(255,255,255,0.3); text-align: center; }
.status-badge { padding: 3px 10px; border-radius: 12px; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; }
.status-badge.live { background: rgba(239,68,68,0.2); color: #f87171; }
.status-badge.upcoming { background: rgba(59,130,246,0.2); color: #60a5fa; }
.status-badge.completed { background: rgba(34,197,94,0.2); color: #4ade80; }
.btn-sm { padding: 4px 10px; border: none; border-radius: 5px; font-size: 0.72rem; font-weight: 600; cursor: pointer; margin-right: 3px; }
.btn-edit { background: rgba(59,130,246,0.15); color: #60a5fa; }
.btn-calc { background: rgba(168,85,247,0.15); color: #c084fc; }
.btn-danger { background: rgba(239,68,68,0.15); color: #f87171; }
.empty-td { text-align: center; color: rgba(255,255,255,0.3); padding: 30px; }
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.65); display: flex; align-items: center; justify-content: center; z-index: 500; }
.modal-box { background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%); border-radius: 12px; padding: 28px; width: 580px; max-height: 85vh; overflow-y: auto; }
.modal-title { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.2rem; font-weight: 700; margin-bottom: 20px; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group.full { grid-column: 1 / -1; }
.form-group label { color: rgba(255,255,255,0.6); font-size: 0.78rem; }
.form-input { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px 12px; color: #fff; font-size: 0.9rem; outline: none; }
.form-input option { background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%); }
.modal-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; }
.btn-cancel { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7); border: none; border-radius: 8px; padding: 10px 20px; cursor: pointer; }
</style>
