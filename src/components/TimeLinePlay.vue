<template>
    <div id="timeline">
        <div id="timePlay">
            <span>{{ timec.startDate }}</span>
        </div>
    </div>
</template>
<!-- <script src="../../static/js/timePlay.js"></script>  -->
<script>
import TimePlay from '../../static/js/timeplay.js'
let timeplay = new TimePlay();
export default {
    name: "Timer",
    data() {
        return {
            yqstartdate: 20190101,
            yqenddate: 20200101,
            startDate: 20100101,
            endDate: 20100601,
            timec: {},
        };
    },
    created() {
        this.timec = timeplay;
        /* this.timec.startDate = 20200401;
        this.timec.endDate = 20200401;
        this.timec.timeUnitControl = true;
        this.timec.onClickChangeEnd = function() {
                    //点击后回调
                    //获取点击的时间
                    var hour = timeplay.curr_day.hour, //小时
                        day = timeplay.curr_day.day, //日
                        mon = timeplay.curr_day.mon, //月
                        year = timeplay.curr_day.year; //年
                     console.log(
                        year + "年" + mon + "月" + day + "日" + hour + "时"
                    ); 
                };
        this.timec.onAnimateEnd = function() {
                    //时间轴动画每次结束回调
                    var hour = timeplay.curr_day.hour, //小时
                        day = timeplay.curr_day.day, //日
                        mon = timeplay.curr_day.mon, //月
                        year = timeplay.curr_day.year; //年
                     console.log(
                        year + "年" + mon + "月" + day + "日" + hour + "时"
                    ); 
                }; */
    },
    watch: {
        
    },
    methods: {
    },
    mounted() {
        //this.getTime();
       // this.initTime();
    }
};
</script>

<style scope>
@import "../../static/css/timePlay.css";
#timeline {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
}
</style>
