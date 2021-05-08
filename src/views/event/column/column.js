import {
    Carousel,
    Slide
} from 'vue-carousel';

import Navbar from "@/components/navbar";
import ColumnGuest from "./column-guest";
import { VueTyper } from "vue-typer";

/**
 * Index-event component
 */
export default {
    page: { title: '专栏详情' },
    data() {
        return {
            start: "",
            end: "",
            interval: "",
            days: "",
            minutes: "",
            hours: "",
            seconds: "",
            endtime: "2021.10.15 09:00:00",
            partners: [],
            partner: [
                'images/event/column/partner/infoq.png',
                'images/event/column/partner/csdn.png',
                'images/event/column/partner/segmentfault.png',
                'images/event/column/partner/oschina.png',
                'images/event/column/partner/kaiyuanshe.png',
                'images/event/column/partner/51cto.png',
                'images/event/column/partner/aaa.png',
                'images/event/column/partner/站酷海洛.png',
            ],
        }
    },
    components: {
        Carousel,
        Slide,
        Navbar,
        ColumnGuest,
        "vue-typer": VueTyper,
    },
    mounted() {
        this.start = new Date().getTime();
        this.end = new Date(this.endtime).getTime();
        // Update the count down every 1 second
        this.timerCount(this.start, this.end);
        this.interval = setInterval(() => {
            this.timerCount(this.start, this.end);
        }, 1000);
    },
    created() {
        // 获取捐赠人
        this.$http.get(this.$api.partner.list())
            .then((rsp) => {
                if (rsp.data.code === 200) {
                    for (let i in rsp.data.data) {
                        this.partners = this.partners.concat(rsp.data.data[i].logos);
                    }
                }
            })
    },
    methods: {
        timerCount: function (start, end) {
            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = start - now;
            var passTime = end - now;

            if (distance < 0 && passTime < 0) {
                clearInterval(this.interval);
                return;
            } else if (distance < 0 && passTime > 0) {
                this.calcTime(passTime);
            } else if (distance > 0 && passTime > 0) {
                this.calcTime(distance);
            }
        },
        calcTime: function (dist) {
            // Time calculations for days, hours, minutes and seconds
            this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
            this.hours = Math.floor(
                (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
        },
    }
}
