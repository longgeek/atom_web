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
                    content: "开放原子开源基金会秘书长、基金会发起人之一，开源战略专家。发起成立中国 OpenStack 开源社区（2010 年至今），并推动成立国际三大开源基金会之一 OpenStack 开源基金会（2012 年至今）。中国开源云联盟（简称 “COSCL”）早期发起人（2012 年至今），全球云计算大会 Cloud Connect 峰会顾问（2013 年至今），InfoQ、OSChina、CSDN 等开源峰会主席、顾问",
                },
                {
                    name: "侯正鹏",
                    title: "业务发展部",
                    photo: "images/secretariat/业务发展部-侯正鹏.png",
                    content: "参与开源软件开发近 20 年，在开源社区建设上有十年以上的成功经验，曾先后供职于Linux发行版本公司：Ubuntu、Mandriva等；开源非营利组织Linara。在开源项目开发，云计算和物联网领域拥有大量丰富的经验。",
                },
                {
                    name: "侯燕",
                    title: "运营部",
                    photo: "images/secretariat/运营部-侯燕.png",
                    content: "曾任世界百强企业产品经理、产品线COO、质量运营部部长等，20+ 年通讯产品开发及产业运营管理经验，广东省科技进步一等奖，深圳市领军人才。",
                },
                {
                    name: "钟以山",
                    title: "品牌与营销部",
                    photo: "images/secretariat/品牌与营销部-钟以山.png",
                    content: "《计算机与生活》创始人、发行人、总编辑，曾就职网星史克威尔艾尼克斯、优万科技等公司。发起并组建智慧家庭娱乐联盟（TEA）, 18+ 年互联网领域从业及管理经验，互联网娱乐、社区、新媒体等领域资深专家。",
                },
                {
                    name: "腾召智",
                    title: "研发部",
                    photo: "images/secretariat/研发部-腾召智.png",
                    content: "Linux 应用及发行版开发者、Ubuntu Builder, mythtv、 Debian edu 开源项目贡献者、Pmi 认证 PMP、国家 Linus 标准工作组成员，苏州自由软件用户组发起人之一、Trystack 社区推广者、FBG 实验室技术专家，专注于软件用户组发起人之一。",
                },
                {
                    name: "王荷舒",
                    title: "法务部",
                    photo: "images/secretariat/法务部-王荷舒.png",
                    content: "香港中文大学 Juris Doctor，知识产权专业资深律师，处理诉讼/非诉案件500+件，熟悉知识产权确权及维权（含驰名商标认定）、反垄断、国际仲裁、司法协助等实务。所代理客户包括腾讯、小米、搜狗、同方威视、中兴汽车、英利中国、圣象、新凤祥、VISA、Ferrari、Lafite、JTEKT、JETRO等。所代理案件在最高人民法院、京、津、粤、苏、浙、鲁等多地多级人民法院获得胜诉，多个案件入选相关法院“年度十大知识产权案件”。曾代理被社区认为是我国关于开源协议问题的诉讼第一案，在案件中提出的关于GPL开源许可证的分析和主张获得两审司法支持。",
                },
                {
                    name: "万惠",
                    title: "公共事业部",
                    photo: "images/secretariat/公共事业部-万惠.png",
                    content: "致公党中央青年委员，安徽省三八红旗手。近 20 年上市公司供销两头管理经验，曾担当世界五百强企业营销策划、物资供应、总经理办公室等工作。曾自主创业，创办首批国家级众创空间“安徽芜湖长江鲨”，并在 2018 年作为江西练恒产业投资基金合伙人建立产业基金；及多项公益基金。",
                },
                {
                    name: "王冠",
                    title: "教育培训部",
                    photo: "images/secretariat/教育培训部-王冠.png",
                    content: "北京大学国家发展研究院与美国福坦莫大学加贝利商学院联合培养金融管理博士生（DPS），曾任深圳市金融科技协会副秘书长及湾区国际金融科技城总经理，中国民生金融控股公司投资者关系总监及董事，长安俱乐部首批全球青年领袖、清控道口教育金融科技标准高级顾问，联合国开发计划署可持续发展目标影响力融资标准征询专家，深圳市信用专业人才库评审委员会委员，曾获 2014 年腾讯传媒奖突发报道奖及 2018 - 2019 中国上市公司卓越投资者关系最佳总监奖。",
                },
                {
                    name: "王菲",
                    title: "人力资源部",
                    photo: "images/secretariat/人力资源部-王菲.png",
                    content: "20 年人力资源全方位全模块工作经历，丰富的世界五百强公司经验：中国银行、卡特彼勒、诺基亚、微软、强生。互联网滴滴出行网约车人力资源负责人、纳斯达克区块链第一中概股上市公司人力资源负责人。",
                },
                {
                    name: "李双莹",
                    title: "投资管理部",
                    photo: "images/secretariat/投资管理部-李双莹.png",
                    content: "曾任中信集团投资部董事总经理、天然集团执行董事、APEC 青年成员。资深投研、投中、投后专业战略规划、投资并购产业基金。主要关注：互联网、移动互联网、高新科技，教育培训；信息技术。代表案例：永辉、 SEA（Garena）、麦当劳、明略科技。",
                },
                {
                    name: "刘跃峰",
                    title: "采购部",
                    photo: "images/secretariat/采购部-刘跃峰.png",
                    content: "20 年世界五百强工作经历，国内及欧洲工作经历，产品管理专家，有研发一线、研发管理、系统设计、解决方案规划及生命周期管理经验。",
                },
                {
                    name: "金海龙",
                    title: "财务部",
                    photo: "images/secretariat/财务部-金海龙.png",
                    content: "12 年财务管理工作经验，航天系统工作十余年。擅长预算、财务信息化、税收筹划及项目财务管理，主管资金规模上百亿元，主导并打通预算、财务共享与 SAP 系统的集成，曾参与海外并购公司财务管理、曾担任创业公司财务负责人。",
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
