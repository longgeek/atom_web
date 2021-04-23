/**
 *  提交议题表单
 */
<script>
    import { FormWizard, TabContent, WizardButton } from "vue-form-wizard";
    import { required, minLength, maxLength } from "vuelidate/lib/validators";

    const data = function() {
        return {
            id: '',
            topic: '',
            topicType: '',
            loading: false,                     // 控制提交按钮禁用
            errorMsg: '',                       // 当表单有误时前端提醒文字
            // 提交议题表单
            step1: {
                name: '',                       // 姓名
                job: '',                        // 职位
                company: '',                    // 当下所处公司|组织
                keynote_experience: '',         // 演讲经历
                contribution: '',               // 开源贡献
                submitted: false,               // 代表表单被提交
            },
            // 重置密码表单
            step2: {
                topic_type: 'keynote',          // 议题类型 keynote | panel
                title: '',                      // 议题名称
                intro: '',                      // 内容简介
                catalog: '',                    // 内容大纲
                reward: '',                     // 听众收益
                attach: '',                     // 上传支撑材料
                submitted: false,               // 代表表单被提交
            },
            step3: {
                submitted: false,               // 代表表单被提交
            },
        }
    };
    const methods = {
        // 初始化方法
        init() {
            // 判断 URL 中是否有 id 参数
            this.id = this.$route.query['id'];
            if (!this.id) this.$router.push({ name: 'error' });

            // 根据 URL 参数获取 topic detail

            // 根据 URL 参数获取 topic type
            this.$http.get(this.$api.column.topic_type(this.id))
                .then((rsp) => {
                    if (rsp.data.code === 200) {
                        this.topicType = rsp.data.data;
                        console.log(this.topicType);
                    }
                    this.loading = false;
                })
        },
        // 表单点击下一步触发的事件
        nextEvent(props) {
            if (props.activeTabIndex == 0) this.submitStep1(props);
            if (props.activeTabIndex == 1) this.submitStep2(props);
            if (props.activeTabIndex == 2) this.$router.push({name: 'profile-topic'});
        },
        /*
         *  个人信息表单
         */
        submitStep1(props) {
            if (this.loading) return;

            this.loading = true;
            this.step1.submitted = true;

            // 判断表单是否无效
            if (this.$v.step1.$invalid) {
                // 根据表单错误项输出提示内容
                if (this.$v.step1.name.$error) { this.errorMsg = '请输入姓名' }
                else if (this.$v.step1.job.$error) { this.errorMsg = '请输入职位' }
                else if (this.$v.step1.company.$error) { this.errorMsg = '请输入当下所处公司|组织' }
                else if (this.$v.step1.keynote_experience.$error) { this.errorMsg = '请输入个人演讲经历' }
                else if (this.$v.step1.contribution.$error) { this.errorMsg = '请输入在开源领域的贡献' }
                this.$v.$touch();
                this.loading = false;
                return;
            }

            // 输入格式验证成功
            this.loading = false;
            this.errorMsg = false;

            // 切换到 step2 表单
            props.nextTab();
        },
        /*
         *  议题内容表单
         */
        submitStep2(props) {
            if (this.loading) return;

            this.loading = true;
            this.step2.submitted = true;

            // 判断表单是否无效
            if (this.$v.step2.$invalid) {
                // 根据表单错误项输出提示内容
                if (this.$v.step2.title.$error) { this.errorMsg = '请输入议题名称' }
                else if (this.$v.step2.intro.$error) { this.errorMsg = '请输入议题内容简介' }
                else if (this.$v.step2.catalog.$error) { this.errorMsg = '请输入议题内容大纲' }
                else if (this.$v.step2.reward.$error) { this.errorMsg = '请输入议题听众收益' }
                this.$v.$touch();
                this.loading = false;
                return;
            }

            // 输入格式验证成功
            this.loading = false;
            this.errorMsg = false;

            // 调用提交议题 API
            this.submitAPI(props);
        },
        /*
         *  提交议题 API 动作
         *  会检测 step1 的表单是否已保存在用户信息里
         */
        submitAPI(props) {
            // 切换到 step3 重置完成
            props.nextTab();
        }
    }

    export default {
        data,
        page: { title: '议题征集' },
        methods,
        created() { this.init(); },
        components: { FormWizard, TabContent, WizardButton },
        // form 表单验证
        validations: {
            step1: {
                name: { required, minLength: minLength(2), maxLength: maxLength(32) },
                job: { required, minLength: minLength(2), maxLength: maxLength(16) },
                company: { required, minLength: minLength(4), maxLength: maxLength(30) },
                keynote_experience: { required, minLength: minLength(4), maxLength: maxLength(255) },
                contribution: { required, minLength: minLength(4), maxLength: maxLength(255) },
            },
            step2: {
                topic_type: { required },
                title: { required, minLength: minLength(2), maxLength: maxLength(32) },
                intro: { required, minLength: minLength(4), maxLength: maxLength(255) },
                catalog: { required, minLength: minLength(4), maxLength: maxLength(255) },
                reward: { required, minLength: minLength(4), maxLength: maxLength(255) },
            },
        },
    }
