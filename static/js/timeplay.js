
//var timeflag = 0;
function TimePlay(options) {
    var timePlay = this;

    timePlay.default_option = {
        speed: 3000,
        startDate: 20181101,
        endDate: 20190501,
        startWeek: 1,
        endWeek: 12,
        timeUnitControl: true,
        container: "#timePlay",
        timeflag: 0,
        onClickChangeEnd: function (timePlay) { },
        onAnimateEnd: function (timePlay) { }
    };
    // console.log("timeplay.speed:"+timePlay.default_option.speed);
    timePlay.options = jQuery.extend(
        true,
        timePlay.default_option,
        options
    ); //基本配置

    timePlay.initDoms(); //初始化结构

    timePlay.timer = null; //动画定时器
    timePlay.translate = 0; //时间轴位移
    timePlay.width = 0; //时间轴长度
    timePlay.timeUnit = "周"; //单位
    timePlay.left = $(".timeProgress-box").offset().left;
    timePlay.right =
        $(window).width() -
        timePlay.left -
        $(".timeProgress-box").width();
    timePlay.dis = $(".timeProgress-inner li").outerWidth(); //运动每格长度
    //要做成2个时间轴，一个时间轴每格长度为一周，一个时间轴每格长度为一个月，目前默认每格长度为一周
    //timePlay.dis_week = timePlay.dis / 4;  //每格长度为一周,一个月分为4周
    //timePlay.dis_hour = timePlay.dis / 7; //小时单位移动距离，一个长度为一周，每个小格为一天
    timePlay.curr_x = 0; //临时记录X轴位移
    timePlay.temp_day = {}; //临时记录时间
    timePlay.curr_day = {}; //进度条时间
    timePlay.index_hover = 0; //临时索引
    timePlay.hover = 0; //当前索引
    timePlay.delay = false; //是否延迟
    timePlay.init(); //初始化
}

TimePlay.prototype.init = function () {
    var timePlay = this;
    timePlay.initDate(); //初始化日期

    $(".timeUnitBtn").on("click", function () {
        //切换显示单位
        var index = $(this).index();
        timePlay.changeTimeUnit(index);
        if (timePlay.timeUnit == "周") {
            $(".every").remove();
            timePlay.fillDate(
                timePlay.options.startDate,
                timePlay.options.endDate
            );
        } else {
            $(".every").remove();
            timePlay.fillMonDate(
                timePlay.options.startDate,
                timePlay.options.endDate
            );
        }
    });

    $(".timeControl").on("click", function () {
        //时间轴播放暂停
        timePlay.play();
    });

    $(".timeProgress").on("mouseover", function () {
        //时间轴悬浮时间
        timePlay.hoverPopup();
    });

    $(".timeProgress").on("click", function () {
        //时间轴点击时间
        timePlay.clickPopup();
    });

    $(".next").on("click", function () {
        //下一个按钮
        timePlay.pageNext();
    });

    $(".prev").on("click", function () {
        //上一个按钮
        timePlay.pagePrev();
    });

    $(".yqtoday").on("click", function () {
        //回到当今时间，目前不需要这段代码，可以屏蔽
        timePlay.stopPlay();
        timePlay.initMonDate();
    });
};

//鼠标悬浮在时间轴上，显示时间
TimePlay.prototype.hoverPopup = function () {
    var timePlay = this;
    $(window).on("mousemove", function (event) {
        var e = event || window.event;
        var x = e.clientX; //返回当事件被触发时鼠标指针向对于浏览器页面的水平坐标
        var day_index = Math.floor(
            (x + timePlay.translate - timePlay.left) / timePlay.dis
        );
        //输出值
        // console.log("day_index:"+day_index+",timeplay.left:"+timePlay.left+",x:"+x+",translate:"+timePlay.translate);
        // console.log("dis:"+timePlay.dis);
        timePlay.index_hover = day_index;
        timePlay.temp_day = {
            year: parseInt(
                $(".every:eq(" + day_index + ")").attr("data-year") //返回当前选中的day_index(天数)中的年份
            ),
            mon: parseInt(
                $(".every:eq(" + day_index + ")")
                    .find(".mon")
                    .text()
                //获取当前选中的day_index（天数）中的月份的文本内容
            ),
            day: parseInt(
                $(".every:eq(" + day_index + ")")
                    .find(".day")
                    .text()
            )
        };
        timePlay.curr_x = x + timePlay.translate - timePlay.left;
        if (timePlay.timeUnit == "周") {
            var temp_day_monZero =
                timePlay.temp_day.mon > 9 ? "" : "0";
            var temp_day_dayZero =
                timePlay.temp_day.day > 9 ? "" : "0";
            var texts =
                /* timePlay.temp_day.hour + ":00"; */
                timePlay.temp_day.year +
                "/" +
                temp_day_monZero +
                timePlay.temp_day.mon +
                "/" +
                temp_day_dayZero +
                timePlay.temp_day.day;
            console.log("222");
            /* + "/" +
                    timePlay.temp_day.day; */
        } else {
            var temp_day_monZero =
                timePlay.temp_day.mon > 9 ? "" : "0";
            var texts =
                timePlay.temp_day.year +
                "/" +
                temp_day_monZero +
                timePlay.temp_day.mon;
            console.log("1111");
        }
        $(".hover-popup")
            .show()
            .css("left", x - timePlay.left)
            .text(texts);
    });

    $(".timeProgress").one("mouseleave", function () {
        $(window).off("mousemove");
        $(".hover-popup").hide();
    });
};

