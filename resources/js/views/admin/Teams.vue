<template>
    <div class="admin-teams">
        <div class="page-header">
            <h1 class="page-heading">Teams</h1>
            <button class="btn-orange" @click="openAdd">+ Add Team</button>
        </div>
        <div class="groups-view">
            <div v-for="(teams, group) in groupedTeams" :key="group" class="group-block">
                <div class="group-header">Group {{ group }}</div>
                <div v-for="t in teams" :key="t.id" class="team-row">
                    <span class="team-emoji">{{ t.flag_emoji || '🏳' }}</span>
                    <span class="team-name">{{ t.name }}</span>
                    <div class="team-actions">
                        <button class="btn-sm btn-edit" @click="openEdit(t)">Edit</button>
                        <button class="btn-sm btn-danger" @click="deleteTeam(t.id)">Del</button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="modal" class="modal-overlay" @click.self="closeModal">
            <div class="modal-box">
                <h3 class="modal-title">{{ editId ? 'Edit Team' : 'Add Team' }}</h3>
                <div class="form-grid">
                    <div class="form-group"><label>Team Name</label><input v-model="form.name" class="form-input" placeholder="e.g. Brazil"></div>
                    <div class="form-group">
                        <label>Group</label>
                        <select v-model="form.group_name" class="form-input">
                            <option v-for="g in 'ABCDEFGH'.split('')" :key="g" :value="g">Group {{ g }}</option>
                        </select>
                    </div>
                    <div class="form-group"><label>Flag Emoji</label><input v-model="form.flag_emoji" class="form-input" placeholder="🇧🇷"></div>
                </div>
                <div class="modal-actions">
                    <button class="btn-cancel" @click="closeModal">Cancel</button>
                    <button class="btn-orange" @click="saveTeam" :disabled="saving">{{ saving ? 'Saving...' : 'Save' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AdminTeams',
    data() { return { teams: [], modal: false, editId: null, saving: false, form: { name:'', group_name:'A', flag_emoji:'' } }; },
    computed: {
        groupedTeams() {
            return this.teams.reduce((acc, t) => { (acc[t.group_name] = acc[t.group_name] || []).push(t); return acc; }, {});
        },
    },
    mounted() { this.fetchTeams(); },
    methods: {
        async fetchTeams() { const { data } = await this.$http.get('/api/admin/teams'); this.teams = data.data; },
        openAdd() { this.editId = null; this.form = { name:'', group_name:'A', flag_emoji:'' }; this.modal = true; },
        openEdit(t) { this.editId = t.id; this.form = { name:t.name, group_name:t.group_name, flag_emoji:t.flag_emoji }; this.modal = true; },
        closeModal() { this.modal = false; },
        async saveTeam() {
            this.saving = true;
            try {
                if (this.editId) await this.$http.put(`/api/admin/teams/${this.editId}`, this.form);
                else await this.$http.post('/api/admin/teams', this.form);
                this.closeModal(); this.fetchTeams(); this.$toaster.success('Team saved.');
            } catch (e) { this.$toaster.error('Failed to save.'); } finally { this.saving = false; }
        },
        async deleteTeam(id) { if (!confirm('Delete team?')) return; await this.$http.delete(`/api/admin/teams/${id}`); this.fetchTeams(); },
    },
};
</script>
<style scoped>
.admin-teams { }
.page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.page-heading { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.5rem; font-weight: 700; }
.btn-orange { background: #FF8C00; color: #fff; border: none; border-radius: 8px; padding: 10px 20px; font-weight: 700; cursor: pointer; font-family: 'Rajdhani', sans-serif; }
.groups-view { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.group-block { background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); border-radius: 12px; overflow: hidden; }
.group-header { background: rgba(255,165,0,0.1); color: #FFA500; font-weight: 700; font-size: 0.85rem; padding: 10px 14px; border-bottom: 1px solid rgba(255,165,0,0.2); }
.team-row { display: flex; align-items: center; gap: 8px; padding: 10px 14px; border-bottom: 1px solid rgba(255,255,255,0.04); }
.team-emoji { font-size: 1.2rem; }
.team-name { color: #fff; font-size: 0.85rem; font-weight: 600; flex: 1; }
.team-actions { display: flex; gap: 4px; }
.btn-sm { padding: 3px 8px; border: none; border-radius: 4px; font-size: 0.7rem; font-weight: 600; cursor: pointer; }
.btn-edit { background: rgba(59,130,246,0.15); color: #60a5fa; }
.btn-danger { background: rgba(239,68,68,0.15); color: #f87171; }
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.65); display: flex; align-items: center; justify-content: center; z-index: 500; }
.modal-box { background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); border-radius: 12px; padding: 28px; width: 420px; }
.modal-title { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.2rem; font-weight: 700; margin-bottom: 20px; }
.form-grid { display: flex; flex-direction: column; gap: 14px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group label { color: rgba(255,255,255,0.6); font-size: 0.78rem; }
.form-input { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px 12px; color: #fff; font-size: 0.9rem; outline: none; }
.form-input option { background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); }
.modal-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; }
.btn-cancel { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7); border: none; border-radius: 8px; padding: 10px 20px; cursor: pointer; }
@media (max-width: 900px) { .groups-view { grid-template-columns: repeat(2, 1fr); } }
</style>
