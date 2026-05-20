<template>
    <div class="not-found">
        <div class="nf-card">
            <div class="nf-title">404</div>
            <div class="nf-sub">Page not found</div>
            <router-link to="/home" class="nf-btn">Go Home</router-link>
        </div>
    </div>
</template>
<script>
export default { name: 'NotFound' };
</script>
<style scoped>
.not-found { min-height: 100vh; background: linear-gradient(180deg, #3E26B9 0%, #1C1153 100%); display: flex; align-items: center; justify-content: center; }
.nf-card { text-align: center; }
.nf-title { color: #FFA500; font-size: 5rem; font-family: 'Rajdhani', sans-serif; font-weight: 700; }
.nf-sub { color: rgba(255,255,255,0.6); margin-bottom: 24px; }
.nf-btn { background: #FFA500; color: #fff; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; font-family: 'Rajdhani', sans-serif; }
</style>
