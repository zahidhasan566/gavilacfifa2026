<template>
    <div class="admin-questions">
        <div class="page-header">
            <h1 class="page-heading">Question Configuration</h1>
            <button class="btn-orange" @click="openAdd">+ Add Question</button>
        </div>
        <div class="filter-row">
            <select v-model="filterMatch" @change="fetchQuestions" class="form-input select-sm">
                <option value="">All Matches</option>
                <option v-for="m in matches" :key="m.id" :value="m.id">{{ m.team1 && m.team1.name }} vs {{ m.team2 && m.team2.name }} ({{ m.match_date }})</option>
            </select>
        </div>
        <div class="table-card">
            <div class="table-wrapper">
                <table class="data-table">
                    <thead><tr><th>#</th><th>Match</th><th>Question</th><th>Type</th><th>Points</th><th>Correct Answer</th><th>Active</th><th>Actions</th></tr></thead>
                    <tbody>
                        <tr v-for="(q, i) in questions" :key="q.id">
                            <td>{{ i+1 }}</td>
                            <td class="small-td">{{ q.match ? (q.match.team1 && q.match.team1.name) + ' vs ' + (q.match.team2 && q.match.team2.name) : 'General' }}</td>
                            <td>{{ q.question_text }}</td>
                            <td><span class="type-badge">{{ q.type }}</span></td>
                            <td><span class="points-pill">{{ q.points }}</span></td>
                            <td class="answer-td">{{ q.correct_answer || '—' }}</td>
                            <td><span :class="['status-badge', q.is_active ? 'active' : 'inactive']">{{ q.is_active ? 'Yes' : 'No' }}</span></td>
                            <td>
                                <button class="btn-sm btn-edit" @click="openEdit(q)">Edit</button>
                                <button class="btn-sm btn-danger" @click="deleteQuestion(q.id)">Del</button>
                            </td>
                        </tr>
                        <tr v-if="questions.length === 0"><td colspan="8" class="empty-td">No questions found.</td></tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div v-if="modal" class="modal-overlay" @click.self="closeModal">
            <div class="modal-box">
                <h3 class="modal-title">{{ editId ? 'Edit Question' : 'Add Question' }}</h3>
                <div class="form-group">
                    <label>Match (optional)</label>
                    <select v-model.number="form.match_id" class="form-input">
                        <option :value="null">General (no match)</option>
                        <option v-for="m in matches" :key="m.id" :value="m.id">{{ m.team1 && m.team1.name }} vs {{ m.team2 && m.team2.name }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Question Text</label>
                    <textarea v-model="form.question_text" class="form-input" rows="3" placeholder="Enter question..."></textarea>
                </div>
                <div class="form-grid2">
                    <div class="form-group">
                        <label>Type</label>
                        <select v-model="form.type" class="form-input">
                            <option value="team_choice">Team Choice</option>
                            <option value="dropdown">Dropdown</option>
                            <option value="mcq">MCQ</option>
                            <option value="text">Text (Free Answer)</option>
                        </select>
                    </div>
                    <div class="form-group"><label>Points</label><input v-model.number="form.points" class="form-input" type="number" min="1"></div>
                    <div class="form-group"><label>Sort Order</label><input v-model.number="form.sort_order" class="form-input" type="number" min="0"></div>
                    <div class="form-group">
                        <label>Active</label>
                        <select v-model="form.is_active" class="form-input">
                            <option :value="true">Yes</option>
                            <option :value="false">No</option>
                        </select>
                    </div>
                </div>
                <div v-if="form.type === 'dropdown' || form.type === 'mcq'" class="form-group">
                    <label>Options (one per line)</label>
                    <textarea v-model="optionsText" class="form-input" rows="4" placeholder="Option 1&#10;Option 2&#10;Option 3"></textarea>
                </div>
                <div class="form-group">
                    <label>Correct Answer</label>
                    <input v-model="form.correct_answer" class="form-input" placeholder="Set after match completes">
                </div>
                <div class="modal-actions">
                    <button class="btn-cancel" @click="closeModal">Cancel</button>
                    <button class="btn-orange" @click="saveQuestion" :disabled="saving">{{ saving ? 'Saving...' : 'Save' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AdminQuestions',
    data() {
        return {
            questions: [], matches: [], filterMatch: '', modal: false, editId: null, saving: false, optionsText: '',
            form: { match_id: null, question_text: '', type: 'team_choice', points: 10, options: [], correct_answer: '', is_active: true, sort_order: 0 },
        };
    },
    mounted() { this.fetchQuestions(); this.fetchMatches(); },
    methods: {
        async fetchQuestions() {
            const { data } = await this.$http.get('/api/admin/questions', { params: { match_id: this.filterMatch || undefined } });
            this.questions = data.data;
        },
        async fetchMatches() { const { data } = await this.$http.get('/api/admin/matches'); this.matches = data.data; },
        openAdd() { this.editId = null; this.form = { match_id:null, question_text:'', type:'team_choice', points:10, options:[], correct_answer:'', is_active:true, sort_order:0 }; this.optionsText = ''; this.modal = true; },
        openEdit(q) { this.editId = q.id; this.form = { match_id:q.match_id, question_text:q.question_text, type:q.type, points:q.points, options:q.options||[], correct_answer:q.correct_answer||'', is_active:q.is_active, sort_order:q.sort_order }; this.optionsText = (q.options||[]).join('\n'); this.modal = true; },
        closeModal() { this.modal = false; },
        async saveQuestion() {
            this.saving = true;
            const payload = { ...this.form };
            if (this.form.type !== 'team_choice') { payload.options = this.optionsText.split('\n').map(s => s.trim()).filter(Boolean); }
            try {
                if (this.editId) await this.$http.put(`/api/admin/questions/${this.editId}`, payload);
                else await this.$http.post('/api/admin/questions', payload);
                this.closeModal(); this.fetchQuestions(); this.$toaster.success('Question saved.');
            } catch (e) { this.$toaster.error('Failed.'); } finally { this.saving = false; }
        },
        async deleteQuestion(id) { if (!confirm('Delete question?')) return; await this.$http.delete(`/api/admin/questions/${id}`); this.fetchQuestions(); },
    },
};
</script>
<style scoped>
.admin-questions { }
.page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.page-heading { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.5rem; font-weight: 700; }
.btn-orange { background: #FF8C00; color: #fff; border: none; border-radius: 8px; padding: 10px 20px; font-weight: 700; cursor: pointer; font-family: 'Rajdhani', sans-serif; }
.filter-row { margin-bottom: 16px; }
.form-input { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px 12px; color: #fff; font-size: 0.9rem; outline: none; width: 100%; box-sizing: border-box; }
.select-sm { width: 320px; }
.table-card { background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%); border-radius: 12px; overflow: hidden; }
.table-wrapper { overflow-x: auto; }
.data-table { width: 100%; border-collapse: collapse; }
.data-table th { background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.5); font-size: 0.72rem; font-weight: 600; padding: 12px 14px; text-align: left; text-transform: uppercase; }
.data-table td { color: rgba(255,255,255,0.8); font-size: 0.82rem; padding: 11px 14px; border-bottom: 1px solid rgba(255,255,255,0.04); }
.small-td { max-width: 150px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.answer-td { max-width: 120px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.type-badge { background: rgba(168,85,247,0.15); color: #c084fc; padding: 3px 8px; border-radius: 8px; font-size: 0.7rem; font-weight: 600; }
.points-pill { background: rgba(255,165,0,0.15); color: #FFA500; padding: 3px 10px; border-radius: 12px; font-size: 0.78rem; font-weight: 600; }
.status-badge { padding: 3px 10px; border-radius: 12px; font-size: 0.72rem; font-weight: 600; }
.status-badge.active { background: rgba(34,197,94,0.15); color: #4ade80; }
.status-badge.inactive { background: rgba(239,68,68,0.15); color: #f87171; }
.btn-sm { padding: 4px 10px; border: none; border-radius: 5px; font-size: 0.72rem; font-weight: 600; cursor: pointer; margin-right: 3px; }
.btn-edit { background: rgba(59,130,246,0.15); color: #60a5fa; }
.btn-danger { background: rgba(239,68,68,0.15); color: #f87171; }
.empty-td { text-align: center; color: rgba(255,255,255,0.3); padding: 30px; }
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.65); display: flex; align-items: center; justify-content: center; z-index: 500; }
.modal-box { background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%); border-radius: 12px; padding: 28px; width: 560px; max-height: 85vh; overflow-y: auto; }
.modal-title { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.2rem; font-weight: 700; margin-bottom: 20px; }
.form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
.form-group label { color: rgba(255,255,255,0.6); font-size: 0.78rem; }
.form-input option { background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%); }
.form-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
.modal-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; }
.btn-cancel { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7); border: none; border-radius: 8px; padding: 10px 20px; cursor: pointer; }
</style>
