<script>
/**
 * Project component
 */
export default {
    page: { title: '孵化项目' },
    data() {
        return {
            projects: [],
        }
    },
    components: {},
    created() {
        // 获取捐赠项目列表
        this.$http.post(
            this.$api.projects.qryTypeList(),
            { qType: "new" }
        ).then((rsp) => {
            if (rsp.data.code === 200) {
                this.projects = rsp.data.data.records;
            }
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
                        <h4 class="title">孵化项目</h4>
                        <p class="text-muted para-desc mb-0 mx-auto">开放原子基金会对于捐赠回来的项目，会从基础服务、法律服务、IT 基础设施服务、社区运营管理方面进行多方位孵化，助力项目快速发展</p>
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

    <!-- Start Project -->
    <section class="section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-3 col-md-4 col-12 mt-4 pt-2 animate__animated animate__fadeIn"
                    v-for="(project, index) in projects" :key="index">
                    <router-link :to="{name: 'project-detail', query: {id: project.projectId}}">
                        <div class="card pricing-rates best-plan overflow-hidden text-center border-0 shadow rounded">
                            <div class="ribbon ribbon-right ribbon-cyan overflow-hidden"><span class="text-center d-block shadow small text-primary">孵化中</span></div>
                            <div class="card-body py-5">
                                <img :src="project.cover" class="mb-4" height="50" alt="">
                                <h6 class="title font-weight-bold mb-4">{{ project.title }}</h6>
                                <p class="text-muted">{{ project.intro }}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->
    </section>
    <!--end section-->
    <!-- End Project -->

    <!-- 项目孵化政策及条件蓝色背景展示 -->
    <!-- section class="section bg-primary pt-0">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="video-solution-cta position-relative" style="z-index: 1;">
                        <div class="content mt-md-4 pt-md-2">
                            <div class="row justify-content-center">
                                <div class="col-lg-10 text-center">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 mt-4 pt-2">
                                            <div class="section-title text-md-left">
                                                <h2 class="text-white h1 icon2"><i class="uil uil-envelope-heart"></i></h2>
                                                <h5 class="text-white title-dark mb-0">
                                                    项目孵化政策及条件
                                                </h5>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 mt-5 pt-2">
                                            <div class="section-title text-md-left">
                                                <ul class="list-unstyled text-white mb-0">
                                                    <li class="mb-0">
                                                        <span class="text-white-50 h5 mr-2">
                                                            <i class="uil uil-check-circle align-middle"></i>
                                                        </span>
                                                        推荐使用宽松类许可证，遵循基金会的知识产权策略。
                                                    </li>
                                                    <li class="mb-0">
                                                        <span class="text-white-50 h5 mr-2">
                                                            <i class="uil uil-check-circle align-middle"></i>
                                                        </span>
                                                        使用包含专利授权条款的开源许可证或就自有专利做出充分授权。
                                                    </li>
                                                    <li class="mb-0">
                                                        <span class="text-white-50 h5 mr-2">
                                                            <i class="uil uil-check-circle align-middle"></i>
                                                        </span>
                                                        需要有独特的价值，包括技术先进性、市场前景、生态促进等作用。
                                                    </li>
                                                    <li class="mb-0">
                                                        <span class="text-white-50 h5 mr-2">
                                                            <i class="uil uil-check-circle align-middle"></i>
                                                        </span>
                                                        合理的社区开放和发展策略。
                                                    </li>
                                                    <li class="mb-0">
                                                        <span class="text-white-50 h5 mr-2">
                                                            <i class="uil uil-check-circle align-middle"></i>
                                                        </span>
                                                        至少有一家理事单位或者一个技术监督委员会成员提名。
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section -->
    <!--end section-->

    <!-- 项目孵化政策及条件黑色背景展示 -->
    <div class="container-fluid px-0">
        <div class="py-5 bg-footer">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <div class="section-title">
                            <div class="media">
                                <i class="uil uil-shield-check display-4 text-white title-dark"></i>
                                <div class="media-body ml-4">
                                    <h6 class="font-weight-bold text-light title-dark mt-4">项目孵化政策及条件：</h6>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-md-8 mt-4 mt-sm-0">
                        <div class="text-md-right ml-5 ml-sm-0">
                            <a href="javascript:void(0)" class="btn btn-soft-primary">
                                <div class="section-title text-md-left">
                                    <ul class="list-unstyled text-white mb-0">
                                        <li class="mb-0">
                                            <span class="text-white-50 h5 mr-2">
                                                <i class="uil uil-check-circle align-middle"></i>
                                            </span>
                                            推荐使用宽松类许可证，遵循基金会的知识产权策略。
                                        </li>
                                        <li class="mb-0">
                                            <span class="text-white-50 h5 mr-2">
                                                <i class="uil uil-check-circle align-middle"></i>
                                            </span>
                                            使用包含专利授权条款的开源许可证或就自有专利做出充分授权。
                                        </li>
                                        <li class="mb-0">
                                            <span class="text-white-50 h5 mr-2">
                                                <i class="uil uil-check-circle align-middle"></i>
                                            </span>
                                            需要有独特的价值，包括技术先进性、市场前景、生态促进等作用。
                                        </li>
                                        <li class="mb-0">
                                            <span class="text-white-50 h5 mr-2">
                                                <i class="uil uil-check-circle align-middle"></i>
                                            </span>
                                            合理的社区开放和发展策略。
                                        </li>
                                        <li class="mb-0">
                                            <span class="text-white-50 h5 mr-2">
                                                <i class="uil uil-check-circle align-middle"></i>
                                            </span>
                                            至少有一家理事单位或者一个技术监督委员会成员提名。
                                        </li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </div><!--end div-->
    </div><!--end container-->
    <!-- End -->
</div>
</template>