//  点击时间轴出现时间
TimePlay.prototype.clickPopup = function () {
    var timePlay = this;
    timePlay.stopPlay(); //停止播放
    if (timePlay.timeUnit == "周") {
        var temp_day_monZero = timePlay.temp_day.mon > 9 ? "" : "0";
        var temp_day_dayZero = timePlay.temp_day.day > 9 ? "" : "0";
        var texts =
            /* = timePlay.temp_day.hour + ":00"; */
            timePlay.temp_day.year +
            "/" +
            temp_day_monZero +
            timePlay.temp_day.mon +
            "/" +
            temp_day_dayZero +
            timePlay.temp_day.day;
        console.log("444");
    } else {
        var temp_day_monZero = timePlay.temp_day.mon > 9 ? "" : "0";
        var texts =
            timePlay.temp_day.year +
            "/" +
            temp_day_monZero +
            timePlay.temp_day
                .mon; /*+
                "/" +
                timePlay.temp_day.day; */
        console.log("333");
    }
    $(".curr-popup")
        .hide()
        .text(texts);
    $(".curr-popup.for-click")
        .show()
        .css("left", timePlay.curr_x - timePlay.translate);
    $(".timeProgress-bar")
        .stop()
        .css("width", timePlay.curr_x);
    timePlay.width = timePlay.curr_x;
    timePlay.curr_day = timePlay.temp_day;
    timePlay.index = timePlay.index_hover;
    timePlay.options.onClickChangeEnd();
};

TimePlay.prototype.initDate = function () {
    //初始化日期
    var timePlay = this;
    //  var curr_date = new Date();
    var year = 2018;
    var month = 11;
    var day = 1;
    var week = 1;
    var countmon = 1;
    $(".curr-popup").hide();
    $(".for-animate").show();
    timePlay.curr_day = {
        year: year,
        mon: month,
        day: day,
        week: week,
        countmon: countmon
    };
    if (month > 9 && day > 9) {
        $(".curr-popup").text(year + "/" + month + "/" + day);
        console.log("555");
    } else if (month > 9 && day < 10) {
        $(".curr-popup").text(year + "/" + month + "/0" + day);
        console.log("555");
    } else if (month < 10 && day > 9) {
        $(".curr-popup").text(year + "/0" + month + "/" + day);
        console.log("555");
    } else {
        $(".curr-popup").text(year + "/0" + month + "/0" + day);
        console.log("555");
    }
    for (
        var i = 0, len = Math.floor($(".every").length);
        i < len;
        i++
    ) {
        // var m = parseInt($('.every:eq('+i+') .mon').text());
        //console.log("every.length:" + $(".every").length);
        var m = 12;
        var d = parseInt($(".every:eq(" + i + ") .day").text());
        //console.log("day:"+day+".d:"+d);
        /* if (month == m && day == d) {
             timePlay.index = i;
             timePlay.width = //一段里面分为24小时,一段分为7天
                 timePlay.dis * i + (timePlay.dis / 24) * hour;
             timePlay.progressAni();
             // console.log("hour:"+hour);
             break;
         } */
        //.log("initDate.width:"+timePlay.width);
    }
};

