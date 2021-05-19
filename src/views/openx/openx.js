import { Carousel, Slide } from 'vue-carousel';

/**
 * OpenX component
 */
export default {
    page: { title: 'OpenX' },
    data() {
        return {
            topics: [
                {
                    name: '开源理论与技术探索',
                    intro: '开源理论与技术探索。。。。。。。。。。。。。。。。。。',
                    image: 'images/temp/book.png',
                    url_name: "opensource-research",
                    experts: [
                        {
                            avatar: "images/council/理事长-杨涛.png",
                            name: "杨涛",
                            job: "负责开源基金会日常运营事务等相关工作，由专职的团队提供法务、基础设施建设等支撑工作。"
                        },
                    ],
                    icon: "uil uil-search",
                    article_nums: 28,
                    aritcle_last: {
                        id: "1",
                        name: "自动化检索开源项目中各个源代码文件的开源协议",
                        author: {
                            name: "Longgeek",
                            avatar: "http://landrick.vue.themesbrand.com/images/client/04.jpg",
                        },
                        update_time: "2020.02.02 22:18:39",
                    },
                    type: '理论技术',
                },
                {
                    name: '开源法务 & IPR',
                    url_name: "opensource-research",
                    intro: '开源理论与技术探索。。。。。。。。。。。。。。。。。。',
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
                    ],
                    icon: "uil uil-file",
                    article_nums: 28,
                    aritcle_last: {
                        id: "1",
                        name: "建立不同层面的开源人才培养体系 技术层面、治理层面",
                        author: {
                            name: "李荣",
                            avatar: "http://landrick.vue.themesbrand.com/images/client/01.jpg",
                        },
                        update_time: "2020.02.02 22:18:39",
                    },
                    type: '理论技术',
                },
                {
                    name: '开源协议 & 合规工具',
                    url_name: "opensource-research",
                    intro: '开源理论与技术探索。。。。。。。。。。。。。。。。。。',
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
                    ],
                    icon: "uil uil-file",
                    article_nums: 28,
                    aritcle_last: {
                        id: "1",
                        name: "战略层面、布道师层面等 职场、本科院校、基础教育等",
                        author: {
                            name: "大鹏",
                            avatar: "http://landrick.vue.themesbrand.com/images/client/02.jpg",
                        },
                        update_time: "2020.02.02 22:18:39",
                    },
                    type: '理论技术',
                },
                {
                    name: '开源软件 Devops 工具',
                    url_name: "opensource-research",
                    intro: '开源理论与技术探索。。。。。。。。。。。。。。。。。。',
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
                    icon: "uil uil-file",
                    article_nums: 28,
                    aritcle_last: {
                        id: "1",
                        name: "自动化检索开源项目中各个源代码文件的开源协议",
                        author: {
                            name: "Raiy",
                            avatar: "http://landrick.vue.themesbrand.com/images/client/03.jpg",
                        },
                        update_time: "2020.02.02 22:18:39",
                    },
                    type: '理论技术',
                },
                {
                    name: '开源软件 Devops 工具',
                    url_name: "opensource-research",
                    intro: '开源理论与技术探索。。。。。。。。。。。。。。。。。。',
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
                    icon: "uil uil-file",
                    article_nums: 28,
                    aritcle_last: {
                        id: "1",
                        name: "自动化检索开源项目中各个源代码文件的开源协议",
                        author: {
                            name: "Raiy",
                            avatar: "http://landrick.vue.themesbrand.com/images/client/03.jpg",
                        },
                        update_time: "2020-02-02 22:18:39",
                    },
                    type: '理论技术',
                },
            ],
            recommend: [
                {
                    name: '开源理论与技术探索',
                    intro: '自动化检索开源项目中各个源代码文件的开源协议',
                    url_name: "opensource-research",
                    icon: "uil uil-search",
                },
                {
                    name: '开源软件 Devops 工具',
                    intro: '战略层面、布道师层面等 职场、本科院校、基础教育等',
                    url_name: "opensource-research",
                    icon: "uil uil-file",
                },
            ],
            categories: [
                "理论技术",
                "基础设施",
                "运营治理",
                "开源服务",
            ],
            filterCategory: "all",
        }
    },
    components: {
        Carousel,
        Slide,
    },
    computed: {
        filteredData: function () {
            if (this.filterCategory === "all") {
                return this.topics;
            } else {
                return this.topics.filter(x => x.type === this.filterCategory);
            }
        }
    },
    methods: {
        updateFilter(filterName) {
            this.filterCategory = filterName;
        },
    }
}
