import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const API = (process.env.MIX_APP_BASE || '') + '/api';

function setAuthHeader(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || null,
        user:  JSON.parse(localStorage.getItem('user') || 'null'),
        notifications: [],
        unreadCount: 0,
    },

    getters: {
        isAuthenticated: state => !!state.token,
        isAdmin:         state => state.user && state.user.role === 'admin',
        currentUser:     state => state.user || {},
        notifications:   state => state.notifications,
        unreadCount:     state => state.unreadCount,
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
            if (token) localStorage.setItem('token', token);
            else       localStorage.removeItem('token');
            setAuthHeader(token);
        },
        SET_USER(state, user) {
            state.user = user;
            if (user) localStorage.setItem('user', JSON.stringify(user));
            else      localStorage.removeItem('user');
        },
        SET_NOTIFICATIONS(state, list) {
            state.notifications = list;
            state.unreadCount   = list.filter(n => !n.is_read).length;
        },
        MARK_READ(state, id) {
            const n = state.notifications.find(n => n.id === id);
            if (n) n.is_read = true;
            state.unreadCount = state.notifications.filter(n => !n.is_read).length;
        },
        MARK_ALL_READ(state) {
            state.notifications.forEach(n => n.is_read = true);
            state.unreadCount = 0;
        },
    },

    actions: {
        async login({ commit }, credentials) {
            const { data } = await axios.post(API + '/auth/login', credentials);
            commit('SET_TOKEN', data.access_token);
            commit('SET_USER',  data.user);
            return data;
        },

        async logout({ commit }) {
            try { await axios.post(API + '/auth/logout'); } catch (_) {}
            commit('SET_TOKEN', null);
            commit('SET_USER',  null);
        },

        async fetchMe({ commit }) {
            const { data } = await axios.get(API + '/auth/me');
            commit('SET_USER', data);
        },

        async fetchNotifications({ commit }) {
            try {
                const { data } = await axios.get(API + '/notifications');
                commit('SET_NOTIFICATIONS', data.data || data);
            } catch (_) {}
        },

        async markNotificationRead({ commit }, id) {
            try {
                await axios.put(API + `/notifications/${id}/read`);
                commit('MARK_READ', id);
            } catch (_) {}
        },

        async markAllRead({ commit }) {
            try {
                await axios.put(API + '/notifications/read-all');
                commit('MARK_ALL_READ');
            } catch (_) {}
        },
    },
});

// Restore auth header on page load
setAuthHeader(localStorage.getItem('token'));
