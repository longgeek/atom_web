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
        <div class="animation-flying-icon-1">
            <i class="uil uil-users-alt text-primary effect-icon"></i>
        </div>
        <div class="animation-flying-icon-2">
            <i class="uil uil-podium text-warning effect-icon"></i>
        </div>
        <div class="animation-flying-icon-3">
            <i class="uil uil-megaphone text-info effect-icon"></i>
        </div>
        <div class="animation-flying-icon-4">
            <i class="uil uil-gift text-danger effect-icon"></i>
        </div>
        <div class="animation-flying-icon-5">
            <i class="uil uil-brain text-primary effect-icon"></i>
        </div>
        <div class="animation-flying-icon-6">
            <i class="uil uil-schedule text-danger effect-icon"></i>
        </div>
        <div class="animation-flying-icon-7">
            <i class="uil uil-robot text-info effect-icon"></i>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <div class="page-next-level">
                        <h5 class="title mt-4 mb-3"> {{ event.title }} </h5>
                        <p class="text-muted para-desc mx-auto">{{ event.intro }}</p>
                        <ul class="list-unstyled text-warning">
                            <li class="list-inline-item mr-3">
                                <i class="uil uil-map-marker mr-2"></i>{{ event.hostCity }}
                            </li>
                            <li class="list-inline-item mr-3">
                                <i class="uil uil-calendar-alt mr-2"></i>{{ event.conveneTime.split(' ')[0] }}
                            </li>
                        </ul>
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
                    <img :src="event.cover" alt="" class="img-fluid rounded-md shadow mb-5">
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