TimePlay.prototype.initMonDate = function () {
    //初始化日期
    var timePlay = this;
    // var curr_date = new Date();
    var year = 2018;
    var month = 11;
    var day = 1;
    var week = 1;
    // var hour = curr_date.getHours();
    $(".curr-popup").hide();
    $(".for-animate")
        .show()
        .css("right", 0);
    $(".timeProgress-bar")
        .stop()
        .css("width", 0);
    timePlay.width = 0;
    timePlay.curr_day = {
        year: year,
        mon: month,
        day: day,
        week: week
    };
    if (month > 9 && day > 9) {
        $(".curr-popup").text(year + "/" + month + "/" + day);
        console.log("555");
    } else if (month > 9 && day < 10) {
        $(".curr-popup").text(year + "/" + month + "/0" + day);
        console.log("555");
    } else if (month < 10 && day > 9) {
        $(".curr-popup").text(year + "/0" + month + "/" + day);
        console.log("555");
    } else {
        $(".curr-popup").text(year + "/0" + month + "/0" + day);
        console.log("555");
    }
    //$(".curr-popup").text(month+"/"+day);
    timePlay.index = 0;
    console.log("timePlay.curr_day :" + timePlay.curr_day.day);
    timePlay.options.onClickChangeEnd();
};

TimePlay.prototype.initDoms = function () {
    //初始化dom
    var timePlay = this;
    $(timePlay.options.container).hide();
    var mainContainer = $('<div id="timeMain"></div>'),
        timeUnitControl =
            '<div class="timeUnit"><div class="inner"><div class="timeUnitBtn">周</div><div class="timeUnitBtn">月</div></div></div>',
        playControl =
            '<div class="timeControl-box"><div class="timeControl play"></div></div>',
        pageControl =
            '<div class="prev-box"><div class="prev" title="上一页"></div></div><div class="next-box"><div class="next" title="下一页"></div></div><div class="yqtoday">2018-11-01</div>' /* <div class="yqtoday">回到今天</div> */,
        timeAxis =
            '<div class="timeProgress-box"><div class="hover-popup"></div><div class="curr-popup for-click">17:00</div><!-- <div class="curr-popup for-animate">17:00</div> --><div class="timeProgress-hide"><div class="timeProgress-inner"><div class="timeProgress"><div class="timeProgress-bar"><div class="curr-popup for-animate">17:00</div></div></div><ul></ul></div></div></div>';
    if (timePlay.options.timeUnitControl) {
        //如果timeUnitControl为空，则添加timeUnitControl
        $(timePlay.options.container).append(timeUnitControl);
    }
    $(timePlay.options.container).append(mainContainer);
    //添加控制按钮 时间轴 起止时间
    mainContainer
        .append(playControl)
        .append(pageControl)
        .append(timeAxis);
    timePlay.fillMonDate(
        timePlay.options.startDate,
        timePlay.options.endDate
    );
};

//  填充时间轴的数据
TimePlay.prototype.fillDate = function (start, end) {
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
        /*if(startDay % 7 == 0){
            startWeek++;
        } */
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
        //var monthPreZero = startMonth < 10 ? "0" : "";
        //var dayPreZero = startDay < 10 ? "0" : "";
        //时间为zhou的时候时间刻度
        // console.log("startweek:"+startWeek);
        /*datelist +=
            '<li class="every" data-year=' +
            startYear +
            '><span class="week">' +
            startWeek +
            "</span></li>"; */
    }
    //		console.log(datelist)
    $(timePlay.options.container)
        .show()
        .find("ul")
        .append(datelist);
};

TimePlay.prototype.fillMonDate = function (start, end) {
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

        //datelist+='<li class="every" data-year='+startYear+'><span class="mon">'+startMonth+'</span>/<span class="day">'+startDay+'</span></li>'
        //console.log("startmonth:"+startMonth+",startDay:"+startDay);
    }
    //		console.log(datelist)
    $(timePlay.options.container)
        .show()
        .find("ul")
        .append(datelist);
};
//闰年的计算方法
TimePlay.prototype.calcLeapYear = function (year) {
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
};
TimePlay.prototype.monthCount = function (month) {
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
};

TimePlay.prototype.progressAni = function () {
    //进度条动画
    var timePlay = this,
        page_width = $(".timeProgress-box").width(),
        con_width = $(".timeProgress-inner").width(),
        page_num = Math.floor(timePlay.width / page_width),
        left_dis = page_num * page_width;

    if (page_width - timePlay.width + left_dis < timePlay.dis) {
        left_dis = left_dis + page_width / 2;
    }

    if (left_dis + page_width > con_width + 40) {
        left_dis =
            $(".timeProgress-inner").width() - page_width + 40;
        $(".prev").addClass("disable");
    }

    if (timePlay.width - left_dis < timePlay.dis) {
        left_dis = left_dis - page_width / 2;
    }
    timePlay.translate = left_dis;
    $(".timeProgress-inner").css({
        transform: "translateX(-" + left_dis + "px)"
    });
    $(".timeProgress-bar").animate(
        {
            width: timePlay.width
        },
        500,
        "linear"
    );
};

