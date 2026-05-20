<template>
    <div class="admin-facts">
        <div class="page-header">
            <h1 class="page-heading">FIFA Facts</h1>
            <button class="btn-orange" @click="openAdd">+ Add Fact</button>
        </div>
        <div class="tabs-row">
            <button :class="['tab-btn', { active: tab === 'player' }]" @click="tab = 'player'">Players</button>
            <button :class="['tab-btn', { active: tab === 'news' }]" @click="tab = 'news'">News</button>
        </div>
        <div class="facts-grid">
            <div v-for="f in filteredFacts" :key="f.id" class="fact-item">
                <img :src="f.image ? '/storage/' + f.image : window.__IMG__ + '/images/default-news.png'"
                     class="fact-thumb" onerror="this.src=window.__IMG__ + '/images/default-news.png'">
                <div class="fact-body">
                    <div class="fact-title">{{ f.title }}</div>
                    <div class="fact-desc">{{ f.description }}</div>
                    <div class="fact-meta">
                        <span :class="['active-badge', f.is_active ? 'on' : 'off']">{{ f.is_active ? 'Active' : 'Hidden' }}</span>
                        <span class="order-badge">Order: {{ f.sort_order }}</span>
                    </div>
                </div>
                <div class="fact-actions">
                    <button class="btn-sm btn-edit" @click="openEdit(f)">Edit</button>
                    <button class="btn-sm btn-danger" @click="deleteFact(f.id)">Del</button>
                </div>
            </div>
            <div v-if="filteredFacts.length === 0" class="empty-state">No {{ tab }}s added yet.</div>
        </div>

        <div v-if="modal" class="modal-overlay" @click.self="closeModal">
            <div class="modal-box">
                <h3 class="modal-title">{{ editId ? 'Edit Fact' : 'Add Fact' }}</h3>
                <div class="form-group">
                    <label>Type</label>
                    <select v-model="form.type" class="form-input"><option value="player">Player</option><option value="news">News</option></select>
                </div>
                <div class="form-group"><label>Title</label><input v-model="form.title" class="form-input" placeholder="Name or headline"></div>
                <div class="form-group"><label>Description</label><textarea v-model="form.description" class="form-input" rows="3"></textarea></div>
                <div class="form-group"><label>Image</label><input type="file" @change="onImage" accept="image/*" class="file-input"></div>
                <div class="form-group"><label>Link (optional)</label><input v-model="form.link" class="form-input" placeholder="https://..."></div>
                <div class="form-grid2">
                    <div class="form-group"><label>Sort Order</label><input v-model.number="form.sort_order" class="form-input" type="number" min="0"></div>
                    <div class="form-group"><label>Active</label><select v-model="form.is_active" class="form-input"><option :value="true">Yes</option><option :value="false">No</option></select></div>
                </div>
                <div class="modal-actions">
                    <button class="btn-cancel" @click="closeModal">Cancel</button>
                    <button class="btn-orange" @click="saveFact" :disabled="saving">{{ saving ? 'Saving...' : 'Save' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AdminFifaFacts',
    data() {
        return {
            facts: [], tab: 'player', modal: false, editId: null, saving: false, imageFile: null,
            form: { type: 'player', title: '', description: '', link: '', sort_order: 0, is_active: true },
        };
    },
    computed: { filteredFacts() { return this.facts.filter(f => f.type === this.tab); } },
    mounted() { this.fetchFacts(); },
    methods: {
        async fetchFacts() { const { data } = await this.$http.get('/api/admin/facts'); this.facts = data.data; },
        openAdd() { this.editId = null; this.form = { type: this.tab, title:'', description:'', link:'', sort_order:0, is_active:true }; this.imageFile = null; this.modal = true; },
        openEdit(f) { this.editId = f.id; this.form = { type:f.type, title:f.title, description:f.description||'', link:f.link||'', sort_order:f.sort_order, is_active:f.is_active }; this.imageFile = null; this.modal = true; },
        closeModal() { this.modal = false; },
        onImage(e) { this.imageFile = e.target.files[0]; },
        async saveFact() {
            this.saving = true;
            const fd = new FormData();
            Object.entries(this.form).forEach(([k, v]) => fd.append(k, v));
            if (this.imageFile) fd.append('image', this.imageFile);
            try {
                if (this.editId) await this.$http.post(`/api/admin/facts/${this.editId}?_method=PUT`, fd, { headers: {'Content-Type':'multipart/form-data'} });
                else await this.$http.post('/api/admin/facts', fd, { headers: {'Content-Type':'multipart/form-data'} });
                this.closeModal(); this.fetchFacts(); this.$toaster.success('Fact saved.');
            } catch (e) { this.$toaster.error('Failed.'); } finally { this.saving = false; }
        },
        async deleteFact(id) { if (!confirm('Delete fact?')) return; await this.$http.delete(`/api/admin/facts/${id}`); this.fetchFacts(); },
    },
};
</script>
<style scoped>
.admin-facts { }
.page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.page-heading { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.5rem; font-weight: 700; }
.btn-orange { background: #FF8C00; color: #fff; border: none; border-radius: 8px; padding: 10px 20px; font-weight: 700; cursor: pointer; font-family: 'Rajdhani', sans-serif; }
.tabs-row { display: flex; gap: 8px; margin-bottom: 20px; }
.tab-btn { padding: 8px 20px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.12); background: none; color: rgba(255,255,255,0.6); cursor: pointer; font-size: 0.85rem; }
.tab-btn.active { background: rgba(255,165,0,0.15); border-color: #FFA500; color: #FFA500; }
.facts-grid { display: flex; flex-direction: column; gap: 12px; }
.fact-item { background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); border-radius: 10px; display: flex; gap: 14px; padding: 14px; align-items: flex-start; }
.fact-thumb { width: 80px; height: 80px; border-radius: 8px; object-fit: cover; flex-shrink: 0; }
.fact-body { flex: 1; }
.fact-title { color: #fff; font-weight: 700; font-size: 0.9rem; margin-bottom: 4px; }
.fact-desc { color: rgba(255,255,255,0.5); font-size: 0.78rem; margin-bottom: 8px; }
.fact-meta { display: flex; gap: 8px; align-items: center; }
.active-badge { padding: 2px 8px; border-radius: 8px; font-size: 0.7rem; font-weight: 600; }
.active-badge.on { background: rgba(34,197,94,0.15); color: #4ade80; }
.active-badge.off { background: rgba(239,68,68,0.15); color: #f87171; }
.order-badge { color: rgba(255,255,255,0.3); font-size: 0.7rem; }
.fact-actions { display: flex; flex-direction: column; gap: 6px; }
.btn-sm { padding: 5px 12px; border: none; border-radius: 6px; font-size: 0.75rem; font-weight: 600; cursor: pointer; }
.btn-edit { background: rgba(59,130,246,0.15); color: #60a5fa; }
.btn-danger { background: rgba(239,68,68,0.15); color: #f87171; }
.empty-state { color: rgba(255,255,255,0.3); text-align: center; padding: 40px; }
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.65); display: flex; align-items: center; justify-content: center; z-index: 500; }
.modal-box { background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); border-radius: 12px; padding: 28px; width: 500px; max-height: 85vh; overflow-y: auto; }
.modal-title { color: #fff; font-family: 'Rajdhani', sans-serif; font-size: 1.2rem; font-weight: 700; margin-bottom: 20px; }
.form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
.form-group label { color: rgba(255,255,255,0.6); font-size: 0.78rem; }
.form-input { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 10px 12px; color: #fff; font-size: 0.9rem; outline: none; width: 100%; box-sizing: border-box; }
.form-input option { background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); }
.file-input { color: rgba(255,255,255,0.6); font-size: 0.85rem; }
.form-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.modal-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; }
.btn-cancel { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7); border: none; border-radius: 8px; padding: 10px 20px; cursor: pointer; }
</style>
