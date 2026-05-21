<template>
    <div class="auth-page">

        <div class="auth-brand">
            <img src="/fifa2026/public/images/fifa-logo.png" alt="FIFA" class="brand-logo" onerror="this.style.display='none'">
            <img :src="$imgBase + '/images/signup.png'" class="brand-center-img" onerror="this.style.display='none'">
            <div class="brand-aci">
                <img src="/fifa2026/public/images/aci-logo.png" alt="ACI" onerror="this.style.display='none'">
            </div>
        </div>

        <div class="auth-wrapper">
            <img :src="$imgBase + '/images/signup.png'" class="auth-side-img" onerror="this.style.display='none'">

        <div class="auth-container">
            <div class="auth-card">
                <div class="auth-title">
                    <img src="/fifa2026/public/images/abetis-logo.png" alt="ABETIS - ABECAR" class="auth-org-logo" onerror="this.style.display='none'">
                    <div class="auth-subtitle">WORLD CUP 2026</div>
                </div>
                <form @submit.prevent="handleRegister" enctype="multipart/form-data">
                    <div class="form-group">
                        <input v-model="form.name" type="text" class="form-input" placeholder="Doctor Name" required />
                    </div>
                    <div class="form-group">
                        <input v-model="form.unique_code" type="text" class="form-input" placeholder="Unique Code" required />
                    </div>
                    <div class="form-group">
                        <input v-model="form.chamber_address" type="text" class="form-input" placeholder="Chamber Address" />
                    </div>
                    <div class="form-group">
                        <input v-model="form.mobile" type="tel" class="form-input" placeholder="Mobile Number" required />
                    </div>
                    <div class="form-group">
                        <input v-model="form.email" type="email" class="form-input" placeholder="Email Address" required />
                    </div>
                    <div class="form-group">
                        <label class="file-upload-label" :class="{ 'has-file': previewUrl }">
                            <div v-if="!previewUrl" class="file-placeholder">
                                <span>Profile Picture</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            </div>
                            <img v-else :src="previewUrl" class="preview-img" alt="Preview">
                            <input type="file" accept="image/*" @change="onFileChange" class="file-input-hidden">
                        </label>
                    </div>
                    <div class="form-group">
                        <input v-model="form.password" type="password" class="form-input" placeholder="Password" required minlength="6" />
                    </div>
                    <div class="form-group">
                        <input v-model="form.password_confirmation" type="password" class="form-input" placeholder="Confirm Password" required />
                    </div>
                    <div v-if="errors" class="errors-box">
                        <div v-for="(msgs, field) in errors" :key="field" class="error-item">
                            {{ msgs[0] }}
                        </div>
                    </div>
                    <button type="submit" class="btn-primary-orange" :disabled="loading">
                        <span v-if="loading" class="btn-spinner"></span>
                        {{ loading ? 'Creating...' : 'Create account' }}
                    </button>
                </form>
                <div class="auth-separator"><span>Already have an account?</span></div>
                <router-link to="/fifa2026/login" class="btn-outline-white">Login</router-link>
            </div><!-- end auth-card -->
        </div><!-- end auth-container -->

            <img :src="$imgBase + '/images/signup.png'" class="auth-side-img" onerror="this.style.display='none'">
        </div><!-- end auth-wrapper -->
    </div><!-- end auth-page -->
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            form: {
                name: '', unique_code: '', chamber_address: '',
                mobile: '', email: '', password: '', password_confirmation: '',
            },
            profileFile: null,
            previewUrl: null,
            loading: false,
            errors: null,
        };
    },
    methods: {
        onFileChange(e) {
            const file = e.target.files[0];
            if (!file) return;
            this.profileFile = file;
            this.previewUrl = URL.createObjectURL(file);
        },
        async handleRegister() {
            this.errors = null;
            if (this.form.password !== this.form.password_confirmation) {
                this.errors = { password: ['Passwords do not match.'] };
                return;
            }
            this.loading = true;
            try {
                const fd = new FormData();
                Object.entries(this.form).forEach(([k, v]) => fd.append(k, v));
                if (this.profileFile) fd.append('profile_picture', this.profileFile);

                await this.$store.dispatch('register', fd);
                this.$router.push('/home');
            } catch (err) {
                if (err.response?.data?.errors) {
                    this.errors = err.response.data.errors;
                } else {
                    this.$toaster.error(err.response?.data?.message || 'Registration failed.');
                }
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
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%);
    padding: 80px 24px 32px;
}
.auth-brand {
    position: fixed; top: 0; left: 0; right: 0;
    display: flex; justify-content: space-between; align-items: center;
    padding: 14px 28px; z-index: 10;
    background: none;
}
.brand-logo { height: 64px; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.5)); }
.brand-aci img { height: 64px; border-radius: 50%; box-shadow: 0 2px 10px rgba(0,0,0,0.4); }
.auth-wrapper {
    position: relative; z-index: 2;
    display: flex; align-items: stretch; justify-content: center;
    gap: 20px; width: 100%;
}
.auth-side-img {
    width: 200px;
    flex-shrink: 0;
    object-fit: contain;
    object-position: center;
    border-radius: 12px;
    align-self: stretch;
    min-height: 100%;
}
.auth-container { width: 100%; max-width: 420px; }

/* Center brand image in top bar — desktop hidden, mobile shown */
.brand-center-img { display: none; }

@media (max-width: 768px) {
    .auth-wrapper { flex-direction: column; align-items: center; }
    .auth-side-img { display: none; }
    .brand-center-img {
        display: block;
        height: 44px; width: auto;
        object-fit: contain;
    }
}
.auth-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px; padding: 32px 28px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
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
.file-upload-label {
    display: flex; align-items: center; justify-content: space-between;
    width: 100%; background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12); border-radius: 8px;
    padding: 10px 16px; color: rgba(255,255,255,0.5);
    font-size: 0.95rem; cursor: pointer; box-sizing: border-box;
    min-height: 46px; overflow: hidden;
}
.file-placeholder { display: flex; justify-content: space-between; align-items: center; width: 100%; }
.file-input-hidden { display: none; }
.preview-img { height: 32px; border-radius: 4px; }
.errors-box { margin-bottom: 12px; }
.error-item { color: #ff6b6b; font-size: 0.8rem; margin-bottom: 4px; }
.btn-primary-orange {
    width: 100%; background: linear-gradient(135deg, #FFA500, #FF8C00);
    color: #fff; border: none; border-radius: 8px; padding: 14px;
    font-size: 1rem; font-weight: 700; font-family: 'Rajdhani', sans-serif;
    letter-spacing: 1px; cursor: pointer; display: flex;
    align-items: center; justify-content: center; gap: 8px;
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
