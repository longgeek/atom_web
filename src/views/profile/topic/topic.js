/**
 * Profile component
 */

import ProfileLeft from "@/views/profile/profile-left";
import ProfileHeader from "@/views/profile/profile-header";

export default {
    page: { title: '个人主页' },
    data() {
        return {
            user: {},
            topics: [],
            loading: false,
        }
    },
    components: { ProfileLeft, ProfileHeader },
    created() {
        this.loading = true;

        // 获取用户信息
        this.$http.get(
            this.$api.users.get(),
        ).then((rsp) => {
            if (rsp.data.code === 200) {
                this.user = rsp.data.data;
            }
        })

        // 获取用户提交的所有议题
        this.$http.get(
            this.$api.column.topic(),
        ).then((rsp) => {
            if (rsp.data.code === 200) {
                this.topics = rsp.data.data;
            }
            this.loading = false;
        })
    }
}
