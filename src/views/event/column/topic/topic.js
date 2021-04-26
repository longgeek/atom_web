/**
 * 议题征集规则
 */
import countTo from "vue-count-to";
import TopicForm from './topic-form.vue';

export default {
    page: { title: '议题征集' },
    data() {
        return {
            user: '',
            id: '',
            column: '',
            loading: false,
        }
    },
    components: { countTo, TopicForm },
    created() {
        // 判断 URL 中是否有 id 参数
        this.id = this.$route.query['id'];
        if (!this.id) this.$router.push({ name: 'error' });

        // 根据 URL 参数获取 column detail
        this.$http.get(this.$api.column.detail(this.id))
            .then((rsp) => {
                if (rsp.data.code === 200) {
                    this.column = rsp.data.data;
                }
                this.loading = false;
            })
    }
}
