import {
    ArrowUpIcon,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    PlayIcon
} from 'vue-feather-icons';
import {
    Carousel,
    Slide
} from 'vue-carousel';

/**
 * Index-event component
 */
export default {
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
        }
    },
    components: {
        Carousel,
        Slide,
        ArrowUpIcon,
        FacebookIcon,
        InstagramIcon,
        TwitterIcon,
        LinkedinIcon,
        PlayIcon
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
