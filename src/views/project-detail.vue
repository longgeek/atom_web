<script>
/**
 * project-detail component
 */
export default {
    page: { title: '项目详情' },
    data() {
        return {
            project: {},
        }
    },
    components: {},
    created() {
        if (!this.$route.query.id) this.$router.push('/error');

        // 获取项目详情
        this.$http.get(
            this.$api.projects.qryDetail(),
            { projectId: this.$route.query.id }
        ).then((rsp) => {
            if (rsp.data.code === 200)  this.project = rsp.data.data;
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
                        <img :src="project.cover" class="avatar avatar-medium" alt="">
                        <h4 class="title mt-4 mb-3"> {{ project.title }} </h4>
                        <p class="para-desc mx-auto text-muted">{{ project.intro }}</p>
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

    <!-- Project Detail Start -->
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-5 col-12">
                    <div class="card sidebar sticky-bar rounded shadow border-0">
                        <div class="card-body widget border-bottom">
                            <h6 class="mb-0">基本信息
                                <span class="badge badge-outline-primary float-right"> 孵化中 </span>
                            </h6>
                        </div>

                        <div class="card-body">
                            <div class="media widget align-items-center">
                                <i class="uil uil-users-alt icon-ex-md mr-3 h4"></i>
                                <div class="media-body">
                                    <h6 class="font-size-14">社区:</h6>
                                    <a class="text-primary wrap" :href="project.projectEmail" target="_blank">
                                        {{ project.projectEmail }}
                                    </a>
                                </div>
                            </div>

                            <div class="media widget align-items-center mt-3">
                                <i class="uil uil-code-branch icon-ex-md mr-3 h4"></i>
                                <div class="media-body">
                                    <h6 class="font-size-14">仓库:</h6>
                                    <a class="text-primary wrap" :href="project.projectCode" target="_blank">
                                        {{ project.projectCode }}
                                    </a>
                                </div>
                            </div>

                            <div class="media widget align-items-center mt-3">
                                <i class="uil uil-search icon-ex-md mr-3 h4"></i>
                                <div class="media-body">
                                    <h6 class="font-size-14">探索:</h6>
                                    <a class="text-primary wrap" :href="project.projectDownload" target="_blank">
                                        {{ project.projectDownload }}
                                    </a>
                                </div>
                            </div>

                            <div class="media widget align-items-center mt-3">
                                <i class="uil uil-clock icon-ex-md mr-3 h4"></i>
                                <div class="media-body">
                                    <h6 class="font-size-14">加入时间:</h6>
                                    <p class="text-primary mb-0 mb-0">{{ project.createTime }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-8 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="ml-lg-4 project-detail" v-html="$options.filters.toMarkDown(project.content)"></div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->
    </section>
    <!--end section-->
    <!-- Project Detail End -->
</div>
</template>
