<script>
import {
    Carousel,
    Slide
} from 'vue-carousel';

/**
 * Page-history component
 */
export default {
    page: { title: '社区活动' },
    data() {
        return {
            events: [],
            columns: [],
        }
    },
    components: {},
    created() {
        // 获取活动列表
        this.$http.post(
            this.$api.events.qryTypeList(),
            { qType: "new" }
        ).then((rsp) => {
            if (rsp.data.code === 200) {
                this.events = rsp.data.data.records;
            }
        })

        // 获取专栏列表
        this.$http.get(this.$api.column.list())
            .then((rsp) => {
                if (rsp.data.code === 200) {
                    this.columns = rsp.data.data;
                }
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
                        <h4 class="title"> 社区活动 </h4>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->
    </section>
    <!--end section-->
    <div class="position-relative">
        <div class="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!-- Hero End -->

    <!-- 竖长条 形式 -->
    <section class="section section-event">
        <div class="container">
            <div class="row">
                <!-- div class="col-lg-6 col-12">
                    <div class="card blog rounded border-0 shadow overflow-hidden mb-4 pb-2 animate__animated animate__bounceInLeft"
                        v-for="(event, index) in events" :key="index" v-if="index % 2 === 1"
                    >
                        <router-link :to="{name: 'event-detail', query: {id: event.eventId}}">
                            <div class="row align-items-center no-gutters">
                                <div class="col-md-6">
                                    <img :src="event.cover" class="img-fluid" alt="">
                                    <div class="overlay bg-dark"></div>
                                    <div class="author">
                                        <small class="text-light user d-block"><i class="uil uil-map-marker"></i> {{ event.hostCity }}</small>
                                        <small class="text-light date"><i class="uil uil-calendar-alt"></i> {{ event.conveneTime }}</small>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body content">
                                        <h6><a href="javascript:void(0)" class="card-title title text-dark">{{ event.title }}</a></h6>
                                        <p class="text-muted mb-0">{{ event.intro | limitTo(50) }}<span v-if="event.intro.length >= 50">...</span></p>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div -->


                <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2" v-for="(column, index) in columns" :key="index">
                    <router-link :to="{name: 'event-column', query: {id: column.columnId}}">
                        <div class="card blog rounded border-0 shadow overflow-hidden">
                            <div class="position-relative">
                                <img src="images/event/column/column-banner.jpg" class="card-img-top" alt="..." />
                                <div class="overlay bg-dark"></div>
                            </div>
                            <div class="position-relative">
                                <div class="shape overflow-hidden text-white">
                                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="card-body content">
                                <h6 class="text-dark">{{ column.columnTitle }}</h6>
                                <p class="text-muted mt-3">{{ column.columnDescribe | limitTo(110) }}</p>
                                <ul class="list-unstyled d-flex justify-content-between border-top mt-3 pt-3 mb-0">
                                    <li class="text-muted small">{{ column.conveneTime }}</li>
                                    <li class="text-muted small">{{ column.hostCity }}</li>
                                </ul>
                            </div>
                        </div>
                        <!--end card / course-blog-->
                    </router-link>
                </div>
                <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2" v-for="(event, index) in events" :key="index">
                    <router-link :to="{name: 'event-detail', query: {id: event.eventId}}">
                        <div class="card blog rounded border-0 shadow overflow-hidden">
                            <div class="position-relative">
                                <img :src="event.cover" class="card-img-top" alt="..." />
                                <div class="overlay bg-dark"></div>
                            </div>
                            <div class="position-relative">
                                <div class="shape overflow-hidden text-white">
                                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="card-body content">
                                <h6 class="text-dark">{{ event.title }}</h6>
                                <p class="text-muted mt-3">{{ event.intro | limitTo(110) }}...</p>
                                <ul class="list-unstyled d-flex justify-content-between border-top mt-3 pt-3 mb-0">
                                    <li class="text-muted small">{{ event.conveneTime }}</li>
                                    <li class="text-muted small">{{ event.hostCity }}</li>
                                </ul>
                            </div>
                        </div>
                        <!--end card / course-blog-->
                    </router-link>
                </div>
                <!--end col-->
            </div>
        </div>
    </section>
    <!--竖长条形式 End-->

    <!-- 横长条 形式 -->
    <!-- section class="section section-event">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12">
                    <div class="card blog rounded border-0 shadow overflow-hidden mb-4 pb-2 animate__animated animate__bounceInLeft"
                        v-for="(event, index) in events" :key="index" v-if="index % 2 === 1"
                    >
                        <router-link :to="{name: 'event-detail', query: {id: event.eventId}}">
                            <div class="row align-items-center no-gutters">
                                <div class="col-md-6">
                                    <img :src="event.cover" class="img-fluid" alt="">
                                    <div class="overlay bg-dark"></div>
                                    <div class="author">
                                        <small class="text-light user d-block"><i class="uil uil-map-marker"></i> {{ event.hostCity }}</small>
                                        <small class="text-light date"><i class="uil uil-calendar-alt"></i> {{ event.conveneTime }}</small>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body content">
                                        <h6><a href="javascript:void(0)" class="card-title title text-dark">{{ event.title }}</a></h6>
                                        <p class="text-muted mb-0">{{ event.intro | limitTo(50) }}<span v-if="event.intro.length >= 50">...</span></p>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>

                <div class="col-lg-6 col-12">
                    <div class="card blog rounded border-0 shadow overflow-hidden mb-4 pb-2 animate__animated animate__bounceInRight"
                        v-for="(event, index) in events" :key="index" v-if="index % 2 === 0"
                    >
                        <router-link :to="{name: 'event-detail', query: {id: event.eventId}}">
                            <div class="row align-items-center no-gutters">
                                <div class="col-md-6 order-2 order-md-1">
                                    <div class="card-body content">
                                        <h6>
                                            <a href="javascript:void(0)" class="card-title title text-dark">
                                                {{ event.title | limitTo(30) }}
                                                <span v-if="event.title.length >= 30">...</span>
                                            </a>
                                        </h6>
                                        <p class="text-muted mb-0">
                                            {{ event.intro | limitTo(50) }}
                                            <span v-if="event.intro.length >= 50">...</span>
                                        </p>
                                    </div>
                                </div>

                                <div class="col-md-6 order-1 order-md-2">
                                    <img :src="event.cover" class="img-fluid" alt="">
                                    <div class="overlay bg-dark"></div>
                                    <div class="author">
                                        <small class="text-light user d-block"><i class="uil uil-map-marker"></i> {{ event.hostCity }}</small>
                                        <small class="text-light date"><i class="uil uil-calendar-alt"></i> {{ event.conveneTime }}</small>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section -->
    <!--横长条形式 End-->

    <!-- Timeline 形式 -->
    <!-- section class="section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <div class="main-icon rounded-pill text-primary text-center mt-4 pt-2">
                        <i class="uil uil-star"></i>
                    </div>
                    <div class="timeline-page pt-2 position-relative">
                        <router-link to="/">
                            <div class="timeline-item mt-4"
                                v-for="(event, index) in events" :key="index"
                            >
                                <div class="row" v-if="index % 2 === 1">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="duration date-label-left border rounded p-2 px-4 position-relative shadow">
                                            {{ event.conveneTime }}
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="card event event-description-right rounded shadow border-0 overflow-hidden float-left pricing-rates best-plan">
                                            <img :src="event.cover" class="img-fluid" alt="">
                                            <div class="card-body">
                                                <h5 class="mb-0 text-capitalize">【{{ event.title }}】</h5>
                                                <p>- {{ event.hostCity }}</p>
                                                <p class="mt-3 mb-0 text-muted">{{ event.intro }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" v-if="index % 2 === 0">
                                    <div class="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2">
                                        <div class="card event event-description-left rounded shadow border-0 overflow-hidden float-left pricing-rates best-plan">
                                            <img :src="event.cover" class="img-fluid" alt="">
                                            <div class="card-body">
                                                <h5 class="mb-0 text-capitalize">【{{ event.title }}】</h5>
                                                <p>{{ event.hostCity }} -</p>
                                                <p class="mt-3 mb-0 text-muted">{{ event.intro }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                        <div class="duration duration-right rounded border p-2 px-4 position-relative shadow text-left">2006</div>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section -->
    <!--end section-->
</div>
</template>
