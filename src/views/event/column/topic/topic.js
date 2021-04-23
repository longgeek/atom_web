/**
 * 议题征集规则
 */
import {
  ArrowUpIcon,
  HelpCircleIcon,
  ChevronRightIcon,
  SmartphoneIcon,
  MailIcon,
  ArrowRightIcon
} from "vue-feather-icons";

import TopicForm from './topic-form.vue';

export default {
    page: { title: '议题征集' },
    data() {
        return {
            topicDirection: [
                {
                    name: "开源硬件",
                    icon: "",
                },
                {
                    name: "开源内容",
                    icon: "",
                },
                {
                    name: "开源 DevOps 工具",
                    icon: "",
                },
                {
                    name: "开源编程语言",
                    icon: "",
                },
                {
                    name: "开源社区运营及治理",
                    icon: "",
                },
                {
                    name: "开源法律法规及知识产权",
                    icon: "",
                },
                {
                    name: "开源教育",
                    icon: "",
                },
                {
                    name: "开发者心理及生理健康",
                    icon: "",
                },
                {
                    name: "开发者权益保护",
                    icon: "",
                },
                {
                    name: "开发者职业发展规划",
                    icon: "",
                },
                {
                    name: "女性开发者",
                    icon: "",
                },
            ],
        }
    },
    components: {
        HelpCircleIcon,
        ChevronRightIcon,
        MailIcon,
        SmartphoneIcon,
        ArrowRightIcon,
        TopicForm,
    },
}
