/**
 *  提交议题表单
 */
<script>
    import { FormWizard, TabContent, WizardButton } from "vue-form-wizard";
    import { required, minLength, maxLength } from "vuelidate/lib/validators";

    const data = function() {
        return {
            user: {},
            loading: false,                     // 控制提交按钮禁用
            errorMsg: '',                       // 当表单有误时前端提醒文字
            experience: '',                     // 开源经历
            finished: false,                    // 完成后，防止二次提交
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
                topic_type: 1,                  // 议题方式 keynote | panel
                title: '',                      // 议题名称
                type: '',                       // 议题类型
                intro: '',                      // 内容简介
                catalog: '',                    // 内容大纲
                reward: '',                     // 听众收益
                attach: '',                     // 上传支撑材料
                memo: '',                       // 其它补充信息
                submitted: false,               // 代表表单被提交
            },
            step3: {
                submitted: false,               // 代表表单被提交
            },
        }
    };

    const methods = {
        download(url) {
            this.$http.get(url);
        },
        /*
         *  初始化方法
         */
        async init() {
            // 1. 获取用户信息 - 填充到 step1
            this.user = JSON.parse(localStorage.getItem('user'));
            if (!this.user) return;

            this.step1.name = this.user.nickname;
            this.step1.job = this.user.position;
            this.step1.company = this.user.enterprise;

            // 2. 获取用户演讲经历、开源贡献 - 填充到 step1
            if (!this.user.hasOwnProperty('experience')) {
                await this.getUserExperience();
            }
            this.experience = this.user.experience;
            this.step1.keynote_experience = this.user.experience.opKeynoteExperience;
            this.step1.contribution = this.user.experience.opContribution;

            if (!this.topic) return;

            // 3. 根据 props 传递过来的 topic 对议题内容进行赋值
            this.step2.topic_type = this.topic.participationWay;
            this.step2.title = this.topic.topicTitle;
            this.step2.type = this.topic.topicTypeId;
            this.step2.intro = this.topic.topicDescribe;
            this.step2.catalog = this.topic.topicContent;
            this.step2.reward = this.topic.topicProfit;
            this.step2.attach = this.topic.topicFile;

            if (this.topicType.length) return;

            // 4. 未传递 topicType 则调用 API 进行获取
            this.$http.get(this.$api.column.topic_type(this.topic.columnId))
                .then((rsp) => {
                    if (rsp.data.code === 200) {
                        this.topicType = rsp.data.data;
                    }
                })
        },
        // 获取用户开源经历
        getUserExperience() {
            return new Promise((resolve, reject) => {
                this.$http.get(this.$api.users.experience())
                    .then((rsp) => {
                        if (rsp.data.code === 200) {
                            this.user.experience = rsp.data.data;
                            localStorage.setItem('user', JSON.stringify(this.user));
                            resolve(this.user);
                        } else {
                            reject();
                        }
                })
            })
        },
        /*
         * 表单点击下一步触发的事件
         */
        nextEvent(props) {
            if (props.activeTabIndex == 0) {
                if (this.user) {
                    this.submitStep1(props);
                    return;
                }
                window.location.href = `${this.$vars.registerUrl}?next_url=${encodeURIComponent(window.location.href)}`;
                return;
            }
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
                else if (this.$v.step2.type.$error) { this.errorMsg = '请在下拉框中选择一个议题类型' }
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
            // 当用户成功提交议题，再点击 tab 当上一页后，需要拦截下一步动作，防止二次提交
            if (this.finished) {
                this.$bvToast.toast(
                    '您已成功提交议题，如需提交新的议题，请刷新本页面',
                    {title: '提示', variant: 'danger'}
                );
                return;
            }

            // 1. 修改用户的职位、企业信息
            this.$http.put(
                this.$api.users.edit(),
                {
                    position: this.step1.job,
                    enterprise: this.step1.company,
                }
            )

            // 2. 用户开源经历
            const params = {
                opKeynoteExperience: this.step1.keynote_experience,
                opContribution: this.step1.contribution,
            };

            // 无开源经历，则 post
            if (Object.keys(this.experience).length == 0) {
                this.$http.post(this.$api.users.experience(), params);
            }
            // 有则 put
            else {
                this.$http.put(this.$api.users.experience_edit(this.experience.opExperienceId), params);
            }

            // 3. 判断是否有附件需要上传
            if (this.step2.attach) {
                const data = new FormData();
                data.append('docFile', this.step2.attach);
                let headers = {'Content-Type': 'multipart/form-data'};

                this.$http.post(this.$api.file.upload(), data, headers)
                    .then((rsp) => {
                        if (rsp.data.code === 200) {
                            this.submitTopic(props, rsp.data.data.baseUrl + ' ' + rsp.data.data.filename);
                        }
                })
            } else {
                this.submitTopic(props);
            }
        },
        // 4. 提交议题
        submitTopic(props, attach={}) {
            const data = {
                columnId: this.columnId ? parseInt(this.columnId) : this.topic.columnId,
                topicTitle: this.step2.title,
                topicDescribe: this.step2.intro,
                topicContent: this.step2.catalog,
                topicProfit: this.step2.reward,
                topicAdmin: this.step1.name,
                topicAdminDescribe: this.step1.company + '、' + this.step1.job,
                topicEstimateDuration: 20,
                topicFile: attach,
                topicTypeId: this.step2.type,
                participationWay: this.step2.topic_type,
                remarks: this.step2.memo,
            }
            // 判断是 useType 是否为 'edit'
            if (this.useType == 'edit') {
                this.$http.put(this.$api.column.topic_edit(this.topic.topicId), data);
            }
            // 默认则新创建议题
            else {
                this.$http.post(this.$api.column.topic(), data);
            }

            // 切换到 step3 重置完成
            props.nextTab();
            this.finished = true;
        }
    }

    export default {
        data,
        page: { title: '议题征集' },
        methods,
        created() { this.init(); },
        components: { FormWizard, TabContent, WizardButton },
        props: {
            // 使用类型 useType 的值有如下三种:
            // 空为创建组件，在 /event/column/topic 页面调用
            // 'view' 为只查看，在 /profile/topic 用于查看提交的议题详情
            // 'edie' 为编辑组件，在 /profile/topic 用于修改提交议题内容
            useType: { type: String, default: '' },
            columnId: { type: String },
            topic: { type: Object, defualt: {} },
            topicType: { type: Array, default: [] },
        },
        // form 表单验证
        validations: {
            step1: {
                name: { required, minLength: minLength(2), maxLength: maxLength(32) },
                job: { required, minLength: minLength(2), maxLength: maxLength(16) },
                company: { required, minLength: minLength(4), maxLength: maxLength(30) },
                keynote_experience: { required, minLength: minLength(2), maxLength: maxLength(255) },
                contribution: { required, minLength: minLength(2), maxLength: maxLength(255) },
            },
            step2: {
                topic_type: { required },
                title: { required, minLength: minLength(2), maxLength: maxLength(32) },
                type: { required },
                intro: { required, minLength: minLength(2), maxLength: maxLength(255) },
                catalog: { required, minLength: minLength(2), maxLength: maxLength(255) },
                reward: { required, minLength: minLength(2), maxLength: maxLength(255) },
            },
        },
    }
