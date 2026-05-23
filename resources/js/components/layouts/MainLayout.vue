<template>
    <div class="main-layout">
        <!-- Top Navbar -->
        <nav class="top-nav">
            <div class="nav-brand">
                <img :src="$imgBase + '/images/fifa-logo.png'" alt="FIFA" class="nav-logo" onerror="this.style.display='none'">
                <span class="brand-divider"></span>
                <img :src="$imgBase + '/images/abecab-abetis-logo.png'" alt="Abecab Abetis" class="nav-title-logo" onerror="this.style.display='none'">
            </div>
            <div class="nav-tabs">
                <router-link :to="{ name: 'LiveScore' }"   class="nav-tab" active-class="active">Live Score</router-link>
                <router-link :to="{ name: 'Fixtures' }"   class="nav-tab" active-class="active">Match Fixtures &amp; Results</router-link>
                <router-link :to="{ name: 'Prediction' }" class="nav-tab" active-class="active">Prediction</router-link>
                <router-link :to="{ name: 'Winners' }"    class="nav-tab" active-class="active">Winners History</router-link>
                <router-link :to="{ name: 'FifaFacts' }"  class="nav-tab" active-class="active">FIFA Facts</router-link>
            </div>
            <div class="nav-actions">
                <button class="notif-btn" @click="toggleNotifications">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                    <span v-if="unreadCount > 0" class="notif-badge">{{ unreadCount }}</span>
                </button>
                <button class="avatar-nav-btn" @click="showProfileModal = true" title="Update Profile Picture">
                    <img :src="currentUser.profile_picture_url || $imgBase + '/images/default-avatar.png'"
                         class="nav-avatar" onerror="this.src=window.__IMG__ + '/images/default-avatar.png'">
                </button>
                <button class="logout-nav-btn" @click="handleLogout" title="Logout">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                </button>
            </div>
        </nav>

        <!-- Notification Dropdown -->
        <div v-if="showNotifications" class="notif-dropdown" v-click-outside="closeNotifications">
            <div class="notif-header">
                <span>Notifications</span>
                <button @click="markAllRead" class="mark-all-btn">Mark all read</button>
            </div>
            <div v-if="notifications.length === 0" class="notif-empty">No notifications</div>
            <div v-for="n in notifications" :key="n.id"
                 class="notif-item" :class="{ unread: !n.is_read }"
                 @click="markRead(n.id)">
                <div class="notif-item-title">{{ n.title }}</div>
                <div class="notif-item-msg">{{ n.message }}</div>
            </div>
        </div>

        <!-- User Menu Dropdown -->
        <div v-if="showUserMenu" class="user-dropdown" v-click-outside="closeUserMenu">
            <div class="user-info">
                <div class="user-name">{{ currentUser.name }}</div>
                <div class="user-code">{{ currentUser.unique_code }}</div>
            </div>
            <div class="dropdown-divider"></div>
            <button @click="handleLogout" class="dropdown-item logout-item">Logout</button>
        </div>

        <!-- Page Content -->
        <div class="page-content">
            <router-view />
        </div>

        <!-- Mobile Bottom Nav -->
        <nav class="bottom-nav">
            <router-link :to="{ name: 'LiveScore' }"   class="bottom-tab" active-class="active">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
                <span>Live</span>
            </router-link>
            <router-link :to="{ name: 'Fixtures' }"   class="bottom-tab" active-class="active">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <span>Fixtures</span>
            </router-link>
            <router-link :to="{ name: 'Prediction' }" class="bottom-tab" active-class="active">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                <span>Predict</span>
            </router-link>
            <router-link :to="{ name: 'Winners' }"    class="bottom-tab" active-class="active">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>
                <span>Winners</span>
            </router-link>
            <router-link :to="{ name: 'FifaFacts' }"  class="bottom-tab" active-class="active">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span>Facts</span>
            </router-link>
        </nav>

        <!-- ── Raffle Draw Popup ────────────────────────────── -->
        <transition name="raffle-fade">
            <div v-if="rafflePopup" class="raffle-overlay" @click.self="dismissRaffle">
                <div class="raffle-modal">
                    <button class="raffle-close" @click="dismissRaffle">✕</button>
                    <div class="raffle-confetti">🎉</div>
                    <div class="raffle-headline">Raffle Draw Winner!</div>
                    <div class="raffle-sub">FIFA World Cup 2026™</div>

                    <img :src="raffleWinner.profile_picture_url"
                         class="raffle-avatar"
                         onerror="this.src=window.__IMG__ + '/images/default-avatar.png'">

                    <div v-if="raffleWinner.is_me" class="raffle-winner-you">🎊 Congratulations! It's YOU!</div>
                    <div class="raffle-winner-name">{{ raffleWinner.name }}</div>
                    <div class="raffle-winner-code">Doctor Code: {{ raffleWinner.unique_code }}</div>
                    <div class="raffle-prize">+{{ raffleWinner.prize_points }} Bonus Points</div>
                    <div v-if="raffleWinner.notes" class="raffle-notes">{{ raffleWinner.notes }}</div>

                    <div class="raffle-join-section">
                        <div class="raffle-join-label">Want to be in the next draw?</div>
                        <button class="raffle-join-btn" :class="{ joined: raffleOptedIn }" @click="toggleJoin">
                            {{ raffleOptedIn ? '✓ You\'re In the Raffle!' : 'Join Next Raffle' }}
                        </button>
                    </div>

                    <button class="raffle-dismiss-btn" @click="dismissRaffle">Close</button>
                </div>
            </div>
        </transition>

        <!-- Profile Picture Modal -->
        <transition name="raffle-fade">
            <div v-if="showProfileModal" class="raffle-overlay" @click.self="showProfileModal = false">
                <div class="profile-modal">
                    <button class="raffle-close" @click="showProfileModal = false">✕</button>
                    <div class="pm-avatar-wrap">
                        <img :src="profilePreview || currentUser.profile_picture_url || $imgBase + '/images/default-avatar.png'"
                             class="pm-avatar" onerror="this.src=window.__IMG__ + '/images/default-avatar.png'">
                        <label class="pm-camera-btn" for="profile-pic-input">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                        </label>
                        <input id="profile-pic-input" type="file" accept="image/*" class="pm-file-input" @change="onProfileFileChange">
                    </div>
                    <div class="pm-name">{{ currentUser.name }}</div>
                    <div class="pm-code">{{ currentUser.unique_code }}</div>
                    <button class="pm-save-btn" @click="uploadProfilePicture" :disabled="!profileFile || profileUploading">
                        {{ profileUploading ? 'Saving...' : 'Save Photo' }}
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

