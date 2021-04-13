<script>
import {
  ArrowUpIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
  YoutubeIcon,
  GitlabIcon,
  MailIcon,
  UserPlusIcon,
  UsersIcon,
  MessageCircleIcon,
  BellIcon,
  ToolIcon,
  UserIcon,
  KeyIcon,
  PhoneIcon,
  BookmarkIcon,
  UserCheckIcon,
  GlobeIcon,
} from "vue-feather-icons";

/**
 * Shop-products component
 */
export default {
    page: { title: '账户设置' },
    data() {
        return {
            user: {},
        }
    },
    components: {
        ArrowUpIcon,
        FacebookIcon,
        TwitterIcon,
        LinkedinIcon,
        GithubIcon,
        YoutubeIcon,
        GitlabIcon,
        InstagramIcon,
        MailIcon,
        UserPlusIcon,
        UsersIcon,
        BellIcon,
        ToolIcon,
        UserIcon,
        KeyIcon,
        PhoneIcon,
        BookmarkIcon,
        MessageCircleIcon,
        UserCheckIcon,
        GlobeIcon,
    },
    created() {
        // 获取用户信息
        this.$http.get(
            this.$api.users.get(),
        ).then((rsp) => {
            if (rsp.data.code === 200) {
                this.user = rsp.data.data;
            }
        })
    }
}
</script>

<template>
<div>
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="card border-0 sidebar sticky-bar rounded shadow bg-white">
                        <div class="card-body">
                            <div class="text-center py-3 border-bottom">
                                <div class="rounded-circle avatar avatar-medium mx-auto shadow">
                                    <v-gravatar :email="user.email"
                                        alt="Nobody"
                                        default-img="robohash"
                                        :hostname="$gravatar_host"
                                        class="rounded-circle"
                                    />
                                </div>
                                <h5 class="mt-3 mb-0">{{ user.nickname }}</h5>
                                <p class="text-muted mb-0">{{ user.phone ? user.phone : user.email }}</p>
                            </div>

                            <!-- CATAGORIES -->
                            <div class="widget mt-4 pt-2">
                                <h6 class="widget-title">账户设置</h6>
                                <ul class="list-unstyled mt-4 mb-0 blog-categories">
                                    <li class="active"><a>个人信息</a></li>
                                    <li><a href="/logout">退出登录</a></li>
                                </ul>
                            </div>
                            <!-- CATAGORIES -->
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-8 col-md-8 col-12 mt-5 pt-2 mt-sm-0 pt-sm-0">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <div class="card border-0 rounded shadow">
                                <div class="card-body">
                                    <h6 class="text-md-left text-center">个人信息</h6>
                                    <form>
                                        <div class="row mt-4">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>别名</label>
                                                    <div class="position-relative">
                                                        <user-icon class="fea icon-sm icons"></user-icon>
                                                        <input
                                                            name="name"
                                                            id="first"
                                                            type="text"
                                                            class="form-control pl-5"
                                                            :value="user.nickname"
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <!--end col-->
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>邮箱地址</label>
                                                    <div class="position-relative">
                                                        <user-check-icon
                                                            class="fea icon-sm icons"
                                                        ></user-check-icon>
                                                        <input
                                                            name="name"
                                                            type="text"
                                                            class="form-control pl-5"
                                                            :value="user.email"
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <!--end col-->
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>电话号码</label>
                                                    <div class="position-relative">
                                                        <phone-icon
                                                            class="fea icon-sm icons"
                                                        ></phone-icon>
                                                        <input
                                                            name="name"
                                                            type="text"
                                                            class="form-control pl-5"
                                                            :value="user.phone"
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <!--end col-->
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label>个人简介</label>
                                                    <div class="position-relative">
                                                        <message-circle-icon
                                                            class="fea icon-sm icons"
                                                        ></message-circle-icon>
                                                        <textarea
                                                            name="comments"
                                                            rows="4"
                                                            class="form-control pl-5"
                                                            disabled
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <!--end form-->
                                </div>
                            </div>
                        </div>
                        <!--end col-->
                    </div>
                    <!--end row-->
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->
    </section>
    <!--end section-->
</div>
</template>