//切换月/周刻度时间
TimePlay.prototype.changeTimeUnit = function (num) {
    var timePlay = this;
    if (!$(".timeUnitBtn").hasClass("active")) {
        console.log("没有选中时间刻度");
        $(".timeUnitBtn:eq(" + num + ")").addClass("active");
        timePlay.timeUnit = $(".timeUnitBtn:eq(" + num + ")").text();
        console.log($(".timeUnitBtn:eq(" + num + ")").text());
        if (timePlay.timeUnit == "周") {
            var monthZero = timePlay.curr_day.mon > 9 ? "" : "0";
            var dayZero = timePlay.curr_day.day > 9 ? "" : "0";
            /* console.log(
                "montzero:" + monthZero + ",dayzero:" + dayZero
            ); */
            var texts =
                /* timePlay.temp_day.hour + ":00"; */
                timePlay.curr_day.year +
                "/" +
                monthZero +
                timePlay.curr_day.mon +
                "/" +
                dayZero +
                timePlay.curr_day.day;
            console.log(
                "888：" +
                timePlay.curr_day.year +
                "/" +
                timePlay.curr_day.mon +
                "/" +
                timePlay.curr_day.day
            );
        } else {
            console.log("777");
            var monthZero = timePlay.curr_day.mon > 9 ? "" : "0";
            var dayZero = timePlay.curr_day.day > 9 ? "" : "0";
            var texts =
                timePlay.curr_day.year +
                "/" +
                monthZero +
                timePlay.curr_day.mon +
                "/" +
                dayZero +
                timePlay.curr_day.day;
            /* + "/" +
                        timePlay.temp_day.day; */
        }
        $(".curr-popup").text(texts);
        timePlay.stopPlay();
    } else {
        console.log("切换刻度时间");
        if (!$(".timeUnitBtn:eq(" + num + ")").hasClass("active")) {
            $(".timeUnitBtn").toggleClass("active");
            timePlay.timeUnit = $(".timeUnitBtn.active").text();
        }
        if (timePlay.timeUnit == "周") {
            var monthZero = timePlay.curr_day.mon > 9 ? "" : "0";
            var dayZero = timePlay.curr_day.day > 9 ? "" : "0";
            /* console.log(
                "montzero:" + monthZero + ",dayzero:" + dayZero
            ); */
            var texts =
                /* timePlay.temp_day.hour + ":00"; */
                timePlay.curr_day.year +
                "/" +
                monthZero +
                timePlay.curr_day.mon +
                "/" +
                dayZero +
                timePlay.curr_day.day;
            console.log(
                "888：" +
                timePlay.curr_day.year +
                "/" +
                timePlay.curr_day.mon +
                "/" +
                timePlay.curr_day.day
            );
        } else {
            console.log("777");
            var monthZero = timePlay.curr_day.mon > 9 ? "" : "0";
            var dayZero = timePlay.curr_day.day > 9 ? "" : "0";
            var texts =
                timePlay.curr_day.year +
                "/" +
                monthZero +
                timePlay.curr_day.mon +
                "/" +
                dayZero +
                timePlay.curr_day.day;
            /* + "/" +
                        timePlay.temp_day.day; */
        }
        $(".curr-popup").text(texts);
        timePlay.stopPlay();
    }
    timePlay.timeflag = 1;
    timePlay.changeTimeFlag(timePlay.timeflag);
    console.log("js.timeflag:" + timePlay.timeflag);
};

TimePlay.prototype.play = function () {
    var timePlay = this;
    if ($(".timeControl").hasClass("play")) {
        timePlay.startPlay();
    } else {
        timePlay.stopPlay();
    }
};

