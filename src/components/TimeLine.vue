<template>
    <div id="timeline">
        <div class="menu_setting">
            <span>播放速度:</span>
            <i class="menu_icon icon_up" :class="{'menu_icon_disabled':playing}" @click="speedSlow"></i>
            <span class="speed">{{ options.speed }}</span>
            <i
                class="menu_icon icon_down"
                :class="{'menu_icon_disabled':playing}"
                @click="speedQuick"
            ></i>
        </div>
        <div id="timePlay">
            <div class="timeUnit">
                <div class="inner">
                    <div class="timeUnitBtn" @click="changeTimeUnit(0)">周</div>
                    <div class="timeUnitBtn" @click="changeTimeUnit(1)">月</div>
                    <div class="timeUnitBtn active" @click="changeTimeUnit(2)">默认</div>
                </div>
            </div>
            <div id="timeMain">
                <div class="timeControl-box">
                    <div
                        class="timeControl"
                        :class="{'time_play':!playing,'time_pause':playing}"
                        @click="togglePlay"
                        @mouseleave="hoverIndex = -1"
                    ></div>
                </div>
                <div class="prev-box">
                    <div
                        class="prev"
                        :class="{'time_control_disabled':playing,'time_control_disabled':running}"
                        @click="pageprev"
                        title="上一页"
                    ></div>
                </div>
                <div class="next-box">
                    <div
                        class="next"
                        :class="{'time_control_disabled':playing,'time_control_disabled':running}"
                        @click="pagenext"
                        title="下一页"
                    ></div>
                </div>
                <div class="yqtoday" @click="returnToday">{{ startTime }}</div>
                <div class="timeProgress-box">
                    <div class="timeline_axis">
                        <div class="axis_item" v-for="(time, index) in dateTimes" :key="index">
                            <div
                                class="axis_item_tick"
                                :class="{'axis_item_tick_active':index === highlightIndex,'tick_disabled':playing,'tick_disabled':running}"
                                @mouseenter="hoverIndex = index"
                                @mouseleave="hoverIndex = -1"
                                @click="tickClick(time, index)"
                            ></div>

                            <div
                                class="axis_item_label"
                                v-if="index % 3 == 0 && timeunits == '周'"
                            >{{ time | formatDatetime }}</div>
                            <div
                                class="axis_item_label"
                                v-if="timeunits != '周'"
                            >{{ time | formatDatetime }}</div>
                            <div
                                class="axis_item_tip"
                                v-if="index === highlightIndex || index === hoverIndex"
                            >{{ time }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- <script src="../../static/js/timePlay.js"></script> -->
<script>
import { dateFormat } from "../../static/js/formatdate.js";
import global from '../global';
//import { TimePlay } from "../../static/js/timeplay.js";
export default {
    name: "Timer",
    data() {
        return {
            yqstartdate: 0,
            yqenddate: 0,
            a: "a",
            b: "b",
            // timeflag: TimePlay.startdate,
            timeunits: "默认",
            intervalTimer: null, //定时器
            dateTimeIndexes: [], //日期列表
            playing: false, //播放
            running: false,
            activeIndex: 5, //当前的时间位置
            hoverIndex: 0 //鼠标移入的时间位置
        };
    },
    props: {
        options: {
            type: Object,
            default() {
                return {};
            }
        },
        dateTimes: {
            type: Array,
            default() {
                return [];
            }
        },
        enddateTimes:{
            type:Array,
            default(){
                return [];
            }
        },
        startTime: {
            type: String,
            default() {
                return "";
            }
        },
        endTime: {
            type: String,
            default() {
                return "";
            }
        },
        interval: {
            type: Number,
            default() {
                return 100;
            }
        }
    },
    computed: {
        highlightIndex() {
            return (
                (this.activeIndex === -1 && this.dateTimes.length - 1) ||
                this.activeIndex
            );
        }
    },
    watch: {
        options: {
            handler() {
                this.renderTimeline();
            },
            deep: true
        },
        playing() {
            if (this.playing) {
                this.intervalTimer = setInterval(() => {
                    this.activeIndex =
                        (this.activeIndex + 1) % this.dateTimes.length;
                },  Math.floor(1000/this.options.speed));
            } else {
                if (this.intervalTimer) {
                    clearInterval(this.intervalTimer);
                    this.intervalTimer = null;
                }
            }
        },
        activeIndex() {
            const time = this.dateTimes[this.activeIndex].split(" ")[0];
            let end = this.enddateTimes[this.activeIndex].split(" ")[0];
            if(this.timeunits=='默认'){
                global.enddate = end;
            }else{
                global.enddate = end;
                global.startdate =time;
            }
            
            this.$emit("getDateFun", time);
        },
        timeunits() {
            var timeUnit = this.timeunits;
            console.log("UnitBtn.active:" + timeUnit);
            this.$emit("getTimeUnit", timeUnit);
        }
    },
    mounted() {
        // this.getTime();
        this.renderTimeline();
        let that = this;
        window.onresize = function() {
            that.renderTimeline();
        };
        //this.initTime();
    },
    filters: {
        formatDatetime: function(dateTime) {
            dateTime = dateFormat(dateTime, "MM-dd");
            return dateTime;
        }
    },
    methods: {
        //获取时间
        getDateFun(time) {
            console.log(time);
        },
        //
        // 初始化时间轴
        renderTimeline() {
            // 时间轴的宽度
            const timelineWidth = this.$el.offsetWidth - 40;
            // 日期个数
            const dateTimesSize = this.dateTimes.length;
            // 如果时间全部显示，时间轴的理想宽度
            const dateTimesWidth = dateTimesSize * this.interval;
            // 如果时间轴的宽度小于理想宽度
            if (timelineWidth >= dateTimesWidth) {
                this.dateTimeIndexes = this.dateTimes.map((dateTime, index) => {
                    return index;
                });
                return;
            }
            // 当前时间轴的宽度最大能容纳多少日期刻度
            const maxTicks = Math.floor(timelineWidth / this.interval);
            // 间隔刻度数
            const gapTicks = Math.floor(dateTimesSize / maxTicks);
            // 记录需要显示的日期索引
            this.dateTimeIndexes = [];
            for (let t = 0; t <= maxTicks; t++) {
                this.dateTimeIndexes.push(t * gapTicks);
            }
            const len = this.dateTimeIndexes.length;
            // 最后一项需要特殊处理
            if (len > 0) {
                const lastIndex = this.dateTimeIndexes[len - 1];
                if (lastIndex + gapTicks > dateTimesSize - 1) {
                    this.dateTimeIndexes[len - 1] = dateTimesSize - 1;
                } else {
                    this.dateTimeIndexes.push(dateTimesSize - 1);
                }
            }
        },
        // 点击刻度
        tickClick(time, index) {
            var timelen = this.dateTimes.length;
            if (this.playing) {
                return;
            }
            this.activeIndex = index;
            console.log("activeIndex:" + this.activeIndex);
            if (this.activeIndex !== -1 || this.activeIndex !== timelen) {
                $(".prev").removeClass("time_control_disabled");
                $(".next").removeClass("time_control_disabled");
            }
        },
        // 播放和暂停
        togglePlay() {
            this.playing = !this.playing;
        },
        // 向前翻页
        pageprev() {
            $(".next").removeClass("time_control_disabled");
            if (this.playing) {
                return;
            }

            /* if(this.activeIndex === -1) {
                this.activeIndex = this.dateTimers.length - 1
            } */
            if (
                this.activeIndex === 0 ||
                this.activeIndex === -1 ||
                this.activeIndex === "undefined"
            ) {
                $(".prev").addClass("time_control_disabled");
            } else {
                this.activeIndex = this.activeIndex - 1;
            }
        },
        // 向后翻页
        pagenext() {
            $(".prev").removeClass("time_control_disabled");
            var timelen = this.dateTimes.length;
            console.log("timelen:" + timelen);
            if (this.playing) {
                return;
            }
            if (
                this.activeIndex === timelen - 1 ||
                this.activeIndex === timelen ||
                this.activeIndex === "undefined"
            ) {
                $(".next").addClass("time_control_disabled");
            } else {
                this.activeIndex =
                    (this.activeIndex + 1) % this.dateTimes.length;
            }
        },
        // 回到第一天
        returnToday() {},
        // 减慢速度
        speedSlow() {
            if (this.playing || this.options.speed >= this.options.speedMax) {
                return;
            }
            this.options.speed = this.options.speed + 0.5;
        },
        // 加快速度
        speedQuick() {
            if (this.playing || this.options.speed <= 0.5) {
                return;
            }
            this.options.speed = this.options.speed - 0.5;
        },
        // 闰年的计算方法
        /* calcLeapYear(year) {
            var leap = false;
            if (year % 4 == 0 && year % 100 == 0) {
                if (year % 400 == 0) {
                    leap = true;
                } else {
                    leap = false;
                }
            } else if (year % 4 == 0 && year % 100 != 0) {
                leap = true;
            } else if (year % 4 != 0 && year % 100 != 0) {
                leap = false;
            } else {
                leap = false;
            }
            return leap;
        },
        monthCount (month) {
            var timePlay = this;
            var num = 0;
            if (
                month == 1 ||
                month == 3 ||
                month == 5 ||
                month == 7 ||
                month == 8 ||
                month == 10 ||
                month == 12
            ) {
                num = 31;
            } else if (
                month == 4 ||
                month == 5 ||
                month == 9 ||
                month == 11
            ) {
                num = 30;
            } else if (month == 2) {
                if (timePlay.calcLeapYear()) {
                    num = 29;
                } else {
                    num = 28;
                }
            }
            return num;
        },
        fillDate (start, end) {
            var timePlay = this;
            var startWeek = 1;
            var i = 1;
            var startYear = Math.floor(start / 10000),
                startMonth = Math.floor((start % 10000) / 100),
                startDay = Math.floor(start % 100),
                endYear = Math.floor(end / 10000),
                endMonth = Math.floor((end % 10000) / 100),
                endDay = Math.floor(end % 100),
                datelist = "";
            while (
                startDay != endDay ||
                startMonth != endMonth ||
                startYear != endYear
            ) {
                if (i % 7 == 0) {
                    datelist +=
                        '<li class="every" data-year=' +
                        startYear +
                        '><span class="mon">' +
                        startMonth +
                        '</span>/<span class="day">' +
                        startDay +
                        '</span>(第<span class="week">' +
                        startWeek +
                        "</span>周)</li>";
                    startWeek++;
                }
                startDay++;
                i++;
                if (startDay > timePlay.monthCount(startMonth)) {
                    startDay = 1;
                    startMonth++;
                }
                if (startMonth > 12) {
                    startMonth = 1;
                    startYear++;
                }
            }
            $(timePlay.options.container)
                .show()
                .find("ul")
                .append(datelist);
        },

        fillMonDate = function(start, end) {
            var timePlay = this;
            var startYear = Math.floor(start / 10000),
                startMonth = Math.floor((start % 10000) / 100),
                startDay = Math.floor(start % 100),
                endYear = Math.floor(end / 10000),
                endMonth = Math.floor((end % 10000) / 100),
                endDay = Math.floor(end % 100),
                startWeek = 0,
                startCountMon = 0,
                i = 1,
                datelist = "";
            while (
                startDay != endDay ||
                startMonth != endMonth ||
                startYear != endYear
            ) {
                startDay++;
                i++;
                if (startDay > timePlay.monthCount(startMonth)) {
                    startDay = 1;
                    startMonth++;
                    if (startMonth > 12) {
                        startMonth = 1;
                        startYear++;
                    }
                    datelist +=
                        '<li class="every" data-year=' +
                        startYear +
                        '><span class="mon">' +
                        startMonth +
                        '</span>/<span class="day">' +
                        startDay +
                        "</span></li>";
                }
            }
            $(timePlay.options.container)
                .show()
                .find("ul")
                .append(datelist);
        } */

        //点击“默认全局”回到最初状态
        changeTimeStatus() {
            $(".time-status-btn").addClass("active");
            $(".timeUnitBtn").removeClass("active");
            this.timeunits = "";
            if ($(".time-status-btn").hasClass("active")) {
                this.running = true;
            } else {
                this.running = false;
            }
        },
        //点击“周/月/默认”切换时间轴
        changeTimeUnit(num) {
            console.log("切换啦");
            if (num == 0) {
                this.timeunits = "周";
                this.activeIndex=0;
                global.timeflag=0;
                // global.enddate=
            } else if (num == 1) {
                this.timeunits = "月";
                this.activeIndex=0;
                global.timeflag=1;
            } else {
                this.timeunits = "默认";
                this.activeIndex=0;
                global.timeflag=4;
            }
            if (!$(".timeUnitBtn:eq(" + num + ")").hasClass("active")) {
                $(".timeUnitBtn").removeClass("active");
                $(".timeUnitBtn:eq(" + num + ")").addClass("active");
            } 
        }
    }
};
</script>

<style lang="scss">
@import "../../static/css/timePlay.css";
#timeline {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
}

