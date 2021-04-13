<script>
/**
 * event-detail component
 */
export default {
    page: { title: '活动详情' },
    data() {
        return {
           item: {},
        }
    },
    created() {
        if (!this.$route.query.id) this.$router.push('/error');

        // 获取活动详情
        this.$http.get(
            this.$api.news.detail(),
            { commonId: this.$route.query.id }
        ).then((rsp) => {
            if (rsp.data.code === 200) this.item = rsp.data.data;
        })
    }
}
</script>

<template>
<div>
    <!-- Hero Start -->
    <section class="bg-half bg-light d-table w-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <div class="page-next-level">
                        <h5 class="title mt-4 mb-3"> {{ item.title }} </h5>
                        <div class="page-next">
                            <nav aria-label="breadcrumb" class="d-inline-block">
                                <ul class="breadcrumb bg-white rounded shadow mb-0">
                                    <li class="breadcrumb-item">
                                        <router-link to="/">首页</router-link>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">消息内容</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->
    </section>
    <!--end section-->
    <!-- Hero End -->

    <!-- Shape Start -->
    <div class="position-relative">
        <div class="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!--Shape End-->

    <!-- Event Detail Start -->
    <section class="section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="bg-light rounded p-4 mb-5">
                        <p class="text-muted font-italic mb-0">{{ item.intro }}</p>
                    </div>
                    <div class="event-detail" v-html="$options.filters.toMarkDown(item.content)"></div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->
    </section>
    <!--end section-->
    <!-- Event Detail End -->
</div>
</template>
