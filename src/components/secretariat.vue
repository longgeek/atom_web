<script>
export default {
    props: {
        secretariatData: {
            type: Array,
            default: [
                {
                    name: "杜玉杰",
                    title: "秘书长",
                    photo: "images/council/理事-杜玉杰.png",
                    content: "",
                },
                {
                    name: "侯正鹏",
                    title: "业务发展部",
                    photo: "images/secretariat/业务发展部-侯正鹏.png",
                    content: "",
                },
                {
                    name: "侯燕",
                    title: "运营部",
                    photo: "images/secretariat/运营部-侯燕.png",
                    content: "",
                },
                {
                    name: "钟以山",
                    title: "品牌与营销部",
                    photo: "images/secretariat/品牌与营销部-钟以山.png",
                    content: "",
                },
                {
                    name: "腾召智",
                    title: "研发部",
                    photo: "images/secretariat/研发部-腾召智.png",
                    content: "",
                },
                {
                    name: "王荷舒",
                    title: "法务部",
                    photo: "images/secretariat/法务部-王荷舒.png",
                    content: "",
                },
                {
                    name: "万惠",
                    title: "公共事业部",
                    photo: "images/secretariat/公共事业部-万惠.png",
                    content: "",
                },
                {
                    name: "王冠",
                    title: "教育培训部",
                    photo: "images/secretariat/教育培训部-王冠.png",
                    content: "",
                },
                {
                    name: "王菲",
                    title: "人力资源部",
                    photo: "images/secretariat/人力资源部-王菲.png",
                    content: "",
                },
                {
                    name: "李双莹",
                    title: "投资管理部",
                    photo: "images/secretariat/投资管理部-李双莹.png",
                    content: "",
                },
                {
                    name: "刘跃峰",
                    title: "采购部",
                    photo: "images/secretariat/采购部-刘跃峰.png",
                    content: "",
                },
                {
                    name: "金海龙",
                    title: "财务部",
                    photo: "images/secretariat/财务部-金海龙.png",
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
            v-for="(secretariat, index) in secretariatData"
            :key="index"
        >
            <a v-b-modal.secretariat_modal @click="current = secretariat">
                <div class="card team text-center border-0 bg-transparent">
                    <div class="position-relative">
                        <img
                            :src="`${secretariat.photo}`"
                            class="img-fluid avatar avatar-medium rounded-circle shadow"
                            alt=""
                        />
                    </div>
                    <div class="card-body py-3 px-0 content">
                        <h6 class="mb-1">
                            <a href="javascript:void(0)" class="name text-dark">
                                {{ secretariat.name }}
                            </a>
                        </h6>
                        <small class="designation text-muted">{{ secretariat.title }}</small>
                    </div>
                </div>
            </a>
        </div>
        <!--end col-->
        <b-modal
            id="secretariat_modal"
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
                    <p class="text-muted mt-4 mb-0" v-if="current.content">{{ current.content }}</p>
                </div>
            </div>
        </b-modal>
    </div>
</template>
