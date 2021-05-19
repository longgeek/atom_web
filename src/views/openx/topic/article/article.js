import Navbar from "@/components/navbar";

/**
 * OpenX 专栏文章 component
 */
export default {
    page: { title: '专栏文章内容' },
    data() {
        return {
            article: {
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
        }
    },
    components: { Navbar },
}
