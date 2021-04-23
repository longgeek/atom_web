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