const RAFFLE_KEY = 'fifa2026_last_raffle_id';
const RAFFLE_POLL_INTERVAL = 30000; // 30 seconds

export default {
    name: 'MainLayout',
    data() {
        return {
            showNotifications: false,
            showUserMenu: false,
            rafflePopup: false,
            raffleWinner: null,
            raffleOptedIn: false,
            _rafflePollTimer: null,
            showProfileModal: false,
            profileFile: null,
            profilePreview: null,
            profileUploading: false,
        };
    },
    computed: {
        ...mapGetters(['currentUser', 'unreadCount', 'notifications']),
    },
    mounted() {
        this.$store.dispatch('fetchNotifications');
        this.pollRaffleStatus();
        this._rafflePollTimer = setInterval(this.pollRaffleStatus, RAFFLE_POLL_INTERVAL);
    },
    beforeDestroy() {
        if (this._rafflePollTimer) clearInterval(this._rafflePollTimer);
    },
    directives: {
        'click-outside': {
            bind(el, binding) {
                el._clickOutside = (e) => { if (!el.contains(e.target)) binding.value(); };
                document.addEventListener('click', el._clickOutside);
            },
            unbind(el) { document.removeEventListener('click', el._clickOutside); },
        },
    },
    methods: {
        ...mapActions(['logout', 'markNotificationRead', 'markAllRead', 'fetchNotifications']),
        toggleNotifications(e) { e.stopPropagation(); this.showNotifications = !this.showNotifications; this.showUserMenu = false; },
        toggleUserMenu(e) { e.stopPropagation(); this.showUserMenu = !this.showUserMenu; this.showNotifications = false; },
        closeNotifications() { this.showNotifications = false; },
        closeUserMenu() { this.showUserMenu = false; },
        async markRead(id) { await this.$store.dispatch('markNotificationRead', id); },
        async handleLogout() {
            await this.$store.dispatch('logout');
            this.$router.push({ name: 'Login' });
        },

        onProfileFileChange(e) {
            const file = e.target.files[0];
            if (!file) return;
            this.profileFile = file;
            this.profilePreview = URL.createObjectURL(file);
        },
        async uploadProfilePicture() {
            if (!this.profileFile) return;
            this.profileUploading = true;
            try {
                const fd = new FormData();
                fd.append('profile_picture', this.profileFile);
                await this.$http.post('/api/auth/update-profile', fd);
                await this.$store.dispatch('fetchMe');
                this.showProfileModal = false;
                this.profileFile = null;
                this.profilePreview = null;
                this.$toaster && this.$toaster.success('Profile picture updated!');
            } catch (e) {
                this.$toaster && this.$toaster.error('Upload failed. Please try again.');
            } finally {
                this.profileUploading = false;
            }
        },

        async pollRaffleStatus() {
            try {
                const { data } = await this.$http.get('/api/raffle/status');
                this.raffleOptedIn = data.opted_in;
                const winner = data.latest_winner;
                if (!winner) return;
                const lastSeenId = parseInt(localStorage.getItem(RAFFLE_KEY) || '0');
                if (winner.id !== lastSeenId) {
                    this.raffleWinner = winner;
                    this.rafflePopup = true;
                }
            } catch (e) { /* silent */ }
        },

        dismissRaffle() {
            if (this.raffleWinner) {
                localStorage.setItem(RAFFLE_KEY, String(this.raffleWinner.id));
            }
            this.rafflePopup = false;
        },

        async toggleJoin() {
            try {
                const { data } = await this.$http.post('/api/raffle/join');
                this.raffleOptedIn = data.opted_in;
                this.$toaster.success(data.message);
            } catch (e) { this.$toaster.error('Failed to update raffle status.'); }
        },
    },
};
</script>

