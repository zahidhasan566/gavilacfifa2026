<template>
    <div class="prediction-page">

        <!-- ── Championship One-Time Predictions ─────────────────── -->
        <div class="prediction-card champ-card" v-if="champQuestions.length > 0">
            <div class="pred-header">
                <div class="pred-ball-circle">
                    <span class="champ-trophy-icon">🏆</span>
                </div>
                <div class="pred-header-text">
                    <div class="pred-title">Championship Predictions</div>
                    <div class="pred-sub">FIFA World Cup 2026™ — One-time submission</div>
                </div>
                <div class="pred-trophy-blob">
                    <img :src="$imgBase + '/images/livescoretropy.png'" class="pred-trophy-img" onerror="this.style.display='none'">
                </div>
            </div>

            <div class="pred-body">
                <div v-if="champAlreadySubmitted" class="submitted-banner">
                    ✓ You have already submitted your championship predictions. Good luck!
                </div>

                <div class="champ-intro" v-if="!champAlreadySubmitted">
                    <p>🎯 Predict the future champions of world football! Submit your predictions before the tournament begins.</p>
                </div>

                <div v-for="(q, idx) in champQuestions" :key="'champ-'+q.id" class="question-block">
                    <div class="q-header">
                        <span class="q-num">{{ idx + 1 }}</span>
                        <span class="q-text">{{ q.question_text }}</span>
                        <span class="q-points">Point <strong>{{ q.points }}</strong></span>
                    </div>

                    <!-- Text input -->
                    <div v-if="q.type === 'text'" class="text-input-row">
                        <input type="text" class="text-input"
                            :value="champAnswers[q.id] || ''"
                            :disabled="champAlreadySubmitted"
                            :placeholder="q.selected_answer || 'Type your answer...'"
                            @input="setChampAnswer(q.id, $event.target.value)" />
                    </div>

                    <!-- Dropdown -->
                    <div v-else-if="q.type === 'dropdown'" class="dropdown-row">
                        <select class="select-input" :value="champAnswers[q.id] || ''" :disabled="champAlreadySubmitted"
                            @change="setChampAnswer(q.id, $event.target.value)">
                            <option value="">Select</option>
                            <option v-for="opt in q.options" :key="opt" :value="opt">{{ opt }}</option>
                        </select>
                        <svg class="select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                    </div>

                    <!-- MCQ -->
                    <div v-else-if="q.type === 'mcq'" class="mcq-row">
                        <button v-for="opt in q.options" :key="opt" type="button"
                            class="mcq-btn" :class="{ selected: champAnswers[q.id] === opt }"
                            :disabled="champAlreadySubmitted"
                            @click="setChampAnswer(q.id, opt)">{{ opt }}</button>
                    </div>

                    <div v-if="q.selected_answer" class="q-result">
                        <span class="your-answer">Your answer: {{ q.selected_answer }}</span>
                        <span v-if="q.is_correct === true" class="correct-badge">✓ Correct +{{ q.points_earned }}</span>
                        <span v-else-if="q.is_correct === false" class="wrong-badge">✗ Wrong</span>
                    </div>
                </div>

                <div v-if="!champAlreadySubmitted" class="submit-row">
                    <button class="submit-btn champ-submit-btn" @click="submitChampionship" :disabled="champSubmitting">
                        {{ champSubmitting ? 'Submitting...' : 'SUBMIT PREDICTIONS' }}
                    </button>
                </div>
            </div>
        </div>

        <!-- ── Match Predictions ────────────────────────────────── -->
        <div class="prediction-card">
            <div class="pred-header">
                <div class="pred-ball-circle">
                    <img :src="$imgBase + '/images/ball-icon.png'" class="pred-ball-img" onerror="this.style.display='none'">
                </div>
                <div class="pred-header-text">
                    <div class="pred-title">Today Prediction</div>
                    <div class="pred-sub">FIFA World Cup 2026™</div>
                </div>
                <div class="pred-trophy-blob">
                    <img :src="$imgBase + '/images/livescoretropy.png'" class="pred-trophy-img" onerror="this.style.display='none'">
                </div>
            </div>

            <div class="pred-body">
                <div v-if="loading" class="loading-state">Loading questions...</div>
                <div v-else-if="questions.length === 0 && !match" class="empty-state">No active match for prediction right now.</div>
                <div v-else>
                    <div v-if="alreadySubmitted" class="submitted-banner">
                        ✓ You have already submitted predictions for this match.
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
                                :disabled="alreadySubmitted"
                                @click="setAnswer(q.id, q.team1 && q.team1.name)">
                                {{ q.team1 && q.team1.name }}
                            </button>
                            <button type="button" class="team-btn"
                                :class="{ selected: answers[q.id] === (q.team2 && q.team2.name) }"
                                :disabled="alreadySubmitted"
                                @click="setAnswer(q.id, q.team2 && q.team2.name)">
                                {{ q.team2 && q.team2.name }}
                            </button>
                        </div>
                        <div v-else-if="q.type === 'dropdown'" class="dropdown-row">
                            <select class="select-input" :value="answers[q.id] || ''" :disabled="alreadySubmitted"
                                @change="setAnswer(q.id, $event.target.value)">
                                <option value="">Select</option>
                                <option v-for="opt in q.options" :key="opt" :value="opt">{{ opt }}</option>
                            </select>
                            <svg class="select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                        </div>
                        <div v-else-if="q.type === 'mcq'" class="mcq-row">
                            <button v-for="opt in q.options" :key="opt" type="button"
                                class="mcq-btn" :class="{ selected: answers[q.id] === opt }"
                                :disabled="alreadySubmitted"
                                @click="setAnswer(q.id, opt)">{{ opt }}</button>
                        </div>
                        <div v-else-if="q.type === 'text'" class="text-input-row">
                            <input type="text" class="text-input"
                                :value="answers[q.id] || ''"
                                :disabled="alreadySubmitted"
                                placeholder="Type your answer..."
                                @input="setAnswer(q.id, $event.target.value)" />
                        </div>
                        <div v-if="q.selected_answer" class="q-result">
                            <span class="your-answer">Your answer: {{ q.selected_answer }}</span>
                            <span v-if="q.is_correct === true" class="correct-badge">✓ Correct +{{ q.points_earned }}</span>
                            <span v-else-if="q.is_correct === false" class="wrong-badge">✗ Wrong</span>
                        </div>
                    </div>

                    <div v-if="!alreadySubmitted && questions.length > 0" class="submit-row">
                        <button class="submit-btn" @click="submitPredictions" :disabled="submitting">
                            {{ submitting ? 'Submitting...' : 'SUBMIT' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Prediction',
    data() {
        return {
            match: null,
            questions: [],
            answers: {},
            alreadySubmitted: false,
            loading: true,
            submitting: false,
            // championship
            champQuestions: [],
            champAnswers: {},
            champAlreadySubmitted: false,
            champSubmitting: false,
        };
    },
    async mounted() {
        await this.fetchQuestions();
        this.loading = false;
    },
    methods: {
        async fetchQuestions() {
            const { data } = await this.$http.get('/api/predictions/questions');
            this.match = data.match;
            this.questions = data.questions;
            this.alreadySubmitted = data.already_submitted;
            this.questions.forEach(q => {
                if (q.selected_answer) this.$set(this.answers, q.id, q.selected_answer);
            });
            // championship
            this.champQuestions = data.champ_questions || [];
            this.champAlreadySubmitted = data.champ_already_submitted || false;
            this.champQuestions.forEach(q => {
                if (q.selected_answer) this.$set(this.champAnswers, q.id, q.selected_answer);
            });
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
                await this.$http.post('/api/predictions/submit', {
                    match_id: this.match.id, predictions: preds,
                });
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
                await this.$http.post('/api/predictions/submit', {
                    is_championship: true,
                    predictions: preds,
                });
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
.prediction-page { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px; }
.prediction-card {
    background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%);
    border-radius: 12px; overflow: hidden;
    border: 1px solid rgba(255,255,255,0.10);
}
.champ-card { border: 1px solid rgba(255,165,0,0.4); }

/* ── Prediction Header ── */
.pred-header {
    display: flex; align-items: center; gap: 14px;
    padding: 0 0 0 16px;
    background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%);
    border-bottom: 1px solid rgba(255,255,255,0.08);
    height: 70px; position: relative; overflow: hidden;
}
.pred-ball-circle {
    width: 46px; height: 46px; border-radius: 50%;
    background: #1C1153; border: 2px solid rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.pred-ball-img { width: 28px; height: 28px; object-fit: contain; }
.champ-trophy-icon { font-size: 1.5rem; }
.pred-header-text { flex: 1; display: flex; flex-direction: column; gap: 2px; }
.pred-title { color: #FFA500; font-family: 'Rajdhani', sans-serif; font-size: 1.2rem; font-weight: 800; line-height: 1.2; }
.pred-sub { color: #fff; font-size: 0.72rem; }
.pred-trophy-blob { margin-left: auto; flex-shrink: 0; display: flex; align-items: center; padding: 0 12px; }
.pred-trophy-img { height: 50px; width: auto; object-fit: contain; }

.pred-body { padding: 20px; }
.loading-state, .empty-state { color: rgba(255,255,255,0.4); text-align: center; padding: 40px; }

.champ-intro { background: rgba(255,165,0,0.08); border: 1px solid rgba(255,165,0,0.2); border-radius: 8px; padding: 12px 16px; margin-bottom: 20px; }
.champ-intro p { color: rgba(255,255,255,0.75); font-size: 0.88rem; margin: 0; line-height: 1.5; }

.submitted-banner { background: rgba(34,197,94,0.15); border: 1px solid rgba(34,197,94,0.3); border-radius: 8px; color: #4ade80; padding: 12px 16px; margin-bottom: 20px; font-size: 0.9rem; }

/* Question blocks */
.question-block { background: rgba(255,255,255,0.04); border-radius: 10px; padding: 16px 20px; margin-bottom: 14px; }
.q-header { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
.q-num { background: #FFA500; color: #fff; width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.8rem; flex-shrink: 0; }
.q-text { color: #fff; font-size: 0.95rem; flex: 1; }
.q-points { color: rgba(255,255,255,0.5); font-size: 0.8rem; white-space: nowrap; }
.q-points strong { color: #FFA500; font-size: 1.1rem; }

/* Text input */
.text-input {
    width: 100%; padding: 12px 16px; box-sizing: border-box;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.2); border-radius: 8px;
    color: #fff; font-size: 0.95rem; outline: none;
    transition: border-color 0.2s;
}
.text-input::placeholder { color: rgba(255,255,255,0.35); }
.text-input:focus { border-color: #FFA500; }
.text-input:disabled { opacity: 0.6; cursor: default; }

/* Team choice */
.team-choice-row { display: flex; gap: 12px; }
.team-btn { flex: 1; padding: 12px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.08); color: #fff; font-size: 0.9rem; font-weight: 700; font-family: 'Roboto', sans-serif; letter-spacing: 0.5px; text-transform: uppercase; cursor: pointer; transition: all 0.2s; }
.team-btn:hover { border-color: #FFA500; background: rgba(255,165,0,0.1); }
.team-btn.selected { background: #FFA500; border-color: #FFA500; color: #fff; }
.team-btn:disabled { opacity: 0.7; cursor: default; }

/* Dropdown */
.dropdown-row { position: relative; }
.select-input { width: 100%; padding: 12px 40px 12px 16px; appearance: none; -webkit-appearance: none; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; color: #fff; font-size: 0.9rem; outline: none; cursor: pointer; }
.select-input:focus { border-color: #FFA500; }
.select-input:disabled { opacity: 0.7; cursor: default; }
.select-input option { background: #1C1153; color: #fff; }
.select-arrow { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); color: rgba(255,255,255,0.5); pointer-events: none; }

/* MCQ */
.mcq-row { display: flex; flex-wrap: wrap; gap: 8px; }
.mcq-btn { padding: 8px 16px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.05); color: #fff; font-size: 0.85rem; cursor: pointer; transition: all 0.2s; }
.mcq-btn.selected { background: #FFA500; border-color: #FFA500; }
.mcq-btn:disabled { opacity: 0.7; cursor: default; }

/* Result */
.q-result { margin-top: 12px; display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.your-answer { color: rgba(255,255,255,0.5); font-size: 0.8rem; }
.correct-badge { background: rgba(34,197,94,0.15); color: #4ade80; padding: 3px 10px; border-radius: 12px; font-size: 0.78rem; font-weight: 600; }
.wrong-badge { background: rgba(239,68,68,0.15); color: #f87171; padding: 3px 10px; border-radius: 12px; font-size: 0.78rem; font-weight: 600; }

/* Submit */
.submit-row { display: flex; justify-content: flex-end; margin-top: 20px; }
.submit-btn { background: #06B6D4; color: #fff; border: none; border-radius: 8px; padding: 12px 36px; font-size: 0.95rem; font-weight: 700; font-family: 'Rajdhani', sans-serif; letter-spacing: 2px; cursor: pointer; }
.submit-btn:hover { background: #0891b2; }
.submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }
.champ-submit-btn { background: linear-gradient(135deg, #FFA500, #FF8C00); }
.champ-submit-btn:hover { background: linear-gradient(135deg, #FF8C00, #e67e00); }

@media (max-width: 600px) {
    .team-choice-row { flex-direction: column; }
}
</style>