</script>
<template>
<div class="card rounded shadow border-0 ml-lg-5" data-aos="fade-up" data-aos-duration="1400">
    <div class="card-body p-4">
        <form-wizard shape="tab" color="#0f69b2">
            <tab-content icon="mdi mdi-account-circle" title="个人信息">
                <p class="text-primary" v-if="!errorMsg">
                    <i class="mdi mdi-information-outline mr-1"></i>
                    请在下方填写演讲者的个人信息，方便我们了解您，便于审核
                </p>
                <p class="text-center text-danger" v-else>{{ errorMsg }}</p>
                <form class="form-horizontal needs-validation" @submit.stop.prevent="submitStep1">
                    <div class="form-group">
                        <input
                            ref="autofocus"
                            class="form-control"
                            v-model="step1.name"
                            maxlength="30"
                            placeholder="姓名"
                            :class="{'is-invalid': (step1.submitted && $v.step1.name.$error)}"
                        />
                    </div>
                    <div class="form-group">
                        <input
                            class="form-control"
                            v-model="step1.job"
                            maxlength="30"
                            placeholder="职位，例如：系统架构师"
                            :class="{'is-invalid': (step1.submitted && $v.step1.job.$error)}"
                        />
                    </div>
                    <div class="form-group">
                        <input
                            class="form-control"
                            v-model="step1.company"
                            maxlength="30"
                            placeholder="当下所处公司|组织, 例：北京xx科技有限公司"
                            rows="3"
                            :class="{'is-invalid': (step1.submitted && $v.step1.company.$error)}"
                        />
                    </div>
                    <div class="form-group">
                        <textarea
                            class="form-control"
                            v-model="step1.keynote_experience"
                            maxlength="30"
                            placeholder="个人演讲经历，例如：研究过的大会名称、具体举办时间、演讲题目"
                            rows="3"
                            :class="{'is-invalid': (step1.submitted && $v.step1.keynote_experience.$error)}"
                        >
                        </textarea>
                    </div>
                    <div class="form-group">
                        <textarea
                            class="form-control"
                            v-model="step1.contribution"
                            maxlength="30"
                            placeholder="在开源领域的贡献"
                            rows="3"
                            :class="{'is-invalid': (step1.submitted && $v.step1.contribution.$error)}"
                        >
                        </textarea>
                    </div>
                </form>
            </tab-content>
            <tab-content icon="mdi mdi-face-profile" title="议题内容">
                <p class="text-primary" v-if="!errorMsg">
                    <i class="mdi mdi-information-outline mr-1"></i>
                    请在下方填写演讲主题内容信息
                </p>
                <p class="text-center text-danger" v-else>{{ errorMsg }}</p>
                <form class="form-horizontal needs-validation" @submit.stop.prevent="submitStep2">
                    <div class="form-group mt-3">
                        <label
                            class="inline mr-4 mb-0"
                            :class="{'text-primary': step2.topic_type == 'keynote'}"
                        >
                            <input
                                type="radio"
                                class="mr-2"
                                v-model="step2.topic_type"
                                value="keynote"
                                id="keynote"
                            />
                            <label class="mb-0" for="personal">主题演讲</label>
                        </label>
                        <label
                            class="inline mb-0"
                            :class="{'text-primary': step2.topic_type == 'panel'}"
                        >
                            <input
                                type="radio"
                                class="mr-2"
                                v-model="step2.topic_type"
                                value="panel"
                                id="panel"
                            />
                            <label class="mb-0" for="panel">圆桌会议</label>
                        </label>
                    </div>
                    <div class="form-group">
                        <input
                            ref="autofocus"
                            class="form-control"
                            v-model="step2.title"
                            maxlength="30"
                            placeholder="议题名称"
                            :class="{'is-invalid': (step2.submitted && $v.step2.title.$error)}"
                        />
                    </div>
                    <div class="form-group">
                        <select
                            class="form-control custom-select"
                            placeholder="议题类型"
                            :class="{'is-invalid': (step2.submitted && $v.step2.title.$error)}"
                        >
                            <option>All Jobs</option>
                            <option>Full Time</option>
                            <option>Half Time</option>
                            <option>Remote</option>
                            <option>In Office</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <textarea
                            class="form-control"
                            v-model="step2.intro"
                            maxlength="30"
                            placeholder="议题内容简介"
                            rows="3"
                            :class="{'is-invalid': (step2.submitted && $v.step2.intro.$error)}"
                        >
                        </textarea>
                    </div>
                    <div class="form-group">
                        <textarea
                            class="form-control"
                            v-model="step2.catalog"
                            maxlength="30"
                            placeholder="议题内容大纲"
                            rows="3"
                            :class="{'is-invalid': (step2.submitted && $v.step2.catalog.$error)}"
                        >
                        </textarea>
                    </div>
                    <div class="form-group">
                        <textarea
                            class="form-control"
                            v-model="step2.reward"
                            maxlength="30"
                            placeholder="听众收益"
                            rows="3"
                            :class="{'is-invalid': (step2.submitted && $v.step2.reward.$error)}"
                        >
                        </textarea>
                    </div>
                </form>
            </tab-content>
            <tab-content icon="mdi mdi-checkbox-marked-circle-outline" title="提交完成">
                <div class="text-center text-primary">
                    <h2><i class="mdi mdi-check-all"></i></h2>
                    <h4 class="mt-3">成功！</h4>
                    <p class="mt-3">本次议题已提交成功，<br />可通过下方按钮或个人主页中 "我的议题" 进行查看状态。</p>
                </div>
            </tab-content>
            <template slot="footer" slot-scope="props">
                <div class="wizard-footer-left">
                    <wizard-button
                       v-if="props.activeTabIndex > 0 && !props.isLastStep"
                       @click.native="props.prevTab()"
                       :style="props.fillButtonStyle"
                    >返回</wizard-button>
                </div>
                <div class="wizard-footer-right">
                    <wizard-button
                        v-if="!props.isLastStep"
                        @click.native="nextEvent(props)"
                        class="wizard-footer-right"
                        :style="props.fillButtonStyle"
                    >下一步</wizard-button>
                    <wizard-button
                        v-else
                        @click.native="nextEvent(props)"
                        class="wizard-footer-right finish-button"
                        :style="props.fillButtonStyle"
                        :disabled="loading"
                    >{{ props.isLastStep ? '查看提交记录' : '下一步' }}</wizard-button>
                </div>
            </template>
        </form-wizard>
    </div>
</div>
</template>
