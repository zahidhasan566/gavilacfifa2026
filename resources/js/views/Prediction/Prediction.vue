<template>
    <div class="prediction-page">

        <!-- ── Two Column Layout ─────────────────────────────── -->
        <div class="pred-columns">

            <!-- ── LEFT: Today Match Prediction ─────────────── -->
            <div class="pred-col">
                <div class="pred-card">
                    <div class="pred-header">
                        <div class="pred-icon-circle">
                            <img :src="$imgBase + '/images/ball-icon.png'" class="pred-icon-img" onerror="this.style.display='none'">
                        </div>
                        <div class="pred-header-text">
                            <div class="pred-title">Today Prediction</div>
                            <div class="pred-sub">FIFA World Cup 2026™</div>
                        </div>
                        <div class="pred-header-logo">
                            <img :src="$imgBase + '/images/livescoretropy.png'" class="pred-trophy-img" onerror="this.style.display='none'">
                        </div>
                    </div>

                    <!-- Match selector tabs -->
                    <div v-if="availableMatches.length > 1" class="match-selector">
                        <button v-for="m in availableMatches" :key="m.id"
                                class="match-tab" :class="{ active: match && match.id === m.id }"
                                @click="switchMatch(m.id)">
                            {{ m.label }}
                        </button>
                    </div>

                    <div class="pred-body">
                        <div v-if="loading" class="empty-state">Loading...</div>
                        <div v-else-if="questions.length === 0" class="empty-state">No upcoming match right now.</div>
                        <div v-else>
                            <div v-if="match && match.status !== 'upcoming'" class="closed-banner">
                                🔒 Predictions closed — this match has started.
                            </div>
                            <div v-else-if="alreadySubmitted" class="submitted-banner">
                                ✓ Already submitted for this match.
                            </div>
                            <div v-for="(q, idx) in questions" :key="q.id" class="question-block">
                                <div class="q-header">
                                    <span class="q-num">{{ idx + 1 }}</span>
                                    <span class="q-text">{{ q.question_text }}</span>
                                    <span class="q-points">Point <strong>{{ q.points }}</strong></span>
                                </div>
                                <div v-if="q.type === 'team_choice'" class="team-choice-row">
                                    <button type="button" class="team-btn"
                                        :class="{ selected: answers[q.id] === (q.team1 && q.team1.name) }"
                                        :disabled="alreadySubmitted || matchClosed"
                                        @click="setAnswer(q.id, q.team1 && q.team1.name)">
                                        {{ q.team1 && q.team1.name }}
                                    </button>
                                    <button type="button" class="team-btn"
                                        :class="{ selected: answers[q.id] === (q.team2 && q.team2.name) }"
                                        :disabled="alreadySubmitted || matchClosed"
                                        @click="setAnswer(q.id, q.team2 && q.team2.name)">
                                        {{ q.team2 && q.team2.name }}
                                    </button>
                                </div>
                                <div v-else-if="q.type === 'dropdown'" class="dropdown-row">
                                    <select class="select-input" :value="answers[q.id] || ''" :disabled="alreadySubmitted || matchClosed"
                                        @change="setAnswer(q.id, $event.target.value)">
                                        <option value="">Select</option>
                                        <option v-for="opt in q.options" :key="opt" :value="opt">{{ opt }}</option>
                                    </select>
                                    <svg class="select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                                </div>
                                <div v-else-if="q.type === 'team_list'" class="dropdown-row">
                                    <select class="select-input" :value="answers[q.id] || ''" :disabled="alreadySubmitted || matchClosed"
                                        @change="setAnswer(q.id, $event.target.value)">
                                        <option value="">— Select a team —</option>
                                        <optgroup v-for="g in groupedTeams" :key="g.group" :label="'Group ' + g.group">
                                            <option v-for="t in g.teams" :key="t.id" :value="t.name">{{ t.flag_emoji }} {{ t.name }}</option>
                                        </optgroup>
                                    </select>
                                    <svg class="select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                                </div>
                                <div v-else-if="q.type === 'mcq'" class="mcq-row">
                                    <button v-for="opt in q.options" :key="opt" type="button"
                                        class="mcq-btn" :class="{ selected: answers[q.id] === opt }"
                                        :disabled="alreadySubmitted || matchClosed"
                                        @click="setAnswer(q.id, opt)">{{ opt }}</button>
                                </div>
                                <div v-else-if="q.type === 'text'" class="text-input-row">
                                    <input type="text" class="text-input"
                                        :value="answers[q.id] || ''"
                                        :disabled="alreadySubmitted || matchClosed"
                                        placeholder="Type your answer..."
                                        @input="setAnswer(q.id, $event.target.value)" />
                                </div>
                                <div v-if="q.selected_answer" class="q-result">
                                    <span class="your-answer">Your answer: {{ q.selected_answer }}</span>
                                    <span v-if="q.is_correct === true" class="correct-badge">✓ +{{ q.points_earned }}</span>
                                    <span v-else-if="q.is_correct === false" class="wrong-badge">✗ Wrong</span>
                                </div>
                            </div>

                            <!-- Ad banner after questions, before submit -->
                            <div class="ad-banner">
                                <img :src="$imgBase + '/images/prediction-add.png'" alt="Advertisement" class="ad-img"
                                     onerror="this.closest('.ad-banner').style.display='none'">
                            </div>

                            <div v-if="!alreadySubmitted && !matchClosed && questions.length > 0" class="submit-row">
                                <button class="submit-btn" @click="submitPredictions" :disabled="submitting">
                                    {{ submitting ? 'Submitting...' : 'SUBMIT' }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ── RIGHT: World Cup Championship Predictions ── -->
            <div class="pred-col">
                <div class="pred-card champ-card">
                    <div class="pred-header champ-header">
                        <div class="pred-icon-circle champ-icon-circle">
                            <span class="champ-trophy-icon">🏆</span>
                        </div>
                        <div class="pred-header-text">
                            <div class="pred-title">World Cup Predictions</div>
                            <div class="pred-sub">FIFA World Cup 2026™ — One-time</div>
                        </div>
                        <div class="pred-header-logo">
                            <img :src="$imgBase + '/images/livescoretropy.png'" class="pred-trophy-img" onerror="this.style.display='none'">
                        </div>
                    </div>

                    <div class="pred-body">
                        <div v-if="champQuestions.length === 0" class="empty-state">No championship questions yet.</div>
                        <div v-else>
                            <div v-if="champAlreadySubmitted" class="submitted-banner">
                                ✓ Championship predictions submitted. Good luck!
                            </div>
                            <div v-for="(q, idx) in champQuestions" :key="'champ-'+q.id" class="question-block">
                                <div class="q-header">
                                    <span class="q-num champ-num">{{ idx + 1 }}</span>
                                    <span class="q-text">{{ q.question_text }}</span>
                                    <span class="q-points">Point <strong>{{ q.points }}</strong></span>
                                </div>
                                <div v-if="(q.type === 'text' || q.type === 'team_list') && teams.length > 0 && idx < 2" class="dropdown-row">
                                    <select class="select-input" :value="champAnswers[q.id] || ''" :disabled="champAlreadySubmitted"
                                        @change="setChampAnswer(q.id, $event.target.value)">
                                        <option value="">— Select a team —</option>
                                        <optgroup v-for="g in groupedTeams" :key="g.group" :label="'Group ' + g.group">
                                            <option v-for="t in g.teams" :key="t.id" :value="t.name">{{ t.flag_emoji }} {{ t.name }}</option>
                                        </optgroup>
                                    </select>
                                    <svg class="select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                                </div>
                                <div v-else-if="q.type === 'text' || q.type === 'team_list'" class="text-input-row">
                                    <input type="text" class="text-input"
                                        :value="champAnswers[q.id] || ''"
                                        :disabled="champAlreadySubmitted"
                                        :placeholder="q.selected_answer || 'Type your answer...'"
                                        @input="setChampAnswer(q.id, $event.target.value)" />
                                </div>
                                <div v-else-if="q.type === 'dropdown'" class="dropdown-row">
                                    <select class="select-input" :value="champAnswers[q.id] || ''" :disabled="champAlreadySubmitted"
                                        @change="setChampAnswer(q.id, $event.target.value)">
                                        <option value="">Select</option>
                                        <option v-for="opt in q.options" :key="opt" :value="opt">{{ opt }}</option>
                                    </select>
                                    <svg class="select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                                </div>
                                <div v-else-if="q.type === 'mcq'" class="mcq-row">
                                    <button v-for="opt in q.options" :key="opt" type="button"
                                        class="mcq-btn" :class="{ selected: champAnswers[q.id] === opt }"
                                        :disabled="champAlreadySubmitted"
                                        @click="setChampAnswer(q.id, opt)">{{ opt }}</button>
                                </div>
                                <div v-if="q.selected_answer" class="q-result">
                                    <span class="your-answer">Your answer: {{ q.selected_answer }}</span>
                                    <span v-if="q.is_correct === true" class="correct-badge">✓ +{{ q.points_earned }}</span>
                                    <span v-else-if="q.is_correct === false" class="wrong-badge">✗ Wrong</span>
                                </div>
                            </div>

                            <!-- Ad banner after questions, before submit -->
                            <div class="ad-banner">
                                <img :src="$imgBase + '/images/prediction-add-two.png'" alt="Advertisement" class="ad-img"
                                     onerror="this.closest('.ad-banner').style.display='none'">
                            </div>

                            <div v-if="!champAlreadySubmitted" class="submit-row">
                                <button class="submit-btn champ-submit-btn" @click="submitChampionship" :disabled="champSubmitting">
                                    {{ champSubmitting ? 'Submitting...' : 'SUBMIT PREDICTIONS' }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Prediction',
    computed: {
        matchClosed() {
            return this.match && this.match.status !== 'upcoming';
        },
        groupedTeams() {
            const map = {};
            this.teams.forEach(t => {
                const g = t.group_name || 'Other';
                if (!map[g]) map[g] = [];
                map[g].push(t);
            });
            return Object.keys(map).sort().map(g => ({ group: g, teams: map[g] }));
        },
    },
    data() {
        return {
            match: null,
            availableMatches: [],
            questions: [],
            answers: {},
            alreadySubmitted: false,
            loading: true,
            submitting: false,
            champQuestions: [],
            champAnswers: {},
            champAlreadySubmitted: false,
            champSubmitting: false,
            teams: [],
        };
    },
    async mounted() {
        await this.fetchQuestions();
        this.loading = false;
    },
    methods: {
        async fetchQuestions(matchId) {
            this.loading = true;
            this.answers = {};
            const params = matchId ? { match_id: matchId } : {};
            const { data } = await this.$http.get('/api/predictions/questions', { params });
            this.availableMatches = data.available_matches || [];
            this.match = data.match;
            this.questions = data.questions;
            this.alreadySubmitted = data.already_submitted;
            this.questions.forEach(q => {
                if (q.selected_answer) this.$set(this.answers, q.id, q.selected_answer);
            });
            this.teams = data.teams || [];
            this.champQuestions = data.champ_questions || [];
            this.champAlreadySubmitted = data.champ_already_submitted || false;
            this.champQuestions.forEach(q => {
                if (q.selected_answer) this.$set(this.champAnswers, q.id, q.selected_answer);
            });
            this.loading = false;
        },
        async switchMatch(matchId) {
            await this.fetchQuestions(matchId);
        },
        setAnswer(qId, val) { this.$set(this.answers, qId, val); },
        setChampAnswer(qId, val) { this.$set(this.champAnswers, qId, val); },

        async submitPredictions() {
            const preds = Object.entries(this.answers).map(([qId, ans]) => ({
                question_id: parseInt(qId), selected_answer: ans,
            }));
            if (preds.length === 0) { this.$toaster.error('Please answer at least one question.'); return; }
            this.submitting = true;
            try {
                await this.$http.post('/api/predictions/submit', { match_id: this.match.id, predictions: preds });
                this.$toaster.success('Predictions submitted!');
                this.alreadySubmitted = true;
            } catch (e) {
                this.$toaster.error(e.response?.data?.message || 'Submission failed.');
            } finally { this.submitting = false; }
        },

        async submitChampionship() {
            const preds = Object.entries(this.champAnswers)
                .filter(([, ans]) => ans && ans.trim() !== '')
                .map(([qId, ans]) => ({ question_id: parseInt(qId), selected_answer: ans }));
            if (preds.length === 0) { this.$toaster.error('Please answer at least one question.'); return; }
            this.champSubmitting = true;
            try {
                await this.$http.post('/api/predictions/submit', { is_championship: true, predictions: preds });
                this.$toaster.success('Championship predictions submitted! Good luck 🏆');
                this.champAlreadySubmitted = true;
            } catch (e) {
                this.$toaster.error(e.response?.data?.message || 'Submission failed.');
            } finally { this.champSubmitting = false; }
        },
    },
};
</script>

<style scoped>
.prediction-page { padding: 4px 0; }

/* Two column grid */
.pred-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    align-items: start;
}

