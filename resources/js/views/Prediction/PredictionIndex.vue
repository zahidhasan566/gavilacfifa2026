<template>
    <div class="pred-page" :style="{ backgroundImage: `url(${BackgroundImage})` }">
        <!-- topbar is already in your main layout -->

        <div class="pred-wrap">
            <div class="pred-panel">
                <!-- Tabs -->
                <div class="pred-tabs">
                    <button
                        type="button"
                        class="pred-tab"
                        :class="{ active: activeTab === 'prediction' }"
                        @click="activeTab = 'prediction'"
                    >
                        Prediction
                    </button>

                    <button
                        type="button"
                        class="pred-tab"
                        :class="{ active: activeTab === 'rules' }"
                        @click="activeTab = 'rules'"
                    >
                        Rules
                    </button>
                </div>

                <!-- RULES TAB -->
                <div v-if="activeTab === 'rules'" class="tab-body">
                    <div class="pred-title">Rules</div>

                    <div class="rules-scroll">
                        <div class="rules-list">
                            <div v-for="(r, i) in rules" :key="i" class="rule-item">
                                <div class="rule-no">{{ i + 1 }}</div>
                                <div class="rule-text">{{ r }}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- PREDICTION TAB -->
                <div v-else class="tab-body">
                    <div class="pred-title">My Prediction</div>

                    <div class="pred-scroll">
                        <div
                            v-for="(m, i) in matches"
                            :key="m.id"
                            class="q-block"
                            :data-type="m.type"
                        >
                            <div class="q-row">
                                <div class="q-no">{{ i + 1 }}</div>
                                <div class="q-text">{{ m.question }}</div>
                            </div>

                            <div class="q-actions">
                                <button
                                    v-for="(opt, idx) in m.options"
                                    :key="idx"
                                    type="button"
                                    class="pick-btn"
                                    :class="{
                    selected: picks[m.id] === opt,
                    ghost: idx !== 0 && (m.type === 'TEAM_WIN' || m.type === 'TEAM_MOM')
                  }"
                                    @click="pick(m.id, opt)"
                                >
                                    {{ opt }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="submit-row">
                        <button type="button" class="submit-btn" @click="submit">
                            SUBMIT
                        </button>
                    </div>
                </div>
                <!-- /PREDICTION TAB -->
            </div>
        </div>
    </div>
</template>

<script>
import { baseurl } from "../../base_url";

export default {
    name: "PredictionRules",
    data() {
        return {
            activeTab: "prediction",
            BackgroundImage: "",
            rules: [
                "Prediction must be done one hour before the match.",
                "For every right answer there will be 5 points.",
                "Top 50 Doctors will be rewarded after the world cup end.",
                "Reward will be given 20 days after ending of World Cup."
            ],
            questions: [],
            matches: [],
            picks: {} // { [questionId]: 'ANSWER' }
        };
    },
    mounted() {
        this.BackgroundImage = baseurl + "assets/images/bg/t20bg.png";
        this.loadMatches(); // dummy now, replace with API later
    },
    methods: {
        loadMatches() {
            // Frontend question definitions (fixed)
            this.questions = [
                { id: 101, text: "Who will win the match today?", type: "TEAM_WIN" },
                { id: 102, text: "How many sixes will be hit in this match?", type: "RANGE_0_30" },
                { id: 103, text: "How many fours will be hit in this match?", type: "RANGE_0_60" },
                { id: 104, text: "Is there any chance for Hattrick wicket today?", type: "YES_NO" },
                { id: 105, text: "Who will be Man of the match today?", type: "TEAM_MOM" }
            ];

            // DUMMY API MATCH (replace with real API)
            const apiMatch = { matchId: 5001, teamA: "BANGLADESH", teamB: "INDIA" };
            const { matchId, teamA, teamB } = apiMatch;

            // Build UI matches list from api teams + question defs
            this.matches = this.questions.map((q) => ({
                id: q.id, // questionId
                matchId: matchId,
                question: q.text,
                type: q.type,
                options: this.getOptions(q.type, teamA, teamB)
            }));
        },

        pick(questionId, answer) {
            this.$set(this.picks, questionId, answer);
        },

        getOptions(type, teamA, teamB) {
            if (type === "TEAM_WIN") return [teamA, teamB];
            if (type === "TEAM_MOM") return [teamA, teamB]; // later: replace with player list API
            if (type === "YES_NO") return ["YES", "NO"];
            if (type === "RANGE_0_30") return this.makeRangeOptions(0, 30, 5); // 0-5, 6-10...
            if (type === "RANGE_0_60") return this.makeRangeOptions(0, 60, 10); // 0-10, 11-20...
            return [];
        },

        makeRangeOptions(start, end, step) {
            const out = [];
            let s = start;
            while (s < end) {
                const e = Math.min(s + step, end);
                out.push(`${s}-${e}`);
                s = e + 1;
            }
            return out;
        },

        submit() {
            const payload = this.matches.map((m) => ({
                matchId: m.matchId,
                questionId: m.id,
                answer: this.picks[m.id] || null
            }));

            console.log("SUBMIT PAYLOAD:", payload);
            // TODO: send to API
        }
    }
};
</script>

<style scoped>
/* -------- PAGE -------- */
.pred-page {
    min-height: calc(100vh - 70px - 60px); /* adjust if your topbar/footer differs */
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    padding-bottom: 30px;
}

.pred-page::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(7, 4, 44, 0.45); /* makes text readable over bg */
}

