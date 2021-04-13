<script>
/**
 * event-detail component
 */
export default {
    page: { title: '活动详情' },
    data() {
        return {
           event: {},
        }
    },
    created() {
        if (!this.$route.query.id) this.$router.push('/error');

        // 获取活动详情
        this.$http.get(
            this.$api.events.qryDetail(),
            { eventId: this.$route.query.id }
        ).then((rsp) => {
            if (rsp.data.code === 200) this.event = rsp.data.data;
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
                        <h5 class="title mt-4 mb-3"> {{ event.title }} </h5>
                        <ul class="list-unstyled">
                            <li class="list-inline-item text-primary mr-3">
                                <i class="mdi mdi-map-marker text-warning mr-2"></i>{{ event.hostCity }}
                            </li>
                        </ul>
                        <div class="page-next">
                            <nav aria-label="breadcrumb" class="d-inline-block">
                                <ul class="breadcrumb bg-white rounded shadow mb-0">
                                    <li class="breadcrumb-item">
                                        <router-link to="/">首页</router-link>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <router-link to="/event">社区活动</router-link>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">活动详情</li>
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
                    <p class="text-muted">活动时间：{{ event.conveneTime }}</p>
                    <div class="bg-light rounded p-4">
                        <p class="text-muted font-italic mb-0">{{ event.intro }}</p>
                    </div>
                    <img :src="event.cover" alt="" class="img-fluid rounded-md shadow mb-5 mt-5">
                    <div class="event-detail" v-html="$options.filters.toMarkDown(event.content)"></div>
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
