<script>
/**
 * Page-partner component
 */
export default {
    page: { title: '合作者关系' },
    data() {
        return {
            partners: [],
        };
    },
    created() {
        // 获取捐赠人
        this.$http.get(this.$api.partner.list())
            .then((rsp) => {
                if (rsp.data.code === 200) {
                    this.partners = rsp.data.data;
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
                            <h4 class="title">合作者关系</h4>
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

        <section class="section border-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12" v-for="(partner, index) in partners" :key="index">
                        <div class="section-title">
                            <h6 class="mb-4">{{ partner.name }}</h6>
                            <p class="mx-auto text-muted mb-4 pb-4">注：以下捐赠人顺序以中文拼音首字母排序</p>
                        </div>
                        <div class="rounded">
                            <div class="row">
                                <div class="col-lg-2 col-md-3 col-6 text-center mb-4"
                                    v-for="(logo, index) in partner.logos" :key="index"
                                >
                                    <img :src="logo" class="avatar border mb-4 animate__animated animate__fadeIn" alt="" width="130" height="130" />
                                </div>
                                <!--end col-->
                            </div>
                            <!--end row-->
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
                    <div class="col-12 text-center">
                        <div class="section-title mb-4 pb-2">
                            <h5
                                class="mb-4"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                捐赠
                            </h5>
                            <p
                                class="text-muted para-desc mb-0 mx-auto"
                                data-aos="fade-up"
                                data-aos-duration="1400"
                            >
                                我们在寻找包括全球范围内的自然人、法人、非法人组织等捐赠者来支持我们，如果您愿意贡献自己的一份力量或者想了解更多捐赠信息请联系邮箱：
                                <span class="text-primary font-weight-bold">sponsorship@openatom.org</span>
                            </p>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->


                <div class="row">
                    <div class="col-md-6 col-sm-12 mt-4 pt-2">
                        <div class="rounded bg-primary p-lg-5 p-2 donate donate-platinum">
                            <div class="section-title text-md-left text-center">
                                <h6 class="mb-3 title-dark">白金捐赠人</h6>
                                <ul class="text-cyan mb-0">
                                    <li>白金捐赠人每家有权申请1个理事席位；</li>
                                    <li>白金捐赠人理事席位最多可达17个；</li>
                                    <li>现有捐赠人退出或理事会决议增补理事席位后，其他白金捐赠人可以经理事会表决通过后获得理事席位；</li>
                                    <li>有项目推荐权，须经TOC评选通过。</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 mt-4 pt-2">
                        <div class="rounded bg-primary p-lg-5 p-2 donate donate-gold">
                            <div class="section-title text-md-left text-center">
                                <h6 class="mb-3 title-dark">金牌捐赠人</h6>
                                <ul class="text-cyan">
                                    <li>金牌捐赠人享有被提名为理事的权利（共3个理事席位）；</li>
                                    <li>对项目有推荐权，须经TOC评选通过。</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 mt-4 pt-2">
                        <div class="rounded bg-primary p-lg-5 p-2 donate donate-silver">
                            <div class="section-title text-md-left text-center">
                                <h6 class="mb-3 title-dark">银牌捐赠人</h6>
                                <ul class="text-cyan">
                                    <li>银牌捐赠人享有被提名为理事的权利（共2个理事席位）；</li>
                                    <li>对项目有推荐权，该项目须经TOC评选通过。</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 mt-4 pt-2">
                        <div class="rounded bg-primary p-lg-5 p-2 donate donate-general">
                            <div class="section-title text-md-left text-center">
                                <h6 class="mb-3 title-dark">一般捐赠人</h6>
                                <ul class="text-cyan">
                                    对项目有推荐权，须经TOC评选通过
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 mt-4 pt-2">
                        <div class="tab-content" id="pills-tabContent">
                            <div
                                class="tab-pane fade show active"
                                id="pills-community"
                                role="tabpanel"
                                aria-labelledby="community-tab"
                            ></div>
                            <!--end teb pane-->

                            <div
                                class="tab-pane fade"
                                id="pills-self"
                                role="tabpanel"
                                aria-labelledby="selfservice-tab"
                            ></div>
                            <!--end teb pane-->

                            <div
                                class="tab-pane fade"
                                id="pills-teamwork"
                                role="tabpanel"
                                aria-labelledby="teamwork-tab"
                            ></div>
                            <!--end teb pane-->
                        </div>
                        <!--end tab content-->
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>
            <!--end container-->
        </section>
        <!--end section-->

        <section class="section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="section-title text-center mb-4 pb-2">
                            <h5 class="mb-4">加入我们？建立合作关系！</h5>
                            <p class="para-desc mx-auto text-muted">请通过页面底部联系方式与我们进行联系</p>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->

                <div class="row justify-content-center">
                    <div class="col-lg-9 mt-4 pt-2">
                        <div class="faq-content">
                            <div class="accordion" id="accordionExampleone">
                                <b-card no-body class="mb-2 border-bottom rounded">
                                    <b-card-header class="border-0 bg-light p-3 pr-5">
                                        <a class="faq position-relative text-dark" v-b-toggle.accordion-1 href="javascript: void(0);">
                                            <h6 class="title mb-0">
                                                <span class="text-primary">为什么 </span>要加入开源基金会？
                                            </h6>
                                        </a>
                                    </b-card-header>
                                    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                        <b-card-body class="px-2 py-4">
                                            <ul class="list-unstyled text-muted">
                                                <li class="mb-0">
                                                    <span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>
                                                    <div style="margin-left: 30px; margin-top: -22px;">开发者可以通过直接参与开源基金会的开源项目开发工作，让自己的劳动成果为全人类所共享，为人类文明的持续发展作出贡献。</div>
                                                </li>
                                                <li class="mb-0">
                                                    <span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>
                                                    <div style="margin-left: 30px; margin-top: -22px;">通过捐赠项目给开源基金会，以开放治理的开源方式，吸引更多的开发者参与开源项目，实现共建、共治、共享。</div>
                                                </li>
                                                <li class="mb-0">
                                                    <span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>
                                                    <div style="margin-left: 30px; margin-top: -22px;">开源基金会与捐赠人签订开源捐赠协议，并约定捐赠方式、捐赠金额、资金用途及使用方式，让所捐赠的知识产权及资金发挥应有的社会价值。</div>
                                                </li>
                                                <li class="mb-0">
                                                    <span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>
                                                    <div style="margin-left: 30px; margin-top: -22px;">捐赠人依照法律、行政法规的规定，可以享受税收优惠。</div>
                                                </li>
                                            </ul>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card no-body class="mb-2 border-bottom rounded">
                                    <b-card-header class="border-0 bg-light p-3 pr-5">
                                        <a class="faq position-relative text-dark" v-b-toggle.accordion-2 href="javascript: void(0);">
                                            <h6 class="title mb-0">
                                                <span class="text-primary">如何 </span>加入开源基金会？
                                            </h6>
                                        </a>
                                    </b-card-header>
                                    <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                                        <b-card-body class="px-2 py-4">
                                            <ul class="list-unstyled text-muted">
                                                <li class="mb-0">
                                                    <span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>
                                                    <div style="margin-left: 30px; margin-top: -22px;">个人和组织通过捐赠资金或项目，成为开源基金会成员。</div>
                                                </li>
                                                <li class="mb-0">
                                                    <span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>
                                                    <div style="margin-left: 30px; margin-top: -22px;">开源基金会成员包括：白金捐赠人、金牌捐赠人、银牌捐赠人、一般捐赠人。</div>
                                                </li>
                                                <li class="mb-0">
                                                    <span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>
                                                    <div style="margin-left: 30px; margin-top: -22px;">注册成为开源基金会的开发者，加入到具体的开源项目或工作组中，参与贡献。</div>
                                                </li>
                                            </ul>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
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
    </div>
</template>

<style>
.donate {
    height: 220px;
    background-size: cover
}
.donate.donate-platinum {
    background: url('https://con.openatom.cn/img/one.5e32b3d7.png') no-repeat 50%;
}

.donate.donate-gold {
    background: url('https://con.openatom.cn/img/two.2eac9e2e.png') no-repeat 50%;
}

.donate.donate-silver {
    background: url('https://con.openatom.cn/img/three.f0b2051e.png') no-repeat 50%;
}

.donate.donate-general {
    background: url('https://con.openatom.cn/img/four.edc588c6.png') no-repeat 50%;
}
</style>