/* Each column card */
.pred-card {
    background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%);
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.10);
    display: flex;
    flex-direction: column;
}
.champ-card { border-color: rgba(255,165,0,0.35); }

/* Header */
.pred-header {
    display: flex; align-items: center; gap: 10px;
    padding: 0 12px 0 12px;
    height: 66px; position: relative; overflow: hidden;
    background: linear-gradient(135deg, #3E0082 0%, #1A0040 100%);
    border-bottom: 1px solid rgba(255,255,255,0.08);
}
.champ-header { background: linear-gradient(135deg, #3E0082 0%, #1A0040 100%); }
.pred-icon-circle {
    width: 42px; height: 42px; border-radius: 50%;
    background: rgba(255,255,255,0.08);
    border: 2px solid rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.champ-icon-circle { border-color: rgba(255,165,0,0.3); }
.pred-icon-img { width: 26px; height: 26px; object-fit: contain; }
.champ-trophy-icon { font-size: 1.3rem; }
.pred-header-text { flex: 1; min-width: 0; }
.pred-title { color: #FFA500; font-family: 'Rajdhani', sans-serif; font-size: 1.05rem; font-weight: 800; line-height: 1.2; }
.pred-sub { color: rgba(255,255,255,0.6); font-size: 0.68rem; }
.pred-header-logo { flex-shrink: 0; }
.pred-trophy-img { height: 44px; width: auto; object-fit: contain; }

/* Match selector */
.match-selector {
    display: flex; flex-wrap: wrap; gap: 6px;
    padding: 10px 14px; border-bottom: 1px solid rgba(255,255,255,0.06);
    background: rgba(0,0,0,0.1);
}
.match-tab {
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
    border-radius: 20px; color: rgba(255,255,255,0.6);
    font-size: 0.72rem; font-weight: 600; padding: 5px 12px;
    cursor: pointer; transition: all 0.15s; white-space: nowrap;
}
.match-tab:hover { border-color: rgba(255,165,0,0.4); color: #FFA500; }
.match-tab.active { background: rgba(255,165,0,0.15); border-color: #FFA500; color: #FFA500; }

/* Body */
.pred-body { padding: 14px; flex: 1; }
.empty-state { color: rgba(255,255,255,0.4); text-align: center; padding: 30px 10px; font-size: 0.85rem; }
.submitted-banner {
    background: rgba(34,197,94,0.12); border: 1px solid rgba(34,197,94,0.3);
    border-radius: 8px; color: #4ade80; padding: 10px 14px;
    margin-bottom: 14px; font-size: 0.82rem;
}
.closed-banner {
    background: rgba(239,68,68,0.10); border: 1px solid rgba(239,68,68,0.3);
    border-radius: 8px; color: #f87171; padding: 10px 14px;
    margin-bottom: 14px; font-size: 0.82rem; font-weight: 600;
}

/* Question block */
.question-block {
    background: rgba(255,255,255,0.04); border-radius: 8px;
    padding: 12px 14px; margin-bottom: 10px;
}
.q-header { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
.q-num {
    background: #FFA500; color: #fff;
    width: 24px; height: 24px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 0.75rem; flex-shrink: 0;
}
.champ-num { background: linear-gradient(135deg, #FFA500, #FF6B00); }
.q-text { color: #fff; font-size: 0.85rem; flex: 1; line-height: 1.3; }
.q-points { color: rgba(255,255,255,0.5); font-size: 0.75rem; white-space: nowrap; }
.q-points strong { color: #FFA500; font-size: 1rem; }

/* Inputs */
.text-input {
    width: 100%; padding: 10px 12px; box-sizing: border-box;
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2);
    border-radius: 8px; color: #fff; font-size: 0.85rem; outline: none;
}
.text-input::placeholder { color: rgba(255,255,255,0.35); }
.text-input:focus { border-color: #FFA500; }
.text-input:disabled { opacity: 0.6; }

.team-choice-row { display: flex; gap: 8px; }
.team-btn {
    flex: 1; padding: 10px 8px; border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.15);
    background: rgba(255,255,255,0.08); color: #fff;
    font-size: 0.8rem; font-weight: 700; text-transform: uppercase;
    cursor: pointer; transition: all 0.2s;
}
.team-btn:hover { border-color: #FFA500; background: rgba(255,165,0,0.1); }
.team-btn.selected { background: #FFA500; border-color: #FFA500; }
.team-btn:disabled { opacity: 0.7; cursor: default; }

.dropdown-row { position: relative; }
.select-input {
    width: 100%; padding: 10px 36px 10px 12px; appearance: none;
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2);
    border-radius: 8px; color: #fff; font-size: 0.85rem; outline: none; cursor: pointer;
}
.select-input option { background: #1A0040; }
.select-input optgroup { background: #2a0060; color: rgba(255,165,0,.85); font-weight: 700; font-size: .72rem; }
.select-input:disabled { opacity: 0.7; }
.select-arrow { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); color: rgba(255,255,255,0.5); pointer-events: none; }

.mcq-row { display: flex; flex-wrap: wrap; gap: 6px; }
.mcq-btn {
    padding: 7px 12px; border-radius: 6px;
    border: 1px solid rgba(255,255,255,0.15);
    background: rgba(255,255,255,0.05); color: #fff;
    font-size: 0.8rem; cursor: pointer; transition: all 0.2s;
}
.mcq-btn.selected { background: #FFA500; border-color: #FFA500; }
.mcq-btn:disabled { opacity: 0.7; cursor: default; }

/* Result */
.q-result { margin-top: 10px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.your-answer { color: rgba(255,255,255,0.5); font-size: 0.75rem; }
.correct-badge { background: rgba(34,197,94,0.15); color: #4ade80; padding: 2px 8px; border-radius: 10px; font-size: 0.72rem; font-weight: 600; }
.wrong-badge { background: rgba(239,68,68,0.15); color: #f87171; padding: 2px 8px; border-radius: 10px; font-size: 0.72rem; font-weight: 600; }

/* Submit */
.submit-row { display: flex; justify-content: flex-end; margin-top: 16px; }
.submit-btn {
    background: #06B6D4; color: #fff; border: none;
    border-radius: 8px; padding: 11px 28px;
    font-size: 0.88rem; font-weight: 700; font-family: 'Rajdhani', sans-serif;
    letter-spacing: 1.5px; cursor: pointer;
}
.submit-btn:hover { background: #0891b2; }
.submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }
.champ-submit-btn { background: linear-gradient(135deg, #FFA500, #FF6B00); }
.champ-submit-btn:hover { background: linear-gradient(135deg, #FF6B00, #e05a00); }

/* Ad Banner */
.ad-banner {
    margin: 16px 0 6px;
    border-radius: 10px;
    overflow: hidden;
}
.ad-img { width: 100%; height: auto; display: block; border-radius: 10px; }

/* Mobile: stack columns */
@media (max-width: 700px) {
    .pred-columns { grid-template-columns: 1fr; }
}
</style>
