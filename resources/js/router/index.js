import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';

Vue.use(VueRouter);

// Lazy-load all page components
const Login      = () => import('../views/auth/Login.vue');
const Register   = () => import('../views/auth/Register.vue');
const MainLayout = () => import('../components/layouts/MainLayout.vue');
const AdminLayout = () => import('../components/layouts/AdminLayout.vue');
const LiveScore  = () => import('../views/live-score/LiveScore.vue');
const Fixtures   = () => import('../views/fixtures/Fixtures.vue');
const Prediction = () => import('../views/prediction/Prediction.vue');
const Winners    = () => import('../views/winners/Winners.vue');
const FifaFacts  = () => import('../views/facts/FifaFacts.vue');
const AdminDashboard  = () => import('../views/admin/Dashboard.vue');
const AdminUsers      = () => import('../views/admin/Users.vue');
const AdminMatches    = () => import('../views/admin/Matches.vue');
const AdminTeams      = () => import('../views/admin/Teams.vue');
const AdminQuestions  = () => import('../views/admin/Questions.vue');
const AdminRaffle     = () => import('../views/admin/RaffleDraw.vue');
const AdminReports    = () => import('../views/admin/Reports.vue');
const AdminFacts      = () => import('../views/admin/FifaFacts.vue');
const AdminNotifications = () => import('../views/admin/Notifications.vue');
const NotFound   = () => import('../views/NotFound.vue');

const BASE = process.env.MIX_APP_BASE || '';

function requireAuth(to, from, next) {
    if (!store.getters.isAuthenticated) return next(BASE + '/login');
    next();
}

function requireAdmin(to, from, next) {
    if (!store.getters.isAuthenticated) return next(BASE + '/login');
    if (!store.getters.isAdmin) return next(BASE + '/home');
    next();
}

function redirectIfAuth(to, from, next) {
    if (store.getters.isAuthenticated) {
        return next(store.getters.isAdmin ? BASE + '/admin' : BASE + '/home');
    }
    next();
}

const routes = [
    { path: BASE + '/login',    name: 'Login',    component: Login,    beforeEnter: redirectIfAuth },
    { path: BASE + '/register', name: 'Register', component: Register, beforeEnter: redirectIfAuth },

    {
        path: BASE,
        component: MainLayout,
        beforeEnter: requireAuth,
        children: [
            { path: '',       redirect: { name: 'LiveScore' } },
            { path: 'home',   name: 'LiveScore',  component: LiveScore },
            { path: 'fixtures', name: 'Fixtures', component: Fixtures },
            { path: 'prediction', name: 'Prediction', component: Prediction },
            { path: 'winners', name: 'Winners', component: Winners },
            { path: 'facts',   name: 'FifaFacts', component: FifaFacts },
        ],
    },

    {
        path: BASE + '/admin',
        component: AdminLayout,
        beforeEnter: requireAdmin,
        children: [
            { path: '',            redirect: { name: 'AdminDashboard' } },
            { path: 'dashboard',   name: 'AdminDashboard', component: AdminDashboard },
            { path: 'users',       name: 'AdminUsers',     component: AdminUsers },
            { path: 'matches',     name: 'AdminMatches',   component: AdminMatches },
            { path: 'teams',       name: 'AdminTeams',     component: AdminTeams },
            { path: 'questions',   name: 'AdminQuestions', component: AdminQuestions },
            { path: 'raffle',      name: 'AdminRaffle',    component: AdminRaffle },
            { path: 'reports',     name: 'AdminReports',   component: AdminReports },
            { path: 'facts',       name: 'AdminFacts',     component: AdminFacts },
            { path: 'notifications', name: 'AdminNotifications', component: AdminNotifications },
        ],
    },

    { path: '/', redirect: BASE + '/login' },
    { path: '*', component: NotFound },
];

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes,
});

router.afterEach(() => {
    const loader = document.getElementById('app-loader');
    if (loader) loader.style.display = 'none';
});

export default router;