</script>
<template>
    <form-wizard shape="tab" color="#0f69b2" class="pb-2">
        <tab-content icon="uil uil-user-circle" title="个人信息">
            <div v-if="useType != 'view'">
                <p class="text-primary" v-if="!errorMsg">
                    <i class="uil uil-info-circle mr-1"></i>
                    请在下方填写演讲者的个人信息，方便我们了解您，便于审核
                </p>
                <p class="text-center text-danger" v-else>{{ errorMsg }}</p>
            </div>
            <form class="form-horizontal needs-validation" @submit.stop.prevent="submitStep1">
                <div class="form-group">
                    <input
                        ref="autofocus"
                        class="form-control"
                        v-model="step1.name"
                        maxlength="30"
                        placeholder="姓名"
                        :disabled="useType == 'view' || !user"
                        :class="{'is-invalid': (step1.submitted && $v.step1.name.$error)}"
                    />
                </div>
                <div class="form-group">
                    <input
                        class="form-control"
                        v-model="step1.job"
                        maxlength="30"
                        placeholder="职位，例如：系统架构师"
                        :disabled="useType == 'view' || !user"
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
                        :disabled="useType == 'view' || !user"
                        :class="{'is-invalid': (step1.submitted && $v.step1.company.$error)}"
                    />
                </div>
                <div class="form-group">
                    <textarea
                        class="form-control"
                        v-model="step1.keynote_experience"
                        maxlength="30"
                        placeholder="个人演讲经历，例如：演讲过的大会名称、举办时间、演讲题目等"
                        rows="3"
                        :disabled="useType == 'view' || !user"
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
                        :disabled="useType == 'view' || !user"
                        :class="{'is-invalid': (step1.submitted && $v.step1.contribution.$error)}"
                    >
                    </textarea>
                </div>
            </form>
        </tab-content>
        <tab-content icon="uil uil-file-info-alt" title="议题内容">
            <p class="text-center text-danger" v-if="errorMsg">{{ errorMsg }}</p>
            <form class="form-horizontal needs-validation" @submit.stop.prevent="submitStep2">
                <div class="form-group">
                    <label class="text-muted mr-3 mb-0">选择议题参与方式:</label>
                    <div class="custom-control custom-radio custom-control-inline"
                        :class="{'text-primary': step2.topic_type == 1}"
                    >
                        <div class="form-group mb-0">
                            <input
                                type="radio"
                                id="customRadio1"
                                name="customRadio"
                                class="custom-control-input"
                                v-model="step2.topic_type"
                                value="1"
                                :disabled="useType == 'view' || !user"
                            />
                            <label class="custom-control-label" for="customRadio1">主题演讲</label>
                        </div>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline"
                        :class="{'text-primary': step2.topic_type == 2}"
                    >
                        <div class="form-group mb-0">
                            <input
                                type="radio"
                                id="customRadio2"
                                name="customRadio"
                                class="custom-control-input"
                                v-model="step2.topic_type"
                                value="2"
                                :disabled="useType == 'view' || !user"
                            />
                            <label class="custom-control-label" for="customRadio2">圆桌会议</label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <input
                        ref="autofocus"
                        class="form-control"
                        v-model="step2.title"
                        maxlength="30"
                        placeholder="议题名称"
                        :disabled="useType == 'view' || !user"
                        :class="{'is-invalid': (step2.submitted && $v.step2.title.$error)}"
                    />
                </div>
                <div class="form-group">
                    <select
                        class="form-control custom-select"
                        placeholder="议题类型"
                        :class="{'is-invalid': (step2.submitted && $v.step2.type.$error)}"
                        v-model="step2.type"
                        :disabled="useType == 'view' || !user"
                    >
                        <option value="" selected>"请选择议题类型"</option>
                        <option :value="v.topicTypeId" v-for="(v, k, index) in topicType" :key="index">{{ v.topicTypeName }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <textarea
                        class="form-control"
                        v-model="step2.intro"
                        maxlength="30"
                        placeholder="议题内容简介"
                        rows="2"
                        :disabled="useType == 'view' || !user"
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
                        rows="2"
                        :disabled="useType == 'view' || !user"
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
                        rows="2"
                        :disabled="useType == 'view' || !user"
                        :class="{'is-invalid': (step2.submitted && $v.step2.reward.$error)}"
                    >
                    </textarea>
                </div>
                <div class="form-group">
                    <b-form-file
                        accept=".ppt, .pdf, .word, .pages"
                        v-model="step2.attach"
                        :placeholder="step2.attach ? step2.attach.split(' ')[1] : '上传 PPT 初稿等材料(可选)'"
                        drop-placeholder="Drop file here..."
                        v-if="useType != 'view' && user"
                        browse-text="选择文件"
                    ></b-form-file>
                    <a
                        v-else
                        class="text-primary pointer"
                        @click="download(step2.attach.split(' ')[0])"
                    >
                        <i class="uil uil-file mr-2"></i>
                        {{ step2.attach.split(' ')[1] }}
                    </a>
                </div>
            </form>
        </tab-content>
        <tab-content icon="uil uil-check-circle" title="提交完成" v-if="useType != 'view'">
            <div class="text-center text-primary">
                <h2><i class="uil uil-check"></i></h2>
                <div v-if="!useType">
                    <h4 class="mt-3">成功！</h4>
                    <p class="mt-3">本次议题已提交成功，<br />可通过下方按钮或个人主页中 "我的议题" 进行查看状态。</p>
                </div>
                <div v-else>
                    <h4 class="mt-3">修改成功！</h4>
                    <p class="mt-3">本次议题已修改成功，<br />可通过个人主页中 "我的议题" 进行查看状态。</p>
                </div>
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
            <div class="wizard-footer-right" v-if="useType == 'edit'">
                <wizard-button
                    v-if="!props.isLastStep"
                    @click.native="nextEvent(props)"
                    class="wizard-footer-right"
                    :style="props.fillButtonStyle"
                >下一步</wizard-button>
            </div>
            <div class="wizard-footer-right" v-if="!useType">
                <wizard-button
                    v-if="!props.isLastStep"
                    @click.native="nextEvent(props)"
                    class="wizard-footer-right"
                    :style="props.fillButtonStyle"
                >
                    <span v-if="!user">请登录后提交议题，立即去注册、登录</span>
                    <span v-else>下一步</span>
                </wizard-button>
                <wizard-button
                    v-else
                    @click.native="nextEvent(props)"
                    class="wizard-footer-right finish-button"
                    :style="props.fillButtonStyle"
                    ::disabled="loading"
                >{{ props.isLastStep ? '查看提交记录' : '下一步' }}</wizard-button>
            </div>
            <div class="wizard-footer-right" v-if="useType == 'view'">
                <wizard-button
                    v-if="!props.isLastStep"
                    @click.native="nextEvent(props)"
                    class="wizard-footer-right"
                    :style="props.fillButtonStyle"
                >下一页</wizard-button>
                <wizard-button
                    v-else
                    class="wizard-footer-right finish-button"
                    @click.native="props.prevTab()"
                    :style="props.fillButtonStyle"
                >返回上一页</wizard-button>
            </div>
        </template>
    </form-wizard>
</template>