.pred-wrap {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    padding: 18px 16px 40px;
}

/* -------- PANEL -------- */
.pred-panel {
    width: 100%;
    max-width: 1200px;
    border: 2px solid rgba(255, 255, 255, 0.55);
    border-radius: 10px;
    padding: 14px 14px 16px;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.12) inset;
    display: flex;
    flex-direction: column;

    /* Make panel height stable and scroll inside (mobile+desktop) */
    height: calc(100vh - 70px - 60px - 60px); /* topbar - footer - page paddings */
    min-height: 420px;
}

/* -------- TABS -------- */
.pred-tabs {
    display: flex;
    gap: 10px;
    flex: 0 0 auto;
}

.pred-tab {
    padding: 8px 14px;
    border-radius: 999px;
    border: 2px solid rgba(255, 255, 255, 0.55);
    background: transparent;
    color: #ffffff;
    font-weight: 800;
    cursor: pointer;
    outline: none;
    line-height: 1;
}

.pred-tab.active {
    background: #ff9a00;
    border-color: #ff9a00;
    color: #ffffff;
}

/* -------- BODY -------- */
.tab-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 6px;
    min-height: 0; /* IMPORTANT so inner scroll works */
}

.pred-title {
    text-align: center;
    font-weight: 900;
    font-size: 22px;
    color: #ff9a00;
    margin: 8px 0 10px;
    flex: 0 0 auto;
}

/* -------- RULES SCROLL -------- */
.rules-scroll {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 0 6px 6px;
}

.rules-scroll::-webkit-scrollbar {
    width: 10px;
}
.rules-scroll::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
}
.rules-scroll::-webkit-scrollbar-thumb {
    background: #ff9a00;
    border-radius: 12px;
}

.rule-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 12px;
    margin: 10px auto;
    max-width: 920px;
    border: 1.8px solid rgba(255, 255, 255, 0.65);
    border-radius: 10px;
    background: rgba(10, 7, 70, 0.12);
}

.rule-no {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ff9a00;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: 900;
    flex: 0 0 30px;
}

.rule-text {
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.2;
}

/* -------- PREDICTION SCROLL -------- */
.pred-scroll {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 0 6px 6px;
}

.pred-scroll::-webkit-scrollbar {
    width: 10px;
}
.pred-scroll::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
}
.pred-scroll::-webkit-scrollbar-thumb {
    background: #ff9a00;
    border-radius: 12px;
}

/* -------- QUESTIONS -------- */
.q-block {
    margin: 12px auto 16px;
    max-width: 980px;
}

.q-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    border: 1.8px solid rgba(255, 255, 255, 0.65);
    border-radius: 10px;
    background: rgba(10, 7, 70, 0.1);
}

.q-no {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ff9a00;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: 900;
    flex: 0 0 30px;
}

.q-text {
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.2;
}

/* IMPORTANT: range options cause many buttons -> WRAP */
.q-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-start;
    margin-top: 10px;
}

/* Buttons */
.pick-btn {
    padding: 10px 14px;
    border-radius: 10px;
    background: #ff9a00;
    border: 2px solid #ff9a00;
    color: #ffffff;
    font-weight: 900;
    font-size: 14px;
    cursor: pointer;
    outline: none;
    opacity: 0.7; /* selected will pop */
    transition: 0.15s ease;
    white-space: nowrap;
    min-width: 120px;
}

/* ghost style (mainly for the 2nd option of team questions) */
.pick-btn.ghost {
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.65);
    color: #ffffff;
    opacity: 0.75;
}

/* selected */
.pick-btn.selected {
    opacity: 1;
    box-shadow: 0 0 0 3px rgba(255, 154, 0, 0.25);
}

.pick-btn.ghost.selected {
    background: rgba(255, 154, 0, 0.18);
    border-color: #ff9a00;
}

/* Smaller chips for range questions */
.q-block[data-type^="RANGE"] .pick-btn {
    min-width: 90px;
    padding: 8px 10px;
    font-size: 13px;
}

/* -------- SUBMIT -------- */
.submit-row {
    flex: 0 0 auto;
    display: flex;
    justify-content: flex-end;
    padding: 10px 6px 0;
}

.submit-btn {
    background: #1f86ff;
    border: none;
    color: #ffffff;
    font-weight: 900;
    font-size: 15px;
    padding: 12px 40px;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
}

/* -------- RESPONSIVE -------- */
@media (max-width: 900px) {
    .pred-panel {
        height: calc(100vh - 70px - 60px - 40px);
        padding: 12px 12px 14px;
    }
    .pick-btn {
        min-width: 110px;
    }
}

@media (max-width: 520px) {
    .pred-tab {
        padding: 8px 12px;
        font-size: 13px;
    }
    .pred-title {
        font-size: 20px;
    }
    .q-text,
    .rule-text {
        font-size: 14px;
    }
    .submit-btn {
        width: 100%;
    }
    .submit-row {
        justify-content: stretch;
    }
}
</style>