/** 模式按钮 */
.yq-index-default {
    height: auto;
    line-height: 1.875em;
    color: #fff;
    height: 1.875em;
    font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
    position: absolute;
    left: 2.2em;
    bottom: 7em;
    z-index: 2;
    font-weight: 400;
    white-space: nowrap;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.5), 1px 1px 3px rgba(0, 0, 0, 0.5);
    font-weight: 400;
}

.yq-index-default > .time-status-btn {
    z-index: 3;
    width: 90%;
    font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
    font-weight: 400;
    border-radius: 2em;
    background-color: #3697d1;
    line-height: 2.142em;
    padding: 0.35em 1.5em 0.35em 1.5em;
    border: none;
    cursor: pointer;
    -webkit-appearance: none;
}

.yq-index-default > .time-status-btn.active {
    background-color: #f7a715;
}

.timeline_axis {
    position: relative;
    display: flex;
    justify-content: space-around;
    padding: 8px 0;
    top: 15px;
}
.timeline_axis::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 5px;
    left: 0;
    bottom: 5px;
    border-radius: 5px;
    display: inline-block;
    background: rgba(255, 255, 255, 1);
}
.axis_item {
    position: relative;
    top: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.axis_item_tick {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 1);
    /* border: 2px solid #3697d1; */
    transition: background 0.3s;
    cursor: pointer;
    z-index: 999;
}
.tick_disabled {
    background: #adadad;
    pointer-events: none;
    cursor: no-drop !important;
}
.time_control_disabled {
    background-color: #ccc;
    opacity: 0.8;
    pointer-events: none;
    cursor: no-drop !important;
}
.axis_item_tick_active {
    background: #3697d1;
}

.axis_item_label {
    position: absolute;
    white-space: nowrap;
    color: #fff;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.5), 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.axis_item_tip {
    position: absolute;
    bottom: 20px;
    line-height: 20px;
    padding: 2px 10px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    color: #fff;
}
.menu_icon_disabled {
    cursor: no-drop !important;
    opacity: 0.5;
}
.menu_setting {
    line-height: 1.875em;
    color: #fff;
    height: 1.875em;
    font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
    position: absolute;
    left: 2.2em;
    bottom: 4.6em;
    z-index: 2;
    font-weight: 400;
    white-space: nowrap;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.5), 1px 1px 3px rgba(0, 0, 0, 0.5);
    font-weight: 400;
    i {
        width: 1.5em;
        height: 1.09em;
        display: inline-block;
        cursor: pointer;
        &.speed {
            padding: 0 5px;
        }
    }
    span {
        color: #fff;
    }
}
.icon_up {
    background-image: url("../../static/image/icon_up.png");
    background-size: 100%;
}

.icon_down {
    background-image: url("../../static/image/icon_down.png");
    background-size: 100%;
}

</style>