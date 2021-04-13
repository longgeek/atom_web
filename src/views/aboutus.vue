<script>
import TOC from "@/components/toc";

import { Carousel, Slide } from "vue-carousel";

/**
 * Page-aboutus component
 */
export default {
    page: { title: '关于我们' },
    data() {
        return {
            setup: '',
            tocData: [{"name":"堵俊平","photo":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL280YmovNWh3by9kdWp1bnBpbmdfMjAyMDEyMjYwMDQ0NDIucG5n","content":"开放原子开源基金会TOC主席，Apache基金会Member，Apache Hadoop、Submarine等项目PMC, Apache YuniKorn、TubeMQ等项目导师，在云计算和大数据领域有超过10年的研发和管理经验，在开源领域也有近10年的贡献和积累。","type":"TOC","sort":0,"createTime":"2020-09-10 11:44:37","updateTime":"2020-12-26 00:45:22","id":1,"createUserId":"9ecce8ece56a4559b9dea5709d1cfdf3","updateUserId":"1","title":"TOC 主席"},{"name":"谭中意","photo":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL3ZraW4vZTVvbC90YW56aG9uZ3lpXzIwMjAxMjI2MDA0NTQ1LnBuZw==","content":"开放原子开源基金会TOC副主席，百度前开源技术委员会的负责人，从无到有建立起百度开源（引入/内部/对外）的推进和管理体系，并深度参与多个百度著名开源项目，同时也是多个国际知名开源组织的成员，包括Mozilla、Gnome、Apache基金会的Committer和国际内源基金会（InnerSourceCommon foundation）的成员。","type":"TOC","sort":1,"createTime":"2020-09-10 11:45:40","updateTime":"2020-12-26 00:45:46","id":2,"createUserId":"9ecce8ece56a4559b9dea5709d1cfdf3","updateUserId":"1","title":"TOC 副主席"},{"name":"陈磊","photo":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlLzVreDgvYzJkdi9DJUU5JTk5JTg4JUU3JUEzJThBXzIwMjEwMTEyMTIwNjQzLnBuZw==","content":"开放原子开源基金会TOC成员，360资深技术专家，基础架构负责人，开源爱好者。\n主要从事分布式存储、NoSQL数据库、云原生、消息中间件等云计算及分布式系统相关技术领域的工作。\n负责和推动公司内项目的开源与发展，开源分布式NoSQL数据库Pika的负责人，开源PHP代码分析工具PHPTrace项目的发起人，基础架构团队开源项目包括：Atlas、PHPTrace、Pika、QBusBridge、QConf、Zeppelin。","type":"TOC","sort":8,"createTime":"2020-09-10 11:48:32","updateTime":"2021-01-12 12:08:02","id":5,"createUserId":"9ecce8ece56a4559b9dea5709d1cfdf3","updateUserId":"1","title":"TOC 成员"},{"name":"崔秀龙","photo":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlLzE3bXEva2Q0ZC9jdWl4aXVsb25nXzIwMjAxMjI2MDA0ODM5LnBuZw==","content":"开放原子开源基金会 TOC 成员，多年 IT 从业经历，现在腾讯担任架构师，近年来专注于开源软件和云原生技术的落地和推广，Kubernetes 和 Istio 项目成员，曾参与《Kubernetes 权威指南》和《深入浅出 Istio》等多本书籍的编写工作。","type":"TOC","sort":9,"createTime":"2020-09-11 16:29:19","updateTime":"2021-01-12 12:07:49","id":16,"createUserId":"a9fe2dc39a5b40ff98b519b2f9ea4e93","updateUserId":"1","title":"TOC 成员"},{"name":"霍海涛","photo":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL3B6cnMvdnV4Yi9odW9oYWl0YW9fMjAyMDEyMjYwMDQ2MDEucG5n","content":"开放原子开源基金会TOC成员，360集团技术总监，中国互联网协会中文域名副组长，密标委360负责人，国际组织CA/Browser Forum 360负责人，同时对Chromium、GNOME、Freedesktop、WebKit、Chromium社区的开源项目的都有大量贡献。对浏览器内核技术Chromium/Blink、WebKit 、Node.js内核有深入理解和研究。目前担任360PC浏览器的技术研发负责人，负责包括360安全浏览器、360极速浏览器、360企业安全浏览器等产品的开发和维护工作，同时主管360浏览器根证书计划。","type":"TOC","sort":10,"createTime":"2020-09-10 11:47:29","updateTime":"2020-12-26 00:46:03","id":3,"createUserId":"9ecce8ece56a4559b9dea5709d1cfdf3","updateUserId":"1","title":"TOC 成员"},{"name":"马涛","photo":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL3dyMTIvMW5vcC9tYXRhb18yMDIwMTIyNjAwNDY0NC5wbmc=","content":"开放原子开源基金会TOC成员，十五年Linux操作系统和内核相关开源研发经验，国内知名Linux内核研发人员，在Linux内核中参与多个开源组件的研发，涉及到文件系统，内存管理，通用块设备层等多个方面。多次参加国内外关于Linux内核开源的相关会议并发表讲座。","type":"TOC","sort":11,"createTime":"2020-09-10 11:52:23","updateTime":"2020-12-26 00:46:45","id":7,"createUserId":"9ecce8ece56a4559b9dea5709d1cfdf3","updateUserId":"1","title":"TOC 成员"},{"name":"蓝小明","photo":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL2M2MWQveGdieS9sYW54aWFvbWluZ18yMDIwMTIyNjAwNDYxNy5wbmc=","content":"开放原子开源基金会TOC成员，长期从事云计算、运维自动化相关工作。对于Cloud Foundry、Kubernetes、OAM、Terraform、Prometheus、Influxdb等有较为深入的研究，热爱开源，喜欢广交朋友。","type":"TOC","sort":14,"createTime":"2020-09-10 11:48:01","updateTime":"2020-12-26 00:46:19","id":4,"createUserId":"9ecce8ece56a4559b9dea5709d1cfdf3","updateUserId":"1","title":"TOC 成员"},{"name":"沈朝华","photo":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL2VqaTcvZnJ2Zi9zaGVuY2hhb2h1YV8yMDIwMTIyNjAwNDg1NC5wbmc=","content":"开放原子开源基金会 TOC 成员，任职于百度开源办公室，作为工作组组长负责百度对外开源推进和管理工作。拥有丰富的产品研发和管理相关经验，对 DevOps 方法、工具和技术有深入的研究。目前聚焦于开源生态建设、开发者搜索、开发者工具相关技术和产品研究。","type":"TOC","sort":15,"createTime":"2020-09-11 16:30:48","updateTime":"2020-12-26 00:48:55","id":17,"createUserId":"a9fe2dc39a5b40ff98b519b2f9ea4e93","updateUserId":"1","title":"TOC 成员"},{"name":"贺师俊","photo":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL2tsczMvZTB5by9oZXNoaWp1bl8yMDIxMDEwODE2MjYwNS5wbmc=","content":"开放原子开源基金会TOC成员，20年IT从业经历，热爱开源、开放标准和技术布道，曾先后任职于盛大创新院、百姓网、360等。作为Web前端和JavaScript语言技术专家，对相关领域的多项技术标准和多个开源项目有微小贡献。近两年致力于推动中国科技公司加入Ecma国际标准组织，2019年7月开始作为TC39（JavaScript语言标准委员会）成员深入参与了多项JavaScript语言新提案。","type":"TOC","sort":20,"createTime":"2021-01-08 16:26:08","updateTime":"2021-01-08 16:26:08","id":19,"createUserId":"9ecce8ece56a4559b9dea5709d1cfdf3","updateUserId":"9ecce8ece56a4559b9dea5709d1cfdf3","title":"TOC成员"},{"name":"苏贝","photo":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL2d6ZGMvbHF4Zi9zdWliZWlfMjAyMDEyMjYwMDQ3MTUucG5n","content":"开放原子开源基金会TOC成员，招商银行信息技术部高级架构师，负责开源技术架构管理方面工作。牵头制定了招商银行开源软件管理制度框架，长期从事开源软件的选型和评估，以及后续部署、运维、编码等技术规范相关工作，同时负责招行和行外开源组织的对接工作。在行内具有较高技术影响力，倡导开放生态推广开源文化，积极推动各部门采纳开源软件。","type":"TOC","sort":88,"createTime":"2020-09-10 11:52:58","updateTime":"2020-12-26 00:47:17","id":8,"createUserId":"9ecce8ece56a4559b9dea5709d1cfdf3","updateUserId":"1","title":"TOC 成员"},{"name":"孙善宝","photo":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL3o2Y20vYmVqZi9zdW5zaGFuYmFvXzIwMjAxMjI2MDA0NzIyLnBuZw==","content":"开放原子开源基金会TOC成员，高级工程师，浪潮集团物联网首席架构师，浪潮开源办公室负责人，开源爱好者。作为浪潮开源协同和开源文化建设的主要推动者，构建了浪潮的开源战略和整体架构，拥有15年软件研发经验，主持设计并带领团队研发了浪潮物联网平台，参与了浪潮智慧城市的整体规划设计，并落地多项大型物联网应用，参与设计研发的浪潮工业互联网平台成为首批工信部认定的八家工业互联网平台之一。迄今累积已申请专利100余项，第一作者发明授权专利10余项。","type":"TOC","sort":89,"createTime":"2020-09-10 11:53:41","updateTime":"2020-12-26 00:47:23","id":9,"createUserId":"9ecce8ece56a4559b9dea5709d1cfdf3","updateUserId":"1","title":"TOC 成员"},{"name":"谭焜","photo":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL3AzcTUvODE0cS90YW5rdW5fMjAyMDEyMjYwMDQ3MzMucG5n","content":"开放原子开源基金会TOC成员，现任华为中央软件院副总裁，分布式并行软件实验室主任和首席技术专家。加入华为之前，曾任微软亚洲研究院无线网络组主任，资深研究员。谭焜博士是计算机网络和系统领域的著名学者，在网络拥塞控制、数据中心网络、无线网络和分布式系统等领域均有突出成果。共发表论文近百篇。曾获2009年USENIX NSDI最佳论文奖和2019年NSDI“时间检验奖”。谭博士曾多次担任国际顶级会议的程序委员会成员，2010~2015年曾任IEEE Trans. On Mobile Computing编委。","type":"TOC","sort":90,"createTime":"2020-09-10 11:54:14","updateTime":"2020-12-26 00:47:34","id":10,"createUserId":"9ecce8ece56a4559b9dea5709d1cfdf3","updateUserId":"1","title":"TOC 成员"},{"name":"肖伟","photo":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL2ZhY28vOG90ai94aWFvd2VpXzIwMjAxMjI2MDA0NzU3LnBuZw==","content":"开放原子开源基金会TOC成员，百度杰出科学家兼区块链总经理、工信部区块链重点实验室学术委员、区块链国家标准制定专班委员。作为百度基础架构、云计算、移动云计算的先行者，操刀百度基础架构编程体系、移动云计算架构、金融大数据系统，拥有大量移动云计算和区块链相关专利，并多次承接国家级高科技项目。目前带领百度区块链团队，从事自有知识产权的高性能区块链研发和应用落地工作，将区块链与前沿技术结合，在大数据流通领域、边缘计算领域、物联网等形成区块链+的整体解决方案，已经在多个企业、政府机构实现落地。","type":"TOC","sort":96,"createTime":"2020-09-10 11:55:47","updateTime":"2020-12-26 00:47:58","id":12,"createUserId":"9ecce8ece56a4559b9dea5709d1cfdf3","updateUserId":"1","title":"TOC 成员"},{"name":"许勇","photo":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlLzl5aG4vYzZmdC94dXlvbmdfMjAyMDEyMjYwMDQ3NDUucG5n","content":"开放原子开源基金会TOC成员，腾讯四级专家，腾讯技术委员会委员，腾讯开源办公室执行总监，近年来致力于大数据及开源治理相关领域的技术研究和实践。2015年发起并建立腾讯开源联盟（TOSA），从组织机制上协调，统筹腾讯开源事务，为腾讯开源战略制修订提供方案及建议。2017年发起并主导腾讯技术委员会，成立开源管理办公室，从组织，流程及资源上保证腾讯开源战略的执行（包括技术重点）；推进与国内外的开源组织和开源社区建立广泛的联系和合作，推动腾讯在开源方面持续参与与贡献。","type":"TOC","sort":97,"createTime":"2020-09-10 11:55:20","updateTime":"2020-12-26 00:47:46","id":11,"createUserId":"9ecce8ece56a4559b9dea5709d1cfdf3","updateUserId":"1","title":"TOC 成员"},{"name":"徐亮","photo":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL2MzNWsvbW5tNy94dWxpYW5nXzIwMjAxMjI2MDA0ODA4LnBuZw==","content":"开放原子开源基金会TOC成员，作为一名在开源圈子已近10年，有丰富开源社区经验的“90后”，徐亮从高中时起就参与开源社区，2011年时就已成为Debian的开发人员。目前已是Ubuntu、Debian的资深官方开发人员，并多次承担GSoC项目导师。现任华为开源能力中心主任工程师。","type":"TOC","sort":98,"createTime":"2020-09-10 11:56:16","updateTime":"2020-12-26 00:48:09","id":13,"createUserId":"9ecce8ece56a4559b9dea5709d1cfdf3","updateUserId":"1","title":"TOC 成员"},{"name":"易立","photo":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL3h6ZWMvaWYyeC95aWxpXzIwMjAxMjI2MDA0ODE3LnBuZw==","content":"开放原子开源基金会TOC成员，自2015年起负责阿里云容器服务研发，推进云原生相关开源项目和社区合作。曾在IBM中国开发中心工作14年，担任资深技术专员，负责了一系列云计算和中间件产品研发。现在也是CNCF理事会的代表之一。","type":"TOC","sort":99,"createTime":"2020-09-10 11:56:55","updateTime":"2020-12-26 00:48:18","id":14,"createUserId":"9ecce8ece56a4559b9dea5709d1cfdf3","updateUserId":"1","title":"TOC 成员"},{"name":"郑伟波","photo":"//openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL3ZrbGUvMDQycS96aGVuZ3dlaWJvXzIwMjAxMjI2MDA0ODI3LnBuZw==","content":"开放原子开源基金会TOC成员，浪潮国际CTO，浪潮开源技术委员会主席，浪潮云ERP首席科学家，主导开发了浪潮iGIX企业数字化能力平台、GSP+企业互联网开放平台、浪潮云+智能企业协同云等平台与SaaS产品，在工业互联网、云原生技术、低代码开发等领域有深入的研究。国际知名开源ERP平台Odoo国内本地化的主要倡导者和实践者，发起组建首个中国开源工业PaaS协会，致力于通过开源模式构建工业互联网平台；主导了首个开源+标准模式的低代码开发建模体系UBML（Unified Business Modeling Language），并在业内率先实现全栈建模；NET Core本地化适配的积极推动者和重要贡献者，同时带领团队积极参与CAS、SEATA等多个关联开源项目的社区贡献。","type":"TOC","sort":100,"createTime":"2020-09-10 11:57:59","updateTime":"2020-12-26 00:48:28","id":15,"createUserId":"9ecce8ece56a4559b9dea5709d1cfdf3","updateUserId":"1","title":"TOC 成员"}],
            imagesData: [{"src":"https://con.openatom.cn/static/images/dyj.jpg","slot":"left"},{"src":"https://con.openatom.cn/static/images/lADPD3IrtvxmXqzNBgDNBAA_1024_1536.jpg","slot":"left"},{"src":"https://con.openatom.cn/static/images/T1.jpg","slot":"left"},{"src":"https://con.openatom.cn/static/images/T2.jpg","slot":"left"},{"src":"https://con.openatom.cn/static/images/T3.jpg","slot":"left"},{"src":"https://con.openatom.cn/static/images/tzz.jpg","slot":"left"},{"src":"https://con.openatom.cn/static/images/whs.jpg","slot":"left"},{"src":"https://con.openatom.cn/static/images/ymj.jpg","slot":"left"},{"src":"https://con.openatom.cn/static/images/all.jpg","slot":"rightUp|rightBottom"},{"src":"https://con.openatom.cn/static/images/lADPD2eDO1io8YfNAqvNBAA_1024_683.jpg","slot":"rightUp"},{"src":"https://con.openatom.cn/static/images/lADPD2eDO1isSzfNAqvNBAA_1024_683.jpg","slot":"rightUp"},{"src":"https://con.openatom.cn/static/images/lADPD3Irt0b_y1nNAqvNBAA_1024_683.jpg","slot":"rightBottom"},{"src":"https://con.openatom.cn/static/images/lADPD3Irt0b8caHNAqvNBAA_1024_683.jpg","slot":"rightUp"},{"src":"https://con.openatom.cn/static/images/lADPD3zUMzVP8XHNAqvNBAA_1024_683.jpg","slot":"rightBottom"},{"src":"https://con.openatom.cn/static/images/lADPD4d8ryOlgB7NAqvNBAA_1024_683.jpg","slot":"rightUp"},{"src":"https://con.openatom.cn/static/images/lADPD2sQuf1yy3nNAqvNBAA_1024_683.jpg","slot":"rightBottom"},{"src":"https://con.openatom.cn/static/images/lADPD3W5NevE_9_NAqvNBAA_1024_683.jpg","slot":"rightUp"},{"src":"https://con.openatom.cn/static/images/lADPD3Irt0b-f_jNAqvNBAA_1024_683.jpg","slot":"rightBottom"},{"src":"https://con.openatom.cn/static/images/lADPD3Irtxo5EVTNAqvNBAA_1024_683.jpg","slot":"rightBottom"},{"src":"https://con.openatom.cn/static/images/lADPD4d8rvbj9xXNAqvNBAA_1024_683.jpg","slot":"rightUp"},{"src":"https://con.openatom.cn/static/images/lADPD26eOHV2d1zNAqvNBAA_1024_683.jpg","slot":"rightBottom"},{"src":"https://con.openatom.cn/static/images/lADPD26eOHV2uabNAqvNBAA_1024_683.jpg","slot":"rightUp"},{"src":"https://con.openatom.cn/static/images/lADPD3W5NaEv_fnNAqvNBAA_1024_683.jpg","slot":"rightUp"},{"src":"https://con.openatom.cn/static/images/lADPD4BhsY-AXtjNAqvNBAA_1024_683.jpg","slot":"rightBottom"},{"src":"https://con.openatom.cn/static/images/lADPD4d8rtkMNiDNAqvNBAA_1024_683.jpg","slot":"rightUp"},{"src":"https://con.openatom.cn/static/images/lADPD2sQudCwOYPNAqvNBAA_1024_683.jpg","slot":"rightUp"},{"src":"https://con.openatom.cn/static/images/newlADPBGY17op_J5jNAyrNBDg_1080_810.jpg","slot":"rightBottom"},{"src":"https://con.openatom.cn/static/images/newlALPBF8a8UDv1sjNAirNAz4_830_554.jpg","slot":"rightUp"},{"src":"https://con.openatom.cn/static/images/newlALPBFDk9q3UBu7NAorNA2I_866_650.jpg","slot":"rightBottom"},{"src":"https://con.openatom.cn/static/images/ls.jpg","slot":"rightUp"},{"src":"https://con.openatom.cn/static/images/ycc.jpg","slot":"rightBottom"},{"src":"https://con.openatom.cn/static/images/zp.jpg","slot":"rightUp"},{"src":"https://con.openatom.cn/static/images/flag.jpg","slot":"rightBottom"},{"src":"https://con.openatom.cn/static/images/ty.jpg","slot":"rightUp"},{"src":"https://con.openatom.cn/static/images/1015-all.jpg","slot":"rightBottom"}],
            images: {
                left: [],
                rightUp: [],
                rightBottom: [],
            }
        };
    },
    components: {
        TOC,
        Carousel,
        Slide,
    },
    created() {
        this.setup = this.$moment("20200606", "YYYYMMDD").fromNow().replace('前', '');

        for (let item of this.imagesData) {
            if (item.slot.indexOf("left") != -1) {
                this.images.left.push(item.src);
            } else {
                if (item.slot.indexOf("rightUp") != -1) {
                  this.images.rightUp.push(item.src);
                }
                if (item.slot.indexOf("rightBottom") != -1) {
                  this.images.rightBottom.push(item.src);
                }
            }
        }
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
                            <p class="text-muted para-desc mb-0 mx-auto">开源基金会是开源项目的孵化器、连接器和倍增器。通过对开源代码的开放治理以便于形成事实标准，连接产学研共建开源生态，为开源项目找到更多的应用场景。</p>
                            <div class="page-next">
                                <nav aria-label="breadcrumb" class="d-inline-block">
                                    <ul class="breadcrumb bg-white rounded shadow mb-0">
                                        <li class="breadcrumb-item">
                                            <router-link to="/">首页</router-link>
                                        </li>
                                        <li class="breadcrumb-item active" aria-current="page">关于我们</li>
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
        <section class="section">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div class="position-relative">
                            <img
                                src="@/assets/images/index.png"
                                class="rounded img-fluid mx-auto d-block"
                                alt=""
                            />
                            <div class="play-icon">
                                <a
                                    v-b-modal.modal
                                    href="javascript:void(0);"
                                    class="play-btn video-play-icon"
                                >
                                    <i
                                        class="mdi mdi-play text-primary rounded-circle bg-white shadow"
                                    ></i>
                                </a>

                                <b-modal
                                    id="modal"
                                    hide-footer
                                    size="lg"
                                    header-close-variant="white"
                                    header-class="border-0"
                                    content-class="border-0"
                                    centered
                                >
                                    <b-embed
                                        type="iframe"
                                        aspect="16by9"
                                        src="videos/intro.mp4"
                                        allowfullscreen
                                    ></b-embed>
                                </b-modal>
                            </div>
                        </div>
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
                                开放原子开源基金会（以下简称“开源基金会”）是在民政部注册的致力于开源产业公益事业的非营利性独立法人机构。
                            </p>
                            <p class="text-muted">
                                开源基金会的服务范围包括开源软件、开源硬件、开源芯片及开源内容等，为各类开源项目提供中立的知识产权托管，保证项目的持续发展不受第三方影响，通过开放治理寻求更丰富的社区资源的支持与帮助，包括募集并管理资金，提供法律、财务等专业支持。
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

        <section class="section bg-light">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="section-title text-center mb-4 pb-2">
                            <h5 class="mb-4">组织结构</h5>
                            <p class="para-desc mx-auto text-muted">
                                开放原子开源基金会由<b class="text-primary"> 理事会</b>、<b class="text-primary">技术监督委员会</b>、<b class="text-primary">秘书处 </b>三个部分组成
                            </p>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->

                <div class="row justify-content-center">
                    <div class="col-lg-6 mt-4 pt-2">
                        <div class="faq-content">
                            <div class="accordion" id="accordionExampleone">
                                <b-card no-body class="mb-2 border-bottom rounded">
                                    <b-card-header class="border-0 bg-light p-3 pr-5">
                                        <a class="faq position-relative text-dark" v-b-toggle.accordion-1 href="javascript: void(0);">
                                            <h6 class="title mb-0"> 理事会 </h6>
                                        </a>
                                    </b-card-header>
                                    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                        <b-card-body class="px-2 py-4">
                                            <p class="text-muted mb-0 faq-ans">开源基金会的立法机构是理事会，负责审议和修改基金会章程等。理事会设理事长、副理事长和秘书长，从理事中选举产生，理事长是基金会的法定代表人。</p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card no-body class="mb-2 border-bottom rounded">
                                    <b-card-header class="border-0 bg-light p-3 pr-5">
                                        <a class="faq position-relative text-dark" v-b-toggle.accordion-2 href="javascript: void(0);">
                                            <h6 class="title mb-0"> 技术监督委员会</h6>
                                        </a>
                                    </b-card-header>
                                    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                        <b-card-body class="px-2 py-4">
                                            <p class="text-muted mb-0 faq-ans">技术监督委员会是中立的技术决策机构，负责开源基金会技术相关的决策，项目孵化的评审等。</p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card no-body class="mb-2 border-bottom rounded">
                                    <b-card-header class="border-0 bg-light p-3 pr-5">
                                        <a class="faq position-relative text-dark" v-b-toggle.accordion-3 href="javascript: void(0);">
                                            <h6 class="title mb-0"> 秘书处 </h6>
                                        </a>
                                    </b-card-header>
                                    <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                        <b-card-body class="px-2 py-4">
                                            <p class="text-muted mb-0 faq-ans">秘书处是开源基金会的执行机构，负责开源基金会日常运营事务等相关工作，由专职的团队提供法务、营销、社区运营、基础设施建设等支撑工作。</p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </div>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->

                <div class="row mt-4">
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="media key-feature align-items-center p-3 rounded shadow text-center bg-light">
                            <div class="media-body">
                                <h6 class="mb-2">使命</h6>
                                <p class="text-muted mb-0">一切为了开发者，一切为了全世界</p>
                            </div>
                        </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="media key-feature align-items-center p-3 rounded shadow text-center bg-light">
                            <div class="media-body">
                                <h6 class="mb-2">愿景</h6>
                                <p class="text-muted mb-0">成为国际一流的开源基金会</p>
                            </div>
                        </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
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
            <!--end container-->
        </section>
        <!--end section-->

        <section class="section">
            <!-- TOC Start -->
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="section-title mb-4 pb-2">
                            <h5 class="mb-4">名人堂 — 技术监督委员会</h5>
                            <p class="text-muted para-desc mx-auto mb-0">
                                开放原子开源基金会（以下简称“基金会”）技术监督委员会（Technical Oversight Committee，简称<span class="text-primary font-weight-bold"> “TOC” </span>）为基金会的开源项目提供技术指导，主要承担如下职责：
                            </p>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->

                <TOC :toc-data="tocData" />
            </div>
            <!--end container-->
            <!-- TOC End -->
        </section>
        <!--end section-->

        <!-- 我们 Start -->
        <section class="section bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="section-title mb-4 pb-2">
                            <h5 class="mb-4">我们</h5>
                            <p class="text-muted para-desc mx-auto mb-0">
                            开源软件，是一项全球化群体智慧的协作运动。
                            欢迎了解、参与、贡献开源，社区生态需要更多的力量帮扶，能在贡献的同时找到伙伴，找到良师益友、技术目标、开源的乐趣。
                            <br />
                            欢迎加入基金会和志愿者团队，参与众智创新与开发者服务。
                            </p>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->

                <div class="row mt-4">
                    <div class="col-lg-6 col-md-6">
                        <carousel
                            :per-page="1"
                            dir="ltr"
                            :autoplay="true"
                            id="single-owl"
                            class="owl-carousel owl-theme mb-5"
                            :loop="true"
                            :paginationEnabled="false"
                        >
                            <Slide
                                class="testi text-center"
                                v-for="(item, index) of images.rightUp"
                                :key="index"
                            >
                                <div class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3">
                                    <div class="card-body p-0">
                                        <a
                                            class="mfp-image d-inline-block"
                                            :href="item"
                                            target="_blank"
                                            title=""
                                        >
                                            <img
                                                :src="item"
                                                class="img-fluid shadow rounded"
                                                alt="work-image"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </Slide>
                            <!--end review content-->
                        </carousel>
                        <!--end owl carousel-->
                    </div>
                    <!--end col-->
                    <div class="col-lg-6 col-md-6">
                        <carousel
                            :per-page="1"
                            dir="ltr"
                            :autoplay="true"
                            id="single-owl"
                            class="owl-carousel owl-theme"
                            :loop="true"
                            :paginationEnabled="false"
                        >
                            <Slide
                                class="testi text-center"
                                v-for="(item, index) of images.rightBottom"
                                :key="index"
                            >
                                <div class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3">
                                    <div class="card-body p-0">
                                        <a
                                            class="mfp-image d-inline-block"
                                            :href="item"
                                            target="_blank"
                                            title=""
                                        >
                                            <img
                                                :src="item"
                                                class="img-fluid shadow rounded"
                                                alt="work-image"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </Slide>
                            <!--end review content-->
                        </carousel>
                        <!--end owl carousel-->
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>

            <!--end container-->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 mt-4 pt-2">
                        <carousel
                            id="six-slide"
                            class="owl-carousel owl-theme"
                            dir="ltr"
                            :per-page="8"
                            :loop="true"
                            :autoplay="true"
                            :perPageCustom="[[0, 1], [300, 2], [380, 4], [768, 6], [1199, 8]]"
                            :paginationEnabled="false"
                        >
                            <Slide v-for="(item, index) of images.left" :key="index">
                                <div class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3">
                                    <div class="card-body p-0">
                                        <a
                                            class="mfp-image d-inline-block"
                                            :href="item"
                                            target="_blank"
                                            title=""
                                        >
                                            <img
                                                :src="item"
                                                class="img-fluid shadow rounded"
                                                alt="work-image"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </Slide>
                        </carousel>
                    </div>
                </div>
                <!--end row-->
            </div>
            <!--end container-->
        </section>
        <!--end section-->
        <!-- 我们 End -->

        <!--end section-->
    </div>
</template>

<style>
.modal-content {
    background-color: transparent;
}
</style>
