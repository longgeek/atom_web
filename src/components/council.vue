<script>
export default {
    props: {
        councilData: {
            type: Array,
            default: [
                {
                    name: "杨涛",
                    title: "理事长",
                    photo: "images/council/理事长-杨涛.png",
                    content: "",
                },
                {
                    name: "张晖",
                    title: "副理事长",
                    photo: "images/council/副理事长-张晖.png",
                    content: "",
                },
                {
                    name: "肖然",
                    title: "副理事长",
                    photo: "images/council/副理事长-肖然.png",
                    content: "",
                },
                {
                    name: "王巨宏",
                    title: "副理事长",
                    photo: "images/council/副理事长-王巨宏.png",
                    content: "",
                },
                {
                    name: "刘湘雯",
                    title: "副理事长",
                    photo: "images/council/副理事长-刘湘雯.png",
                    content: "",
                },
                {
                    name: "侯震宇",
                    title: "副理事长",
                    photo: "images/council/副理事长-侯震宇.png",
                    content: "",
                },
                {
                    name: "杜玉杰",
                    title: "理事",
                    photo: "images/council/理事-杜玉杰.png",
                    content: "",
                },
                {
                    name: "殷宇辉",
                    title: "理事",
                    photo: "images/council/理事-殷宇辉.png",
                    content: "",
                },
                {
                    name: "夏雷",
                    title: "理事",
                    photo: "images/council/理事-夏雷.png",
                    content: "",
                },
                {
                    name: "马跃",
                    title: "理事",
                    photo: "images/council/理事-马跃.png",
                    content: "",
                },
                {
                    name: "李伟",
                    title: "理事",
                    photo: "images/council/理事-李伟.png",
                    content: "",
                },
                {
                    name: "高素梅",
                    title: "监事",
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
                        <small class="designation text-muted">{{ council.title }}</small>
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
                    <p class="text-muted mt-4 mb-0" v-if="current.content">{{ current.content }}</p>
                </div>
            </div>
        </b-modal>
    </div>
</template>
