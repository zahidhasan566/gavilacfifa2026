<template>
    <div class="auth-page">

        <!-- Full-page background image layer -->
        <div class="auth-bg-img" :style="{ backgroundImage: 'url(' + $imgBase + '/images/login-bg1.png)' }"></div>

        <!-- Top bar: FIFA logo left only -->
        <div class="auth-brand">
            <img :src="$imgBase + '/images/fifa-logo.png'" alt="FIFA" class="brand-logo" @error="e => e.target.style.display='none'">
            <img :src="$imgBase + '/images/login-bg.jpg'" class="brand-center-img" onerror="this.style.display='none'">
        </div>

        <!-- Bottom bar: ACI logo left, aligned with FIFA logo above -->
        <div class="auth-brand-bottom">
            <div class="brand-aci">
                <img :src="$imgBase + '/images/aci-logo.png'" alt="ACI" @error="e => e.target.style.display='none'">
            </div>
        </div>

        <div class="auth-wrapper">
            <div class="auth-container">
                <div class="auth-card">
                    <div class="auth-title">
                        <div class="auth-brand-row">
                            <img :src="$imgBase + '/images/fifa-logo.png'" alt="FIFA" class="auth-fifa-logo" @error="e => e.target.style.display='none'">
                            <span class="auth-brand-divider"></span>
                            <img :src="$imgBase + '/images/abecab-abetis-logo.png'" alt="Abecab Abetis" class="auth-abetis-logo" @error="e => e.target.style.display='none'">
                        </div>
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
                    <router-link :to="{ name: 'Register' }" class="btn-outline-white">Sign Up</router-link>
                </div><!-- end auth-card -->
            </div><!-- end auth-container -->

            <!-- Image RIGHT side only -->
            <img :src="$imgBase + '/images/login-bg.jpg'" class="auth-side-img" onerror="this.style.display='none'">
        </div><!-- end auth-wrapper -->
    </div><!-- end auth-page -->
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
                const dest = this.$store.getters.isAdmin ? { name: 'AdminDashboard' } : { name: 'LiveScore' };
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
.auth-title { text-align: center; margin-bottom: 24px; }
.auth-brand-row { display: flex; align-items: center; justify-content: center; gap: 16px; }
.auth-fifa-logo { height: 72px; object-fit: contain; }
.auth-brand-divider { display: inline-block; width: 2px; height: 56px; background: rgba(255,255,255,0.35); border-radius: 2px; flex-shrink: 0; }
.auth-abetis-logo { height: 60px; object-fit: contain; }

.auth-bg-img {
    position: fixed;
    inset: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
}
.auth-bg-img::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #3E0082 0%, #1A0040 100%);
    opacity: 0.70;
}
.auth-page {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    padding: calc(90px + env(safe-area-inset-top)) 24px calc(80px + env(safe-area-inset-bottom));
    box-sizing: border-box;
    z-index: 1;
}

/* Top bar — FIFA logo only */
.auth-brand {
    position: fixed; top: 0; left: 0; right: 0;
    display: flex; justify-content: flex-start; align-items: center;
    padding: 14px 28px; z-index: 10; background: none;
}
.brand-logo { height: 64px; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.5)); }
.brand-center-img { display: none; }

/* Bottom bar — ACI logo, left-aligned under FIFA logo */
.auth-brand-bottom {
    position: fixed; bottom: 0; left: 0;
    padding: 14px 28px; z-index: 10;
}
.brand-aci img { height: 64px; border-radius: 50%; box-shadow: 0 2px 10px rgba(0,0,0,0.4); }

.auth-wrapper {
    position: relative; z-index: 2;
    display: flex; align-items: stretch; justify-content: center;
    gap: 24px; width: 100%;
}
.auth-side-img {
    flex-shrink: 0;
    align-self: stretch;
    width: auto;
    max-width: 260px;
    display: block;
    border-radius: 12px;
}
.auth-container { width: 100%; max-width: 420px; }
.auth-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 16px; padding: 32px 28px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}

@media (max-width: 768px) {
    .auth-wrapper { flex-direction: column; align-items: center; }
    .auth-side-img { display: none; }
    .brand-center-img {
        display: block;
        height: 44px; width: auto; object-fit: contain;
        margin-left: auto;
    }
    .auth-brand { justify-content: space-between; }
    .auth-brand-bottom { display: none; }
    .auth-fifa-logo { height: 48px; }
    .auth-abetis-logo { height: 40px; }
    .auth-brand-divider { height: 36px; }
    .auth-title { margin-bottom: 16px; }
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
    display: block; width: 100%; background: #ffffff; color: #1A0040;
    border: none; border-radius: 8px; padding: 13px; font-size: 1rem;
    font-weight: 700; font-family: 'Rajdhani', sans-serif; letter-spacing: 1px;
    text-align: center; text-decoration: none; box-sizing: border-box;
}
</style>
