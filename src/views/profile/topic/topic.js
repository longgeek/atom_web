/**
 * Profile component
 */

import TopicForm from '@/views/event/column/topic/topic-form';
import ProfileLeft from "@/views/profile/profile-left";
import ProfileHeader from "@/views/profile/profile-header";

const methods = {
    removeTopic() {
        this.$http.delete(
            this.$api.column.topic_remove(this.select.topicId),
        ).then((rsp) => {
            if (rsp.data.code === 200) {
                this.getUserTopic();
                this.$refs.topic_remove.hide();
                this.$bvToast.toast('成功移除议题', {title: '提示', variant: 'primary'});
            }
        })
    },
    // 编辑 Modal 关闭后自动刷新用户的议题
    editModalClose() {
        this.getUserTopic();
    },
    // 获取用户提交的所有议题
    getUserTopic() {
        this.$http.get(
            this.$api.column.topic(),
        ).then((rsp) => {
            if (rsp.data.code === 200) {
                this.topics = rsp.data.data;
            }
            this.loading = false;
        })
    },
}

export default {
    page: { title: '个人主页' },
    data() {
        return {
            user: {},
            select: {},
            topics: [],
            loading: false,
        }
    },
    methods,
    components: { TopicForm, ProfileLeft, ProfileHeader },
    created() {
        this.loading = true;

        // 获取用户信息和用户提交的议题
        this.user = JSON.parse(localStorage.getItem('user'));
        this.getUserTopic();
    }
}