<style scoped>
.main-layout {
    min-height: 100vh;
    background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%);
    display: flex;
    flex-direction: column;
}
.top-nav {
    position: sticky; top: 0; z-index: 100;
    background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%);
    display: flex; align-items: center;
    padding: 0 40px;
    height: 70px;
    border-bottom: 3px solid #FFA500;
    gap: 24px;
}
.nav-brand { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
.nav-ball { height: 40px; width: 40px; object-fit: contain; }
.nav-logo { height: 44px; object-fit: contain; }
.brand-divider { display: inline-block; width: 1.5px; height: 36px; background: rgba(255,255,255,0.3); border-radius: 2px; flex-shrink: 0; }
.nav-title-logo { height: 36px; object-fit: contain; }
.nav-title {
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0;
    text-align: center;
    white-space: nowrap;
}
.nav-tabs { display: flex; gap: 8px; flex: 1; overflow-x: auto; align-items: center; scrollbar-width: none; }
.nav-tabs::-webkit-scrollbar { display: none; }
.nav-tab {
    display: inline-flex; align-items: center; justify-content: center;
    padding: 0 18px; height: 40px; border-radius: 50px;
    color: #1A0040;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
    line-height: 40px;
    letter-spacing: 0;
    text-align: center;
    white-space: nowrap;
    text-decoration: none;
    border: none;
    background: #ffffff;
    transition: all 0.2s;
    flex-shrink: 0;
}
.nav-tab:hover { background: #f0f0f0; color: #1A0040; }
.nav-tab.active {
    background: #FFA500;
    color: #fff;
}
.nav-actions { display: flex; align-items: center; gap: 14px; flex-shrink: 0; }
.notif-btn {
    position: relative; background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.3);
    color: #fff; cursor: pointer; padding: 0;
    width: 42px; height: 42px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
}
.notif-badge {
    position: absolute; top: 2px; right: 2px;
    background: #FFA500; color: #fff;
    border-radius: 50%; width: 14px; height: 14px;
    font-size: 9px; display: flex; align-items: center; justify-content: center;
    font-weight: 700;
}
.avatar-nav-btn { background: none; border: none; cursor: pointer; padding: 0; }
.nav-avatar { width: 38px; height: 38px; border-radius: 50%; object-fit: cover; border: 2px solid #FFA500; display: block; }

.logout-nav-btn {
    background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.3);
    color: #fff; cursor: pointer; padding: 0;
    width: 42px; height: 42px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s;
}
.logout-nav-btn:hover { background: rgba(255,100,100,0.25); border-color: #ff6b6b; color: #ff6b6b; }

/* Profile Modal */
.profile-modal {
    background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%);
    border-radius: 16px; padding: 32px 28px; width: 300px;
    text-align: center; position: relative;
    border: 1px solid rgba(255,255,255,0.12);
}
.pm-avatar-wrap {
    position: relative; width: 110px; height: 110px;
    margin: 0 auto 14px; cursor: pointer;
}
.pm-avatar {
    width: 110px; height: 110px; border-radius: 50%;
    object-fit: cover; border: 3px solid #FFA500;
}
.pm-camera-btn {
    position: absolute; bottom: 0; right: 0;
    background: #FFA500; border-radius: 50%;
    width: 32px; height: 32px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; color: #fff; border: 2px solid #1A0040;
}
.pm-file-input { display: none; }
.pm-name { color: #fff; font-weight: 700; font-size: 1rem; margin-bottom: 4px; }
.pm-code { color: rgba(255,255,255,0.5); font-size: 0.78rem; margin-bottom: 20px; }
.pm-save-btn {
    background: #FFA500; color: #fff; border: none;
    border-radius: 8px; padding: 10px 32px;
    font-weight: 700; font-size: 0.9rem; cursor: pointer;
    width: 100%;
}
.pm-save-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.notif-dropdown, .user-dropdown {
    position: fixed; top: 62px; right: 20px; z-index: 200;
    background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%); border: 1px solid rgba(255,255,255,0.12);
    border-radius: 12px; width: 300px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    overflow: hidden;
}
.notif-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.08);
    color: #fff; font-weight: 600; font-size: 0.9rem;
}
.mark-all-btn { background: none; border: none; color: #FFA500; font-size: 0.75rem; cursor: pointer; }
.notif-empty { padding: 20px; text-align: center; color: rgba(255,255,255,0.4); font-size: 0.85rem; }
.notif-item {
    padding: 12px 16px; cursor: pointer;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    transition: background 0.15s;
}
.notif-item:hover { background: rgba(255,255,255,0.05); }
.notif-item.unread { background: rgba(255,165,0,0.06); }
.notif-item-title { color: #fff; font-size: 0.85rem; font-weight: 600; }
.notif-item-msg { color: rgba(255,255,255,0.6); font-size: 0.78rem; margin-top: 2px; }

.user-info { padding: 16px; }
.user-name { color: #fff; font-weight: 600; }
.user-code { color: rgba(255,255,255,0.5); font-size: 0.8rem; margin-top: 2px; }
.dropdown-divider { height: 1px; background: rgba(255,255,255,0.08); }
.dropdown-item { width: 100%; background: none; border: none; padding: 12px 16px; text-align: left; cursor: pointer; color: rgba(255,255,255,0.8); font-size: 0.9rem; }
.logout-item { color: #ff6b6b; }

.page-content { flex: 1; padding: 20px; }
.bottom-nav {
    display: none;
    position: fixed; bottom: 0; left: 0; right: 0;
    background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%); border-top: 1px solid rgba(255,255,255,0.1);
    padding: 8px 0; justify-content: space-around; z-index: 100;
}
.bottom-tab {
    display: flex; flex-direction: column; align-items: center; gap: 2px;
    color: rgba(255,255,255,0.45); font-size: 0.65rem; text-decoration: none;
    padding: 4px 8px;
}
.bottom-tab.active { color: #FFA500; }
.bottom-tab.active svg { stroke: #FFA500; filter: drop-shadow(0 0 4px rgba(255,165,0,0.7)); }
@media (max-width: 768px) {
    .nav-tabs { display: none; }
    .bottom-nav { display: flex; }
    .page-content { padding: 12px 12px 72px; }

    /* Navbar mobile */
    .top-nav { padding: 0 14px; gap: 0; height: 60px; justify-content: space-between; }
    .nav-brand { gap: 6px; flex: 1; }
    .nav-title { font-size: 0.72rem; white-space: nowrap; }
    .nav-logo { height: 30px; }
    .nav-title-logo { height: 26px; }
    .brand-divider { height: 26px; }
    .nav-tabs { display: none; }
    .nav-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
    .notif-btn { width: 34px; height: 34px; }
    .nav-avatar { width: 30px; height: 30px; }
    .logout-nav-btn { width: 34px; height: 34px; }
}

/* ── Raffle Popup ─────────────────────────── */
.raffle-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,0.75);
    display: flex; align-items: center; justify-content: center;
    z-index: 1000; padding: 20px;
}
.raffle-modal {
    background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%);
    border: 1px solid rgba(255,165,0,0.4);
    border-radius: 20px; padding: 32px 28px;
    width: 100%; max-width: 380px; text-align: center;
    position: relative;
    box-shadow: 0 0 60px rgba(255,165,0,0.2);
}
.raffle-close {
    position: absolute; top: 14px; right: 16px;
    background: none; border: none; color: rgba(255,255,255,0.5);
    font-size: 1.1rem; cursor: pointer;
}
.raffle-confetti { font-size: 3rem; margin-bottom: 6px; }
.raffle-headline {
    color: #FFA500; font-family: 'Rajdhani', sans-serif;
    font-size: 1.5rem; font-weight: 900; letter-spacing: 1px; margin-bottom: 2px;
}
.raffle-sub { color: #fff; font-size: 0.75rem; margin-bottom: 16px; }
.raffle-avatar {
    width: 100px; height: 100px; border-radius: 50%;
    object-fit: cover; border: 3px solid #FFA500;
    margin-bottom: 12px;
}
.raffle-winner-you { color: #4ade80; font-size: 0.95rem; font-weight: 700; margin-bottom: 4px; }
.raffle-winner-name { color: #fff; font-weight: 700; font-size: 1.1rem; margin-bottom: 2px; }
.raffle-winner-code { color: rgba(255,255,255,0.5); font-size: 0.8rem; margin-bottom: 6px; }
.raffle-prize {
    display: inline-block; background: rgba(255,165,0,0.15);
    color: #FFA500; padding: 4px 14px; border-radius: 20px;
    font-size: 0.9rem; font-weight: 700; margin-bottom: 6px;
}
.raffle-notes { color: rgba(255,255,255,0.45); font-size: 0.78rem; margin-bottom: 10px; }

.raffle-join-section { background: rgba(255,255,255,0.04); border-radius: 10px; padding: 16px; margin: 16px 0 12px; }
.raffle-join-label { color: rgba(255,255,255,0.6); font-size: 0.8rem; margin-bottom: 10px; }
.raffle-join-btn {
    width: 100%; background: #3b82f6; color: #fff; border: none;
    border-radius: 8px; padding: 10px 20px; font-weight: 700;
    font-family: 'Rajdhani', sans-serif; font-size: 0.95rem; cursor: pointer;
    transition: all 0.2s;
}
.raffle-join-btn.joined { background: rgba(34,197,94,0.2); color: #4ade80; border: 1px solid rgba(34,197,94,0.4); }
.raffle-dismiss-btn {
    background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.6);
    border: none; border-radius: 8px; padding: 8px 24px;
    font-size: 0.85rem; cursor: pointer;
}

/* Transition */
.raffle-fade-enter-active, .raffle-fade-leave-active { transition: opacity 0.3s; }
.raffle-fade-enter, .raffle-fade-leave-to { opacity: 0; }
</style>
