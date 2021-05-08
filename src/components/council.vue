<script>
export default {
    props: {
        councilData: {
            type: Array,
            default: [
                {
                    name: "杨涛",
                    title: "理事长",
                    job: "开放原子开源基金会理事长",
                    photo: "images/council/理事长-杨涛.png",
                    content: "",
                },
                {
                    name: "张晖",
                    title: "副理事长",
                    job: "浪潮云信息技术有限公司副总经理、浪潮首席科学家",
                    photo: "images/council/副理事长-张晖.png",
                    content: "",
                },
                {
                    name: "肖然",
                    title: "副理事长",
                    job: "百度杰出科学家兼区块链总经理、工信部区块链重点实验室学术委员、区块链国家标准制定专班委员",
                    photo: "images/council/副理事长-肖然.png",
                    content: "",
                },
                {
                    name: "王巨宏",
                    title: "副理事长",
                    job: "腾讯科技（深圳）有限公司副总裁",
                    photo: "images/council/副理事长-王巨宏.png",
                    content: "",
                },
                {
                    name: "刘湘雯",
                    title: "副理事长",
                    job: "阿里巴巴集团智能市场营销与公共事务部总经理",
                    photo: "images/council/副理事长-刘湘雯.png",
                    content: "",
                },
                {
                    name: "侯震宇",
                    title: "副理事长",
                    job: "百度在线网络技术（北京）有限公司副总裁",
                    photo: "images/council/副理事长-侯震宇.png",
                    content: "",
                },
                {
                    name: "杜玉杰",
                    title: "理事",
                    job: "开放原子开源基金会秘书长",
                    photo: "images/council/理事-杜玉杰.png",
                    content: "",
                },
                {
                    name: "殷宇辉",
                    title: "理事",
                    job: "360集团技术副总裁",
                    photo: "images/council/理事-殷宇辉.png",
                    content: "",
                },
                {
                    name: "夏雷",
                    title: "理事",
                    job: "招商银行股份有限公司信息技术部研发中心副总经理",
                    photo: "images/council/理事-夏雷.png",
                    content: "",
                },
                {
                    name: "马越",
                    title: "理事",
                    job: "开源中国董事长",
                    photo: "images/council/理事-马越.png",
                    content: "",
                },
                {
                    name: "李伟",
                    title: "理事",
                    job: "杭州趣链科技有限公司CEO",
                    photo: "images/council/理事-李伟.png",
                    content: "",
                },
                {
                    name: "高素梅",
                    title: "监事",
                    job: "",
                    photo: "images/council/监事-高素梅.png",
                    content: "",
                },
            ],
        },
    },
    data() {
        return {
            current: {},
        };
    },
};
</script>

<template>
    <div class="row">
        <div
            class="col-lg-3 col-md-4 col-sm-6 mt-4 pt-2"
            v-for="(council, index) in councilData"
            :key="index"
        >
            <a v-b-modal.council_modal @click="current = council">
                <div class="card team text-center border-0 bg-transparent">
                    <div class="position-relative">
                        <img
                            :src="`${council.photo}`"
                            class="img-fluid avatar avatar-medium rounded-circle shadow"
                            alt=""
                        />
                    </div>
                    <div class="card-body py-3 px-0 content">
                        <h6 class="mb-1">
                            <a href="javascript:void(0)" class="name text-dark">
                                {{ council.name }}
                            </a>
                        </h6>
                        <small
                            v-if="$route.name == 'aboutus'"
                            class="designation text-muted"
                        >
                            {{ council.title }}
                        </small>
                        <small
                            v-else
                            class="designation text-muted"
                        >{{ council.job }}</small>
                    </div>
                </div>
            </a>
        </div>
        <!--end col-->
        <b-modal
            id="council_modal"
            hide-footer
            size="md"
            header-close-variant="white"
            header-class="border-0"
            content-class="border-0"
            centered
        >
            <div class="card text-center border-0 p-4">
                <div class="position-relative">
                    <img
                        :src="`${current.photo}`"
                        class="img-fluid avatar avatar-ex-large rounded-circle shadow"
                        alt=""
                    />
                </div>
                <div class="card-body py-3 px-0 content">
                    <h6 class="mb-1">
                        <a href="javascript:void(0)" class="name text-dark">
                            {{ current.name }}
                        </a>
                    </h6>
                    <small class="designation text-muted">{{ current.title }}</small>
                    <br />
                    <small class="designation text-muted">{{ current.job }}</small>
                    <p class="text-muted mt-4 mb-0" v-if="current.content">{{ current.content }}</p>
                </div>
            </div>
        </b-modal>
    </div>
</template>
