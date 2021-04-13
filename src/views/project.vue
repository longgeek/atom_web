<script>
import { ArrowRightIcon } from 'vue-feather-icons';

/**
 * Project component
 */
export default {
    page: { title: '孵化项目' },
    data() {
        return {
            projects: {"records":[{"projectId":"ec1e2150fdf64fc3be5416352ad4fbb2","title":"AliOS Things","intro":"AliOS Things 是面向 IoT 领域的轻量级物联网嵌入式操作系统。","cover":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL2prbG8vanJxdy90aGluZ3NfaWNvbl8yMDIwMTIyNTIzMDUzNS5wbmc=","status":"inc","ownerId":"","personInCharge":"","label":"","allowVoting":"1"},{"projectId":"65c4b7304fc24330bd25f0435d8a1dd5","title":"TencentOS Tiny","intro":"TencentOS Tiny 是腾讯公司孵化的一款低功耗、低资源占用物联网的终端操作系统。","cover":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlLzljeWIvd3FyMi90aW55XzIwMjAxMjI1MjMxNjAyLnBuZw==","status":"inc","ownerId":"","personInCharge":"","label":"","allowVoting":"1"},{"projectId":"b3c450c39c0540b28061a58b8d1c1735","title":"UBML","intro":"UBML 建模开发体系是浪潮开源的面向企业软件的低代码开发平台核心基础。","cover":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL3B6cjQvMTA0ci91Ym1sX2ljb25fMjAyMDEyMjUyMzI0MTYucG5n","status":"inc","ownerId":"","personInCharge":"","label":"","allowVoting":"1"},{"projectId":"d7417b183f064dd2a7662762cffdc62d","title":"TKEStack","intro":"TKEStack 是腾讯开源的一款集强壮性和易用性于一身的企业级容器编排引擎。","cover":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL3VocmwvMG1saS90a2VfaWNvbl8yMDIwMTIyNTIzMjQ0Mi5wbmc=","status":"inc","ownerId":"","personInCharge":"","label":"","allowVoting":"1"},{"projectId":"7818e9ecf0354770b6f97eb1603061f1","title":"PIKA","intro":"PIKA 是 360 DBA 和基础架构组联合开发的类 Redis 存储系统。","cover":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlLzNhd3ovbHE3Mi9waWthX2ljb25fMjAyMDEyMjUyMzI1MjIucG5n","status":"inc","ownerId":"","personInCharge":"","label":"","allowVoting":"1"},{"projectId":"3a2f7aead45c4a5081574842f0cbc515","title":"OpenHarmony","intro":"OpenHarmony 的定位是一款面向全场景的开源分布式操作系统。","cover":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL2prcGUvOGtjay9vcGVuaGFybW9ueV9pY29uXzIwMjAxMjI1MjMyNTMzLnBuZw==","status":"inc","ownerId":"","personInCharge":"","label":"","allowVoting":"1"},{"projectId":"f8cac36ea2244e9580f8aacb87a20c69","title":"XuperChain (待更名)","intro":"XuperChain 是百度公司自主研发的底层区块链技术。","cover":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL3h5YjAvNnc2YS94dXBlcmNoYWluX2ljb25fMjAyMDEyMjUyMzI1NDYucG5n","status":"inc","ownerId":"","personInCharge":"","label":"","allowVoting":"1"},{"projectId":"4c4690a0860a11eb8458b78589532e3f","title":"ZNBase","intro":"ZNBase是浪潮开源的云原生分布式数据库。","cover":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL3M0dzkvMWtidi9aTmJhc2UtbG9nbzFfMjAyMTAzMTYxMzI5MDQuc3Zn","status":"inc","ownerId":"","personInCharge":"","label":"","allowVoting":"1"}],"counts":8},
        }
    },
    components: {
        ArrowRightIcon
    },
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
                        <div class="page-next">
                            <nav aria-label="breadcrumb" class="d-inline-block">
                                <ul class="breadcrumb bg-white rounded shadow mb-0">
                                    <li class="breadcrumb-item">
                                        <router-link to="/">首页</router-link>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">孵化项目</li>
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
    <div class="position-relative aaa">
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
                    v-for="(project, index) in projects.records" :key="index">
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
