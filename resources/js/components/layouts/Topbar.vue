<template>
    <header class="wc-topbar">
        <div class="wc-container">
            <!-- Left: Brand -->
            <div class="wc-brand" @click="$router.push({ name: 'DoctorDashboard' })">
                <div>
                    <img :src="`${mainOrigin}assets/images/bg/lefticonsmall.png`" alt="Icon" class="top-left-icon" />
                </div>
<!--                <span class="wc-brand-text">WC T-20</span>-->
            </div>

            <!-- Desktop nav -->
            <nav class="wc-nav wc-nav-desktop">
                <router-link class="wc-link" :to="{ name: 'DoctorDashboard' }">Home</router-link>
                <router-link class="wc-link" :to="{ name: 'Fixtures' }">Fixtures</router-link>
                <router-link class="wc-link" :to="{ name: 'Prediction' }">Prediction</router-link>
                <router-link class="wc-link" :to="{ name: 'Rewards' }">Rewards</router-link>
            </nav>

            <!-- Right side -->
            <div class="wc-right">
                <div class="p-4 text-white topRightIcon text-center position-relative">
                    <img :src="`${mainOrigin}assets/images/bg/topRight.png`" alt="Icon"  />

                </div>
                <!-- User name (hide on very small screens) -->
                <span class="wc-role badge badge-light wc-role-desktop">
          {{ me.FullName ? me.FullName : '' }}
        </span>

                <!-- Mobile hamburger -->
                <button class="wc-btn wc-burger" type="button" @click="toggleMenu" aria-label="Open menu">
                    <i class="mdi" :class="menuOpen ? 'mdi-close' : 'mdi-menu'"></i>
                </button>

                <!-- Logout (desktop) -->
                <button class="wc-btn logout wc-logout-desktop" type="button" @click="logout" title="Logout">
                    <i class="ti-power-off"></i>
                </button>
            </div>
        </div>

        <!-- Mobile menu panel -->
        <transition name="wc-slide">
            <div v-if="menuOpen" class="wc-mobile-panel" @click.self="menuOpen = false">
                <div class="wc-mobile-card">
                    <div class="wc-mobile-user">
                        <div class="wc-mobile-name">{{ me.FullName ? me.FullName : 'User' }}</div>
                    </div>

                    <div class="wc-mobile-links">
                        <router-link class="wc-m-link" :to="{ name: 'DoctorDashboard' }" exact @click.native="closeMenu">Home</router-link>
                        <router-link class="wc-m-link" :to="{ name: 'Fixtures' }" @click.native="closeMenu">Fixtures</router-link>
                        <router-link class="wc-m-link" :to="{ name: 'Prediction' }" @click.native="closeMenu">Prediction</router-link>
                        <router-link class="wc-m-link" :to="{ name: 'Rewards' }" @click.native="closeMenu">Rewards</router-link>
                    </div>

                    <button class="wc-mobile-logout" type="button" @click="logout">
                        <i class="ti-power-off"></i>
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </transition>

        <!-- Your modal stays same -->
        <div v-if="myModel">
            <transition name="model">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Update Profile</h4>
                                    <button type="button" @click="myModel=false" class="close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>User Id</label>
                                                <input type="text" class="form-control" v-model="me.Id" readonly />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input type="text" class="form-control" v-model="me.Email" readonly />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group" style="margin:0">
                                        <label>Password</label>
                                        <input type="password" class="form-control" v-model="updatePassword" />
                                    </div>

                                    <div class="form-group" style="margin:0">
                                        <label>Confirm Password</label>
                                        <input type="password" class="form-control" v-model="confirmUpdatePassword" />
                                    </div>

                                    <br />
                                    <div align="center">
                                        <button class="btn btn-primary" @click="updateUserModel">Update</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </header>
</template>

<script>
import { Common } from "../../mixins/common";
import { baseurl } from "../../base_url";