TimePlay.prototype.startPlay = function () {
    var timePlay = this;
    $(".timeControl")
        .toggleClass("play")
        .toggleClass("pause");
    $(".curr-popup").hide();
    $(".curr-popup.for-animate").show();
    timePlay.progressAni();
    timePlay.timer = setInterval(function () {
        if (timePlay.delay) {
            return false;
        }
        var temp_date = timePlay.curr_day;
        if (timePlay.reachEnd()) {
            timePlay.halfPageNext();
        }
        if (timePlay.timeUnit == "周") {
            if (timePlay.index == undefined || timePlay.index < 0) {
                timePlay.index = 0;
            }
            //console.log("shi:timeplay.index:"+timePlay.index);
            var real_width =
                Math.floor(timePlay.width / timePlay.dis) *
                timePlay.dis;
            timePlay.width = real_width + timePlay.dis;
            timePlay.curr_day = {
                year: parseInt(
                    $(".every:eq(" + timePlay.index + ")").attr(
                        "data-year"
                    )
                ),
                mon: parseInt(
                    $(".every:eq(" + timePlay.index + ")")
                        .find(".mon")
                        .text()
                ),
                day: parseInt(
                    $(".every:eq(" + timePlay.index + ")")
                        .find(".day")
                        .text()
                ),
                week: parseInt(
                    $(".every:eq(" + timePlay.index + ")")
                        .find(".week")
                        .text()
                )
            };
            if (timePlay.index < $(".every").length) {
                $(".curr-popup").text(
                    timePlay.curr_day.mon +
                    "/" +
                    timePlay.curr_day.day
                );
            }
            timePlay.index++;
        } else {
            if (timePlay.index == undefined || timePlay.index < 0) {
                timePlay.index = 0;
            }
            var real_width =
                Math.floor(timePlay.width / timePlay.dis) *
                timePlay.dis;
            timePlay.width = real_width + timePlay.dis;
            timePlay.curr_day = {
                year: parseInt(
                    $(".every:eq(" + timePlay.index + ")").attr(
                        "data-year"
                    )
                ),
                mon: parseInt(
                    $(".every:eq(" + timePlay.index + ")")
                        .find(".mon")
                        .text()
                ),
                day: parseInt(
                    $(".every:eq(" + timePlay.index + ")")
                        .find(".day")
                        .text()
                )
            };
            if (timePlay.index < $(".every").length) {
                $(".curr-popup").text(timePlay.curr_day.mon + "月");
            }
            timePlay.index++;
        }
        if (timePlay.width >= $(".timeProgress").width()) {
            timePlay.width = $(".timeProgress").width();
            timePlay.curr_day = temp_date;
            timePlay.stopPlay();
        }
        $(".timeProgress-bar").css({ width: timePlay.width });
        timePlay.options.onAnimateEnd();
    }, timePlay.options.speed);
};

TimePlay.prototype.stopPlay = function () {
    var timePlay = this;
    if ($(".timeControl").hasClass("pause")) {
        $(".timeControl")
            .toggleClass("play")
            .toggleClass("pause");
    }
    clearInterval(timePlay.timer);
};

TimePlay.prototype.reachEnd = function () {
    var timePlay = this;
    var dis_right =
        $(".timeProgress-box").width() -
        (timePlay.width - timePlay.translate);
    if (dis_right <= 108) {
        return true;
    } else {
        return false;
    }
};

TimePlay.prototype.halfPageNext = function () {
    $(".curr-popup").hide();
    $(".curr-popup.for-animate").show();
    $(".prev").removeClass("disable");
    var timePlay = this,
        page_width = $(".timeProgress-box").width(),
        con_width = $(".timeProgress-inner").width();
    timePlay.translate += $(".timeProgress-box").width() / 2;
    if (timePlay.translate + page_width > con_width + 40) {
        timePlay.translate =
            $(".timeProgress-inner").width() - page_width + 40;
        $(".next").addClass("disable");
    }
    $(".timeProgress-inner").css({
        transform: "translateX(-" + timePlay.translate + "px)"
    });
};
TimePlay.prototype.pageNext = function () {
    $(".curr-popup").hide();
    $(".curr-popup.for-animate").show();
    $(".prev").removeClass("disable");
    var timePlay = this,
        page_width = $(".timeProgress-box").width(),
        con_width = $(".timeProgress-inner").width();
    timePlay.translate += $(".timeProgress-box").width();
    if (timePlay.translate + page_width > con_width + 40) {
        timePlay.translate =
            $(".timeProgress-inner").width() - page_width + 40;
        $(".next").addClass("disable");
    }
    $(".timeProgress-inner").css({
        transform: "translateX(-" + timePlay.translate + "px)"
    });
};

TimePlay.prototype.pagePrev = function () {
    $(".next").removeClass("disable");
    $(".curr-popup").hide();
    $(".curr-popup.for-animate").show();
    var timePlay = this;
    timePlay.translate -= $(".timeProgress-box").width();
    if (timePlay.translate < 0) {
        timePlay.translate = 0;
        $(".prev").addClass("disable");
    }
    $(".timeProgress-inner").css({
        transform: "translateX(-" + timePlay.translate + "px)"
    });
};

TimePlay.prototype.changeTimeFlag = function (tflag) {
    if (tflag == 1) {
        $(".yq-index-default :button").removeClass("active");
        $(".yq-index-default :button").text("分段时间");
        console.log("timeflag被选择了");
    }
}

export { TimePlay }