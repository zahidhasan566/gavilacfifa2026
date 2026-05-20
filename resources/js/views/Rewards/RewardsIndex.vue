<template>
    <div class="rewards-page" :style="{ backgroundImage: `url(${BackgroundImage})` }">
        <!-- BODY / CONTENT (topbar already handled by you) -->
        <div class="rewards-wrap">
            <div class="rewards-panel">
                <div class="rewards-title">Rewards for Winner</div>

                <div class="rewards-row">
                    <!-- Card 1 -->
                    <div class="reward-card">
                        <div class="reward-top">
                            <div class="reward-amount">40,000 Taka</div>
                            <div class="reward-sub">GIFT VOUCHER</div>
                        </div>
                        <div class="reward-bottom">
                            <div class="reward-range">TOP 3</div>
                            <div class="reward-range2">PARTICIPANTS</div>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="reward-card">
                        <div class="reward-top">
                            <div class="reward-amount">10,000 Taka</div>
                            <div class="reward-sub">GIFT VOUCHER</div>
                        </div>
                        <div class="reward-bottom">
                            <div class="reward-range">4TH-10TH</div>
                            <div class="reward-range2">PARTICIPANTS</div>
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="reward-card">
                        <div class="reward-top">
                            <div class="reward-amount">5,000 Taka</div>
                            <div class="reward-sub">GIFT VOUCHER</div>
                        </div>
                        <div class="reward-bottom">
                            <div class="reward-range">11TH-30TH</div>
                            <div class="reward-range2">PARTICIPANTS</div>
                        </div>
                    </div>

                    <!-- Card 4 -->
                    <div class="reward-card">
                        <div class="reward-top">
                            <div class="reward-amount">2,000 Taka</div>
                            <div class="reward-sub">GIFT VOUCHER</div>
                        </div>
                        <div class="reward-bottom">
                            <div class="reward-range">31ST-50TH</div>
                            <div class="reward-range2">PARTICIPANTS</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {baseurl} from "../../base_url";

export default {
    name: "RewardsForWinner",
    data() {
        return {
            BackgroundImage:'',
        };
    },
    mounted() {
        this.BackgroundImage = baseurl + 'assets/images/bg/t20bg.png';
    },
};

</script>

<style scoped>
/* Full page background area (below topbar) */
.rewards-page {
    min-height: calc(100vh - 70px); /* change 70px to your topbar height */
    width: 100%;
    /*background: #0b0740;*/
    position: relative;
    overflow: hidden;
}

/* Background watermark-ish effect */
.rewards-page::before {
    content: "";
    position: absolute;
    inset: 0;
    /*background:*/
    /*    radial-gradient(circle at 55% 35%, rgba(255,255,255,0.07), transparent 55%),*/
    /*    radial-gradient(circle at 25% 70%, rgba(255,255,255,0.05), transparent 60%),*/
    /*    linear-gradient(180deg, rgba(9,5,58,1) 0%, rgba(7,4,44,1) 100%);*/
    /*opacity: 1;*/
}

/* Container */
.rewards-wrap {
    position: relative;
    z-index: 1;
    padding: 26px 24px 40px;
    display: flex;
    justify-content: center;
}

/* Main bordered panel */
.rewards-panel {
    width: 100%;
    max-width: 1200px;
    border: 2px solid rgba(255,255,255,0.55);
    border-radius: 10px;
    padding: 34px 28px 44px;
    background: rgba(0,0,0,0.10);
    box-shadow: 0 0 0 1px rgba(255,255,255,0.12) inset;
}

/* Title */
.rewards-title {
    text-align: center;
    font-weight: 800;
    font-size: 34px;
    letter-spacing: 0.4px;
    color: #ff9a00;
    margin-bottom: 30px;
}

/* Cards row */
.rewards-row {
    display: flex;
    justify-content: space-between;
    gap: 26px;
    flex-wrap: wrap;
}

/* Card */
.reward-card {
    flex: 1 1 220px;
    max-width: 280px;
    border: 3px solid rgba(255,255,255,0.9);
    border-radius: 12px;
    overflow: hidden;
    background: rgba(12, 8, 70, 0.65);
    box-shadow: 0 10px 26px rgba(0,0,0,0.25);
}

/* Upper (dark) section */
.reward-top {
    padding: 18px 16px 16px;
    text-align: center;
    background: rgba(10, 7, 70, 0.15);
}

.reward-amount {
    font-size: 34px;
    font-weight: 900;
    color: #ff9a00;
    line-height: 1.05;
    margin-bottom: 6px;
    text-shadow: 0 2px 0 rgba(0,0,0,0.25);
}

.reward-sub {
    font-size: 14px;
    font-weight: 800;
    color: #ffffff;
    letter-spacing: 0.8px;
}

/* Bottom orange strip */
.reward-bottom {
    background: #ff9a00;
    padding: 14px 10px 13px;
    text-align: center;
    border-top: 2px solid rgba(255,255,255,0.55);
}

.reward-range {
    font-size: 24px;
    font-weight: 900;
    color: #ffffff;
    line-height: 1.05;
}

.reward-range2 {
    font-size: 20px;
    font-weight: 900;
    color: #ffffff;
    line-height: 1.05;
}

/* Responsive like screenshot spacing */
@media (max-width: 1100px) {
    .rewards-row {
        justify-content: center;
    }
    .reward-card {
        max-width: 320px;
    }
}

@media (max-width: 520px) {
    .rewards-title {
        font-size: 26px;
    }
    .reward-amount {
        font-size: 30px;
    }
    .reward-range {
        font-size: 22px;
    }
}
</style>
