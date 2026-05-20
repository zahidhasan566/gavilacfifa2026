<template>
    <div id="wrapper" :class="wrapperClass">
        <Topbar v-if="!showSidebar" />
        <Navbar v-if="showSidebar" />
        <LeftSidebar v-if="showSidebar" />

        <!-- ✅ Make content-page a flex column -->
        <div class="content-page" :class="contentClass">
            <div :class="{ content: showSidebar }" class="content-flex">

                <!-- ✅ Only router content scrolls -->
                <div class="container-fluid page-body" :class="{ 'no-sidebar-container': !showSidebar }">
                    <router-view />
                </div>

                <!-- ✅ Footer is OUTSIDE page-body -->
                <Footer />
            </div>
        </div>
    </div>
</template>


<script>
import Sidebar from './Sidebar'
import Footer from './Footer'
import Navbar from "./Navbar.vue"
import LeftSidebar from "./LeftSidebar.vue"
import Topbar from "./Topbar.vue";
export default {
    components: {
        LeftSidebar,
        Navbar,
        Sidebar,
        Footer,
        Topbar
    },
    computed: {
        showNavbar() {
            const userRole = localStorage.getItem('user_role');
            return userRole === 'Admin';
        },
        showSidebar() {
            const userRole = localStorage.getItem('user_role');
            return userRole === 'Admin';
        },
        wrapperClass() {
            // Add a class when navbar/sidebar are hidden
            return !this.showNavbar ? 'no-sidebar' : '';
        },
        contentClass() {
            // Remove margin/padding when sidebar is hidden
            return !this.showSidebar ? 'full-width' : '';
        }
    }
}
</script>

<style scoped>

/* When no sidebar, make content full width */
.no-sidebar .content-page.full-width {
    margin-left: 0 !important;
    padding-left: 0 !important;
}
.no-sidebar-container {
    margin-left: 0 !important;
    padding-left: 0 !important;
    max-width: 100% !important;
    padding-right: 0px !important;

}
/* Adjust content page to take full width */
.content-page.full-width {
    margin-left: 0 !important;
}
</style>
