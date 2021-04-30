import {
    Carousel,
    Slide
} from 'vue-carousel';

import Navbar from "@/components/navbar";
import Council from "@/components/council";
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
            partner: [
                'AlibabaGroup.svg',
                'Baidu.svg',
                'HUAWEI.svg',
                'JointForce.svg',
                'Inspur.svg',
                'HYPERCHAIN.svg',
                '360.svg',
                'Tencent.svg',
                'CMB.svg',
                'PATEO.svg',
                'CSG.svg',
                'OSCHINA.svg',
                'ECARX.svg',
                'Geekbang.svg',
                'HIT_SZ.svg'
            ],
        }
    },
    components: {
        Carousel,
        Slide,
        Navbar,
        Council,
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
