<script>
import { ArrowRightIcon } from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";
import { VueTyper } from "vue-typer";
import countTo from "vue-count-to";

/**
 * Index-landing-one component
 */
export default {
    page: { title: '首页' },
    data() {
        return {
            news: [],
            projects: [],
        };
    },
    components: {
        ArrowRightIcon,
        Carousel,
        Slide,
        countTo,
        "vue-typer": VueTyper,
    },
    created() {
        // 获取最新公告消息
        this.$http.post(
            this.$api.news.list(),
            { type: "news", size: 1 }
        ).then((rsp) => {
            if (rsp.data.code === 200) {
                this.news = rsp.data.data.records;
            }
        })

        // 获取孵化项目
        this.$http.post(
            this.$api.projects.qryTypeList(),
            { qType: "new", size: 8 }
        ).then((rsp) => {
            if (rsp.data.code === 200) {
                this.projects = rsp.data.data.records;
            }
        })
    },
    method: {
        aaa() {
            console.log('---');
        }
    }
};
</script>

<template>
    <div>
        <!-- Index Main Start -->
        <section class="bg-half-170 border-bottom d-table w-100 home-wrapper overflow-hidden">
            <div class="container">
                <div class="row position-relative" style="z-index: 1">
                    <div class="col-md-6 col-12">
                        <div class="title-heading">
                            <carousel
                                v-if="news.length"
                                class="owl-carousel owl-theme mb-3"
                                dir="ltr"
                                :per-page="1"
                                :loop="true"
                                :speed="0"
                                :autoplay="true"
                                :scrollPerPage="false"
                                :paginationEnabled="false"
                            >
                                <Slide v-for="(item, index) of news" :key="index">
                                    <router-link :to="{name: 'news-detail', query: {id: item.commonId}}">
                                        <div class="alert alert-transparent alert-pills shadow m-1" role="alert">
                                            <span class="badge badge-pill badge-primary mr-2">New</span>
                                            <span class="content text-dark">{{ item.title }}</span>
                                        </div>
                                    </router-link>
                                </Slide>
                            </carousel>
                            <h2 class="title-dark mb-4">
                                开放原子开源基金会
                                <h4 class="mt-2 index-typer">
                                    <vue-typer
                                        :text="[
                                            '致力于推动全球开源产业发展的非营利机构',
                                        ]"
                                    ></vue-typer>
                                </h4>
                            </h2>
                            <p class="text-muted">
                            由华为、腾讯、阿里、百度、浪潮、360、招商银行等<br />十家龙头科技企业联合发起，
                            由工信部作为业务指导单位。
                            </p>
                            <div class="mt-4 pt-2">
                                <a :href="$vars.registerUrl" class="btn btn-primary rounded">
                                    <i class="mdi mdi-google-my-business mr-2"></i>
                                    现在，加入我们
                                </a>
                            </div>
                        </div>
                    </div>
                    <!--end col-->

                    <div class="col-md-6 col-12 mt-5">
                        <video controls loop autoplay class="img-fluid rounded-md shadow border" width="100%">
                            <source src="videos/intro.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
                <!--end row-->
            </div>
            <!--end container-->
        </section>
        <!-- Start End -->

        <!-- 孵化项目 Start -->
        <section class="section border-bottom">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <div class="section-title mb-4 pb-2">
                            <h5 class="mb-4">孵化项目</h5>
                            <p class="text-muted para-desc mx-auto mb-0">
                                目前开放原子开源基金会正在孵化的开源项目部分列表，详情请查看<router-link to="/project"> 孵化项目 </router-link>页面
                            </p>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->

                <div class="row">
                    <div class="col-lg-4 col-md-6 mt-4 pt-2 animate__animated animate__fadeIn"
                         v-for="(project, index) in projects"
                         :key="index"
                    >
                        <router-link :to="{name: 'project-detail', query: {id: project.projectId}}">
                            <div class="media key-feature align-items-center p-3 rounded shadow">
                                <img :src="project.cover" class="avatar avatar-ex-sm" alt="">
                                <div class="media-body ml-3 nowrap">
                                    <h6 class="mb-1 text-dark">{{ project.title }}</h6>
                                    <div class="text-muted mb-0">{{ project.intro }}...</div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->

                <br />
                <br />
                <div class="col-lg-12 text-center col-md-4 mt-3">
                    <router-link :to="{name: 'project'}" class="btn btn-primary">
                        查看更多 <arrow-right-icon class="fea icon-sm"></arrow-right-icon>
                    </router-link>
                </div>
                <!--end col-->
            </div>
            <!--end container-->
        </section>

        <section class="section border-bottom">
            <div class="container">
                <div class="row rounded bg-primary p-lg-5 p-4">
                    <div class="col-lg-6">
                        <div class="section-title text-center text-lg-left">
                            <h4 class="title text-white mb-4">
                                全球超过 <br />
                                <span class="text-success">100+</span> 合作单位
                            </h4>
                            <p class="text-white-50 mb-0 mx-auto para-desc">
                            涵盖<span class="text-white"> 国内一线高新企业、科研机构、高等学院，</span><br />以及<span class="text-white"> 国外开源基金会 </span>等，具体合作清单会进一步在网站上公布，敬请关注
                            </p>
                        </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-6">
                        <div class="row" id="counter">
                            <div class="col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                <router-link to="/project">
                                    <div class="content text-center pointer">
                                        <h1 class="mb-0 text-success">
                                            <countTo
                                                :startVal="1"
                                                :duration="8000"
                                                :endVal="8"
                                            ></countTo
                                            >+
                                        </h1>
                                        <ul class="list-unstyled mb-0 h5">
                                            <li class="list-inline-item">
                                                <i class="mdi mdi-heart text-white"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="mdi mdi-heart text-white"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="mdi mdi-heart text-white"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="mdi mdi-heart text-white"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="mdi mdi-heart text-white"></i>
                                            </li>
                                        </ul>
                                        <span class="text-white-50">捐赠项目</span>
                                    </div>
                                </router-link>
                            </div>

                            <div class="col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                <router-link to="/partner">
                                    <div class="content text-center pointer">
                                        <h1 class="mb-0 text-success">
                                            <countTo
                                                :startVal="1"
                                                :duration="8000"
                                                :endVal="100"
                                                :easingFn="aaa"
                                            ></countTo
                                            >+
                                        </h1>
                                        <ul class="list-unstyled mb-0 h5">
                                            <li class="list-inline-item">
                                                <i class="mdi mdi-star text-white"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="mdi mdi-star text-white"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="mdi mdi-star text-white"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="mdi mdi-star text-white"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="mdi mdi-star text-white"></i>
                                            </li>
                                        </ul>
                                        <span class="text-white-50">合作单位</span>
                                    </div>
                                </router-link>
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
        <!-- End -->

        <!-- Start -->
        <section class="section border-bottom">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="section-title text-center mb-4 pb-2">
                            <h5 class="mb-4">开放原子开源基金会服务</h5>
                            <p class="text-muted para-desc mx-auto mb-0">
                                开放原子开源基金会服务能力，包含基础服务、法律服务、IT 基础设施服务、社区运营管理方面能力，助力项目快速发展
                            </p>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>
            <!--end container-->

            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col--6 col-12">
                        <div class="row mr-lg-4" id="counter">
                            <div class="col-md-6 col-12">
                                <div class="row">
                                    <div class="col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                        <div class="card explore-feature border-0 rounded text-center bg-white shadow">
                                            <div class="card-body">
                                                <span class="h1 icon2 text-primary">
                                                    <i class="uil uil-envelope-heart"></i>
                                                </span>
                                                <h6 class="mt-3 title">接受捐赠</h6>
                                                <p class="text-muted mb-0">作为独立的法人实体，可接受个人、机构或公司的捐赠，并能够确保这些资源将用于开源公益事业。</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end col-->

                                    <div class="col-12 mt-4 pt-2">
                                        <div class="card explore-feature border-0 rounded text-center bg-white shadow">
                                            <div class="card-body">
                                                <span class="h1 icon2 text-primary">
                                                    <i class="uil uil-shield-check"></i>
                                                </span>
                                                <h6 class="mt-3 title">商标保护</h6>
                                                <p class="text-muted mb-0">保护开放原子（OPENATOM）等商标品牌适用于相关的开源项目，免遭其他组织滥用。同时针对捐赠项目提供版权许可和执行、合规审查等服务</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end col-->
                                </div>
                                <!--end Row-->
                            </div>
                            <!--end col-->

                            <div class="col-md-6 col-12">
                                <div class="row pt-lg-4 mt-lg-4">
                                    <div class="col-12 mt-4 pt-2">
                                        <div class="card explore-feature border-0 rounded text-center bg-white shadow">
                                            <div class="card-body">
                                                <span class="h1 icon2 text-primary">
                                                    <i class="uil uil-moneybag-alt"></i>
                                                </span>
                                                <h6 class="mt-3 title">资助项目</h6>
                                                <p class="text-muted mb-0">为项目提供专有账户并筹集资金用于项目的宣传推广，可根据合同向主要开发人员提供资金支持等。</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end col-->

                                    <div class="col-12 mt-4 pt-2">
                                        <div class="card explore-feature border-0 rounded text-center bg-white shadow">
                                            <div class="card-body">
                                                <span class="h1 icon2 text-primary">
                                                    <i class="uil uil-users-alt"></i>
                                                </span>
                                                <h6 class="mt-3 title">行政管理</h6>
                                                <p class="text-muted mb-0">根据相关法律，非营利机构需要有对应的组织架构，如理事会、秘书处对基金会进行管理，并维护基金会的日常运营。</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end col-->
                                </div>
                                <!--end Row-->
                            </div>
                            <!--end col-->
                        </div>
                        <!--end Row-->
                    </div>
                    <!--end col-->

                    <div class="col-lg-6 col--6 col-12 mt-4 pt-2 mt-lg-0 pt-lg-0">
                        <div class="section-title ml-lg-4">
                            <h5 class="mb-3">
                                <vue-typer :text="['1. 基础服务']"></vue-typer>
                            </h5>
                            <p class="text-muted">
                                开放原子开源基金会针对开源项目提供一系列基础服务，包含接收捐赠、资助项目、商标保护和行政管理等服务。
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

        <section class="section border-bottom">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="section-title text-center mb-4 pb-2">
                            <h5 class="mb-4">
                                <vue-typer :text="['2. 法律服务']"></vue-typer>
                            </h5>
                            <p class="text-muted para-desc mx-auto mb-6">
                                提供开源和专利服务、常见的开源许可证审查，以及开源的知识产权、许可证界定等服务。
                            </p>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
                <div class="row">
                    <div class="col-md-4 col-12 mt-4 pt-2">
                        <div class="features text-center">
                            <div class="image position-relative d-inline-block">
                                <i class="uil uil-forwaded-call h1 text-primary"></i>
                            </div>
                            <div class="content mt-4 pt-2">
                                <h6>开源法律咨询与支持</h6>
                                <p class="text-muted mb-0">
                                    提供项目相关的开源许可证兼容、法务合规意见等；提供开源相关诉讼支持，如组织专家研讨、法庭之友意见等。
                                </p>
                            </div>
                        </div>
                    </div>
                    <!--end col-->
                    <div class="col-md-4 col-12 mt-4 pt-2">
                        <div class="features text-center">
                            <div class="image position-relative d-inline-block">
                                <i class="uil uil-file-question-alt h1 text-primary"></i>
                            </div>
                            <div class="content mt-4">
                                <h6>知识产权咨询与支持</h6>
                                <p class="text-muted mb-0">
                                    提供项目知识产权挖掘和代理咨询，如商标、专利确权意见等；知识产权分析与运营，如FTP、第三方侵权风险评估等；构建知识产权联盟，如专利池、交叉许可等。
                                </p>
                            </div>
                        </div>
                    </div>
                    <!--end col-->
                    <div class="col-md-4 col-12 mt-4 pt-2">
                        <div class="features text-center">
                            <div class="image position-relative d-inline-block">
                                <i class="uil uil-list-ul h1 text-primary"></i>
                            </div>
                            <div class="content mt-4">
                                <h6>其他法律服务</h6>
                                <p class="text-muted mb-0">
                                    沟通连接法律学界、实务界与产业界，面向公众提供开源相关的法律普及和布道，如社区活动、讲座、研究报告等。
                                </p>
                            </div>
                        </div>
                    </div>
                    <!--end col-->
                </div>
            </div>
            <!--end container-->
        </section>
        <!--end section-->

        <section class="section border-bottom">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-12">
                        <div class="sticky-bar">
                            <div class="section-title text-lg-left text-center mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <h5 class="mb-4">
                                    <vue-typer :text="['3. IT 基础设施服务']"></vue-typer>
                                </h5>
                                <p class="text-muted para-desc mb-0 mx-auto">
                                    IT 基础架构服务通过增强基础架构的有效性降低企业的维护成本，利用内部资源，从而使企业的人员和资源能够专注于其核心业务。
                                    <br />
                                    <br />
                                    基于 ITIL 最佳实践的成熟交付流程和质量保证体系，提供以服务水平协议（SLA）为驱动的成本效益服务。
                                </p>
                            </div>
                        </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-8 col-12">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                        <div
                                            class="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0"
                                        >
                                            <span class="h1 icon2 text-primary">
                                                <i class="uil uil-github"></i>
                                            </span>
                                            <div class="card-body p-0 content">
                                                <h6>托管维护</h6>
                                                <p class="para text-muted mb-0">为基金会、服务项目提供社区、代码维护等服务，提供云资源、托管工具或平台服务对接。</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end col-->

                                    <div class="col-12 mt-4 pt-2">
                                        <div
                                            class="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0"
                                        >
                                            <span class="h1 icon2 text-primary">
                                                <i class="uil uil-social-distancing"></i>
                                            </span>
                                            <div class="card-body p-0 content">
                                                <h6>账户系统</h6>
                                                <p class="para text-muted mb-0">建立自治激励的开发者成长系统，为开发者提供跨平台的账户管理和聚合登录服务。提供身份的验证中台服务。</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end col-->

                                    <div class="col-12 mt-4 pt-2">
                                        <div
                                            class="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0"
                                        >
                                            <span class="h1 icon2 text-primary">
                                                <i class="uil uil-bullseye"></i>
                                            </span>
                                            <div class="card-body p-0 content">
                                                <h6>合规审查</h6>
                                                <p class="para text-muted mb-0">在项目捐赠，社区化运营，企业开源架构设计等环节，对代码合规以及开源协议应用合规提供审计审查服务。</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end col-->
                                </div>
                                <!--end row-->
                            </div>
                            <!--end col-->

                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                        <div
                                            class="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0"
                                        >
                                            <span class="h1 icon2 text-primary">
                                                <i class="uil uil-code-branch"></i>
                                            </span>
                                            <div class="card-body p-0 content">
                                                <h6>开发和运维</h6>
                                                <p class="para text-muted mb-0">为项目的社区运营开发和提供工具，在项目生命周期提供资源管理、提供选举、投票、审计等工具。</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end col-->

                                    <div class="col-12 mt-4 pt-2">
                                        <div
                                            class="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0"
                                        >
                                            <span class="h1 icon2 text-primary">
                                                <i class="uil uil-file-check-alt"></i>
                                            </span>
                                            <div class="card-body p-0 content">
                                                <h6>项目测试</h6>
                                                <p class="para text-muted mb-0">为项目的孵化、毕业做代码安全检测、提供安全分级认证服务。</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end col-->
                                </div>
                                <!--end row-->
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>
            <!--end container-->
        </section>
        <!--end section-->

        <section class="section border-bottom">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="section-title text-center mb-4 pb-2">
                            <h5 class="mb-4">
                                <vue-typer :text="['4. 社区运营管理']"></vue-typer>
                            </h5>
                            <p class="text-muted para-desc mx-auto mb-0">
                                通过社群的规划以及执行，通过社群内容，营造氛围，打造高粘性社区。整合内外部资源，提升关注用户
                            </p>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->

                <div class="row">
                    <div class="col-md-4 mt-4 pt-2">
                        <div class="card features work-process bg-transparent process-arrow border-0 text-center">
                            <div class="icons rounded h1 text-center text-primary px-3">
                                <i class="uil uil-presentation-edit"></i>
                            </div>

                            <div class="card-body">
                                <h6 class="title text-dark">活动策划</h6>
                                <p class="text-muted mb-0">为开发者打造丰富的社区活动，包括协助或主持社区技术沙龙、行业峰会、安全攻防演习、社区互动、技术研讨会议、海内外技术交流等。</p>
                            </div>
                        </div>
                    </div>
                    <!--end col-->

                    <div class="col-md-4 mt-md-5 pt-md-3 mt-4 pt-2">
                        <div class="card features work-process bg-transparent process-arrow border-0 text-center">
                            <div class="icons rounded h1 text-center text-primary px-3">
                                <i class="uil uil-chart-bar-alt"></i>
                            </div>

                            <div class="card-body">
                                <h6 class="title text-dark">建立体系</h6>
                                <p class="text-muted mb-0">一切为了开发者，是基金会努力的方向，我们会全力为开源项目，技术社区的开发者提供良性发展的生态，打造以开发者为中心的高效成长体系。</p>
                            </div>
                        </div>
                    </div>
                    <!--end col-->

                    <div class="col-md-4 mt-md-5 pt-md-5 mt-4 pt-2">
                        <div class="card features work-process bg-transparent d-none-arrow border-0 text-center">
                            <div class="icons rounded h1 text-center text-primary px-3">
                                <i class="uil uil-channel"></i>
                            </div>

                            <div class="card-body">
                                <h4 class="title text-dark">推广和传播</h4>
                                <p class="text-muted mb-0">开源的推广和传播，包括但不限于开源周边文化产品的开发和运营，纪录片、图书出版与翻译等。</p>
                            </div>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>
            <!--end container-->

        <!--end container-->
        </section>
        <!--end section-->
        <!-- End -->
        <!--end section-->
    </div>
</template>
