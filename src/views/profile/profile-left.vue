<script>
export default {
    data() {
        return {
            user: {},
            loading: false,
        }
    },
    components: {},
    created() {
        this.loading = true;

        // 获取用户信息
        this.user = JSON.parse(localStorage.getItem('user'));
    }
}
</script>

<template>
    <div class="col-lg-3 col-md-3 col-12">
        <div class="card border-0 sidebar rounded shadow bg-white">
            <div class="card-body">
                <div class="text-center py-3 border-bottom">
                    <div class="rounded-circle avatar avatar-medium mx-auto shadow">
                        <v-gravatar :email="user.email"
                            alt="Nobody"
                            default-img="robohash"
                            :hostname="$gravatar_host"
                            class="rounded-circle"
                        />
                    </div>
                    <h5 class="mt-3">{{ user.nickname }}</h5>
                    <!-- router-link to="/settings">
                        <a class="btn btn-outline-light">编辑个人信息</a>
                    </router-link -->
                </div>
                <div class="mt-4">
                    <div class="media align-items-center mb-2">
                        <div class="media-body">
                            <i class="uil uil-mobile-android mr-3 text-muted"></i>
                            <span>{{ user.phone }}</span>
                        </div>
                    </div>
                    <div class="media align-items-center mb-2">
                        <div class="media-body">
                            <i class="uil uil-envelope mr-3 text-muted"></i>
                            <span>{{ user.email }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--end col-->
</template>
