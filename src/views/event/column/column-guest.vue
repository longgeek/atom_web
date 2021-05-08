<script>
import Council from "@/components/council";
export default {
    props: {
        guestData: {
            type: Array,
            default: [
                {
                    name: "倪光南",
                    title: "",
                    job: "中国工程院院士",
                    photo: "images/event/column/guest/倪光南.png",
                    content: "",
                },
                {
                    name: "廖湘科",
                    title: "",
                    job: "中国工程院院士、国家863计划重点项目专家组组长、银河系列巨型计算机主要研制者、麒麟操作系统首席科学家",
                    photo: "images/event/column/guest/廖湘科.png",
                    content: "",
                },
                {
                    name: "Linus Torvalds",
                    title: "",
                    job: "Linux 之父",
                    photo: "images/event/column/guest/Linus-Torvalds.jpg",
                    content: "",
                },
                {
                    name: "蔡自兴",
                    title: "",
                    job: "中南大学自动控制工程系教授、中国智能机器人学科创始人、IEEE Fellow",
                    photo: "images/event/column/guest/蔡自兴.png",
                    content: "",
                },
                {
                    name: "张小龙",
                    title: "",
                    job: "腾讯副总裁、微信创始人、Foxmail 创始人",
                    photo: "images/event/column/guest/张小龙.png",
                    content: "",
                },
                {
                    name: "李开复",
                    title: "",
                    job: "创新工场的董事长兼首席执行官、前谷歌全球副总裁和大中华区总裁、前微软亚洲研究院院长",
                    photo: "images/event/column/guest/李开复.png",
                    content: "",
                },
                {
                    name: "宫敏",
                    title: "",
                    job: "北京凝思科技公司创始人、中国 Linux 之父、自由软件第一人",
                    photo: "images/event/column/guest/宫敏.png",
                    content: "",
                },
                {
                    name: "汪滔",
                    title: "",
                    job: "大疆创新科技有限公司创始人",
                    photo: "images/event/column/guest/汪滔.png",
                    content: "",
                },
                {
                    name: "王成录",
                    title: "",
                    job: "华为消费者BG业务软件部总裁",
                    photo: "images/event/column/guest/王成录.png",
                    content: "",
                },
                {
                    name: "崔宝秋",
                    title: "",
                    job: "小米集团副总裁、小米集团技术委员会主席",
                    photo: "images/event/column/guest/崔宝秋.png",
                    content: "",
                },
                {
                    name: "王蕴博",
                    title: "",
                    job: "滴滴开源技术负责人",
                    photo: "images/event/column/guest/王蕴博.jpg",
                    content: "",
                },
                {
                    name: "张平",
                    title: "",
                    job: "北京大学法学院教授、知识产权学院常务副院长、北京大学粤港澳大湾区知识产权发展研究院执行院长",
                    photo: "images/event/column/guest/张平.jpg",
                    content: "",
                },
                {
                    name: "王东芳",
                    title: "",
                    job: "Ladas & Parry 律所律师中国首席代表",
                    photo: "images/event/column/guest/王东芳.jpg",
                    content: "",
                },
                {
                    name: "陆首群",
                    title: "",
                    job: "中国开源软件推进联盟主席",
                    photo: "images/event/column/guest/陆首群.jpg",
                    content: "",
                },
                {
                    name: "刘澎",
                    title: "",
                    job: "中国开源软件推进联盟副主席兼秘书长、中科院研究员",
                    photo: "images/event/column/guest/刘澎.jpg",
                    content: "",
                },
                {
                    name: "侯培新",
                    title: "",
                    job: "华为开源首席专家",
                    photo: "images/event/column/guest/侯培新.jpg",
                    content: "",
                },
                {
                    name: "包云岗",
                    title: "",
                    job: "中科院先进计算机系统研究中心副主任、RISC-V 联盟秘书",
                    photo: "images/event/column/guest/包云岗.jpg",
                    content: "",
                },
                {
                    name: "王庆",
                    title: "",
                    job: "OpenStack 基金会董事",
                    photo: "images/event/column/guest/王庆.jpg",
                    content: "",
                },
                {
                    name: "陈钟",
                    title: "",
                    job: "北京大学信息科学技术学院区块链研究中心主任",
                    photo: "images/event/column/guest/陈钟.jpg",
                    content: "",
                },
                {
                    name: "蒋涛",
                    title: "",
                    job: "CSDN 创始人、总裁",
                    photo: "images/event/column/guest/蒋涛.jpg",
                    content: "",
                },
                {
                    name: "星爵",
                    title: "",
                    job: "Zilliz 创始人、LFAI & Data 基金会董事会主席",
                    photo: "images/event/column/guest/星爵.jpg",
                    content: "",
                },
                {
                    name: "李震宁",
                    title: "",
                    job: "中标软件副总经理",
                    photo: "images/event/column/guest/李震宁.jpg",
                    content: "",
                },
                {
                    name: "任道远",
                    title: "",
                    job: "VMware 中国研发中心总经理",
                    photo: "images/event/column/guest/任道远.jpg",
                    content: "",
                },
                {
                    name: "武延军",
                    title: "",
                    job: "中科院软件研究所副总工程师、智能软件研究中心主任",
                    photo: "images/event/column/guest/武延军.jpg",
                    content: "",
                },
                {
                    name: "唐卫清",
                    title: "",
                    job: "中国计算机学会(CCF)秘书长",
                    photo: "images/event/column/guest/唐卫清.jpg",
                    content: "",
                },
                {
                    name: "冯晓焰",
                    title: "",
                    job: "英特尔亚太研发中心首席科学家",
                    photo: "images/event/column/guest/冯晓焰.jpg",
                    content: "",
                },
                {
                    name: "章文嵩",
                    title: "",
                    job: "LVS (Linux虚拟服务器)开源软件创始人",
                    photo: "images/event/column/guest/章文嵩.jpg",
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
    components: { Council },
};
</script>

<template>
    <div class="row">
        <div
            class="col-lg-3 col-md-4 col-sm-6 mt-4 pt-2"
            v-for="(guest, index) in guestData"
            :key="index"
        >
            <a v-b-modal.guest_modal @click="current = guest">
                <div class="card team text-center border-0 bg-transparent">
                    <div class="position-relative">
                        <img
                            :src="`${guest.photo}`"
                            class="img-fluid avatar avatar-medium rounded-circle shadow"
                            alt=""
                        />
                    </div>
                    <div class="card-body py-3 px-0 content">
                        <h6 class="mb-1">
                            <a href="javascript:void(0)" class="name text-dark">
                                {{ guest.name }}
                            </a>
                        </h6>
                        <small class="designation text-muted">{{ guest.job }}</small>
                    </div>
                </div>
            </a>
        </div>
        <Council />
        <!--end col-->
        <b-modal
            id="guest_modal"
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
