<script setup>
    import { ref } from 'vue'

    // side nav toggle
    const sideNavIsToggled = ref(true);

</script>

<template>
    <!-- wrapper -->
    <div class="h-full-screen uk-width-1-1 uk-flex">
        <!-- left side nav -->
        <div v-show="sideNavIsToggled" class="h-full-screen uk-visible@m left-side-nav border-r uk-width-1-5">
            <!-- side nav item -->
            <a href="#" class="side-nav-item-active uk-padding-small uk-text-bold uk-text-emphasis uk-flex uk-flex-between uk-flex-middle uk-text-decoration-none">
                <span class="uk-flex uk-flex-middle">
                    <span uk-icon="desktop" class="uk-margin-small-right"></span>
                    <span>Dashboard</span>
                </span>
                <!-- notifications -->
                <span class="uk-badge">100</span>
            </a>
            <!-- side nav item -->
            <a href="#" class="side-nav-item uk-padding-small uk-text-bold uk-text-emphasis uk-flex uk-flex-between uk-flex-middle uk-text-decoration-none">
                <span class="uk-flex uk-flex-middle">
                    <span uk-icon="file-text" class="uk-margin-small-right"></span>
                    <span>Documents</span>
                </span>
                <!-- notifications -->
                <span class="uk-badge">20</span>
            </a>
        </div>
        <!-- wrapper -->
        <div class="h-full-screen uk-width-1-1">
            <!-- top nav -->
            <div class="admin-top-nav border-b uk-flex uk-flex-middle">
                <!-- nav -->
                <div class="uk-flex uk-width-1-1 uk-padding-small uk-flex-between uk-flex-middle">
                    <!-- left -->
                    <div class="uk-flex uk-flex-middle">
                        <!-- menu -->
                        <a href="" @click.prevent="sideNavIsToggled = !sideNavIsToggled" class="uk-icon-button  uk-margin-small-right" uk-icon="menu"></a>
                        <!-- dashboard title and home link -->
                        <router-link :to="{name: 'admin dashboard'}" class="uk-text-lead uk-text-decoration-none uk-text-default uk-text-bold">
                            Mneti POS Platform
                        </router-link>
                    </div>
                    <!-- right -->
                    <div>
                        <!-- notifications -->
                        <span class="uk-inline uk-margin-small-right">
                            <a href="#adminOffcanvasNotifications" uk-toggle class="uk-icon-button uk-margin-small-right" uk-icon="bell"></a>
                            <span class="uk-badge uk-position-top-right">55+</span>
                        </span>
                        
                        <!-- profile -->
                        <div class="uk-inline">
                            <button class="uk-icon-button  uk-margin-small-right" uk-icon="user">
                            </button>
                            <div uk-dropdown="mode: click">
                                <ul class="uk-nav uk-dropdown-nav">
                                    <li>
                                        <a href="#">
                                            <span uk-icon="user" class="uk-margin-small-right	"></span>
                                            <span>My Account</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span uk-icon="settings" class="uk-margin-small-right	"></span>
                                            <span>Settings</span>
                                        </a>
                                    </li>
                                    <li class="uk-nav-divider"></li>
                                    <li>
                                        <a href="#">
                                            <span uk-icon="sign-out" class="uk-margin-small-right	"></span>
                                            <span>Logout</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- main content -->
            <div class="main-content">
                <div class="uk-padding-small">
                    <!-- page title -->
                    <div class="uk-text-lead uk-text-decoration-none uk-text-default uk-text-bold">
                        Dashboard
                    </div>
                    
                    <!-- slot -->
                    <slot></slot>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.left-side-nav{
    overflow-y: auto;
}
.admin-top-nav{
    height: 8%;
}
.main-content{
    height: 92%;
    overflow-y: auto;
}
.side-nav-item:hover,
.side-nav-item-active{
    background-color: rgb(226 232 240);
}
</style>