<template>
    <div class="t20-fixture" :style="pageStyle">

        <div class="main-grid">
            <!-- LEFT SIDE: GROUPS (2x2) -->
            <div class="groups-wrap">
                <div class="groups-grid">
                    <div v-for="g in groups" :key="g.name" class="group-card">
                        <div class="group-head">
                            <div class="group-title">{{ g.name }}</div>
                        </div>

                        <div class="group-body">
                            <div v-for="t in g.teams" :key="t.code" class="team-row">
                                <div class="flag-box">
                                    <img class="flag" :src="flagUrl(t.code)" :alt="t.code" />
                                </div>
                                <div class="team-name">{{ t.label }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- RIGHT SIDE: FIXTURES -->
            <div class="fixture-wrap">
                <div class="fixture-board">
                    <div class="fixture-title">T20 World Cup Fixture</div>
                    <div class="fixture-scroll"  style="height: 480px;overflow-y: auto;overflow-x: hidden">
                    <div class="fixture-list">
                        <div v-for="m in fixtures" :key="m.matchNo" class="fixture-item">
                            <!-- left orange vertical MATCH -->
                            <div class="match-strip">
                                <div class="match-strip-text">MATCH</div>
                                <div class="match-strip-no">{{ m.matchNo }}</div>
                            </div>

                            <!-- white card -->
                            <div class="fixture-card">
                                <div class="fixture-inner">
                                    <!-- teams -->
                                    <div class="teams">
                                        <div class="team-side">
                                            <div class="abbr">{{ m.teamA }}</div>
                                            <img class="flag-lg" :src="flagUrl(m.teamA)" :alt="m.teamA" />
                                        </div>

                                        <div class="vs">VS</div>

                                        <div class="team-side">
                                            <div class="abbr">{{ m.teamB }}</div>
                                            <img class="flag-lg" :src="flagUrl(m.teamB)" :alt="m.teamB" />
                                        </div>
                                    </div>

                                    <!-- date/time -->
                                    <div class="meta">
                                        <div class="day">{{ m.day }}</div>
                                        <div class="date">{{ m.date }}</div>
                                        <div class="time">{{ m.time }}</div>
                                    </div>
                                </div>

                                <!-- venue vertical -->
                                <div class="venue-pill">
                                    <span>{{ m.venue }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                     </div>

                    <!-- fake scrollbar like image -->
<!--                    <div class="fake-scrollbar">-->
<!--                        <div class="fake-thumb"></div>-->
<!--                    </div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {baseurl} from "../../base_url";
export default {
    name: "T20FixtureTemplate",
    data() {
        return {
            BackgroundImage: "",

            groups: [
                {
                    name: "GROUP A",
                    teams: [
                        { code: "IND", label: "INDIA" },
                        { code: "PAK", label: "PAKISTAN" },
                        { code: "USA", label: "USA" },
                        { code: "NED", label: "NETHERLANDS" },
                        { code: "NAM", label: "NAMIBIA" },
                    ],
                },
                {
                    name: "GROUP B",
                    teams: [
                        { code: "AUS", label: "AUSTRALIA" },
                        { code: "SLN", label: "SRILANKA" },
                        { code: "IRE", label: "IRELAND" },
                        { code: "ZIM", label: "ZIMBABWE" },
                        { code: "OMN", label: "OMAN" },
                    ],
                },
                {
                    name: "GROUP C",
                    teams: [
                        { code: "ENG", label: "ENGLAND" },
                        { code: "WIN", label: "WEST INDIES" },
                        { code: "SCT", label: "SCOTLAND" },
                        { code: "NEP", label: "NEPAL" },
                        { code: "ITL", label: "ITALY" },
                    ],
                },
                {
                    name: "GROUP D",
                    teams: [
                        { code: "NZL", label: "NEWZEALAND" },
                        { code: "SAF", label: "SOUTH AFRICA" },
                        { code: "AFG", label: "AFGHANISTAN" },
                        { code: "CAN", label: "CANADA" },
                        { code: "UAE", label: "UAE" },
                    ],
                },
            ],

            // STATIC fixtures (edit any time)
            fixtures: [
                { matchNo: 1, teamA: "NED", teamB: "PAK", day: "SATURDAY", date: "7 FEB", time: "11 AM", venue: "COLOMBO (SSC)" },
                { matchNo: 2, teamA: "SCT", teamB: "WIN", day: "SATURDAY", date: "7 FEB", time: "3 PM", venue: "KOLKATA" },
                { matchNo: 3, teamA: "IND", teamB: "USA", day: "SATURDAY", date: "7 FEB", time: "7 PM", venue: "MUMBAI" },
                { matchNo: 4, teamA: "AFG", teamB: "NZL", day: "SUNDAY", date: "8 FEB", time: "11 AM", venue: "CHENNAI" },
                { matchNo: 5, teamA: "ENG", teamB: "NEP", day: "SUNDAY", date: "8 FEB", time: "3 PM", venue: "MUMBAI" },
                { matchNo: 6, teamA: "SLN", teamB: "IRE", day: "SUNDAY", date: "8 FEB", time: "7 PM", venue: "COLOMBO (RPS)" },
                { matchNo: 7, teamA: "SCT", teamB: "ITL", day: "MONDAY", date: "9 FEB", time: "11 AM", venue: "KOLKATA" },
                { matchNo: 8, teamA: "OMN", teamB: "ZIM", day: "MONDAY", date: "9 FEB", time: "3 PM", venue: "COLOMBO (SSC)" },
                { matchNo: 9, teamA: "CAN", teamB: "SAF", day: "MONDAY", date: "9 FEB", time: "7 PM", venue: "AHMEDABAD" },
                { matchNo: 10, teamA: "NAM", teamB: "NED", day: "TUESDAY", date: "10 FEB", time: "11 AM", venue: "DELHI" },
                { matchNo: 11, teamA: "NZL", teamB: "UAE", day: "TUESDAY", date: "10 FEB", time: "3 PM", venue: "CHENNAI" },
                { matchNo: 12, teamA: "PAK", teamB: "USA", day: "TUESDAY", date: "10 FEB", time: "7 PM", venue: "COLOMBO (SSC)" },
                { matchNo: 13, teamA: "AFG", teamB: "SAF", day: "WEDNESDAY", date: "11 FEB", time: "11 AM", venue: "AHMEDABAD" },
                { matchNo: 14, teamA: "AUS", teamB: "IRE", day: "WEDNESDAY", date: "11 FEB", time: "3 PM", venue: "COLOMBO (RPS)" },
                { matchNo: 15, teamA: "ENG", teamB: "WIN", day: "WEDNESDAY", date: "11 FEB", time: "7 PM", venue: "MUMBAI" },
                { matchNo: 16, teamA: "SLN", teamB: "OMN", day: "THURSDAY", date: "12 FEB", time: "11 AM", venue: "KANDY" },
                { matchNo: 17, teamA: "ITL", teamB: "NEP", day: "THURSDAY", date: "12 FEB", time: "3 PM", venue: "MUMBAI" },
                { matchNo: 18, teamA: "IND", teamB: "NAM", day: "THURSDAY", date: "12 FEB", time: "7 PM", venue: "DELHI" },
                { matchNo: 19, teamA: "AUS", teamB: "ZIM", day: "FRIDAY", date: "13 FEB", time: "11 AM", venue: "COLOMBO (RPS)" },
                { matchNo: 20, teamA: "CAN", teamB: "UAE", day: "FRIDAY", date: "13 FEB", time: "3 PM", venue: "DELHI" }
            ]
        };
    },
    created() {
        // same way you do background
        this.BackgroundImage = baseurl + "assets/images/bg/t20bg.png";
        console.log(this.BackgroundImage)
    },
    computed: {
        pageStyle() {
            return {
                backgroundImage: `url('${this.BackgroundImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            };
        },
    },
    methods: {
        // Put flags in: public/assets/images/flags/IND.png etc
        flagUrl(code) {
            return baseurl + "assets/flags/" + code + ".png";
        },
    },
};
</script>

<style scoped>
/* full page */
.t20-fixture{
    min-height: 100vh;
    padding-bottom: 90px; /* adjust if your footer is taller */
    color: #fff;
    font-family: "Segoe UI", Arial, sans-serif;
}
.fixture-board{
    /*height: calc(100vh - 160px); !* tweak: depends on topbar height *!*/
    overflow: hidden;            /* important */
}

/* This is the REAL scroll container */
/* scroll container */
/*.fixture-scroll{*/
/*    height: calc(100% - 70px);*/
/*    overflow-y: auto;*/

/*    !* IMPORTANT: leave space for orange icon + track *!*/
/*    padding-right: 36px;*/

/*    !* hide native scrollbar but keep scroll working *!*/
/*    scrollbar-width: none;          !* Firefox *!*/
/*    -ms-overflow-style: none;       !* IE/Edge old *!*/
/*}*/
.fixture-scroll::-webkit-scrollbar{
    width: 0px;                     /* Chrome/Safari */
    height: 0px;
}

/* make the orange scrollbar sit above and never take layout space */
.fake-scrollbar{
    position: absolute;
    right: 10px;
    top: 84px;
    bottom: 18px;
    width: 10px;
    border-radius: 999px;
    background: rgba(255,255,255,.10);
    border: 1px solid rgba(255,255,255,.18);
    pointer-events: none;           /* so it doesn't block scroll */
    z-index: 5;
}
.fake-thumb{
    position: absolute;
    right: -6px;
    width: 22px;
    height: 44px;
    border-radius: 999px;
    background: linear-gradient(180deg, #ffb11b 0%, #ff7a00 100%);
    box-shadow: 0 10px 20px rgba(0,0,0,.22);
    pointer-events: none;
    z-index: 6;
}
/* orange line like image */
.orange-line{
    height: 3px;
    margin: 8px 0 14px;
    background: #ff9f12;
    border-radius: 99px;
    opacity: .95;
}

/* two columns: left groups, right fixtures */
.main-grid{
    display: grid;
    grid-template-columns: 1.05fr 1.35fr;
    gap: 18px;
    align-items: start;
    padding-top: 25px;
}

/* LEFT GROUPS */
.groups-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
}
.fixture-scroll{
    /*background-color: #000000;*/
    /*height: calc(100% - 70px); !* title area *!*/
    /*overflow-y: auto;*/

    /*padding-right: 36px; !* space for orange icon *!*/
    /*scrollbar-width: none;*/
    /*-ms-overflow-style: none;*/
}
.fixture-scroll::-webkit-scrollbar{
    width: 0;
    height: 0;
}
.group-card{
    border: 2px solid rgba(255,255,255,.8);
    border-radius: 14px;
    overflow: hidden;
    background: rgba(255,255,255,.06);
}

.group-head{
    padding: 5px 12px;
    background: rgba(15, 10, 70, .55);
    border-bottom: 2px solid rgba(255,255,255,.25);
}

.group-title{
    text-align: center;
    font-weight: 900;
    font-size: 30px;
    letter-spacing: 1px;
}

.group-body{
    /*background: linear-gradient(180deg, #ffac17 0%, #ff8700 100%);*/
    background: #FF9100;
    padding: 12px 16px 14px;
}

.team-row{
    display: flex;
    align-items: center;
    gap: 14px;
    /*padding: 7px 0;*/
}

.flag-box{
    width: 54px;
    height: 40px;
    border-radius: 8px;
    /*background: rgba(255,255,255,.92);*/
    display: flex;
    align-items: center;
    justify-content: center;
    /*box-shadow: 0 8px 18px rgba(0,0,0,.18);*/
}

.flag{
    width: 44px;
    height: 30px;
    object-fit: cover;
    border-radius: 6px;
}

.team-name{
    font-weight: 900;
    font-size: 25px;
    letter-spacing: .4px;
    text-transform: uppercase;
    color: #fff;
}

/* RIGHT FIXTURES */
.fixture-board{
    border: 1px solid rgba(255,255,255,.35);
    border-radius: 16px;
    padding: 14px 16px 16px;
    background: rgba(255,255,255,.05);
    position: relative;
}

.fixture-title{
    text-align: center;
    font-size: 36px;
    font-weight: 900;
    color: #ff9f12;
    margin: 6px 0 16px;
    letter-spacing: .5px;
}

.fixture-list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 14px;
}

/* each fixture row */
.fixture-item{
    display: grid;
    grid-template-columns: 42px 1fr;
    gap: 10px;
    align-items: stretch;
}

/* orange vertical MATCH strip */
.match-strip{
    background: #FF9100;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #120b3f;
    font-weight: 1000;
    padding: 6px 0;
}

.match-strip-text{
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-size: 11px;
    letter-spacing: 1px;
}

.match-strip-no{
    margin-top: 8px;
    font-size: 14px;
}

/* white fixture card */
.fixture-card{
    background: rgb(16 4 74);
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    min-height: 92px;
    border: 1px solid rgb(248 249 250);
}

.fixture-inner{
    padding: 10px 46px 10px 12px;
    display: grid;
    grid-template-columns: 1fr 120px;
    gap: 10px;
    align-items: center;
}

.teams{
    display: flex;
    align-items: center;
    gap: 10px;
}

.team-side{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
}

.abbr{
    font-weight: 900;
    font-size: 12px;
    color: #ffffff;
    opacity: .9;
}

.flag-lg{
    width: 44px;
    height: 30px;
    border-radius: 6px;
    object-fit: cover;
    box-shadow: 0 6px 12px rgba(0,0,0,.12);
}

.vs{
    font-weight: 1000;
    color: #ffffff;
    opacity: .85;
    letter-spacing: 1px;
}

/* right meta */
.meta{
    text-align: right;
    color: #1d1750;
    line-height: 1.05;
}

.day{
    font-weight: 900;
    font-size: 12px;
    color: #ffffff;
}

.date{
    font-weight: 1000;
    font-size: 26px;
    color: #ff8d00;
    color: #ffffff;
}

.time{
    font-weight: 900;
    font-size: 12px;
    color: #ffffff;
}

/* vertical venue pill on right */
.venue-pill{
    position: absolute;
    right: 8px;
    top: 8px;
    bottom: 8px;
    width: 28px;
    background: rgba(255,255,255,.96);
    border: 1px solid rgba(0,0,0,.08);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.venue-pill span{
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-weight: 1000;
    font-size: 11px;
    letter-spacing: 1px;
    color: #1d1750;
}

/* fake scrollbar like screenshot */
.fake-scrollbar{
    position: absolute;
    right: 10px;
    top: 84px;
    bottom: 18px;
    width: 10px;
    border-radius: 999px;
    background: rgba(255,255,255,.10);
    border: 1px solid rgba(255,255,255,.18);
}

.fake-thumb{
    position: absolute;
    right: -6px;
    top: 38%;
    width: 22px;
    height: 44px;
    border-radius: 999px;
    background: linear-gradient(180deg, #ffb11b 0%, #ff7a00 100%);
    box-shadow: 0 10px 20px rgba(0,0,0,.22);
}

/* responsive */
@media (max-width: 1200px){
    .main-grid{ grid-template-columns: 1fr; }
}
@media (max-width: 760px){
    .groups-grid{ grid-template-columns: 1fr; }
    .fixture-list{ grid-template-columns: 1fr; }
}
</style>
