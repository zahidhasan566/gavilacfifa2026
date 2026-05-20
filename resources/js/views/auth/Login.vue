<template>
    <div class="auth-page" :style="{ background: '#1C1153 url(' + $imgBase + '/images/login-bg.jpg) center/100% 100% no-repeat' }">
        <div class="auth-bg-overlay"></div>

        <div class="auth-brand">
            <img src="/fifa2026/public/images/fifa-logo.png" alt="FIFA" class="brand-logo" onerror="this.style.display='none'">
            <div class="brand-aci">
                <img src="/fifa2026/public/images/aci-logo.png" alt="ACI" onerror="this.style.display='none'">
            </div>
        </div>

        <div class="auth-container">
            <div class="auth-card">
                <div class="auth-title">
                    <img src="/fifa2026/public/images/abetis-logo.png" alt="ABETIS - ABECAR" class="auth-org-logo" onerror="this.style.display='none'">
                    <div class="auth-subtitle">WORLD CUP 2026</div>
                </div>

                <div v-if="errorMsg" class="errors-box">
                    <div class="error-item">{{ errorMsg }}</div>
                </div>

                <form @submit.prevent="onSubmit">
                    <div class="form-group">
                        <input type="text" v-model="unique_code" class="form-input" placeholder="Unique Code" required />
                    </div>
                    <div class="form-group">
                        <input type="password" v-model="password" class="form-input" placeholder="Password" required />
                    </div>
                    <button type="submit" class="btn-primary-orange" :disabled="loading">
                        <span v-if="loading" class="btn-spinner"></span>
                        {{ loading ? 'Signing in...' : 'Login' }}
                    </button>
                </form>

                <div class="auth-separator"><span>Don't have an account?</span></div>
                <router-link to="/fifa2026/register" class="btn-outline-white">Sign Up</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            unique_code: '',
            password: '',
            loading: false,
            errorMsg: '',
        };
    },
    methods: {
        async onSubmit() {
            this.loading = true;
            this.errorMsg = '';
            try {
                await this.$store.dispatch('login', {
                    unique_code: this.unique_code,
                    password: this.password,
                });
                const dest = this.$store.getters.isAdmin ? '/fifa2026/admin' : '/fifa2026/home';
                this.$router.push(dest);
            } catch (err) {
                this.errorMsg = err.response?.data?.message || 'Invalid credentials. Please try again.';
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>

<style scoped>
.auth-title { text-align: center; margin-bottom: 20px; }
.auth-org-logo { width: 100%; max-width: 320px; height: auto; object-fit: contain; display: block; margin: 0 auto 6px; }
.auth-subtitle { color: #ffffff; font-family: 'Rajdhani', sans-serif; font-weight: 700; font-size: 1.2rem; letter-spacing: 3px; margin-top: 4px; }

.auth-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1C1153;
    position: relative;
    padding: 80px 16px 24px;
}
.auth-bg-overlay { position: absolute; inset: 0; background: rgba(61, 37, 182, 0.80); }
.auth-brand {
    position: fixed; top: 0; left: 0; right: 0;
    display: flex; justify-content: space-between; align-items: center;
    padding: 14px 28px; z-index: 10;
    background: none;
}
.brand-logo { height: 64px; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.5)); }
.brand-aci img { height: 64px; border-radius: 50%; box-shadow: 0 2px 10px rgba(0,0,0,0.4); }
.auth-container { position: relative; z-index: 2; width: 100%; max-width: 420px; }
.auth-card {
    background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%);
    border-radius: 16px; padding: 32px 28px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}
.form-input {
    width: 100%; background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12); border-radius: 8px;
    padding: 12px 16px; color: #ffffff; font-size: 0.95rem;
    outline: none; transition: border-color 0.2s; box-sizing: border-box;
}
.form-input::placeholder { color: rgba(255,255,255,0.4); }
.form-input:focus { border-color: rgba(255,165,0,0.6); }
.form-group { margin-bottom: 14px; }
.errors-box { margin-bottom: 12px; }
.error-item { color: #ff6b6b; font-size: 0.85rem; margin-bottom: 4px; }
.btn-primary-orange {
    width: 100%; background: linear-gradient(135deg, #FFA500, #FF8C00);
    color: #fff; border: none; border-radius: 8px; padding: 14px;
    font-size: 1rem; font-weight: 700; font-family: 'Rajdhani', sans-serif;
    letter-spacing: 1px; cursor: pointer; display: flex;
    align-items: center; justify-content: center; gap: 8px;
    margin-top: 4px;
}
.btn-primary-orange:disabled { opacity: 0.7; cursor: not-allowed; }
.btn-spinner {
    width: 16px; height: 16px;
    border: 2px solid rgba(255,255,255,0.4); border-top-color: #fff;
    border-radius: 50%; animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.auth-separator { text-align: center; margin: 16px 0; color: rgba(255,255,255,0.5); font-size: 0.85rem; }
.btn-outline-white {
    display: block; width: 100%; background: #ffffff; color: #1a0a6e;
    border: none; border-radius: 8px; padding: 13px; font-size: 1rem;
    font-weight: 700; font-family: 'Rajdhani', sans-serif; letter-spacing: 1px;
    text-align: center; text-decoration: none; box-sizing: border-box;
}
</style>
