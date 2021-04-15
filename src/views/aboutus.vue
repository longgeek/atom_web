<script>
import TOC from "@/components/toc";
import Council from "@/components/council";
import Secretariat from "@/components/secretariat";

import { Carousel, Slide } from "vue-carousel";

/**
 * Page-aboutus component
 */
export default {
    page: { title: '关于我们' },
    data() {
        return {
            setup: '',
            tocData: [],
        };
    },
    components: {
        TOC,
        Council,
        Secretariat,
        Slide,
        Carousel,
    },
    created() {
        this.setup = this.$moment("20200612", "YYYYMMDD").fromNow().replace('前', '');

        // 获取 TOC 成员列表
        this.$http.get(this.$api.members.list())
            .then((rsp) => {
                if (rsp.data.code === 200) {
                    this.tocData = rsp.data.data.rows;
                    console.log(this.tocData);
                }
            })
    }
};
</script>

<template>
    <div>
        <!-- Hero Start -->
        <section class="bg-half bg-light d-table w-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12 text-center">
                        <div class="page-next-level">
                            <h4 class="title">关于我们</h4>
                            <p class="text-muted para-desc mb-0 mx-auto">
                                开放原子开源基金会由<b class="text-primary"> 理事会</b>、<b class="text-primary">技术监督委员会</b>、<b class="text-primary">秘书处 </b>三个部分组成
                            </p>
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
                <svg
                    viewBox="0 0 2880 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>
        </div>
        <!--Shape End-->

        <!-- About Start -->
        <section class="section border-bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 col-md-5">
                        <div class="row">
                            <div class="col-lg-12 col-md-6">
                                <div class="media key-feature align-items-center p-3 rounded shadow text-center bg-light">
                                    <div class="media-body">
                                        <h6 class="mb-2">使命</h6>
                                        <p class="text-muted mb-0">一切为了开发者，一切为了全世界</p>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->

                            <div class="col-lg-12 col-md-6">
                                <div class="media key-feature align-items-center p-3 rounded shadow text-center bg-light">
                                    <div class="media-body">
                                        <h6 class="mb-2">愿景</h6>
                                        <p class="text-muted mb-0">成为国际一流的开源基金会</p>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->

                            <div class="col-lg-12 col-md-6">
                                <div class="media key-feature align-items-center p-3 rounded shadow text-center bg-light">
                                    <div class="media-body">
                                        <h6 class="mb-2">价值观</h6>
                                        <p class="text-muted mb-0">追求卓越，开放透明，务实奉献</p>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                    <!--end col-->

                    <div class="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div class="section-title ml-lg-4">
                            <div class="d-flex mb-4">
                                <span class="text-primary h1 mb-0">
                                    <span class="counter-value display-1 font-weight-bold" data-count="15">{{ setup.split(' ')[0] }}</span>+
                                </span>
                                <span class="h6 align-self-end ml-2">{{ setup.split(' ')[1] }} <br> 成立</span>
                            </div>
                            <h5 class="mb-4">开放原子开源基金会</h5>
                            <p class="text-muted">
                                开放原子开源基金会是开源项目的孵化器、连接器和倍增器。
                                <br />
                                通过对开源代码的开放治理以便于形成事实标准，连接产学研共建开源生态，为开源项目找到更多的应用场景。
                            </p>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>
            <!--end container-->
        </section>
        <!--end section-->

        <!-- 理事会 Start -->
        <section class="section border-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="section-title mb-4 pb-2">
                            <h5 class="mb-4">理事会</h5>
                            <p class="text-muted para-desc mx-auto mb-0">
                                开源基金会的立法机构是理事会，负责审议和修改基金会章程等。理事会设理事长、副理事长和秘书长，从理事中选举产生，理事长是基金会的法定代表人。
                            </p>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->

                <Council />
            </div>
            <!--end container-->
        </section>
        <!-- 理事会 End -->

        <!-- TOC Start -->
        <section class="section border-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="section-title mb-4 pb-2">
                            <h5 class="mb-4">名人堂 — 技术监督委员会</h5>
                            <p class="text-muted para-desc mx-auto mb-0">
                                开放原子开源基金会技术监督委员会（Technical Oversight Committee，简称<span class="text-primary font-weight-bold"> “TOC” </span>）
                                <br />
                                是中立的技术决策机构，负责开源基金会技术相关的决策，项目孵化的评审等。
                            </p>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->

                <TOC :toc-data="tocData" />
            </div>
            <!--end container-->
        </section>
        <!-- TOC End -->

        <!-- 秘书处 Start -->
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="section-title mb-4 pb-2">
                            <h5 class="mb-4">秘书处</h5>
                            <p class="text-muted para-desc mx-auto mb-0">
                                秘书处是开源基金会的执行机构，负责开源基金会日常运营事务等相关工作，由专职的团队提供法务、营销、社区运营、基础设施建设等支撑工作。
                            </p>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->

                <Secretariat />
            </div>
            <!--end container-->
        </section>
        <!-- 秘书处 End -->
    </div>
</template>

<style>
.modal-content {
    background-color: transparent;
}
</style>
