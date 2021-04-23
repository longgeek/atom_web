<script>
import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    MailIcon,
} from "vue-feather-icons";
export default {
    data() {
        return {};
    },
    components: {
        FacebookIcon,
        InstagramIcon,
        TwitterIcon,
        LinkedinIcon,
        MailIcon,
    },
};
</script>

<template>
    <div>
        <!-- Footer Start -->
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-12 mb-0 pb-0 pb-md-2">
                        <a href="/" class="logo-footer">
                            <img src="@/assets/images/logo-light.svg" height="55" alt="" />
                        </a>
                        <p class="mt-4">
                            开放原子开源基金会拟通过共建、共治、共享的方式，系统性打造信息产业和工业开源开放框架，搭建国际开源社区，提升行业协作效率，赋能千行百业。目前开放原子开源基金会业务范围主要包括为各类开源软件、开源硬件、开源芯片、开源内容提供中立的知识产权托管、战略咨询、法务咨询、项目运营、品牌营销和教育培训等服务。
                        </p>
                        <ul class="list-unstyled social-icon social mb-0 mt-4">
                            <li class="list-inline-item">
                                <a href="javascript:void(0)" class="rounded"
                                    v-b-tooltip.hover
                                    v-b-tooltip.html
                                    title="<img src='https://con.openatom.cn/img/wechat.54784f5b.jpg' width=100>"
                                >
                                    <i class="mdi mdi-wechat"></i>
                                </a>
                            </li>
                            <li class="list-inline-item ml-1">
                                <a href="https://weibo.com/u/7495008325" target="_blank" class="rounded">
                                    <i class="mdi mdi-sina-weibo"></i>
                                </a>
                            </li>
                            <li class="list-inline-item ml-1">
                                <a href="https://twitter.com/0ptlEua40J852op" target="_blank" class="rounded">
                                    <i class="mdi mdi-twitter"></i>
                                </a>
                            </li>
                        </ul>
                        <!--end icon-->
                    </div>
                    <!--end col-->

                    <div class="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h6 class="text-light footer-head">联系方式</h6>
                        <ul class="list-unstyled footer-list mt-4">
                            <li>
                                <a class="text-foot" href="mailto: sponsorship@openatom.org" target="_blank">
                                    <i class="mdi mdi-chevron-right mr-1"></i>
                                    项目捐赠：sponsorship@openatom.org
                                </a>
                            </li>
                            <li>
                                <a class="text-foot" href="mailto: legal@openatom.org" target="_blank">
                                    <i class="mdi mdi-chevron-right mr-1"></i>
                                    法律问题：legal@openatom.org
                                </a>
                            </li>
                            <li>
                                <a class="text-foot" href="mailto: media@openatom.org" target="_blank">
                                    <i class="mdi mdi-chevron-right mr-1"></i>
                                    媒体合作：media@openatom.org
                                </a>
                            </li>
                            <li>
                                <a class="text-foot" href="mailto: hr@openatom.org" target="_blank">
                                    <i class="mdi mdi-chevron-right mr-1"></i>
                                    工作机会：hr@openatom.org
                                </a>
                            </li>
                            <li>
                                <a class="text-foot" href="mailto: public@openatom.org" target="_blank">
                                    <i class="mdi mdi-chevron-right mr-1"></i>
                                    供应商自荐：public@openatom.org
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!--end col-->

                    <div class="col-lg-3 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h6 class="text-light footer-head">法规信息</h6>
                        <ul class="list-unstyled footer-list mt-4">
                            <li>
                                <router-link to="/privacy" class="text-foot">
                                    <i class="mdi mdi-chevron-right mr-1"></i>
                                    隐私政策
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/terms" class="text-foot">
                                    <i class="mdi mdi-chevron-right mr-1"></i>
                                    法规信息
                                </router-link>
                            </li>
                        </ul>
                        <p class="mt-4">加入我们，并了解我们最新动态</p>
                        <form>
                            <div class="row">
                                <div class="col-lg-12">
                                    <a :href="$vars.registerUrl" class="btn btn-soft-primary btn-block">
                                        现在去注册
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>
            <!--end container-->
        </footer>
        <!--end footer-->
        <footer class="footer footer-bar">
            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col-sm-12">
                        <div class="text-sm-center">
                            <p class="mb-0">
                                Copyright © {{ new Date().getFullYear() }} OPENATOM FOUNDATION. All rights reserved. 开放原子开源基金会版权所有
                                <br />
                                <a href="https://beian.miit.gov.cn/" target="_blank" class="text-reset">
                                    京 ICP 备 1414036654 号
                                </a>
                                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010801433219" class="text-reset">
                                    <img src="https://con.openatom.cn/img/beian.d0289dc0.png" height="15"> 京公网安备 11010801433219 号
                                </a>
                            </p>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>
            <!--end container-->
        </footer>
        <!--end footer-->
    </div>
</template>
