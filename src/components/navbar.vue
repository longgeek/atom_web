<script>
/**
 * Navbar component
 */
export default {
    data() {
        return {
            user: {},
            isCondensed: false,
        };
    },
    props: {
        isWhiteNavbar: {
            type: Boolean,
        },
        navLight: {
            type: Boolean,
        },
    },
    created() {
        // 获取用户状态
        this.getLoginStatus();
    },
    mounted: () => {
        window.onscroll = function () {
            onwindowScroll();
        };

        function onwindowScroll() {
            if (
                document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50
            ) {
                document.getElementById("topnav").classList.add("nav-sticky");
            } else {
                document.getElementById("topnav").classList.remove("nav-sticky");
            }

            if (
                document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100
            ) {
                document.getElementById("back-to-top").style.display = "inline";
            } else {
                document.getElementById("back-to-top").style.display = "none";
            }
        }

        var links = document.getElementsByClassName("side-nav-link-ref");
        var matchingMenuItem = null;
        for (var i = 0; i < links.length; i++) {
            if (window.location.pathname === links[i].pathname) {
                matchingMenuItem = links[i];
                break;
            }
        }

        if (matchingMenuItem) {
            matchingMenuItem.classList.add("active");
            var parent = matchingMenuItem.parentElement;

            /**
             * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
             * We should come up with non hard coded approach
             */
            if (parent) {
                parent.classList.add("active");
                const parent2 = parent.parentElement;
                if (parent2) {
                    parent2.classList.add("active");
                    const parent3 = parent2.parentElement;
                    if (parent3) {
                        parent3.classList.add("active");
                        const parent4 = parent3.parentElement;
                        if (parent4) {
                            const parent5 = parent4.parentElement;
                            parent5.classList.add("active");
                        }
                    }
                }
            }
        }
    },
    methods: {
        /**
         * Toggle menu
         */
        toggleMenu() {
            this.isCondensed = !this.isCondensed;
            if (this.isCondensed) {
                document.getElementById("navigation").style.display = "block";
            } else document.getElementById("navigation").style.display = "none";
        },

        /**
         * Menu clicked show the submenu
         */
        onMenuClick(event) {
            event.preventDefault();
            const nextEl = event.target.nextSibling.nextSibling;

            if (nextEl && !nextEl.classList.contains("open")) {
                const parentEl = event.target.parentNode;
                if (parentEl) {
                    parentEl.classList.remove("open");
                }
                nextEl.classList.add("open");
            } else if (nextEl) {
                nextEl.classList.remove("open");
            }
            return false;
        },
        /**
         * 获取登录状态
         */
        getLoginStatus() {
            if (!localStorage.getItem('logintoken')) return;

            this.$http.get(this.$api.users.get())
                .then((rsp) => {
                    if (rsp.data.code === 200) {
                        this.user = rsp.data.data;
                        localStorage.setItem('nickname', rsp.data.data.nickname);
                        localStorage.setItem('phone', rsp.data.data.phone);
                        localStorage.setItem('roleNames', rsp.data.data.roleNames);
                        localStorage.setItem('roleTypes', rsp.data.data.roleTypes);
                        localStorage.setItem('userid', rsp.data.data.userId);
                    }
            })
        },
    },
};
</script>

<template>
    <div>
        <!-- Navbar STart -->
        <header
            id="topnav"
            class="defaultscroll sticky"
            :class="{ 'bg-white': isWhiteNavbar === true }"
        >
            <div class="container">
                <!-- Logo container-->
                <div>
                    <router-link class="logo" to="/" v-if="navLight !== true">
                        <img src="@/assets/images/logo-dark.svg" height="55" alt="" />
                    </router-link>
                    <router-link class="logo" to="/" v-else>
                        <img src="@/assets/images/logo-dark.svg" class="l-dark" height="55" alt="" />
                        <img
                            src="@/assets/images/logo-light.png"
                            class="l-light"
                            height="40"
                            alt=""
                        />
                    </router-link>
                </div>
                <div class="buy-button" v-if="Object.keys(user).length === 0">
                    <a
                        :href="$vars.loginUrl"
                        class="btn"
                        :class="{
                            'btn-light': navLight === true,
                            'btn-primary': navLight !== true,
                        }"
                        >登录</a
                    >
                </div>
                <ul class="buy-button list-inline mb-0" v-else>
                    <li class="list-inline-item mb-0">
                        <b-dropdown
                            class="btn-group mr-2"
                            variant="soft-primary"
                        >
                            <template #button-content>
                                <v-gravatar :email="user.email"
                                    alt="Nobody"
                                    default-img="robohash"
                                    :hostname="$gravatar_host"
                                    class="rounded-circle avatar avatar-ex-sm mx-auto"
                                />
                                <span class="ml-2">{{ user.nickname }}</span>
                            </template>
                            <b-dropdown-item to="/settings">个人信息</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item to="/logout">退出登录</b-dropdown-item>
                        </b-dropdown>
                    </li>
                </ul>
                <!--end login button-->
                <!-- End Logo container-->
                <div class="menu-extras">
                    <div class="menu-item">
                        <!-- Mobile menu toggle-->
                        <a
                            class="navbar-toggle"
                            @click="toggleMenu()"
                            :class="{ open: isCondensed === true }"
                        >
                            <div class="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                        <!-- End mobile menu toggle-->
                    </div>
                </div>

                <div id="navigation">
                    <!-- Navigation Menu-->
                    <ul
                        class="navigation-menu"
                        :class="{ 'nav-light': navLight === true }"
                    >
                        <li :class="{ active: $route.name == 'home'}">
                            <router-link to="/" class="side-nav-link-ref">首页</router-link>
                        </li>
                        <li :class="{ active: $route.name == 'project' || $route.name == 'project-detail' }">
                            <router-link to="/project" class="side-nav-link-ref">孵化项目</router-link>
                        </li>
                        <li :class="{ active: $route.name == 'partner'}">
                            <router-link to="/partner" class="side-nav-link-ref">合作者关系</router-link>
                        </li>
                        <li :class="{ active: $route.name == 'event' || $route.name == 'event-detail' }">
                            <router-link to="/event" class="side-nav-link-ref">社区活动</router-link>
                        </li>
                        <li :class="{ active: $route.name == 'aboutus'}">
                            <router-link to="/aboutus" class="side-nav-link-ref">关于我们</router-link>
                        </li>
                    </ul>
                    <!--end navigation menu-->
                    <div class="buy-menu-btn d-none">
                        <a :href="$vars.loginUrl" class="btn btn-primary">登录</a>
                    </div>
                    <!--end login button-->
                </div>
                <!--end navigation-->
            </div>
            <!--end container-->
        </header>
        <!--end header-->
        <!-- Navbar End -->
    </div>
</template>
