import { Carousel, Slide } from 'vue-carousel';

import Navbar from "@/components/navbar";

/**
 * OpenX 专栏 component
 */
export default {
    page: { title: '专栏详情' },
    data() {
        return {
            topicFileNums: 0,
            topic: {
                type: '理论技术',
                name: '开源理论与技术探索',
                intro: '开放原子开源基金会是开源项目的孵化器、连接器和倍增器。通过对开源代码的开放治理以便于形成事实标准，连接产学研共建开源生态，为开源项目找到更多的应用场景。',
                image: 'images/temp/book.png',
                url_name: "opensource-research",
                experts: [
                    {
                        avatar: "images/council/理事长-杨涛.png",
                        name: "杨涛",
                        job: "负责开源基金会日常运营事务等相关工作，由专职的团队提供法务、基础设施建设等支撑工作。"
                    },
                    {
                        avatar: "images/council/理事-杜玉杰.png",
                        name: "杜玉杰",
                        job: "负责开源基金会日常运营事务等相关工作，由专职的团队提供法务、基础设施建设等支撑工作。"
                    },
                    {
                        avatar: "images/council/理事-杜玉杰.png",
                        name: "杜玉杰",
                        job: "负责开源基金会日常运营事务等相关工作，由专职的团队提供法务、基础设施建设等支撑工作。"
                    },
                    {
                        avatar: "images/council/理事-杜玉杰.png",
                        name: "杜玉杰",
                        job: "负责开源基金会日常运营事务等相关工作，由专职的团队提供法务、基础设施建设等支撑工作。"
                    },
                ],
                icon: "uil uil-search",
                article_nums: 28,
                aritcles: [
                    {
                        id: "1",
                        name: "自动化检索开源项目中各个源代码文件的开源协议",
                        image: "http://landrick.vue.themesbrand.com/images/blog/07.jpg",
                        content: "建立不同层面的开源人才培养体系 技术层面、治理层面、战略层面、布道师层面等 职场、本科院校、大职大专、基础教育等",
                        author: {
                            name: "Longgeek",
                            avatar: "http://landrick.vue.themesbrand.com/images/client/04.jpg",
                        },
                        views: 256,
                        files: [
                            {
                                filename: 'Document_2021.pdf',
                                url: '',
                            },
                            {
                                filename: 'OpenX-介绍.ppt',
                                url: '',
                            },
                        ],
                        tags: ["组合优化", "最小生成树", "遗传算法"],
                        update_time: "2020.02.02 22:18:39",
                    },
                    {
                        id: "1",
                        name: "自动化检索开源项目中各个源代码文件的开源协议",
                        image: "http://landrick.vue.themesbrand.com/images/blog/07.jpg",
                        content: "建立不同层面的开源人才培养体系 技术层面、治理层面、战略层面、布道师层面等 职场、本科院校、大职大专、基础教育等",
                        author: {
                            name: "Longgeek",
                            avatar: "http://landrick.vue.themesbrand.com/images/client/04.jpg",
                        },
                        views: 256,
                        files: [
                            {
                                filename: 'Document_2021.pdf',
                                url: '',
                            },
                            {
                                filename: 'OpenX-介绍.ppt',
                                url: '',
                            },
                        ],
                        tags: ["组合优化", "最小生成树", "遗传算法"],
                        update_time: "2020.02.02 22:18:39",
                    },
                    {
                        id: "1",
                        name: "自动化检索开源项目中各个源代码文件的开源协议",
                        image: "http://landrick.vue.themesbrand.com/images/blog/07.jpg",
                        content: "建立不同层面的开源人才培养体系 技术层面、治理层面、战略层面、布道师层面等 职场、本科院校、大职大专、基础教育等",
                        author: {
                            name: "Longgeek",
                            avatar: "http://landrick.vue.themesbrand.com/images/client/04.jpg",
                        },
                        views: 256,
                        files: [
                            {
                                filename: 'Document_2021.pdf',
                                url: '',
                            },
                            {
                                filename: 'OpenX-介绍.ppt',
                                url: '',
                            },
                        ],
                        tags: ["组合优化", "最小生成树", "遗传算法"],
                        update_time: "2020.02.02 22:18:39",
                    },
                    {
                        id: "1",
                        name: "自动化检索开源项目中各个源代码文件的开源协议",
                        image: "http://landrick.vue.themesbrand.com/images/blog/07.jpg",
                        content: "建立不同层面的开源人才培养体系 技术层面、治理层面、战略层面、布道师层面等 职场、本科院校、大职大专、基础教育等",
                        author: {
                            name: "Longgeek",
                            avatar: "http://landrick.vue.themesbrand.com/images/client/04.jpg",
                        },
                        views: 256,
                        files: [
                            {
                                filename: 'Document_2021.pdf',
                                url: '',
                            },
                            {
                                filename: 'OpenX-介绍.ppt',
                                url: '',
                            },
                        ],
                        tags: ["组合优化", "最小生成树", "遗传算法"],
                        update_time: "2020.02.02 22:18:39",
                        tags: ["组合优化", "最小生成树", "遗传算法"],
                        update_time: "2020.02.02 22:18:39",
                    },
                    {
                        id: "1",
                        name: "自动化检索开源项目中各个源代码文件的开源协议",
                        image: "http://landrick.vue.themesbrand.com/images/blog/07.jpg",
                        content: "建立不同层面的开源人才培养体系 技术层面、治理层面、战略层面、布道师层面等 职场、本科院校、大职大专、基础教育等",
                        author: {
                            name: "Longgeek",
                            avatar: "http://landrick.vue.themesbrand.com/images/client/04.jpg",
                        },
                        views: 256,
                        files: [
                            {
                                filename: 'Document_2021.pdf',
                                url: '',
                            },
                            {
                                filename: 'OpenX-介绍.ppt',
                                url: '',
                            },
                        ],
                        tags: ["组合优化", "最小生成树", "遗传算法"],
                        update_time: "2020.02.02 22:18:39",
                    },
                    {
                        id: "1",
                        name: "自动化检索开源项目中各个源代码文件的开源协议",
                        image: "http://landrick.vue.themesbrand.com/images/blog/07.jpg",
                        content: "建立不同层面的开源人才培养体系 技术层面、治理层面、战略层面、布道师层面等 职场、本科院校、大职大专、基础教育等",
                        author: {
                            name: "Longgeek",
                            avatar: "http://landrick.vue.themesbrand.com/images/client/04.jpg",
                        },
                        views: 256,
                        files: [
                            {
                                filename: 'Document_2021.pdf',
                                url: '',
                            },
                            {
                                filename: 'OpenX-介绍.ppt',
                                url: '',
                            },
                        ],
                        tags: ["组合优化", "最小生成树", "遗传算法"],
                        update_time: "2020.02.02 22:18:39",
                    },
                ],
            },
        }
    },
    components: {
        Carousel,
        Slide,
        Navbar,
    },
    methods: {},
    created() {
        // 计算 Topic 下所有文章的文件总数
        for (let i in this.topic.aritcles) {
            this.topicFileNums += this.topic.aritcles[i].files.length;
        }
    }
}