export default {
    mixins: [Common, baseurl],
    data() {
        return {
            myModel: false,
            updatePassword: "",
            confirmUpdatePassword: "",
            menuOpen: false
        };
    },

    computed: {
        me() {
            return this.$store.state.me;
        }
    },
    mounted() {
        this.MenuBaseUrl = baseurl
        this.getData();
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        closeMenu() {
            this.menuOpen = false;
        },
        getData() {
            this.axiosGet('app-supporting-data', (response) => {
                this.$store.commit('me', response.user);
                setTimeout(() => {
                    $("#side-menu").metisMenu();
                })
            }, (error) => {
                this.errorNoti(error)
            })
        },
        logout() {
            this.axiosPost(
                "logout",
                {},
                () => {
                    localStorage.clear();
                    window.location.href = this.mainOrigin + "login";
                },
                (error) => {
                    this.errorNoti(error);
                    this.$router.push({ name: "Login" });
                }
            );
        },
        openUserModel() {
            this.myModel = true;
        },
        updateUserModel() {
            let url = "user/password-change";
            this.axiosPost(
                url,
                {
                    UserId: this.me.Id,
                    updatePassword: this.updatePassword,
                    confirmUpdatePassword: this.confirmUpdatePassword
                },
                (response) => {
                    this.successNoti(response.message);
                    this.myModel = false;
                },
                (error) => {
                    this.errorNoti(error);
                }
            );
        }
    }
};
</script>
<style scoped>
.wc-topbar {
    background: #10044A;
    color: #fff;
    min-height: 64px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 4px solid #ff9f1a;
}

.wc-container {
    width: 100%;
    padding: 0 16px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
}

.wc-brand {
    cursor: pointer;
    display: flex;
    align-items: center;
    min-width: 90px;
}
.wc-brand-text {
    font-weight: 700;
    letter-spacing: 0.5px;
    font-size: 18px;
    white-space: nowrap;
}

/* Desktop nav */
.wc-nav {
    display: flex;
    align-items: center;
    gap: 14px;
    flex: 1;
    overflow: hidden;
}
.wc-link {
    color: rgba(255,255,255,0.9);
    text-decoration: none;
    font-weight: 600;
    padding: 8px 10px;
    border-radius: 6px;
    white-space: nowrap;
}
.wc-link:hover {
    background: rgba(255,255,255,0.12);
    color: #fff;
}
.router-link-exact-active,
.router-link-active {
    background: rgba(255,255,255,0.18);
    color: #fff !important;
}

/* Right */
.wc-right {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
}
.wc-role {
    padding: 6px 10px;
    font-size: 12px;
    font-weight: 700;
    max-width: 220px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.wc-btn {
    background: transparent;
    border: 0;
    color: #fff;
    font-size: 20px;
    padding: 6px 10px;
    border-radius: 8px;
    cursor: pointer;
}
.wc-btn:hover {
    background: rgba(255,255,255,0.12);
}
.wc-btn.logout:hover {
    background: rgba(255, 0, 0, 0.18);
}

/* Burger hidden on desktop */
.wc-burger {
    display: none;
}

/* Mobile menu overlay */
.wc-mobile-panel {
    position: fixed;
    inset: 64px 0 0 0; /* under topbar */
    background: rgba(0,0,0,0.35);
    z-index: 999;
    padding: 12px;
    box-sizing: border-box;
}

.wc-mobile-card {
    background: #14085a;
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 12px;
    padding: 14px;
    box-shadow: 0 18px 45px rgba(0,0,0,0.35);
}

.wc-mobile-user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(255,255,255,0.12);
    margin-bottom: 10px;
}
.wc-mobile-name {
    font-weight: 800;
    font-size: 14px;
    opacity: 0.95;
}

.wc-mobile-links {
    display: grid;
    gap: 10px;
    margin-bottom: 12px;
}

.wc-m-link {
    display: block;
    padding: 10px 12px;
    border-radius: 10px;
    text-decoration: none;
    color: rgba(255,255,255,0.95);
    background: rgba(255,255,255,0.08);
    font-weight: 700;
}
.wc-m-link:hover {
    background: rgba(255,255,255,0.12);
}

.wc-mobile-logout {
    width: 100%;
    border: 0;
    padding: 10px 12px;
    border-radius: 10px;
    background: rgba(255, 0, 0, 0.18);
    color: #fff;
    font-weight: 800;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

/* Slide transition */
.wc-slide-enter-active,
.wc-slide-leave-active {
    transition: all .18s ease;
}
.wc-slide-enter,
.wc-slide-leave-to {
    opacity: 0;
    transform: translateY(-6px);
}

/* ✅ Responsive rules */
@media (max-width: 992px) {
    .wc-nav-desktop {
        display: none;
    }
    .wc-burger {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .wc-logout-desktop {
        display: none;
    }
    .topRightIcon{
        display: none;
    }
}

@media (max-width: 520px) {
    .wc-role-desktop {
        display: none;
    }
    .wc-container {
        padding: 0 12px;
    }
}

</style>
